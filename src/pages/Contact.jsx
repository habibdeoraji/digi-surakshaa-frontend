import { Box, Typography, Grid, Card, CardContent, TextField, Button, Stack, Divider, IconButton } from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  WhatsApp as WhatsAppIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Send as SendIcon,
} from '@mui/icons-material';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: EmailIcon,
      title: "Email Us",
      primary: "support@digisuraksha.com",
      secondary: "For general inquiries",
      color: "#2196F3"
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      primary: "+91 1800-123-4567",
      secondary: "Mon-Sat 9am to 6pm",
      color: "#4CAF50"
    },
    {
      icon: WhatsAppIcon,
      title: "WhatsApp",
      primary: "+91 9876543210",
      secondary: "Chat with us",
      color: "#25D366"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header Section */}
      <Stack spacing={2} sx={{ mb: 6, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h4" fontWeight="500">
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Have questions or concerns? We are here to help. Contact our team for support or inquiries.
        </Typography>
      </Stack>

      {/* Contact Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {contactInfo.map((info) => (
          <Grid item xs={12} md={4} key={info.title}>
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
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: `${info.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  <info.icon sx={{ color: info.color, fontSize: 30 }} />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {info.title}
                </Typography>
                <Typography variant="body1" color="primary" gutterBottom>
                  {info.primary}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.secondary}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Contact Form Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Send us a Message
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Fill out the form below and we will get back to you as soon as possible.
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <Button 
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Office Location
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationIcon color="primary" sx={{ mr: 1 }} />
                  <Typography variant="body1">
                    DigiSuraksha Headquarters
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  123 Cyber Security Tower, <br />
                  Technology Street, Digital City, <br />
                  Bangalore - 560001
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Stay connected with us on social media for updates and tips.
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton 
                  sx={{ 
                    color: '#1877F2',
                    '&:hover': { bgcolor: '#1877F215' }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: '#1DA1F2',
                    '&:hover': { bgcolor: '#1DA1F215' }
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: '#0A66C2',
                    '&:hover': { bgcolor: '#0A66C215' }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: '#25D366',
                    '&:hover': { bgcolor: '#25D36615' }
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Stack>

              {/* Business Hours */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Business Hours
                </Typography>
                <Stack spacing={1}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">Monday - Friday</Typography>
                    <Typography variant="body2" color="text.secondary">9:00 AM - 6:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">Saturday</Typography>
                    <Typography variant="body2" color="text.secondary">10:00 AM - 4:00 PM</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">Sunday</Typography>
                    <Typography variant="body2" color="text.secondary">Closed</Typography>
                  </Box>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact; 