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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser, logout } from "../../store/slices/authSlice";
import { useLogoutMutation } from "../../api/services/authService";
import SideBar from "./SideBar";
import RightSideBar from "./RightSideBar";
import UserMenu from "./UserMenu";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

/**
 * Layout Component - Main layout wrapper for the application
 * Handles the overall structure including header, navigation, and responsive behavior
 */
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
          }}
        >
          {/* Mobile Menu Toggle */}
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

          {/* Logo/Brand - Hidden on mobile */}
          {!isSmallScreen && (
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: "1.5rem" }}
            >
              Digi Suraksha
            </Typography>
          )}

          {/* Right Section: Language & Auth Buttons */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                <Button
                  variant="outlined"
                  sx={{ marginRight: 1, height: "36px" }}
                  size="small"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
                {/* Sign Up button - Hidden on mobile */}
                {!isSmallScreen && (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ height: "36px" }}
                    component={Link}
                    to="/signup"
                  >
                    Sign Up
                  </Button>
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
