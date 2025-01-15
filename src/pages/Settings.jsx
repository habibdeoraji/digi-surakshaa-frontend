import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Switch, 
  Divider, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Container,
  Alert,
  Button
} from '@mui/material';

const Settings = () => {
  const settingsGroups = [
    {
      title: 'Security',
      type: 'security',
      settings: [
        { label: 'Two-Factor Authentication', value: true, description: 'Add an extra layer of security to your account' },
        { label: 'Biometric Login', value: false, description: 'Use fingerprint or face recognition to login' },
        { label: 'Login Alerts', value: true, description: 'Get notified of new login attempts' },
        { label: 'Suspicious Activity Alerts', value: true, description: 'Get notified of any suspicious account activity' },
        { label: 'Password Reset Alerts', value: true, description: 'Get notified when your password is changed' }
      ]
    },
    {
      title: 'Privacy',
      type: 'privacy',
      settings: [
        { label: 'Profile Visibility', value: true, description: 'Make your profile visible to other users' },
        { label: 'Share Activity History', value: false, description: 'Share your scam reporting activity with the community' },
        { label: 'Allow Mentions', value: true, description: 'Let other users mention you in comments' },
        { label: 'Show Online Status', value: false, description: 'Display when you are active on the platform' }
      ]
    },
    {
      title: 'Notifications',
      type: 'notifications',
      settings: [
        { label: 'Email Notifications', value: true, description: 'Receive important updates via email' },
        { label: 'Push Notifications', value: false, description: 'Receive notifications on your device' },
        { label: 'Security Alerts', value: true, description: 'Get immediate alerts about security issues' },
        { label: 'Newsletter', value: true, description: 'Receive our weekly newsletter with safety tips' },
        { label: 'Community Updates', value: false, description: 'Get updates about community activities' }
      ]
    },
    {
      title: 'Data & Privacy',
      type: 'data',
      settings: [
        { label: 'Data Collection', value: true, description: 'Allow collection of usage data to improve services' },
        { label: 'Personalized Content', value: false, description: 'Receive personalized content based on your activity' },
        { label: 'Cookie Preferences', value: true, description: 'Manage cookie settings' },
        { label: 'Analytics Sharing', value: false, description: 'Share anonymous analytics data' }
      ]
    }
  ];

  const renderSettings = (settings) => (
    <Box>
      {settings.map((setting, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 2,
            }}
          >
            <Box>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {setting.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {setting.description}
              </Typography>
            </Box>
            <Switch
              checked={setting.value}
              color="primary"
            />
          </Box>
          {index < settings.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );

  return (
    <Container>
      <Card elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 4, color: 'text.primary', fontWeight: 600 }}>
          Settings
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          Keep your account secure by regularly reviewing your security settings.
        </Alert>

        <Grid container spacing={3}>
          {settingsGroups.map((group, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
                    {group.title}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  {renderSettings(group.settings)}
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid item xs={12}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
                  Preferences
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Language</InputLabel>
                      <Select
                        value="en"
                        label="Language"
                      >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Español</MenuItem>
                        <MenuItem value="fr">Français</MenuItem>
                        <MenuItem value="de">Deutsch</MenuItem>
                        <MenuItem value="it">Italiano</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Time Zone</InputLabel>
                      <Select
                        value="utc"
                        label="Time Zone"
                      >
                        <MenuItem value="utc">UTC (GMT+0)</MenuItem>
                        <MenuItem value="est">Eastern Time (GMT-5)</MenuItem>
                        <MenuItem value="pst">Pacific Time (GMT-8)</MenuItem>
                        <MenuItem value="ist">India (GMT+5:30)</MenuItem>
                        <MenuItem value="aest">Australia (GMT+10)</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ borderRadius: 2, bgcolor: '#FFF5F5' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'error.main', fontWeight: 600 }}>
                  Danger Zone
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body1" sx={{ color: 'error.main', fontWeight: 500 }}>
                      Delete Account
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Once deleted, your account cannot be recovered
                    </Typography>
                  </Box>
                  <Button variant="outlined" color="error">
                    Delete Account
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Settings; 