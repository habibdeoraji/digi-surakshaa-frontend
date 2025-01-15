import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Security, Notifications, History, CloudDownload } from '@mui/icons-material';

const ProfileSidebar = () => {
  const quickActions = [
    { icon: Security, label: 'Security Checkup', description: 'Review your security settings' },
    { icon: Notifications, label: 'Notification Settings', description: 'Manage your alerts' },
    { icon: History, label: 'Activity Log', description: 'View recent activities' },
    { icon: CloudDownload, label: 'Download Data', description: 'Get your data report' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Quick Actions
        </Typography>
        <List>
          {quickActions.map((action, index) => (
            <Box key={action.label}>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <action.icon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary={action.label}
                  secondary={action.description}
                />
              </ListItem>
              {index < quickActions.length - 1 && <Divider />}
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ProfileSidebar; 