import { Box, Typography, Card, CardContent, IconButton, Chip, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  Security as SecurityIcon,
  Help as HelpIcon,
  Article as ArticleIcon,
  Info as InfoIcon,
  ArrowForward as ArrowForwardIcon 
} from '@mui/icons-material';

const Resources = () => {
  const navigate = useNavigate();

  const resourceCards = [
    {
      title: "Safety Guide",
      description: "Learn about online safety and protect yourself from scams",
      icon: SecurityIcon,
      path: "/resources/safety",
      color: "#2196F3",
      count: "12 Guides",
      highlights: [
        "Digital Safety Tips",
        "Scam Prevention",
        "Identity Protection",
        "Safe Banking Practices"
      ]
    },
    {
      title: "FAQ",
      description: "Find answers to commonly asked questions about scams and safety",
      icon: HelpIcon,
      path: "/resources/faq",
      color: "#4CAF50",
      count: "50+ Questions",
      highlights: [
        "Common Scams",
        "Recovery Steps",
        "Reporting Guide",
        "Safety Checklist"
      ]
    },
    {
      title: "Articles",
      description: "Stay informed with latest articles and scam alerts",
      icon: ArticleIcon,
      path: "/resources/articles",
      color: "#FF9800",
      count: "28 Articles",
      highlights: [
        "Latest Alerts",
        "Expert Insights",
        "Case Studies",
        "News Updates"
      ]
    },
    {
      title: "Features",
      description: "Explore our platform's features to enhance your safety",
      icon: InfoIcon,
      path: "/resources/features",
      color: "#9C27B0",
      count: "8 Features",
      highlights: [
        "Scam Checker",
        "Risk Assessment",
        "Safety Score",
        "Alert System"
      ]
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h4" fontWeight="500">
          Resources
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          Explore our comprehensive resources designed to help you understand, prevent, and protect against online scams and frauds.
        </Typography>
      </Stack>

      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            lg: 'repeat(2, 1fr)',
          },
          gap: 3
        }}
      >
        {resourceCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card 
              key={card.title}
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => `0 8px 24px ${theme.palette.action.hover}`
                }
              }}
              onClick={() => navigate(card.path)}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                  <Box 
                    sx={{ 
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: `${card.color}15`,
                      mr: 2
                    }}
                  >
                    <Icon sx={{ fontSize: 32, color: card.color }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                      <Typography variant="h6" sx={{ mr: 1 }}>
                        {card.title}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'text.secondary',
                          bgcolor: 'action.hover',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1
                        }}
                      >
                        {card.count}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </Box>
                  <IconButton 
                    size="small"
                    sx={{ 
                      color: card.color,
                      '&:hover': { 
                        bgcolor: `${card.color}15`,
                        transform: 'translateX(2px)'
                      }
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>

                <Box 
                  sx={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    pt: 2,
                    borderTop: '1px solid',
                    borderColor: 'divider'
                  }}
                >
                  {card.highlights.map((highlight, index) => (
                    <Chip
                      key={index}
                      label={highlight}
                      size="small"
                      sx={{
                        bgcolor: `${card.color}08`,
                        color: card.color,
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: `${card.color}30`,
                        '& .MuiChip-label': {
                          px: 1,
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Resources; 