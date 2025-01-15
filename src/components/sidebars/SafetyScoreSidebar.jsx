import { Box, Typography, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { School as SchoolIcon, Security as SecurityIcon } from '@mui/icons-material';

const SafetyScoreSidebar = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Improve Your Score
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Take Security Quiz" 
                secondary="Test your knowledge"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SecurityIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary="Security Checkup" 
                secondary="Review your settings"
              />
            </ListItem>
          </List>
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            Start Assessment
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SafetyScoreSidebar; 