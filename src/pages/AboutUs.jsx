import { Box, Typography, Container, Paper, Card } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';

const AboutUs = () => {
  return (
    <Container >
      <Card elevation={3} >
        <Box sx={{ py: 6, px: 4 }}>
          {/* Hero Section */}
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            About Digi Suraksha
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Empowering Indians with Digital Safety Knowledge Since 2023
          </Typography>

          {/* Mission Section */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Our Mission
            </Typography>
            <Typography variant="body1">
              At Digi Suraksha, we are committed to creating a safer digital landscape for every Indian citizen. 
              In an era where digital transformation is reshaping our daily lives, we believe that cybersecurity 
              awareness should be accessible to everyone, regardless of their technical expertise.
            </Typography>
            <Typography variant="body1">
              Our platform serves as a bridge between complex cybersecurity concepts and everyday users, 
              making digital safety knowledge approachable, understandable, and actionable.
            </Typography>
          </Box>

          {/* Core Values Section - Replacing Grid with Box flex layout */}
          <Box 
            sx={{ 
              mb: 8,
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4
            }}
          >
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Digital Protection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We prioritize the security and privacy of every Indian internet user through 
                education and awareness.
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Education First
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We believe in simplifying complex security concepts to make them accessible 
                to everyone.
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <GroupsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Community Focus
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We foster a community where knowledge sharing and mutual support create 
                a stronger digital safety net.
              </Typography>
            </Paper>
          </Box>

          {/* Impact Section */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Our Impact
            </Typography>
            <Typography variant="body1">
              Since our inception, we have helped thousands of Indians understand and implement 
              better digital safety practices. Through our educational resources, interactive 
              workshops, and community initiatives, we have:
            </Typography>
            <Typography component="ul" sx={{ pl: 4 }}>
              <li>Educated over 10,000+ individuals about cybersecurity basics</li>
              <li>Conducted 100+ workshops across different cities in India</li>
              <li>Created comprehensive guides in multiple Indian languages</li>
              <li>Partnered with leading organizations to expand our reach</li>
            </Typography>
          </Box>

          {/* Vision Section */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Our Vision
            </Typography>
            <Typography variant="body1">
              We envision a digitally literate India where every citizen is equipped with the 
              knowledge and tools to protect themselves online. Through continuous education, 
              community engagement, and innovative solutions, we strive to make this vision 
              a reality.
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default AboutUs; 