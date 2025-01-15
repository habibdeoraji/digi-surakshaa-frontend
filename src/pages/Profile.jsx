import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  TextField, 
  Button, 
  Avatar, 
  IconButton, 
  Divider, 
  Container,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { 
  PhotoCamera as PhotoCameraIcon, 
  Delete as DeleteIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

const Profile = () => {
  const profileSections = [
    {
      title: 'Personal Information',
      type: 'personal',
      content: {
        avatar: '/path/to/avatar.jpg',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        bio: 'Passionate about cybersecurity and helping others stay safe online.',
        age: 28,
        gender: 'male',
        occupation: 'Software Engineer',
        company: 'Tech Corp',
        preferredLanguage: 'en'
      }
    },
    {
      title: 'Account Details',
      type: 'account',
      settings: [
        { label: 'Username', value: 'johndoe123' },
        { label: 'Account Type', value: 'Standard' },
        { label: 'Member Since', value: 'January 2024' },
        { label: 'Last Login', value: '2 hours ago' },
      ]
    },
    {
      title: 'Address Information',
      type: 'address',
      content: {
        city: 'New York',
        state: 'NY',
        country: 'USA',
        postalCode: '10001'
      }
    },
    {
      title: 'Contact Information',
      type: 'contact',
      settings: [
        { label: 'Primary Email', value: 'john.doe@example.com' },
        { label: 'Secondary Email', value: 'john.business@example.com' },
        { label: 'Phone Number', value: '+1 234 567 8900' },
        { label: 'Alternative Phone', value: '+1 987 654 3210' },
      ]
    },
    {
      title: 'Social Links',
      type: 'social',
      content: {
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        facebook: 'https://facebook.com/johndoe'
      }
    }
  ];

  const renderPersonalInfo = (content) => (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            src={content.avatar}
            sx={{ 
              width: 100, 
              height: 100,
              border: '2px solid',
              borderColor: 'primary.main'
            }}
          />
          <Box sx={{ 
            position: 'absolute', 
            bottom: -10, 
            right: -10, 
            display: 'flex', 
            gap: 0.5 
          }}>
            <IconButton
              component="label"
              size="small"
              sx={{ 
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              }}
            >
              <PhotoCameraIcon fontSize="small" />
              <input hidden type="file" accept="image/*" />
            </IconButton>
            <IconButton
              size="small"
              sx={{ 
                bgcolor: 'error.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'error.dark',
                }
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ ml: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {`${content.firstName} ${content.lastName}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content.email}
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Bio"
            defaultValue={content.bio}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="First Name"
            defaultValue={content.firstName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Last Name"
            defaultValue={content.lastName}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Age"
            type="number"
            defaultValue={content.age}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              value={content.gender}
              label="Gender"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
              <MenuItem value="prefer_not_to_say">Prefer not to say</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Occupation"
            defaultValue={content.occupation}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Company"
            defaultValue={content.company}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>Preferred Language</InputLabel>
            <Select
              value={content.preferredLanguage}
              label="Preferred Language"
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">Hindi</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAccountDetails = (settings) => (
    <Box>
      {settings.map((setting, index) => (
        <Box key={index}>
          <Box sx={{ 
            py: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {setting.label}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {setting.value}
              </Typography>
            </Box>
            {setting.label === 'Username' && (
              <Button
                size="small"
                variant="outlined"
                color="primary"
              >
                Change
              </Button>
            )}
          </Box>
          {index < settings.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );

  const renderAddressInfo = (content) => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="City"
          defaultValue={content.city}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="State"
          defaultValue={content.state}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Country"
          defaultValue={content.country}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Postal Code"
          defaultValue={content.postalCode}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );

  const renderSocialLinks = (content) => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="LinkedIn"
          defaultValue={content.linkedin}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Twitter"
          defaultValue={content.twitter}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Instagram"
          defaultValue={content.instagram}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Facebook"
          defaultValue={content.facebook}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );

  const renderContactInfo = (settings) => (
    <Box>
      {settings.map((setting, index) => (
        <Box key={index}>
          <Box sx={{ 
            py: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {setting.label}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {setting.value}
              </Typography>
            </Box>
            <Button
              size="small"
              variant="outlined"
              color="primary"
            >
              Verify
            </Button>
          </Box>
          {index < settings.length - 1 && <Divider />}
        </Box>
      ))}
    </Box>
  );

  const renderSection = (section) => {
    switch (section.type) {
      case 'personal':
        return renderPersonalInfo(section.content);
      case 'account':
        return renderAccountDetails(section.settings);
      case 'address':
        return renderAddressInfo(section.content);
      case 'contact':
        return renderContactInfo(section.settings);
      case 'social':
        return renderSocialLinks(section.content);
      default:
        return null;
    }
  };

  return (
    <Container>
      <Card elevation={3} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
            Profile Settings
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
          >
            Save Changes
          </Button>
        </Box>

        <Alert severity="info" sx={{ mb: 3 }}>
          Keep your profile information up to date to help us serve you better.
        </Alert>

        <Grid container spacing={3}>
          {profileSections.map((section, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: 'text.primary', fontWeight: 600 }}>
                    {section.title}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  {renderSection(section)}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Container>
  );
};

export default Profile; 