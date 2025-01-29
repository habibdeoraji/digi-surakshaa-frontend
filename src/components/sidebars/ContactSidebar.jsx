import {
  Box,
  Typography,
  Stack,
  IconButton,
  alpha,
  Button,
} from "@mui/material";
import {
  LinkedIn,
  Twitter,
  Instagram,
  Email,
  LocationOn,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ComingSoonBtn from "../ElementaryComponents/ComingSoonBtn";

const SocialButton = styled(IconButton)(({ theme }) => ({
  width: 42,
  height: 42,
  borderRadius: "14px",
  backgroundColor: alpha(theme.palette.primary.main, 0.04),
  color: theme.palette.primary.main,
  transition: "all 0.3s ease-in-out",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
  },
  "& .MuiSvgIcon-root": {
    position: "relative",
    zIndex: 1,
    transition: "all 0.3s ease-in-out",
    fontSize: "1.3rem",
  },
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.2)}`,
    "&::before": {
      opacity: 1,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.common.white,
      transform: "scale(1.2)",
    },
  },
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1, 0),
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
  },
}));

const InfoCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  backgroundColor: alpha(theme.palette.primary.main, 0.05),
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transform: "translateX(8px)",
  },
}));

const ContactSideBar = () => {
  const socialLinks = [
    {
      icon: <LinkedIn />,
      url: "https://www.linkedin.com/company/digi-surakshaa/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter />,
      url: "https://x.com/DigiSurakshaa",
      label: "Twitter",
    },
    {
      icon: <Instagram />,
      url: "https://www.instagram.com/digisurakshaa/",
      label: "Instagram",
    },
  ];

  const contactInfo = [
    {
      icon: <Email />,
      title: "Email Us",
      value: "support@digisurakshaa.com",
    },
    {
      icon: <LocationOn />,
      title: "Visit Us",
      value: "123 Tech Park, Sector 15, Bengaluru",
    },
  ];

  return (
    <Stack spacing={4} sx={{ p: 4, height: "100%", overflow: "hidden" }}>
      {/* Contact Information */}
      <Box>
        <Typography
          variant="subtitle2"
          fontWeight={600}
          sx={{ mb: 2, color: "text.secondary" }}
        >
          Contact Information
        </Typography>
        <Stack spacing={2}>
          {contactInfo.map((info, index) => (
            <InfoCard key={index}>
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  color: "white",
                  display: "flex",
                }}
              >
                {info.icon}
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight={600}>
                  {info.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.value}
                </Typography>
              </Box>
            </InfoCard>
          ))}
        </Stack>
      </Box>

      {/* Updated Social Links Section */}
      <SocialContainer>
        <Typography
          variant="subtitle2"
          fontWeight={600}
          sx={{ mb: 2, color: "text.secondary" }}
        >
          Connect With Us
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{
            "& > a": {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              textDecoration: "none",
            },
          }}
        >
          {socialLinks.map((social, index) => (
            <Box
              key={index}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialButton>{social.icon}</SocialButton>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  transition: "color 0.2s ease-in-out",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {social.label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </SocialContainer>

      {/* Support Card */}
      <Box
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.03),
          border: "1px dashed",
          borderColor: "primary.main",
          mt: "auto !important",
        }}
      >
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          Need More Help?
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ mb: 2 }}
        >
          Our support team is available 24/7 to assist you with any queries.
        </Typography>
        <Button
          variant="contained"
          size="small"
          fullWidth
          sx={{
            bgcolor: "primary.main",
            cursor: "not-allowed",
          }}
        >
          Contact Support
          <ComingSoonBtn customStyles={{ ml: 1 }} />
        </Button>
      </Box>
    </Stack>
  );
};

export default ContactSideBar;
