import {
  Drawer,
  Box,
  IconButton,
  List,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { CloseIcon, PolicyIcon } from "../../assets/icons";
import { routes } from "../../routes/routes";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/slices/authSlice";

const NavMenuItem = styled(Link)(({ theme, active }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 2.5),
  textDecoration: "none",
  color: active ? theme.palette.primary.dark : theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1.5, 1),
  position: "relative",
  transition: theme.transitions.create(
    ["background-color", "color", "padding-left"],
    {
      duration: theme.transitions.duration.shorter,
    }
  ),
  backgroundColor: active
    ? alpha(theme.palette.primary.main, 0.1)
    : "transparent",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    paddingLeft: theme.spacing(2),
    color: theme.palette.primary.dark,
  },
  ...(active && {
    fontWeight: theme.typography.fontWeightBold,
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: 4,
      height: "60%",
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
    },
  }),
}));

const VerifyScamButton = styled(Link)(({ theme }) => ({
  height: 42,
  width: '90%',
  borderRadius: 21,
  textTransform: 'none',
  fontSize: '0.75rem',
  fontWeight: 600,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  color: '#fff',
  boxShadow: `0 2px 8px ${alpha(theme.palette.primary.main, 0.25)}`,
  '&:hover': {
    color: 'white',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginTop: 'auto',
  marginBottom: '20px',
  alignSelf: 'center',
  gap: theme.spacing(1),
}));

const IconWrapper = styled(Box)(({ theme, active }) => ({
  marginRight: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  color: active ? theme.palette.primary.main : theme.palette.primary.light,
  transition: theme.transitions.create(["color", "transform"], {
    duration: theme.transitions.duration.shorter,
  }),
  transform: active ? "scale(1.1)" : "scale(1)",
}));

const MenuText = styled(Typography)(({ active, theme }) => ({
  // flexGrow: 1,
  fontSize: theme.typography.body1.fontSize,
  fontWeight: active ? 700 : 500,
  letterSpacing: "0.02em",
  color: "inherit",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: theme.spacing(1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: "rotate(90deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

const Sidebar = ({ mobileOpen, handleDrawerToggle, isSmallScreen }) => {
  const theme = useTheme();
  const location = useLocation();
  const user = useSelector(selectCurrentUser);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const renderMenuItem = (route) => {
    if (route.isProtected && !user) {
      return null;
    }
    const Icon = route.icon;
    const active = isActive(route.path);

    return (
      <NavMenuItem
        key={route.path}
        to={route.path}
        onClick={isSmallScreen ? handleDrawerToggle : undefined}
        active={active}
      >
        <IconWrapper active={active}>
          <Icon />
        </IconWrapper>
        <MenuText active={active}>{route.label}</MenuText>
      </NavMenuItem>
    );
  };

const drawerContent = (
    <>
      {isSmallScreen && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: theme.spacing(1),
            minWidth: "240px",
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          <CloseButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </CloseButton>
        </Box>
      )}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        pb: 0
      }}>
        <List sx={{ padding: theme.spacing(2, 1) }}>
          {routes.map((route) => renderMenuItem(route))}
        </List>
        
        {/* Report Scam Button - Centered
        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 'auto',
          py: 3,
          backgroundColor: 'background.paper',
        }}>
          <Tooltip 
            title={
              <Typography sx={{ p: 0.5, fontSize: '0.75rem' }}>
                This exciting feature is launching soon! Stay tuned for updates.
              </Typography>
            } 
            arrow 
            placement="top"
          >
            <ReportScamButton
              variant="contained"
              onClick={() => {}}
              sx={{ 
                position: 'relative',
                overflow: 'hidden',
                cursor: 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
                Report Scam
              <ComingSoonBtn customStyles={{ ml: 0.1 }} />
            </ReportScamButton>
          </Tooltip>
      </Box> */}
      


      <VerifyScamButton
        key="/verify"
        to="/verify"
        onClick={isSmallScreen ? handleDrawerToggle : undefined}
        active={isActive("/verify")}
      >
          <PolicyIcon />
        <MenuText active={isActive("/verify")}>Verify</MenuText>
      </VerifyScamButton>
        </Box>
    </>
  );

  const drawerSx = {
    width: 240,
    "& .MuiDrawer-paper": {
      width: isSmallScreen ? "80%" : 240,
      maxWidth: 300,
      boxSizing: "border-box",
      backgroundColor: theme.palette.background.paper,
      borderRight: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      boxShadow:
        "3px 3px 15px rgba(0, 0, 0, 0.2), -3px -3px 15px rgba(0, 0, 0, 0.2);",
      margin: "20px",
      borderRadius: "20px",
      height: "-webkit-fill-available",
      overflowY: "auto",
      ...(!isSmallScreen && {
        position: "fixed",
        top: theme.spacing(8),
      }),
    },
  };

  return (
    <Box
      component="nav"
      sx={{
        width: { xs: 0, sm: 240 },
        flexShrink: 0,
      }}
    >
      {isSmallScreen ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: "80%",
              maxWidth: 300,
              boxSizing: "border-box",
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[8],
            },
          }}
        >
          {drawerContent}
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            ...drawerSx,
            overflowY: "auto",
          }}
        >
          {drawerContent}
        </Drawer>
      )}
    </Box>
  );
};

Sidebar.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  isSmallScreen: PropTypes.bool.isRequired,
};

export default Sidebar;
