import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import { CheckCircle, ExpandMore, Support } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const StyledPriceCard = styled(Card)(({ theme, featured }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  transition: "all 0.3s ease-in-out",
  background: featured
    ? `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.paper} 100%)`
    : theme.palette.background.paper,
  border: featured
    ? `2px solid ${theme.palette.primary.main}`
    : "1px solid rgba(0, 0, 0, 0.12)",
  boxShadow: featured ? `0 8px 32px rgba(43, 76, 126, 0.15)` : theme.shadows[2],
  ...(featured && {
    transform: "scale(1.05)",
  }),
  "&:hover": {
    transform: featured ? "scale(1.08)" : "scale(1.03)",
    boxShadow: `0 12px 40px rgba(43, 76, 126, ${featured ? "0.25" : "0.15"})`,
  },
}));

const faqs = [
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes basic cyber threat alerts, limited access to our knowledge base, and community forum access. It's perfect for individuals starting their cybersecurity journey.",
  },
  {
    question: "How does the Pro plan differ from the Free plan?",
    answer:
      "The Pro plan offers priority alerts, unlimited access to all articles, premium community features, and dedicated support. You'll also receive detailed monthly security reports and personalized recommendations.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your billing cycle.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Free users get email support with 48-hour response time. Pro users enjoy priority email and chat support with 4-hour response time. Enterprise clients get dedicated support teams available 24/7.",
  },
];

const plans = [
  {
    title: "Free",
    price: "₹0",
    period: "/month",
    features: [
      "Basic cyber threat alerts",
      "Limited article access",
      "Community forum access",
      "Email support (48h response)",
      "Basic security tips",
      "Monthly newsletter",
    ],
    buttonText: "Current Plan",
    featured: false,
    disabled: true,
    tag: "Get Started",
  },
  {
    title: "Pro",
    price: "₹299",
    period: "/month",
    features: [
      "All Free features",
      "Priority cyber threat alerts",
      "Unlimited article access",
      "Premium community features",
      "Priority support (4h response)",
      "Monthly security reports",
      "Personalized security dashboard",
      "Advanced security training",
    ],
    buttonText: "Coming Soon",
    featured: true,
    disabled: true,
    tag: "Most Popular",
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "All Pro features",
      "Custom security solutions",
      "Dedicated support team",
      "API access",
      "Custom reporting",
      "Team management",
      "24/7 priority support",
      "Custom integration options",
      "Compliance management",
    ],
    buttonText: "Contact Sales",
    featured: false,
    disabled: false,
    tag: "Ultimate Security",
  },
];

const SubscriptionPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Chip
          label="Subscription Plans"
          color="primary"
          sx={{ mb: 2, px: 2, py: 0.5, fontSize: "0.9rem" }}
        />
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          Choose the Perfect Plan for Your Security Needs
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ mb: 8, maxWidth: "800px", mx: "auto" }}
        >
          Enhance your digital security with our comprehensive protection plans.
          From basic security features to enterprise-grade solutions, we&apos;ve
          got you covered.
        </Typography>

        {/* Pricing Cards - Using Stack instead of Grid */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="stretch"
          sx={{ mb: 4 }}
        >
          {plans.map((plan) => (
            <Box
              key={plan.title}
              sx={{
                flex: 1,
                minWidth: 0, // Prevents flex items from overflowing
                width: "100%",
              }}
            >
              <StyledPriceCard featured={plan.featured}>
                {plan.tag && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: plan.featured ? "primary.main" : "grey.700",
                      color: "white",
                      px: 2,
                      py: 0.5,
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "bold",
                    }}
                  >
                    {plan.tag}
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    fontWeight="bold"
                  >
                    {plan.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "baseline", mb: 3 }}>
                    <Typography variant="h3" component="span" fontWeight="bold">
                      {plan.price}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      {plan.period}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 2 }} />
                  <List>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} disableGutters sx={{ py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircle
                            color={plan.featured ? "primary" : "action"}
                            fontSize="small"
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          slotProps={{
                            primary: {
                              variant: "body2",
                              fontWeight: 500,
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Box sx={{ p: 4, pt: 0 }}>
                  <Button
                    variant={plan.featured ? "contained" : "outlined"}
                    color="primary"
                    fullWidth
                    disabled={plan.disabled}
                    size="large"
                    sx={{
                      py: 1.5,
                      ...(plan.featured && {
                        background: (theme) =>
                          `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                      }),
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </Box>
              </StyledPriceCard>
            </Box>
          ))}
        </Stack>

        {/* FAQ Section */}
        <Box sx={{ mt: 12, mb: 6, textAlign: "left" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ mb: 4, textAlign: "center" }}
          >
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle1" fontWeight="500">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            mb: 4,
            p: 6,
            borderRadius: 4,
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.main}22 0%, ${theme.palette.primary.light}22 100%)`,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Need Help Choosing?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Our security experts are here to help you find the perfect plan for
            your needs.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Support />}
            sx={{
              px: 4,
              py: 1.5,
              background: (theme) =>
                `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            }}
          >
            Contact Support
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SubscriptionPage;
