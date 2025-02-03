import { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Alert,
  Chip,
  LinearProgress,
  styled,
  alpha,
} from "@mui/material";
import VerificationForm from "../components/verification/VerificationForm";
import VerificationResult from "../components/verification/VerificationResult";
import {
  Security,
  VerifiedUser,
  TrendingUp,
  DataUsage,
} from "@mui/icons-material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  position: "relative",
  overflow: "hidden",
  boxShadow: `0 10px 40px -10px ${alpha(theme.palette.common.black, 0.2)}`,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "6px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  },
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(1),
  },
}));

const StatsChip = styled(Chip)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  fontWeight: 500,
  padding: theme.spacing(0.5),
  height: "auto",
  transition: "all 0.3s ease-in-out",
  cursor: "arrow",
}));

const stats = [
  { icon: <Security />, label: "99.9% Accuracy" },
  { icon: <VerifiedUser />, label: "Trusted by 10K+ Users" },
  { icon: <TrendingUp />, label: "Real-time Updates" },
  { icon: <DataUsage />, label: "Advanced AI" },
];

const ScamVerification = () => {
  const [verificationResult, setVerificationResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleVerification = async (data) => {
    setIsLoading(true);
    setError(null);
    setVerificationResult(null);
    setProgress(0);

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 300);

      // TODO: Replace with actual API call
      const mockApiCall = () =>
        new Promise((resolve) => {
          setTimeout(() => {
            clearInterval(progressInterval);
            setProgress(100);
            resolve({
              isScam: Math.random() > 0.5,
              confidence: Math.floor(Math.random() * 100),
              riskLevel: Math.random() > 0.5 ? "HIGH" : "LOW",
              explanation:
                data.type === "files"
                  ? `Analysis of ${data.content.length} file(s) complete. ${data.content.map((f) => f.name).join(", ")}`
                  : "This is a sample explanation of why this content was flagged.",
              recommendations: [
                "Be cautious with unsolicited messages",
                "Never share sensitive information",
                "Verify sender credentials",
              ],
            });
          }, 3000);
        });

      const result = await mockApiCall();
      setVerificationResult(result);
    } catch (err) {
      setError("Failed to verify content. Please try again.");
      console.error("Verification error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{pt:4}}>
      <Container maxWidth="lg">
        <Box
          sx={{ textAlign: "center", mb: 8, position: "relative", zIndex: 1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 1,
              background: (theme) => `linear-gradient(135deg, 
                ${theme.palette.primary.main}, 
                ${theme.palette.secondary.main}
              )`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              letterSpacing: "-0.02em",
            }}
          >
            Scam Verification
          </Typography>

          <Typography
            variant="h4"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              mb: 3,
              lineHeight: 1.2,
              color: "text.secondary",
              fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
              fontWeight: 500,
            }}
          >
            Protect yourself from scams with our advanced AI-powered
            verification system. Upload files or paste text to instantly check
            for potential threats.
          </Typography>
          <StatsContainer>
            {stats.map((stat, index) => (
              <StatsChip
                key={index}
                icon={stat.icon}
                label={stat.label}
                clickable
              />
            ))}
          </StatsContainer>
        </Box>

        <StyledPaper elevation={0}>
          {error && (
            <Alert
              severity="error"
              sx={{
                mb: 3,
                borderRadius: 2,
                "& .MuiAlert-icon": {
                  fontSize: "1.5rem",
                },
              }}
            >
              {error}
            </Alert>
          )}

          {isLoading && (
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
              >
                <Typography variant="body2" color="text.secondary">
                  Analyzing content...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {progress}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: (theme) =>
                    alpha(theme.palette.primary.main, 0.1),
                }}
              />
            </Box>
          )}

          <VerificationForm
            onSubmit={handleVerification}
            isLoading={isLoading}
          />

          {verificationResult && (
            <Box sx={{ mt: 5 }}>
              <VerificationResult result={verificationResult} />
            </Box>
          )}
        </StyledPaper>

        <Box sx={{ textAlign: "center", mt: 2, color: "text.secondary" }}>
          <Typography variant="body2">
            Powered by advanced AI technology to keep you safe from scams
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ScamVerification;
