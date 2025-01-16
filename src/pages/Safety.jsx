import { Box, Typography, Card, CardContent, Alert, Stack, Chip, Divider } from '@mui/material';
import {
  Security as SecurityIcon,
  PhishingOutlined as PhishingIcon,
  AccountBalanceWallet as WalletIcon,
  VerifiedUser as VerifiedUserIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const Safety = () => {
  const safetyGuidelines = [
    {
      title: "Online Banking Safety",
      icon: WalletIcon,
      color: "#2196F3",
      tips: [
        "Never share OTP or PIN with anyone",
        "Use strong, unique passwords",
        "Enable two-factor authentication",
        "Verify bank communications through official channels"
      ]
    },
    {
      title: "Identity Protection",
      icon: VerifiedUserIcon,
      color: "#4CAF50",
      tips: [
        "Keep personal information private",
        "Regularly monitor accounts",
        "Use secure networks only",
        "Be cautious with document sharing"
      ]
    },
    {
      title: "Scam Prevention",
      icon: PhishingIcon,
      color: "#FF9800",
      tips: [
        "Verify sender's identity",
        "Don't click suspicious links",
        "Be wary of urgent requests",
        "Research before making payments"
      ]
    }
  ];

  const recentAlerts = [
    {
      type: "critical",
      message: "New UPI scam targeting bank customers",
      date: "2 hours ago"
    },
    {
      type: "warning",
      message: "Increase in fake job offer scams",
      date: "1 day ago"
    },
    {
      type: "info",
      message: "Update your banking passwords regularly",
      date: "2 days ago"
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header Section */}
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Box>
            <Typography variant="h4" fontWeight="500">
              Safety Guide
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Essential guidelines to protect yourself from online scams
            </Typography>
          </Box>
        </Box>
      </Stack>

      {/* Recent Alerts Section */}
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" gutterBottom>
          Recent Safety Alerts
        </Typography>
        <Stack spacing={2}>
          {recentAlerts.map((alert, index) => (
            <Alert 
              key={index}
              severity={alert.type}
              icon={<WarningIcon />}
              sx={{
                '& .MuiAlert-icon': {
                  alignItems: 'center'
                }
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1">
                  {alert.message}
                </Typography>
                <Chip 
                  label={alert.date} 
                  size="small"
                  sx={{ ml: 2 }}
                />
              </Box>
            </Alert>
          ))}
        </Stack>
      </Box>

      {/* Safety Guidelines Section */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Safety Guidelines
        </Typography>
        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            },
            gap: 3
          }}
        >
          {safetyGuidelines.map((guide) => (
            <Card 
              key={guide.title}
              sx={{ 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => `0 8px 24px ${theme.palette.action.hover}`
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box 
                    sx={{ 
                      p: 1,
                      borderRadius: 1,
                      bgcolor: `${guide.color}15`,
                      mr: 2
                    }}
                  >
                    <guide.icon sx={{ color: guide.color }} />
                  </Box>
                  <Typography variant="h6" color={guide.color}>
                    {guide.title}
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Stack spacing={1.5}>
                  {guide.tips.map((tip, index) => (
                    <Box 
                      key={index}
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: guide.color,
                          flexShrink: 0
                        }}
                      />
                      <Typography variant="body2">
                        {tip}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Safety; 