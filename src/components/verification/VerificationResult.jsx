import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  styled,
  alpha,
} from '@mui/material';
import {
  CheckCircle,
  Warning,
  Error,
  Info,
  ArrowRight,
} from '@mui/icons-material';
import PropTypes from 'prop-types';

const ResultPaper = styled(Paper)(({ theme, isscam }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  background: `linear-gradient(145deg, ${
    isscam === 'true' 
      ? `${theme.palette.error.light}05, ${theme.palette.error.light}0F`
      : `${theme.palette.success.light}05, ${theme.palette.success.light}0F`
  })`,
  border: `1px solid ${
    isscam === 'true' 
      ? theme.palette.error.main + '30'
      : theme.palette.success.main + '30'
  }`,
  position: 'relative',
  overflow: 'hidden',
  backdropFilter: 'blur(8px)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 30px ${
      isscam === 'true'
        ? theme.palette.error.main + '20'
        : theme.palette.success.main + '20'
    }`,
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(1, 0.5),
  height: 'auto',
  '& .MuiChip-label': {
    padding: theme.spacing(0.5, 1),
    fontSize: '0.9rem',
    fontWeight: 600,
  },
  '& .MuiChip-icon': {
    fontSize: '1.2rem',
  },
}));

const RecommendationItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(1.5),
  backgroundColor: alpha(theme.palette.background.paper, 0.5),
  '&:hover': {
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
  },
  marginBottom: theme.spacing(1),
}));

const VerificationResult = ({ result }) => {
  const { isScam, confidence, riskLevel, explanation, recommendations } = result;

  const getStatusIcon = () => {
    if (isScam) {
      return <Error color="error" sx={{ fontSize: 48 }} />;
    }
    return <CheckCircle color="success" sx={{ fontSize: 48 }} />;
  };

  const getConfidenceColor = (value) => {
    if (value >= 80) return 'error';
    if (value >= 50) return 'warning';
    return 'success';
  };

  return (
    <ResultPaper isscam={isScam.toString()} elevation={0}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        {getStatusIcon()}
        <Typography variant="h4" sx={{ mt: 2, mb: 2, fontWeight: 700 }}>
          {isScam ? 'Potential Scam Detected' : 'No Scam Detected'}
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          justifyContent: 'center', 
          mb: 2,
          flexWrap: 'wrap' 
        }}>
          <StyledChip
            icon={<Info />}
            label={`${confidence}% Confidence`}
            color={getConfidenceColor(confidence)}
            variant="outlined"
          />
          <StyledChip
            icon={<Warning />}
            label={`${riskLevel} Risk`}
            color={isScam ? 'error' : 'success'}
            variant="outlined"
          />
        </Box>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="subtitle1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
          }}
        >
          Analysis
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            lineHeight: 1.7,
            backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.5),
            p: 2,
            borderRadius: 2,
          }}
        >
          {explanation}
        </Typography>
      </Box>

      <Box>
        <Typography 
          variant="subtitle1" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
          }}
        >
          Recommendations
        </Typography>
        <List>
          {recommendations.map((recommendation, index) => (
            <RecommendationItem key={index}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <ArrowRight color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary={recommendation}
                primaryTypographyProps={{
                  variant: 'body1',
                  color: 'text.primary',
                  fontWeight: 500,
                }}
              />
            </RecommendationItem>
          ))}
        </List>
      </Box>
    </ResultPaper>
  );
};

VerificationResult.propTypes = {
  result: PropTypes.shape({
    isScam: PropTypes.bool.isRequired,
    confidence: PropTypes.number.isRequired,
    riskLevel: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    recommendations: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default VerificationResult; 