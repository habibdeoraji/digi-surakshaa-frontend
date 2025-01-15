import { Box, Typography, Stack, Button, Divider } from '@mui/material';
import { Email, LinkedIn, Twitter } from '@mui/icons-material';

const AboutSidebar = () => {
  const contactOptions = [
    { icon: Email, label: 'Email Us', action: 'mailto:contact@digisuraksha.com' },
    { icon: LinkedIn, label: 'Follow on LinkedIn', action: 'https://linkedin.com/company/digisuraksha' },
    { icon: Twitter, label: 'Follow on Twitter', action: 'https://twitter.com/digisuraksha' },
  ];

  const quickFacts = [
    { label: 'Founded', value: '2024' },
    { label: 'Users Protected', value: '100,000+' },
    { label: 'Scams Reported', value: '25,000+' },
    { label: 'Money Saved', value: '₹50Cr+' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Quick Facts
        </Typography>
        <Stack spacing={1}>
          {quickFacts.map((fact, index) => (
            <Box key={index}>
              <Typography variant="body2" color="text.secondary">
                {fact.label}
              </Typography>
              <Typography variant="h6" color="primary.main">
                {fact.value}
              </Typography>
              {index < quickFacts.length - 1 && <Divider sx={{ mt: 1 }} />}
            </Box>
          ))}
        </Stack>
      </Box>

      <Box>
        <Typography variant="h6" gutterBottom>
          Connect With Us
        </Typography>
        <Stack spacing={2} sx={{ mt: 3 }}>
          {contactOptions.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              startIcon={<option.icon />}
              href={option.action}
              target="_blank"
              rel="noopener noreferrer"
              fullWidth
              sx={{ 
                borderRadius: 2,
                textTransform: 'none',
                height: 42
              }}
            >
              {option.label}
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutSidebar; 