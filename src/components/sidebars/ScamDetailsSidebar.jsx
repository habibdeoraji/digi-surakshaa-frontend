import { Box, Typography, Stack, Chip, Button, Divider } from '@mui/material';
import { Warning as WarningIcon, Share as ShareIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ScamDetailsSidebar = () => {
  const navigate = useNavigate();

  const similarScams = [
    {
      id: 1,
      title: "UPI Payment Fraud",
      criticalLevel: "high",
      reportCount: 45,
      date: "2024-02-15"
    },
    {
      id: 2,
      title: "Fake Bank KYC Scam",
      criticalLevel: "critical",
      reportCount: 78,
      date: "2024-02-10"
    },
    {
      id: 3,
      title: "Online Job Fraud",
      criticalLevel: "medium",
      reportCount: 32,
      date: "2024-02-08"
    }
  ];

  const criticalLevelColors = {
    low: "#4CAF50",
    medium: "#FF9800",
    high: "#f44336",
    critical: "#b71c1c"
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Actions
        </Typography>
        <Stack spacing={2}>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            startIcon={<WarningIcon />}
            onClick={() => navigate('/report-scam')}
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              height: 42
            }}
          >
            Report Similar Scam
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<ShareIcon />}
            sx={{ 
              borderRadius: 2,
              textTransform: 'none',
              height: 42
            }}
          >
            Share This Case
          </Button>
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Similar Scams
        </Typography>
        <Stack spacing={2}>
          {similarScams.map((scam) => (
            <Box
              key={scam.id}
              sx={{
                p: 2,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'action.hover'
                }
              }}
              onClick={() => navigate(`/scam/${scam.id}`)}
            >
              <Typography variant="body2" sx={{ fontWeight: 500, mb: 1 }}>
                {scam.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Chip
                  label={`${scam.reportCount} reports`}
                  size="small"
                  sx={{ 
                    bgcolor: criticalLevelColors[scam.criticalLevel] + '10',
                    color: criticalLevelColors[scam.criticalLevel],
                    borderRadius: 1
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  {new Date(scam.date).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ScamDetailsSidebar; 