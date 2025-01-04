import { Box, Typography, Container, Card, Paper } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';
import CampaignIcon from '@mui/icons-material/Campaign';

const blogPosts = [
  {
    title: "Latest Cyber Scams in India 2024",
    date: "March 15, 2024",
    category: "Trending",
    excerpt: "Understanding the most prevalent cyber scams affecting Indians and how to protect yourself.",
  },
  {
    title: "Digital Payment Safety Guide",
    date: "March 12, 2024",
    category: "Security",
    excerpt: "Essential tips for securing your digital payments and avoiding UPI fraud.",
  },
  {
    title: "KYC Fraud Prevention",
    date: "March 10, 2024",
    category: "Alerts",
    excerpt: "How to identify and avoid the rising cases of KYC fraud in India.",
  },
];

const Blog = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Digi Suraksha Blog
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Stay Updated with Latest Digital Security Insights and News
          </Typography>

          {/* Featured Categories */}
          <Box 
            sx={{ 
              mb: 8,
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4
            }}
          >
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Trending Topics
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Most discussed digital security issues and their solutions
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <SecurityUpdateIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Security Updates
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Latest security patches and protection measures
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <CampaignIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Alerts & Warnings
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Real-time updates about active threats and scams
              </Typography>
            </Paper>
          </Box>

          {/* Latest Posts */}
          <Box 
            sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              mb: 8
            }}
          >
            {blogPosts.map((post, index) => (
              <Box 
                key={index}
                sx={{ 
                  flex: { xs: '1 1 100%', md: '1 1 calc(33.333% - 16px)' },
                  minWidth: { xs: '100%', md: 'calc(33.333% - 16px)' }
                }}
              >
                <Paper 
                  elevation={2} 
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
                  <Typography variant="overline" color="primary">
                    {post.category}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {post.date}
                  </Typography>
                  <Typography variant="body1">
                    {post.excerpt}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Blog; 