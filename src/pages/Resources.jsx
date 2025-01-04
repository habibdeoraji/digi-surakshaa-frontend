import { Box, Typography, Container, Card, Grid, Paper, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GetAppIcon from '@mui/icons-material/GetApp';

const resourceCategories = [
  {
    title: "Educational Materials",
    icon: SchoolIcon,
    items: [
      "Digital Safety Guides",
      "Security Best Practices",
      "Online Banking Safety",
      "Social Media Protection"
    ]
  },
  {
    title: "Articles & Updates",
    icon: ArticleIcon,
    items: [
      "Latest Scam Alerts",
      "Security News",
      "Expert Insights",
      "Case Studies"
    ]
  },
  {
    title: "Video Tutorials",
    icon: VideoLibraryIcon,
    items: [
      "Safety Demonstrations",
      "How-to Guides",
      "Expert Interviews",
      "Awareness Campaigns"
    ]
  },
  {
    title: "Downloads",
    icon: GetAppIcon,
    items: [
      "Safety Checklists",
      "Security Templates",
      "Quick Guide PDFs",
      "Mobile Safety Guides"
    ]
  }
];

const Resources = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Resources
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Comprehensive Digital Safety Learning Materials
          </Typography>

          <Grid container spacing={4}>
            {resourceCategories.map((category, index) => (
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <category.icon 
                      sx={{ 
                        fontSize: 40, 
                        color: 'primary.main',
                        mr: 2 
                      }} 
                    />
                    <Typography variant="h5">
                      {category.title}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: 3 }}>
                    {category.items.map((item, idx) => (
                      <Typography 
                        key={idx} 
                        variant="body1" 
                        sx={{ 
                          mb: 1,
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'primary.main'
                          }
                        }}
                      >
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                  <Button 
                    variant="outlined" 
                    color="primary"
                    fullWidth
                  >
                    View All
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Search Resources */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
              Can not find what you are looking for?
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Our comprehensive resource library is regularly updated with new content.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Search Resources
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Resources; 