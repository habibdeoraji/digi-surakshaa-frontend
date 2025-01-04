import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  Paper,
  Button,
  LinearProgress,
  Chip,
  Avatar
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LockIcon from '@mui/icons-material/Lock';
import GroupIcon from '@mui/icons-material/Group';

const courses = [
  {
    title: "Digital Security Basics",
    icon: SecurityIcon,
    level: "Beginner",
    duration: "2 Hours",
    progress: 80,
    modules: 5,
    enrolled: 1234,
    description: "Learn the fundamentals of digital security and basic safety practices."
  },
  {
    title: "Mobile Safety",
    icon: PhoneAndroidIcon,
    level: "Intermediate",
    duration: "1.5 Hours",
    progress: 0,
    modules: 4,
    enrolled: 856,
    description: "Protect your smartphone and mobile transactions from cyber threats."
  },
  {
    title: "Banking Security",
    icon: AccountBalanceIcon,
    level: "Advanced",
    duration: "3 Hours",
    progress: 30,
    modules: 6,
    enrolled: 2156,
    description: "Advanced security measures for safe online banking and transactions."
  },
  {
    title: "Password Management",
    icon: LockIcon,
    level: "Beginner",
    duration: "1 Hour",
    progress: 0,
    modules: 3,
    enrolled: 1567,
    description: "Create and manage strong passwords for all your accounts."
  },
  {
    title: "Social Media Safety",
    icon: GroupIcon,
    level: "Intermediate",
    duration: "2.5 Hours",
    progress: 0,
    modules: 5,
    enrolled: 1890,
    description: "Stay safe on social media platforms and protect your privacy."
  }
];

const Educational = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Educational Resources
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Learn Digital Security at Your Own Pace
          </Typography>

          {/* Course Grid -> Flex Container */}
          <Box 
            sx={{ 
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              mb: 8
            }}
          >
            {courses.map((course, index) => (
              <Box 
                key={index}
                sx={{ 
                  flex: { xs: '1 1 100%', md: '1 1 calc(50% - 16px)' },
                  minWidth: { xs: '100%', md: 'calc(50% - 16px)' }
                }}
              >
                <Paper 
                  sx={{ 
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.shadows[4]
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 56,
                        height: 56,
                        mr: 2
                      }}
                    >
                      <course.icon />
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" gutterBottom>
                        {course.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                        <Chip 
                          label={course.level} 
                          size="small" 
                          color="primary" 
                          variant="outlined"
                        />
                        <Chip 
                          label={`${course.duration}`} 
                          size="small" 
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                  </Box>

                  <Typography variant="body1" color="text.secondary" paragraph>
                    {course.description}
                  </Typography>

                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Progress
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {course.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={course.progress} 
                      sx={{ height: 6, borderRadius: 3 }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      {course.modules} Modules • {course.enrolled.toLocaleString()} Enrolled
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary"
                      size="small"
                    >
                      {course.progress > 0 ? 'Continue' : 'Start Learning'}
                    </Button>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Box>

          {/* Learning Path */}
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom>
              Structured Learning Path
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
              Follow our recommended learning path to build a strong foundation in digital security. 
              Start with basics and progress to advanced topics at your own pace.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              View Learning Path
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Educational; 