import { Box, Typography, Container } from '@mui/material';

const ReportScam = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Report Spam
        </Typography>
        <Typography variant="body1" paragraph>
          Help us combat spam by reporting suspicious activities and content.
        </Typography>
      </Box>
    </Container>
  );
};

export default ReportScam; 