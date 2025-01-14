import { Box, Typography, Card, CardContent, Grid, IconButton, Chip, Container } from '@mui/material';
import { BookmarkRemove as BookmarkRemoveIcon, Share as ShareIcon } from '@mui/icons-material';

const SavedScams = () => {
  const savedScams = [
    {
      id: 1,
      title: 'Investment Scam Alert',
      date: '2024-03-15',
      category: 'Investment',
      description: 'Common cryptocurrency investment scam patterns and warning signs. Learn how to identify and avoid potential cryptocurrency investment frauds.',
      source: 'Community Report',
      tags: ['Cryptocurrency', 'High Risk'],
    },
    {
      id: 2,
      title: 'Online Shopping Fraud',
      date: '2024-03-12',
      category: 'Shopping',
      description: 'Comprehensive guide to detecting fake online stores and shopping scams. Includes verification steps and red flags to watch out for.',
      source: 'Expert Analysis',
      tags: ['E-commerce', 'Prevention'],
    },
  ];

  return (
    <Container>
      <Card elevation={3}>
      <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
        Saved Scams
      </Typography>

      <Grid container spacing={3}>
        {savedScams.map((scam) => (
          <Grid item xs={12} md={6} key={scam.id}>
            <Card 
              sx={{ 
                borderRadius: 2,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                      {scam.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Saved on {new Date(scam.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Chip 
                    label={scam.category} 
                    color="primary" 
                    variant="outlined"
                    size="small"
                    sx={{ 
                      borderRadius: 1,
                      '& .MuiChip-label': {
                        px: 1.5,
                      }
                    }}
                  />
                </Box>

                <Typography 
                  variant="body2" 
                  sx={{ 
                    mb: 2,
                    color: 'text.secondary',
                    flex: 1,
                    lineHeight: 1.6
                  }}
                >
                  {scam.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  {scam.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        borderRadius: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        '& .MuiChip-label': {
                          px: 1.5,
                        }
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  mt: 'auto',
                  pt: 1,
                  borderTop: '1px solid',
                  borderColor: 'divider'
                }}>
                  <Typography variant="body2" color="text.secondary">
                    Source: {scam.source}
                  </Typography>
                  <Box>
                    <IconButton 
                      size="small" 
                      sx={{ 
                        mr: 1,
                        color: 'action.active',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'primary.lighter'
                        }
                      }}
                    >
                      <ShareIcon fontSize="small" />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      sx={{
                        color: 'error.light',
                        '&:hover': {
                          color: 'error.main',
                          backgroundColor: 'error.lighter'
                        }
                      }}
                    >
                      <BookmarkRemoveIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
    </Container>
  );
};

export default SavedScams; 