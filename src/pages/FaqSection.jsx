import { Box, Typography, Container, Card, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqCategories = [
  {
    title: "General Questions",
    icon: HelpOutlineIcon,
    description: "Basic information about digital security",
  },
  {
    title: "Security Concerns",
    icon: SecurityIcon,
    description: "Common security issues and solutions",
  },
  {
    title: "Payment Safety",
    icon: PaymentIcon,
    description: "Digital payment security guidelines",
  },
];

const faqQuestions = [
  {
    question: "What should I do if I suspect a cyber fraud?",
    answer: "Immediately report to your bank, file a complaint on the National Cyber Crime Portal, and contact our 24/7 helpline for assistance.",
  },
  {
    question: "How can I protect my online banking?",
    answer: "Use strong passwords, enable 2FA, never share OTP/credentials, and regularly monitor your accounts for suspicious activities.",
  },
  {
    question: "What are common KYC fraud signs?",
    answer: "Be wary of unsolicited calls/messages asking to update KYC, requests for personal information, or pressure to install unknown apps.",
  },
  {
    question: "How to verify legitimate payment requests?",
    answer: "Always verify the recipient's details, use official apps, and never click on suspicious payment links.",
  },
];

const FAQ = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Find Answers to Common Digital Security Questions
          </Typography>

          {/* FAQ Categories */}
          <Box 
            sx={{ 
              mb: 8,
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4
            }}
          >
            {faqCategories.map((category, index) => (
              <Paper 
                key={index}
                elevation={0} 
                sx={{ p: 3, textAlign: 'center', bgcolor: 'background.paper', flex: 1 }}
              >
                <category.icon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {category.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* FAQ Accordions */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
              Common Questions
            </Typography>
            {faqQuestions.map((faq, index) => (
              <Accordion key={index} sx={{ mb: 1 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="subtitle1" fontWeight="medium">
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* Contact Section */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h6" gutterBottom>
              Could not find what you are looking for?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Contact our support team for personalized assistance
            </Typography>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default FAQ; 