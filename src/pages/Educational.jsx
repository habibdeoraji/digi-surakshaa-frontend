import { Box, Typography, Container } from '@mui/material';

const Educational = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Educational Resources
        </Typography>
        <Typography variant="body1" paragraph>
          Learn about digital security through our educational materials and courses.
        </Typography>
      </Box>
    </Container>
  );
};

export default Educational; 