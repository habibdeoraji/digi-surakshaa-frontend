import { Box, Typography, Stack, Divider, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ScamVerificationSidebar = () => {
  const navigate = useNavigate();

  const recentArticles = [
    {
      title: "How to Spot a Scam: 5 Key Indicators",
      date: "2024-02-20",
      link: "/articles/how-to-spot-a-scam"
    },
    {
      title: "The Rise of Online Scams in 2024",
      date: "2024-02-18",
      link: "/articles/rise-of-online-scams"
    },
    {
      title: "Protecting Yourself from Phishing Attacks",
      date: "2024-02-15",
      link: "/articles/protecting-yourself-from-phishing"
    }
  ];

  const scamStatistics = [
    { label: "Total Scams Reported", value: "12,345" },
    { label: "Scams Resolved", value: "9,876" },
    { label: "Active Investigations", value: "456" },
    { label: "User Reports", value: "1,234" }
  ];

  return (
    <Box sx={{ p: 4, borderRadius: 2}}>
      <Typography variant="h6" gutterBottom>
        Recent Articles
      </Typography>
      <List>
        {recentArticles.map((article, index) => (
          <ListItem button key={index} onClick={() => navigate(article.link)}>
            <ListItemText 
              primary={article.title} 
              secondary={new Date(article.date).toLocaleDateString()} 
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>
        Scam Statistics
      </Typography>
      <Stack spacing={1}>
        {scamStatistics.map((stat, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', p: 1, borderRadius: 1, bgcolor: 'action.hover' }}>
            <Typography variant="body2" color="text.secondary">{stat.label}</Typography>
            <Typography variant="body2" sx={{ fontWeight: 600 }}>{stat.value}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ScamVerificationSidebar;