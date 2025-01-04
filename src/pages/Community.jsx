import { Box, Typography, Container } from '@mui/material';

const Community = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Community
        </Typography>
        <Typography variant="body1" paragraph>
          Connect with other users and share experiences about digital security.
        </Typography>
      </Box>
    </Container>
  );
};

export default Community; 