import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  Paper,
  Button,
  Avatar,
  AvatarGroup,
  Chip
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import CampaignIcon from '@mui/icons-material/Campaign';

const communityStats = [
  {
    title: "Active Members",
    value: "10,000+",
    icon: PeopleIcon,
    description: "Growing community of digital safety advocates"
  },
  {
    title: "Daily Discussions",
    value: "50+",
    icon: ForumIcon,
    description: "Active threads about digital security"
  },
  {
    title: "Awareness Campaigns",
    value: "25",
    icon: CampaignIcon,
    description: "Ongoing digital safety initiatives"
  }
];

const recentTopics = [
  {
    title: "Latest UPI Scam Alert",
    category: "Scam Alert",
    participants: 156,
    responses: 234
  },
  {
    title: "Digital Safety Workshop - Mumbai",
    category: "Event",
    participants: 89,
    responses: 167
  },
  {
    title: "How to Secure Your Online Banking",
    category: "Guide",
    participants: 245,
    responses: 412
  }
];

const Community = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Community Hub
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Join the conversation about digital safety
          </Typography>

          {/* Community Stats */}
          <Box 
            sx={{ 
              mb: 8,
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4
            }}
          >
            {communityStats.map((stat, index) => (
              <Paper 
                key={index}
                elevation={0} 
                sx={{ 
                  p: 3, 
                  textAlign: 'center', 
                  bgcolor: 'background.paper', 
                  flex: 1,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <stat.icon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h4" gutterBottom color="primary">
                  {stat.value}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.description}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Recent Topics */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Trending Discussions
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 3 
              }}
            >
              {recentTopics.map((topic, index) => (
                <Box 
                  sx={{ 
                    flex: '1 1 calc(33.333% - 24px)', // Adjust for spacing
                    boxSizing: 'border-box' 
                  }} 
                  key={index}
                >
                  <Paper 
                    sx={{ 
                      p: 3,
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        cursor: 'pointer'
                      }
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      <Chip 
                        label={topic.category} 
                        color="primary" 
                        size="small" 
                        sx={{ mb: 2 }}
                      />
                      <Typography variant="h6" gutterBottom>
                        {topic.title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <AvatarGroup max={4} sx={{ mb: 1 }}>
                        <Avatar>U1</Avatar>
                        <Avatar>U2</Avatar>
                        <Avatar>U3</Avatar>
                        <Avatar>U4</Avatar>
                        <Avatar>U5</Avatar>
                      </AvatarGroup>
                      <Typography variant="body2" color="text.secondary">
                        {topic.responses} responses
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Join the Community
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Community; 