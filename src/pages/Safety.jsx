import { Box, Typography, Container } from '@mui/material';

const Safety = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Safety Center
        </Typography>
        <Typography variant="body1" paragraph>
          Learn about the latest security measures and best practices to stay safe online.
        </Typography>
      </Box>
    </Container>
  );
};

export default Safety; 