import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  CircularProgress, 
  Grid, 
  LinearProgress, 
  Container,
  Button,
  Divider,
  Chip,
  Tooltip
} from '@mui/material';
import {
  Download as DownloadIcon,
  Refresh as RefreshIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const SafetyScore = () => {
  const safetyMetrics = {
    overallScore: 85,
    lastUpdated: '2024-03-15',
    categories: [
      { name: 'Password Strength', score: 90, status: 'good' },
      { name: '2FA Enabled', score: 100, status: 'good' },
      { name: 'Security Questions', score: 70, status: 'warning' },
      { name: 'Recent Activity', score: 80, status: 'good' },
    ],
  };

  const quizScores = {
    overallProgress: 75,
    completedQuizzes: 8,
    totalQuizzes: 10,
    recentScores: [
      { title: 'Phishing Awareness', score: 90, date: '2024-03-10' },
      { title: 'Password Security', score: 85, date: '2024-03-08' },
      { title: 'Social Media Safety', score: 70, date: '2024-03-05' },
    ]
  };

  const vulnerabilityReport = {
    lastScan: '2024-03-15 14:30',
    riskLevel: 'Medium',
    findings: [
      {
        type: 'Data Breach',
        severity: 'high',
        description: 'Your email was found in 2 recent data breaches',
        action: 'Change passwords for affected accounts'
      },
      {
        type: 'Social Media',
        severity: 'medium',
        description: 'Public profile with sensitive information exposed',
        action: 'Review privacy settings'
      },
      {
        type: 'Dark Web',
        severity: 'low',
        description: 'No critical information found on dark web',
        action: 'Continue monitoring'
      }
    ]
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Container>
      <Card elevation={3} sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ color: 'text.primary', fontWeight: 600 }}>
            Safety Score
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<RefreshIcon />}
              onClick={() => {/* handle refresh */}}
            >
              Refresh Score
            </Button>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={() => {/* handle download */}}
            >
              Download Report
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {/* Overall Safety Score */}
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 2, textAlign: 'center', py: 3 }}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress
                  variant="determinate"
                  value={safetyMetrics.overallScore}
                  size={120}
                  thickness={4}
                  sx={{ color: 'primary.main' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" color="primary.main">
                    {safetyMetrics.overallScore}%
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Overall Safety Score
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last updated: {safetyMetrics.lastUpdated}
              </Typography>
            </Card>
          </Grid>

          {/* Safety Metrics */}
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Safety Metrics
                </Typography>
                {safetyMetrics.categories.map((category, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography variant="body1">{category.name}</Typography>
                        {category.status === 'warning' && (
                          <Tooltip title="Needs attention">
                            <WarningIcon color="warning" sx={{ fontSize: 18 }} />
                          </Tooltip>
                        )}
                      </Box>
                      <Typography variant="body1" color="primary.main">
                        {category.score}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={category.score}
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        backgroundColor: 'grey.100',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: category.status === 'warning' ? 'warning.main' : 'primary.main'
                        }
                      }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Quiz Performance */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Security Quiz Performance
                </Typography>
                <Box sx={{ textAlign: 'center', my: 3 }}>
                  <Typography variant="h3" color="primary.main" gutterBottom>
                    {quizScores.completedQuizzes}/{quizScores.totalQuizzes}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quizzes Completed
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" gutterBottom>
                  Recent Quiz Scores
                </Typography>
                {quizScores.recentScores.map((quiz, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">{quiz.title}</Typography>
                      <Typography variant="body2" color="primary.main">
                        {quiz.score}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={quiz.score}
                      sx={{ height: 4, borderRadius: 2 }}
                    />
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Vulnerability Report */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6">
                    Vulnerability Report
                  </Typography>
                  <Chip 
                    label={vulnerabilityReport.riskLevel}
                    color="warning"
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Last scan: {vulnerabilityReport.lastScan}
                </Typography>
                {vulnerabilityReport.findings.map((finding, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Box>
                        <Typography variant="subtitle2">
                          {finding.type}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {finding.description}
                        </Typography>
                      </Box>
                      <Chip 
                        label={finding.severity}
                        color={getSeverityColor(finding.severity)}
                        size="small"
                        sx={{ textTransform: 'capitalize' }}
                      />
                    </Box>
                    <Typography variant="body2" color="primary.main" sx={{ mt: 1 }}>
                      Action: {finding.action}
                    </Typography>
                    {index < vulnerabilityReport.findings.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
                <Button
                  fullWidth
                  variant="outlined"
                  color="primary"
                  startIcon={<RefreshIcon />}
                  sx={{ mt: 2 }}
                >
                  Run New Scan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default SafetyScore; 