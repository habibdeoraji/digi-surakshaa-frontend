import { Box, Typography, Container } from '@mui/material';

const Partners = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Partners
        </Typography>
        <Typography variant="body1" paragraph>
          Meet the organizations working with us to enhance digital security.
        </Typography>
      </Box>
    </Container>
  );
};

export default Partners; 