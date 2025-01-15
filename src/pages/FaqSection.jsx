import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Stack, Chip } from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Help as HelpIcon,
} from '@mui/icons-material';
import { useState } from 'react';

const FaqSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqCategories = [
    {
      category: "General",
      questions: [
        {
          q: "What is DigiSuraksha?",
          a: "DigiSuraksha is a comprehensive platform dedicated to protecting users from online scams and frauds through education, awareness, and community support.",
          tag: "About"
        },
        {
          q: "How can I report a scam?",
          a: "You can report a scam by clicking the 'Report Scam' button in the navigation menu. Fill in the details about the scam, and our team will investigate it.",
          tag: "Reporting"
        },
        {
          q: "Is DigiSuraksha service free?",
          a: "Yes, DigiSuraksha is completely free for all users. Our mission is to create a safer digital environment for everyone.",
          tag: "Service"
        },
        {
          q: "How can I contribute to the community?",
          a: "You can contribute by sharing your experiences, reporting scams, participating in discussions, and helping others stay safe online.",
          tag: "Community"
        }
      ]
    },
    {
      category: "Account Security",
      questions: [
        {
          q: "How can I secure my online banking?",
          a: "Enable two-factor authentication, use strong passwords, never share OTPs, and regularly monitor your accounts for suspicious activities.",
          tag: "Security"
        },
        {
          q: "What should I do if I'm scammed?",
          a: "Immediately contact your bank, report to cyber police, and file a complaint on our platform. We'll guide you through the recovery process.",
          tag: "Recovery"
        },
        {
          q: "What makes a strong password?",
          a: "A strong password should be at least 12 characters long, include uppercase and lowercase letters, numbers, and special characters. Avoid using personal information or common words.",
          tag: "Password"
        },
        {
          q: "How often should I change my passwords?",
          a: "It's recommended to change your passwords every 3-6 months, or immediately if you suspect any security breach.",
          tag: "Security"
        }
      ]
    },
    {
      category: "Common Scams",
      questions: [
        {
          q: "What are the most common UPI scams?",
          a: "Common UPI scams include fake KYC updates, remote access fraud, fake customer care numbers, and payment link scams.",
          tag: "UPI"
        },
        {
          q: "How to identify fake job offers?",
          a: "Be wary of jobs requiring upfront payments, promising unrealistic salaries, or requesting sensitive information during early stages.",
          tag: "Employment"
        },
        {
          q: "What are phishing attacks?",
          a: "Phishing attacks are attempts to steal sensitive information by posing as legitimate entities through emails, messages, or fake websites.",
          tag: "Phishing"
        },
        {
          q: "How to spot fake shopping websites?",
          a: "Check for secure HTTPS connection, read reviews, verify contact information, and be cautious of unrealistic discounts or deals.",
          tag: "Shopping"
        }
      ]
    },
    {
      category: "Digital Safety",
      questions: [
        {
          q: "How to protect against identity theft?",
          a: "Regularly monitor your accounts, use strong passwords, enable 2FA, avoid sharing personal information online, and be cautious with documents containing sensitive data.",
          tag: "Identity"
        },
        {
          q: "What is social engineering?",
          a: "Social engineering is the manipulation of people into performing actions or divulging confidential information through psychological manipulation.",
          tag: "Threats"
        },
        {
          q: "How to secure mobile devices?",
          a: "Keep your device updated, use screen locks, install apps only from official stores, avoid public Wi-Fi, and use mobile security apps.",
          tag: "Mobile"
        },
        {
          q: "What is cryptocurrency fraud?",
          a: "Cryptocurrency frauds include fake investment schemes, pump-and-dump schemes, and fake exchanges. Always research thoroughly before investing.",
          tag: "Crypto"
        }
      ]
    },
    {
      category: "Recovery & Support",
      questions: [
        {
          q: "How to track a scam complaint?",
          a: "Log into your DigiSuraksha account, go to 'My Reports' section, and you can view the status and updates of your complaint.",
          tag: "Support"
        },
        {
          q: "What documents are needed for reporting?",
          a: "Keep transaction details, screenshots of communication, bank statements, and any other relevant evidence related to the scam.",
          tag: "Documentation"
        },
        {
          q: "How long does recovery take?",
          a: "Recovery time varies depending on the type of scam and when it's reported. Immediate reporting increases chances of recovery.",
          tag: "Process"
        },
        {
          q: "Is my report information confidential?",
          a: "Yes, all reported information is kept strictly confidential and is only shared with relevant authorities for investigation purposes.",
          tag: "Privacy"
        }
      ]
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header Section */}
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <HelpIcon sx={{ fontSize: 40, color: 'primary.main' }} />
          <Box>
            <Typography variant="h4" fontWeight="500">
              Frequently Asked Questions
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Find answers to common questions about online safety and scam prevention
            </Typography>
          </Box>
        </Box>
      </Stack>

      {/* FAQ Sections */}
      {faqCategories.map((category) => (
        <Box key={category.category} sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ ml: 2 }}>
            {category.category}
          </Typography>
          {category.questions.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `${category.category}-${index}`}
              onChange={handleChange(`${category.category}-${index}`)}
              sx={{
                mb: 1,
                '&:before': { display: 'none' },
                boxShadow: 'none',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '8px !important',
                '&:not(:last-child)': {
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }
                }}
              >
                <Typography>{faq.q}</Typography>
                <Chip 
                  label={faq.tag}
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ ml: 2 }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">
                  {faq.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default FaqSection; 