import { Box, Typography, Container, Card, Paper, Grid } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SecurityIcon from '@mui/icons-material/Security';

const partners = [
  {
    name: "National Cyber Security",
    type: "Government",
    description: "Official partnership with India's cyber security division.",
  },
  {
    name: "Digital Safety Foundation",
    type: "NGO",
    description: "Collaborative initiatives for digital literacy and safety.",
  },
  {
    name: "CyberTech Solutions",
    type: "Technology",
    description: "Technical expertise and security infrastructure support.",
  },
];

const Partners = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Our Partners
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Working Together for a Safer Digital India
          </Typography>

          {/* Partnership Categories */}
          <Box 
            sx={{ 
              mb: 8,
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4
            }}
          >
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <BusinessIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Government Partners
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Official collaborations with government cyber security agencies
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <HandshakeIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                NGO Collaborations
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Partnerships with non-profit organizations for digital literacy
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Technology Partners
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Strategic alliances with technology providers
              </Typography>
            </Paper>
          </Box>

          {/* Partners Grid */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Featured Partners
            </Typography>
            <Grid container spacing={3}>
              {partners.map((partner, index) => (
                <Grid item xs={12} md={4} key={index}>
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
                      {partner.type}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {partner.name}
                    </Typography>
                    <Typography variant="body1">
                      {partner.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Partnership Benefits */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Partnership Benefits
            </Typography>
            <Typography variant="body1" paragraph>
              Join us in our mission to create a safer digital environment:
            </Typography>
            <Typography component="ul" sx={{ pl: 4 }}>
              <li>Access to comprehensive digital safety resources</li>
              <li>Joint awareness campaigns and initiatives</li>
              <li>Collaborative research and development</li>
              <li>Shared expertise and knowledge base</li>
              <li>Community outreach programs</li>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Partners; 