import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { Backup, RestorePage, Help } from '@mui/icons-material';

const SettingsSidebar = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Help & Support
        </Typography>
        <List>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <Backup color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Backup Settings"
              secondary="Save your preferences"
            />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemIcon>
              <RestorePage color="primary" />
            </ListItemIcon>
            <ListItemText 
              primary="Restore Defaults"
              secondary="Reset to original settings"
            />
          </ListItem>
        </List>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Help />}
          sx={{ 
            mt: 3,
            borderRadius: 2,
            textTransform: 'none',
            height: 42
          }}
        >
          Settings Guide
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsSidebar; 