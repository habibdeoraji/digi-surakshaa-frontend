import { Box, Typography, Container } from '@mui/material';

const Resources = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Resources
        </Typography>
        <Typography variant="body1" paragraph>
          Access our comprehensive collection of security resources and materials.
        </Typography>
      </Box>
    </Container>
  );
};

export default Resources; 