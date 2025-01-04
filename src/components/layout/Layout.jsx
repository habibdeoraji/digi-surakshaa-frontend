import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";

const Layout = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const isMediumScreen = useMediaQuery("(max-width: 900px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100vw",
        overflow: 'hidden',
      }}
    >
      <AppBar
        color="default"
        sx={{
          width: "100%",
        //   zIndex: theme.zIndex.drawer + 1,
          // backgroundColor: "#F8F9FA",
          boxShadow: "none",
          position: 'fixed',
          // borderBottom: "1px solid #E0E0E0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {isSmallScreen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {!isSmallScreen && <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
            Digi Suraksha
          </Typography>}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Select
              defaultValue="EN"
              variant="outlined"
              size="small"
              sx={{ marginRight: 2, minWidth: 100, padding: 0, height:'36px' }}
            >
              <MenuItem value="EN">English</MenuItem>
              <MenuItem value="HI">हिंदी</MenuItem>
              <MenuItem value="ES">Español</MenuItem>
            </Select>

            <Button variant="outlined" sx={{ marginRight: 1, height:'36px', }} size="small">
              Login
            </Button>
            {!isSmallScreen && (
              <Button variant="contained" color="primary" size="small" sx={{ height:'36px' }}>
                Sign Up
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          // mt: "64px",
          width: '100%',
          position: 'relative',
        }}
      >
        <SideBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          isSmallScreen={isSmallScreen}
        />
        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
            marginTop: '88px',
            p: 3,
            pt: 0,
            transition: theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <Outlet />
        </Box>

        {!isMediumScreen && <RightSideBar />}
      </Box>
    </Box>
  );
};

export default Layout;
