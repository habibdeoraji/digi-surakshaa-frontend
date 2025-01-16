import { Box, Typography, Card, CardContent, Grid, Stack, LinearProgress, Button } from '@mui/material';
import {
  Security as SecurityIcon,
  Assessment as AssessmentIcon,
  NotificationsActive as AlertIcon,
  People as CommunityIcon,
  School as EducationIcon,
  Analytics as AnalyticsIcon,
  Verified as VerifiedIcon,
  SupportAgent as SupportIcon,
} from '@mui/icons-material';

const Features = () => {
  const features = [
    {
      title: "Safety Score",
      description: "Get a personalized safety assessment and recommendations to improve your digital security.",
      icon: AssessmentIcon,
      color: "#2196F3",
      progress: 85,
      status: "Available"
    },
    {
      title: "Scam Alert System",
      description: "Real-time notifications about new scams and threats in your area.",
      icon: AlertIcon,
      color: "#F44336",
      progress: 100,
      status: "Active"
    },
    {
      title: "Community Support",
      description: "Connect with others, share experiences, and learn from the community.",
      icon: CommunityIcon,
      color: "#4CAF50",
      progress: 90,
      status: "Available"
    },
    {
      title: "Educational Resources",
      description: "Access comprehensive learning materials about online safety and scam prevention.",
      icon: EducationIcon,
      color: "#FF9800",
      progress: 95,
      status: "Available"
    },
    {
      title: "Scam Verification",
      description: "Verify suspicious activities and get expert opinions quickly.",
      icon: VerifiedIcon,
      color: "#9C27B0",
      progress: 100,
      status: "Active"
    },
    {
      title: "Analytics Dashboard",
      description: "Track and analyze scam patterns in your region.",
      icon: AnalyticsIcon,
      color: "#00BCD4",
      progress: 80,
      status: "Beta"
    },
    {
      title: "24/7 Support",
      description: "Get help anytime with our dedicated support team.",
      icon: SupportIcon,
      color: "#795548",
      progress: 100,
      status: "Available"
    },
    {
      title: "Security Assessment",
      description: "Regular security checkups and vulnerability assessments.",
      icon: SecurityIcon,
      color: "#607D8B",
      progress: 75,
      status: "Beta"
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h4" fontWeight="500">
          Platform Features
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          Explore our comprehensive suite of tools and features designed to enhance your online safety
        </Typography>
      </Stack>

      {/* Features Grid */}
      <Grid container spacing={3}>
        {features.map((feature) => (
          <Grid item xs={12} md={6} lg={4} key={feature.title}>
            <Card 
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => `0 8px 24px ${theme.palette.action.hover}`
                }
              }}
            >
              <CardContent sx={{ 
                p: 3, 
                height: '320px', 
                display: 'flex', 
                flexDirection: 'column' 
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box 
                    sx={{ 
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: `${feature.color}15`,
                      mr: 2
                    }}
                  >
                    <feature.icon sx={{ color: feature.color }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 'auto', pt: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      Implementation Status
                    </Typography>
                    <Typography variant="caption" fontWeight="500" color={feature.color}>
                      {feature.status}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={feature.progress}
                    sx={{ 
                      height: 6,
                      borderRadius: 1,
                      bgcolor: `${feature.color}15`,
                      '& .MuiLinearProgress-bar': {
                        bgcolor: feature.color
                      }
                    }} 
                  />

                  <Button 
                    variant="outlined"
                    fullWidth
                    sx={{ 
                      mt: 2,
                      borderColor: feature.color,
                      color: feature.color,
                      '&:hover': {
                        borderColor: feature.color,
                        bgcolor: `${feature.color}15`
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features; 