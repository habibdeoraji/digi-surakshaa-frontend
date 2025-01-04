import { Box, Typography, Container, Card, Paper } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import WarningIcon from '@mui/icons-material/Warning';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Safety = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Safety Center
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Your Complete Guide to Digital Safety and Security
          </Typography>

          {/* Key Safety Areas */}
          <Box 
            sx={{ 
              mb: 8,
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4
            }}
          >
            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <ShieldIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Preventive Measures
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Steps to protect yourself from digital threats and scams
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <WarningIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Active Threats
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Current scams and frauds to be aware of
              </Typography>
            </Paper>

            <Paper elevation={0} sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}>
              <VerifiedUserIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Best Practices
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Recommended security practices for daily digital life
              </Typography>
            </Paper>
          </Box>

          {/* Safety Guidelines */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Essential Safety Guidelines
            </Typography>
            <Typography variant="body1" paragraph>
              Follow these key guidelines to ensure your digital safety:
            </Typography>
            <Typography component="ul" sx={{ pl: 4 }}>
              <li>Never share OTP or banking credentials with anyone</li>
              <li>Use strong, unique passwords for all accounts</li>
              <li>Enable two-factor authentication when available</li>
              <li>Verify sources before clicking on links or downloading files</li>
              <li>Keep your devices and applications updated</li>
            </Typography>
          </Box>

          {/* Emergency Response */}
          <Box>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Emergency Response
            </Typography>
            <Typography variant="body1" paragraph>
              If you become a victim of cyber fraud:
            </Typography>
            <Typography component="ol" sx={{ pl: 4 }}>
              <li>Report to your bank immediately</li>
              <li>File a complaint on the National Cyber Crime Portal</li>
              <li>Document all relevant details and communications</li>
              <li>Contact our 24/7 helpline for assistance</li>
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default Safety; 