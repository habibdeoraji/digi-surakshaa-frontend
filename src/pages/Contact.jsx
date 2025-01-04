import { Box, Typography, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Get in touch with our team for support or inquiries.
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact; 