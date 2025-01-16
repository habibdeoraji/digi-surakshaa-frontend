import { Box, Typography, Grid, Card, CardContent, Stack, Avatar, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Security as SecurityIcon,
  Verified as VerifiedIcon,
  People as CommunityIcon,
  Timeline as TimelineIcon,
  EmojiObjects as VisionIcon,
  Stars as MissionIcon,
  Gavel as ValuesIcon,
  WorkspacePremium as AchievementIcon,
} from '@mui/icons-material';

const AboutUs = () => {
  const stats = [
    { label: "Users Protected", value: "50K+" },
    { label: "Scams Reported", value: "10K+" },
    { label: "Recovery Rate", value: "85%" },
    { label: "Community Members", value: "25K+" },
  ];

  const values = [
    {
      icon: SecurityIcon,
      title: "User Safety First",
      description: "We prioritize the security and well-being of our users above all else."
    },
    {
      icon: VerifiedIcon,
      title: "Trusted Information",
      description: "We ensure all information is verified and reliable."
    },
    {
      icon: CommunityIcon,
      title: "Community-Driven",
      description: "We believe in the power of community support and shared knowledge."
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "National Cybersecurity Excellence Award",
      description: "Recognized for outstanding contribution to online safety"
    },
    {
      year: "2023",
      title: "100,000 Users Milestone",
      description: "Growing community of safety-conscious individuals"
    },
    {
      year: "2023",
      title: "Featured in Cybersecurity Today",
      description: "Highlighted for innovative approach to scam prevention"
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/images/team/rajesh.jpg",
      description: "20+ years in cybersecurity and fraud prevention"
    },
    {
      name: "Priya Sharma",
      role: "Head of Security",
      image: "/images/team/priya.jpg",
      description: "Former cybercrime investigator"
    },
    {
      name: "Amit Patel",
      role: "Community Director",
      image: "/images/team/amit.jpg",
      description: "Expert in user education and engagement"
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Hero Section */}
      <Stack spacing={3} sx={{ mb: 6, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h3" fontWeight="500">
          Protecting India Digital Future
        </Typography>
        <Typography variant="body1" color="text.secondary">
          DigiSuraksha is India leading platform dedicated to protecting users from online scams 
          through education, community support, and cutting-edge technology.
        </Typography>
      </Stack>

      {/* Stats Section */}
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {stats.map((stat) => (
          <Grid item xs={6} md={3} key={stat.label}>
            <Card sx={{ textAlign: 'center', height: '100%' }}>
              <CardContent>
                <Typography variant="h4" color="primary" gutterBottom>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MissionIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h5">Our Mission</Typography>
              </Box>
              <Typography variant="body1" >
                To create a safer digital environment for all Indians by providing education, 
                tools, and community support to prevent online scams and fraud.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TimelineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Reduce online fraud cases by 50% by 2025"
                    secondary="Through proactive education and prevention"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <VisionIcon color="primary" sx={{ mr: 2, fontSize: 32 }} />
                <Typography variant="h5">Our Vision</Typography>
              </Box>
              <Typography variant="body1" >
                To be the most trusted platform for online safety in India, empowering every citizen 
                with the knowledge and tools to protect themselves in the digital world.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AchievementIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Building a scam-free digital India"
                    secondary="Through technology and community effort"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Core Values */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ValuesIcon color="primary" />
          Our Core Values
        </Box>
      </Typography>
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {values.map((value) => (
          <Grid item xs={12} md={4} key={value.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box 
                    sx={{ 
                      p: 1,
                      borderRadius: 1,
                      bgcolor: 'primary.light',
                      mr: 2
                    }}
                  >
                    <value.icon sx={{ color: 'primary.main' }} />
                  </Box>
                  <Typography variant="h6">{value.title}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Team Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Leadership Team
      </Typography>
      <Grid container spacing={3} sx={{ mb: 8 }}>
        {teamMembers.map((member) => (
          <Grid item xs={12} md={4} key={member.name}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Avatar
                  src={member.image}
                  sx={{ 
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    border: '4px solid',
                    borderColor: 'primary.light'
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Achievements Timeline */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <TimelineIcon color="primary" />
          Our Journey
        </Box>
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Stack spacing={3}>
            {achievements.map((achievement, index) => (
              <Box key={achievement.title}>
                {index > 0 && <Divider sx={{ my: 2 }} />}
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={2}>
                    <Typography variant="h6" color="primary">
                      {achievement.year}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={10}>
                    <Typography variant="h6" gutterBottom>
                      {achievement.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {achievement.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AboutUs; 