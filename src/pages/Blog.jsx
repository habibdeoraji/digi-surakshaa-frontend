import { Box, Typography, Container } from '@mui/material';

const Blog = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body1" paragraph>
          Stay updated with the latest news and insights about digital security.
        </Typography>
      </Box>
    </Container>
  );
};

export default Blog; 