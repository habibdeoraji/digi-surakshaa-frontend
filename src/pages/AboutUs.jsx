import { Box, Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Learn about our mission to create a safer digital environment for everyone.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs; 