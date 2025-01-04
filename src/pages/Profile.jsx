import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  TextField, 
  Button, 
  Avatar,
  Paper,
  Divider,
  Switch,
  FormControlLabel
} from '@mui/material';


const activityLogs = [
  {
    text: "Last login: Today at 10:30 AM",
    id: 1
  },
  {
    text: "Password changed: 15 days ago",
    id: 2
  },
  {
    text: "Security alert: Unusual login attempt blocked (2 days ago)",
    id: 3
  }
];

const Profile = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          {/* Profile Header */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
            <Avatar 
              sx={{ 
                width: 120, 
                height: 120, 
                mb: 2,
                bgcolor: 'primary.main'
              }}
            >
              RS
            </Avatar>
            <Typography variant="h4" gutterBottom>
              Rahul Singh
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Member since January 2024
            </Typography>
          </Box>

          {/* Main Content */}
          <Box 
            sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4
            }}
          >
            {/* Personal Information */}
            <Box 
              sx={{ 
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
                minWidth: { xs: '100%', md: 'calc(50% - 16px)' }
              }}
            >
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Personal Information
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2
                  }}
                >
                  <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' } }}>
                    <TextField
                      fullWidth
                      label="First Name"
                      defaultValue="Rahul"
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 8px)' } }}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      defaultValue="Singh"
                      variant="outlined"
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Email"
                      defaultValue="rahul.singh@example.com"
                      variant="outlined"
                      type="email"
                    />
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <TextField
                      fullWidth
                      label="Phone"
                      defaultValue="+91 98765 43210"
                      variant="outlined"
                    />
                  </Box>
                </Box>
              </Paper>
            </Box>

            {/* Security Settings */}
            <Box 
              sx={{ 
                flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
                minWidth: { xs: '100%', md: 'calc(50% - 16px)' }
              }}
            >
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  Security & Preferences
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ mb: 3 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Two-Factor Authentication"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                    Secure your account with 2FA
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Email Notifications"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                    Get alerts about security threats
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <FormControlLabel
                    control={<Switch />}
                    label="SMS Notifications"
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                    Receive SMS alerts for important updates
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  color="error"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Change Password
                </Button>
              </Paper>
            </Box>

            {/* Activity History */}
            <Box sx={{ width: '100%' }}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Recent Activity
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {activityLogs.map((log) => (
                    <Typography key={log.id} variant="body2" color="text.secondary">
                      {log.text}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Profile; 