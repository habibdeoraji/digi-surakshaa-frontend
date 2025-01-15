import { Box, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';

const ReportedScamsSidebar = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Report Statistics
        </Typography>
        <List>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary="Total Reports" 
              secondary="This Month"
            />
            <Chip label="23" color="primary" />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary="Under Review" 
              secondary="Pending"
            />
            <Chip label="5" color="warning" />
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemText 
              primary="Resolved" 
              secondary="Completed"
            />
            <Chip label="18" color="success" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ReportedScamsSidebar; 