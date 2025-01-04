import { Box, Typography, Container, Card, Grid, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GroupsIcon from '@mui/icons-material/Groups';
import TranslateIcon from '@mui/icons-material/Translate';

const features = [
  {
    title: "Real-time Threat Detection",
    icon: SecurityIcon,
    description: "Advanced algorithms to detect and alert you about potential cyber threats and scams in real-time."
  },
  {
    title: "Instant Alerts",
    icon: NotificationsIcon,
    description: "Get immediate notifications about suspicious activities and emerging cyber threats in your area."
  },
  {
    title: "Scam Analytics",
    icon: AnalyticsIcon,
    description: "Comprehensive analytics and insights about latest scam patterns and prevention measures."
  },
  {
    title: "Verified Resources",
    icon: VerifiedUserIcon,
    description: "Access to verified educational content and security guidelines from cyber experts."
  },
  {
    title: "Community Support",
    icon: GroupsIcon,
    description: "Connect with a community of users to share experiences and stay informed about cyber safety."
  },
  {
    title: "Multi-language Support",
    icon: TranslateIcon,
    description: "Access all features in multiple Indian languages for better understanding and reach."
  }
];

const Features = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Our Features
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Comprehensive Tools for Your Digital Safety
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.shadows[4]
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <feature.icon 
                      sx={{ 
                        fontSize: 40, 
                        color: 'primary.main',
                        mr: 2 
                      }} 
                    />
                    <Box>
                      <Typography variant="h5" gutterBottom>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Feature Highlights */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" gutterBottom align="center">
              Why Choose Our Platform?
            </Typography>
            <Typography variant="body1" paragraph align="center" sx={{ maxWidth: 800, mx: 'auto', mt: 3 }}>
              Our platform combines advanced technology with user-friendly interfaces to provide 
              comprehensive digital security solutions. We focus on prevention, education, and 
              quick response to keep you safe in the digital world.
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Features; 