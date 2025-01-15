import { Box, Typography, List, ListItem, ListItemText, Chip, Divider } from '@mui/material';

const DashboardSidebar = () => {
  const activitySummary = [
    { label: 'Reports Made', value: '12', status: 'success' },
    { label: 'Saved Scams', value: '8', status: 'info' },
    { label: 'Alerts Active', value: '3', status: 'warning' },
  ];

  const recentActivities = [
    { action: 'Reported a phishing attempt', time: '2 hours ago' },
    { action: 'Updated security settings', time: '5 hours ago' },
    { action: 'Completed security quiz', time: '1 day ago' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Activity Summary
        </Typography>
        <List sx={{ py: 0 }}>
          {activitySummary.map((item) => (
            <ListItem key={item.label} sx={{ px: 0 }}>
              <ListItemText primary={item.label} />
              <Chip 
                label={item.value} 
                color={item.status}
                size="small"
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Recent Activities
        </Typography>
        {recentActivities.map((activity, index) => (
          <Box key={index} sx={{ py: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {activity.action}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {activity.time}
            </Typography>
            {index < recentActivities.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DashboardSidebar; 