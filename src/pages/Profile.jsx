import { Box, Typography, Container } from '@mui/material';

const Profile = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile
        </Typography>
        <Typography variant="body1" paragraph>
          Manage your account settings and security preferences.
        </Typography>
      </Box>
    </Container>
  );
};

export default Profile; 