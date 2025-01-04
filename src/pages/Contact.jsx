import { Box, Typography, Container, Card, Paper, TextField, Button, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            We are Here to Help You Stay Safe Online
          </Typography>

          {/* Contact Methods */}
          <Box 
            sx={{ 
              mb: 8,
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4
            }}
          >
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Email Support
              </Typography>
              <Typography variant="body2" color="text.secondary">
                support@digisuraksha.in
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                24/7 Helpline
              </Typography>
              <Typography variant="body2" color="text.secondary">
                1800-XXX-XXXX (Toll Free)
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Head Office
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bengaluru, Karnataka
              </Typography>
            </Paper>
          </Box>

          {/* Contact Form */}
          <Box sx={{ maxWidth: 600, mx: 'auto' }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Send us a Message
            </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    required
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Contact; 