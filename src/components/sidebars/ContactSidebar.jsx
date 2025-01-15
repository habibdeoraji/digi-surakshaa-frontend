import { Box, Typography, Stack, Button, Divider } from '@mui/material';
import { 
  Phone as PhoneIcon, 
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
  AccessTime as AccessTimeIcon 
} from '@mui/icons-material';

const ContactSidebar = () => {
  const contactMethods = [
    {
      icon: PhoneIcon,
      label: 'Helpline',
      value: '1800-XXX-XXXX',
      action: 'tel:1800XXXXXXX'
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: '+91 XXXXX XXXXX',
      action: 'https://wa.me/91XXXXXXXXXX'
    },
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'help@digisuraksha.com',
      action: 'mailto:help@digisuraksha.com'
    }
  ];

  const operatingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Contact Methods
        </Typography>
        <Stack spacing={2}>
          {contactMethods.map((method, index) => (
            <Button
              key={index}
              variant="outlined"
              startIcon={<method.icon />}
              href={method.action}
              target={method.icon === WhatsAppIcon ? "_blank" : undefined}
              rel={method.icon === WhatsAppIcon ? "noopener noreferrer" : undefined}
              fullWidth
              sx={{ 
                borderRadius: 2,
                textTransform: 'none',
                height: 42,
                justifyContent: 'flex-start'
              }}
            >
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="caption" display="block" color="text.secondary">
                  {method.label}
                </Typography>
                <Typography variant="body2">
                  {method.value}
                </Typography>
              </Box>
            </Button>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Operating Hours
        </Typography>
        <Stack spacing={2}>
          {operatingHours.map((schedule, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5
              }}
            >
              <AccessTimeIcon color="action" sx={{ mt: 0.5 }} />
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {schedule.day}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {schedule.hours}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactSidebar; 