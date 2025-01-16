import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
  Avatar,
  Popper,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, logout } from "../../store/slices/authSlice";
import { useLogoutMutation } from "../../api/services/authService";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
import UserMenu from "./UserMenu";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import styled from '@emotion/styled';

/**
 * Layout Component - Main layout wrapper for the application
 * Handles the overall structure including header, navigation, and responsive behavior
 */
const GradientButton = styled(Button)(({ theme }) => ({
  height: 36,
  textTransform: 'none',
  fontSize: '0.75rem',
  fontWeight: 600,
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  color: theme.palette.common.white,
  boxShadow: `0 2px 8px ${alpha(theme.palette.primary.main, 0.25)}`,
  '&:hover': {
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.35)}`,
  },
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const LogoText = styled(Typography)(({ theme, isSmallScreen }) => ({
  fontWeight: 800,
  fontSize: isSmallScreen ? "1.25rem" : "1.5rem",
  position: isSmallScreen ? 'absolute' : 'static',
  left: '50%',
  transform: isSmallScreen ? 'translateX(-50%)' : 'none',
  width: isSmallScreen ? 'auto' : 'unset',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.5px',
  fontFamily: "'Poppins', sans-serif",
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  '& .highlight': {
    color: theme.palette.primary.main,
    WebkitTextFillColor: 'initial',
    fontWeight: 900,
  }
}));

const Layout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const [logoutApi] = useLogoutMutation();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 900px)");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  // Toggle mobile navigation drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * Handle user logout
   * Calls logout API and updates auth state
   * Navigates to home page after successful logout
   */
  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      dispatch(logout());
      navigate("/");
    }
  };

  const handleAvatarClick = (event) => {
    event.stopPropagation(); // Prevent event bubbling
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Header/AppBar Section */}
      <AppBar
        color="default"
        sx={{
          width: "100%",
          boxShadow: "none",
          position: "fixed",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
            position: 'relative',
          }}
        >
          {/* Mobile Menu Toggle - Position it absolutely */}
          {isSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                position: 'absolute',
                left: 8,
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Logo/Brand - Show on all screens and center on mobile */}
          <LogoText variant="h6" isSmallScreen={isSmallScreen}>
            <span>Digi</span>
            <span className="highlight">Suraksha</span>
            {!isSmallScreen && (
              <Box
                component="span"
                sx={{
                  fontSize: '10px',
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                  color: 'primary.main',
                  px: 1,
                  py: 0.5,
                  borderRadius: '12px',
                  ml: 1,
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  WebkitTextFillColor: 'initial',
                }}
              >
                Beta
              </Box>
            )}
          </LogoText>

          {/* Right Section: Auth Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: 'auto',
            }}
          >
            {/* Conditional Auth Buttons */}
            {user ? (
              <Box sx={{ position: 'relative' }}>
                <IconButton
                  onClick={handleAvatarClick}
                  size="small"
                  sx={{ 
                    padding: 0.5,
                    '&:hover': {
                      backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                    },
                  }}
                  aria-controls={open ? 'user-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar
                    src={user.avatar}
                    alt={user.name}
                    sx={{ 
                      width: 40, 
                      height: 40,
                      border: open ? '2px solid' : 'none',
                      borderColor: 'primary.main'
                    }}
                  />
                </IconButton>
                
                <Popper
                  open={open}
                  anchorEl={anchorEl}
                  placement="bottom-end"
                  style={{ zIndex: 1300 }}
                  modifiers={[
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 8],
                      },
                    },
                  ]}
                >
                  <UserMenu
                    user={user}
                    onLogout={handleLogout}
                  />
                </Popper>
              </Box>
            ) : (
              <>
                {/* <Button
                  variant="outlined"
                  sx={{ marginRight: 1, height: "36px" }}
                  size="small"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button> */}
                {/* Sign Up button - Hidden on mobile */}
                {!isSmallScreen && (
                  <Tooltip 
                    title={
                      <Typography sx={{ p: 0.5, fontSize: '0.75rem' }}>
                        Sign up feature is coming soon! Stay tuned for updates.
                      </Typography>
                    } 
                    arrow 
                    placement="bottom"
                  >
                    <GradientButton
                      size="small"
                      onClick={() => {}} // Empty function to maintain clickable appearance
                      sx={{ 
                        position: 'relative',
                        overflow: 'hidden',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'rgba(255, 255, 255, 0.1)',
                          animation: 'shine 2s infinite linear',
                        },
                        '@keyframes shine': {
                          '0%': {
                            transform: 'translateX(-100%)',
                          },
                          '100%': {
                            transform: 'translateX(100%)',
                          },
                        },
                      }}
                    >
                      <Box>
                        Sign Up
                        </Box>
                        <Typography
                          component="span"
                          sx={{
                            fontSize: '0.7rem',
                            bgcolor: 'rgba(255, 255, 255, 0.2)',
                            px: 0.8,
                            py: 0.2,
                            borderRadius: '10px',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          }}
                        >
                          Coming Soon
                        </Typography>
                    </GradientButton>
                  </Tooltip>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          width: "100%",
          position: "relative",
        }}
      >
        {/* Left Sidebar Navigation */}
        <SideBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          isSmallScreen={isSmallScreen}
        />

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            marginTop: "88px",
            p: 3,
            pt: 0,
            transition: theme.transitions.create("margin", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Outlet />
        </Box>

        {/* Right Sidebar - Hidden on medium and smaller screens */}
        {!isMediumScreen && <RightSideBar />}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
    user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
