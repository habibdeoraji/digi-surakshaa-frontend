import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Box,
  Avatar,
  Paper,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  IconButton,
  ListItemButton,
  Select,
  MenuItem,
  styled,
  alpha
} from '@mui/material';
import {
  Person as ProfileIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
  ReportProblem as ReportedScamsIcon,
  Security as SafetyScoreIcon,
  Bookmark as SavedScamsIcon,
  Language as LanguageIcon
} from '@mui/icons-material';

const getIconColor = (theme, { active, isLogout }) => {
  if (active) return theme.palette.primary.main;
  if (isLogout) return '#FF4842';
  return theme.palette.primary.light;
};

const getTextColor = (theme, { active, isLogout }) => {
  if (active) return theme.palette.primary.dark;
  if (isLogout) return '#FF4842';
  return theme.palette.text.primary;
};

const StyledListItemButton = styled(ListItemButton)(({ theme, isLogout, active }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.5, 1),
  padding: theme.spacing(1, 2.5),
  position: 'relative',
  color: active ? theme.palette.primary.dark : theme.palette.text.primary,
  backgroundColor: active
    ? alpha(theme.palette.primary.main, 0.1)
    : 'transparent',
  transition: theme.transitions.create(
    ['background-color', 'color', 'padding-left'],
    {
      duration: theme.transitions.duration.shorter,
    }
  ),
  '&:hover': {
    backgroundColor: isLogout 
      ? '#FF484214'
      : alpha(theme.palette.primary.main, 0.08),
    paddingLeft: theme.spacing(3),
    color: isLogout ? '#FF4842' : theme.palette.primary.dark,
  },
  ...(active && {
    fontWeight: theme.typography.fontWeightBold,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 4,
      height: '60%',
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius,
    },
  }),
}));

const IconWrapper = styled(ListItemIcon)(({ theme, isLogout, active }) => ({
  minWidth: 40,
  color: getIconColor(theme, { active, isLogout }),
  transition: theme.transitions.create(['color', 'transform'], {
    duration: theme.transitions.duration.shorter,
  }),
  transform: active ? 'scale(1.1)' : 'scale(1)',
}));

const MenuText = styled(Typography)(({ theme, isLogout, active }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: active ? 700 : 500,
  letterSpacing: '0.02em',
  color: getTextColor(theme, { active, isLogout }),
}));

const ThemeIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.light,
  padding: theme.spacing(1),
  transition: theme.transitions.create(['background-color', 'color', 'transform'], {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    color: theme.palette.primary.main,
    transform: 'scale(1.1)',
  },
}));

const UserMenu = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const menuItems = [
    { icon: <ProfileIcon />, text: 'Edit Profile', path: '/profile', onClick: handleProfileClick },
    { icon: <ReportedScamsIcon />, text: 'Reported Scams', path: '/reported-scams', onClick: () => navigate('/reported-scams') },
    { icon: <SafetyScoreIcon />, text: 'Safety Score', path: '/safety-score', onClick: () => navigate('/safety-score') },
    { icon: <SavedScamsIcon />, text: 'Saved Scams', path: '/saved-scams', onClick: () => navigate('/saved-scams') },
    { icon: <SettingsIcon />, text: 'Settings', path: '/settings', onClick: () => navigate('/settings') },
    { icon: <LogoutIcon />, text: 'Log Out', onClick: onLogout, isLogout: true },
  ];

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        position: 'absolute',
        right: 0,
        mt: 1,
        width: 280,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[3]
      })}
    >
      <Box 
        onClick={handleProfileClick}
        sx={(theme) => ({ 
          p: theme.spacing(2.5, 2.5),
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          cursor: 'pointer',
          transition: theme.transitions.create('background-color'),
          '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
          },
        })}
      >
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={(theme) => ({ 
            width: 40, 
            height: 40,
            border: `2px solid ${theme.palette.primary.main}`
          })}
        />
        <Box>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              fontWeight: 600,
              fontSize: '0.875rem',
              lineHeight: 1.5
            }}
          >
            {user.name}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              fontSize: '0.8125rem',
              lineHeight: 1.5
            }}
          >
            {user.email}
          </Typography>
        </Box>
      </Box>

      <Divider />
      
      <Box 
        sx={(theme) => ({ 
          p: theme.spacing(1.5, 2),
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          backgroundColor: alpha(theme.palette.primary.main, 0.04)
        })}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LanguageIcon sx={{ fontSize: 20 }} />
          <Select
            size="small"
            defaultValue="EN"
            variant="standard"
            sx={{ 
              minWidth: 85,
              '& .MuiSelect-select': {
                py: 0.5,
                fontSize: '0.875rem',
              },
            }}
          >
            <MenuItem value="EN">English</MenuItem>
            <MenuItem value="HI">हिंदी</MenuItem>
            <MenuItem value="ES">Español</MenuItem>
          </Select>
        </Box>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <ThemeIconButton 
            size="small"
            sx={{ padding: 1 }}
          >
            <LightModeIcon sx={{ fontSize: 20 }} />
          </ThemeIconButton>
          <ThemeIconButton 
            size="small"
            sx={{ padding: 1 }}
          >
            <DarkModeIcon sx={{ fontSize: 20 }} />
          </ThemeIconButton>
        </Box>
      </Box>

      <Divider />

      <List sx={{ py: 1 }}>
        {menuItems.map((item, index) => {
          const isActive = item.path && location.pathname === item.path;
          
          return (
            <StyledListItemButton
              key={index}
              onClick={item.onClick}
              isLogout={item.isLogout}
              active={isActive}
            >
              <IconWrapper 
                isLogout={item.isLogout}
                active={isActive}
              >
                {item.icon}
              </IconWrapper>
              <ListItemText 
                primary={
                  <MenuText 
                    isLogout={item.isLogout}
                    active={isActive}
                  >
                    {item.text}
                  </MenuText>
                }
                sx={{ margin: 0 }}
              />
            </StyledListItemButton>
          );
        })}
      </List>
    </Paper>
  );
};

UserMenu.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;