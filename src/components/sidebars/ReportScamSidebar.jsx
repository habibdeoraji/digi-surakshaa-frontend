import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { WarningAmber, Security, Gavel } from '@mui/icons-material';

const ReportScamSidebar = () => {
  const guidelines = [
    {
      icon: WarningAmber,
      title: 'Be Specific',
      description: 'Include all relevant details about the scam'
    },
    {
      icon: Security,
      title: 'Stay Safe',
      description: 'Don\'t share sensitive personal information'
    },
    {
      icon: Gavel,
      title: 'Legal Notice',
      description: 'Your report may be used for law enforcement'
    }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Reporting Guidelines
        </Typography>
        <List sx={{ py: 1 }}>
          {guidelines.map((item, index) => (
            <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <item.icon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary={item.title}
                secondary={item.description}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Need assistance with your report?
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          sx={{ 
            borderRadius: 2,
            textTransform: 'none',
            height: 42
          }}
        >
          Get Help
        </Button>
      </Box>
    </Box>
  );
};

export default ReportScamSidebar; 