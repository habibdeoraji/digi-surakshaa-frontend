import { Box, Typography, Card, CardContent, Chip, Grid, IconButton, Container } from '@mui/material';
import { DeleteOutline as DeleteIcon, Share as ShareIcon } from '@mui/icons-material';

const ReportedScams = () => {
  const reportedScams = [
    {
      id: 1,
      type: 'Phishing',
      date: '2024-03-15',
      status: 'Under Review',
      description: 'Received suspicious email claiming to be from a major bank. The email requested immediate action to verify account details through an external link. Reported for investigation.',
      platform: 'Email',
    },
    {
      id: 2,
      type: 'Investment Fraud',
      date: '2024-03-10',
      status: 'Resolved',
      description: 'Encountered a cryptocurrency investment scheme on Telegram promising unrealistic returns. The group was using fake testimonials and pressure tactics to lure investors.',
      platform: 'Telegram',
    },
  ];

  return (
    <Container>
      <Card elevation={3}>
      <Typography variant="h4" sx={{ mb: 3, color: 'text.primary', fontWeight: 600 }}>
        Reported Scams
      </Typography>
      
      <Grid container spacing={3}>
        {reportedScams.map((scam) => (
          <Grid item xs={12} key={scam.id}>
            <Card 
              sx={{ 
                borderRadius: 2,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>
                      {scam.type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Reported on {new Date(scam.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Chip 
                    label={scam.status} 
                    color={scam.status === 'Resolved' ? 'success' : 'warning'}
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
                    lineHeight: 1.6
                  }}
                >
                  {scam.description}
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  pt: 1,
                  borderTop: '1px solid',
                  borderColor: 'divider'
                }}>
                  <Chip 
                    label={scam.platform} 
                    variant="outlined" 
                    size="small"
                    sx={{ 
                      borderRadius: 1,
                      '& .MuiChip-label': {
                        px: 1.5,
                      }
                    }}
                  />
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
                      <DeleteIcon fontSize="small" />
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

export default ReportedScams; 