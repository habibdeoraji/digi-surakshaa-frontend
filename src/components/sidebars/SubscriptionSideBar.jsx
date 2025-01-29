import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Shield,
  Group,
  Security,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const BenefitItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    "& .MuiListItemIcon-root": {
      transform: "scale(1.1)",
    },
  },
}));

const IconWrapper = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 44,
  height: 44,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.light + "20",
  color: theme.palette.primary.main,
  transition: "transform 0.2s ease-in-out",
  "& .MuiSvgIcon-root": {
    fontSize: 24,
  },
}));

const benefits = [
  {
    icon: <Shield />,
    title: "Enhanced Protection",
    description:
      "Get advanced security features and real-time threat monitoring",
  },
  {
    icon: <Security />,
    title: "Security Dashboard",
    description: "Access comprehensive security analytics and insights",
  },
  {
    icon: <Group />,
    title: "Community Access",
    description: "Join our exclusive security community and expert network",
  },
];

const stats = [
  { label: "Active Users", value: "10K+" },
  { label: "Threats Blocked", value: "1M+" },
  { label: "Success Rate", value: "99.9%" },
];

const SubscriptionSideBar = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Premium Benefits
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Upgrade to unlock advanced security features and premium support
      </Typography>

      {/* Quick Stats */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 3,
          mt: 4,
          p: 2,
          bgcolor: "primary.main",
          borderRadius: 2,
          color: "white",
        }}
      >
        {stats.map((stat) => (
          <Box key={stat.label} sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight="bold">
              {stat.value}
            </Typography>
            <Typography variant="caption">{stat.label}</Typography>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Benefits List */}
      <List disablePadding>
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} disableGutters>
            <IconWrapper>{benefit.icon}</IconWrapper>
            <ListItemText
              primary={benefit.title}
              secondary={benefit.description}
              slotProps={{
                primary: {
                  fontWeight: 600,
                  variant: "subtitle2",
                },
                secondary: {
                  variant: "caption",
                },
              }}
              sx={{ ml: 2 }}
            />
          </BenefitItem>
        ))}
      </List>
    </Box>
  );
};

export default SubscriptionSideBar;
