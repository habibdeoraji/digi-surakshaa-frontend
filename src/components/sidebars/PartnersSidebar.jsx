import { Box, Typography, Avatar, Stack, Chip, Button, Divider } from '@mui/material';
import { Handshake } from '@mui/icons-material';

const PartnersSidebar = () => {
  const partnerStats = [
    { label: 'Active Partners', value: '50+' },
    { label: 'Countries', value: '12' },
    { label: 'Joint Operations', value: '200+' },
  ];

  const featuredPartners = [
    { name: 'Cyber Security Agency', type: 'Government' },
    { name: 'Digital Safety Alliance', type: 'NGO' },
    { name: 'Tech Guard Solutions', type: 'Corporate' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Partnership Stats
        </Typography>
        <Stack spacing={2}>
          {partnerStats.map((stat, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
              <Typography variant="h6" color="primary.main">
                {stat.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Featured Partners
        </Typography>
        <Stack spacing={3} sx={{ mt: 3 }}>
          {featuredPartners.map((partner, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 2 
              }}
            >
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <Handshake />
              </Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {partner.name}
                </Typography>
                <Chip 
                  label={partner.type}
                  size="small"
                  variant="outlined"
                  sx={{ mt: 0.5 }}
                />
              </Box>
            </Box>
          ))}
        </Stack>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Handshake />}
          sx={{ 
            mt: 4,
            borderRadius: 2,
            textTransform: 'none'
          }}
        >
          Become a Partner
        </Button>
      </Box>
    </Box>
  );
};

export default PartnersSidebar; 