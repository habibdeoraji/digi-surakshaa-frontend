import { Box, Typography, Stack, Chip, Divider, LinearProgress } from "@mui/material";
import { TrendingUp, Warning } from "@mui/icons-material";

const HomeSidebar = () => {
  const scamStats = [
    {
      title: "Active Scams",
      value: "1,247",
      change: "+32%",
      trend: "up",
      severity: "error"
    },
    {
      title: "Money Lost",
      value: "₹258Cr",
      change: "+18%",
      trend: "up",
      severity: "error"
    },
    {
      title: "Cases Resolved",
      value: "892",
      change: "+45%",
      trend: "up",
      severity: "success"
    }
  ];

  const trendingScams = [
    { 
      title: "KYC Fraud",
      percentage: 27,
      severity: "error",
      reportCount: 156
    },
    { 
      title: "Crypto Scams",
      percentage: 89,
      severity: "error",
      reportCount: 134
    },
    { 
      title: "Job Fraud",
      percentage: 45,
      severity: "warning",
      reportCount: 98
    }
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Scam Statistics */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Warning color="error" />
          <Typography variant="h6">Scam Alert Statistics</Typography>
        </Box>
        <Stack spacing={2}>
          {scamStats.map((stat) => (
            <Box key={stat.title}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color={stat.severity === "error" ? "error" : "success"}
                  sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                  <TrendingUp fontSize="small" />
                  {stat.change}
                </Typography>
              </Box>
              <Typography variant="h5" fontWeight="500">
                {stat.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Trending Scams */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Trending Scams
        </Typography>
        <Stack spacing={2}>
          {trendingScams.map((scam, index) => (
            <Box key={scam.title}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {`${index + 1}. ${scam.title}`}
                </Typography>
                <Chip 
                  label={`${scam.reportCount} reports`}
                  size="small"
                  color={scam.severity}
                  variant="outlined"
                  sx={{ borderRadius: 1 }}
                />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={scam.percentage}
                  color={scam.severity}
                  sx={{ 
                    flexGrow: 1,
                    height: 6,
                    borderRadius: 1,
                    bgcolor: theme => theme.palette[scam.severity].light + '20'
                  }}
                />
                <Typography variant="caption" color={`${scam.severity}.main`}>
                  {scam.percentage}%
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeSidebar; 