import { Box, Typography, Container } from '@mui/material';

const FAQ = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" paragraph>
          Find answers to common questions about digital security and our platform.
        </Typography>
      </Box>
    </Container>
  );
};

export default FAQ; 