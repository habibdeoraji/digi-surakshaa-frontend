import { Box, Typography, Container } from '@mui/material';

const Features = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1" paragraph>
          Explore the powerful features that help protect your digital presence.
        </Typography>
      </Box>
    </Container>
  );
};

export default Features; 