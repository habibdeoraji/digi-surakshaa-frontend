import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Digi Suraksha
        </Typography>
        <Typography variant="body1" >
          Your trusted platform for digital security and protection against online threats.  Your trusted platform for digital security and protection against online threats.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;