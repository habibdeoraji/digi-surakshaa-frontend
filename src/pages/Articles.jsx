import { Box, Typography, Stack, Grid } from '@mui/material';
import {
  TrendingUp as TrendingIcon,
} from '@mui/icons-material';
import ArticleCard from '../features/Articles/ArticleCard';

const Articles = () => {
  const featuredArticles = [
    {
      title: "Latest UPI Scams: How to Protect Yourself",
      description: "Learn about emerging UPI scam patterns and essential safety measures to protect your transactions.",
      image: "/images/articles/upi-scam.jpg",
      category: "Trending",
      readTime: "5 min read",
      date: "Mar 15, 2024",
      tags: ["UPI", "Digital Payments", "Security"]
    },
    {
      title: "The Rise of AI-Powered Scams",
      description: "Artificial Intelligence is being weaponized for scams. Here's what you need to know.",
      image: "/images/articles/ai-scam.jpg",
      category: "Featured",
      readTime: "7 min read",
      date: "Mar 14, 2024",
      tags: ["AI", "Technology", "Threats"]
    }
  ];

  const recentArticles = [
    {
      title: "Cryptocurrency Scams: Red Flags to Watch For",
      description: "Identifying and avoiding common cryptocurrency investment scams.",
      category: "Crypto",
      readTime: "6 min read",
      date: "Mar 13, 2024",
      tags: ["Cryptocurrency", "Investment", "Fraud"]
    },
    {
      title: "Social Media Safety Guide 2024",
      description: "Updated guidelines for protecting your privacy and security on social platforms.",
      category: "Guide",
      readTime: "8 min read",
      date: "Mar 12, 2024",
      tags: ["Social Media", "Privacy", "Security"]
    },
    {
      title: "Job Scams: Protecting Your Career Search",
      description: "How to identify legitimate job offers and avoid employment scams.",
      category: "Employment",
      readTime: "5 min read",
      date: "Mar 11, 2024",
      tags: ["Jobs", "Career", "Fraud"]
    },
    {
      title: "Digital Banking: Security Best Practices",
      description: "Essential tips for secure online and mobile banking.",
      category: "Banking",
      readTime: "7 min read",
      date: "Mar 10, 2024",
      tags: ["Banking", "Security", "Digital"]
    },
    {
      title: "Identity Theft Prevention Guide",
      description: "Comprehensive guide to protecting your personal information online.",
      category: "Guide",
      readTime: "10 min read",
      date: "Mar 9, 2024",
      tags: ["Identity", "Privacy", "Protection"]
    },
    {
      title: "E-commerce Safety: Shop Smart",
      description: "Tips for safe online shopping and avoiding fake websites.",
      category: "Shopping",
      readTime: "6 min read",
      date: "Mar 8, 2024",
      tags: ["Shopping", "E-commerce", "Safety"]
    }
  ];


  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Header */}
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h4" fontWeight="500">
          Articles & Updates
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          Stay informed about the latest scams, security threats, and protection strategies
        </Typography>
      </Stack>

      {/* Featured Articles */}
      <Typography variant="h6" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        <TrendingIcon color="primary" />
        Featured Articles
      </Typography>
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {featuredArticles.map((article, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ArticleCard article={article} featured />
          </Grid>
        ))}
      </Grid>

      {/* Recent Articles */}
      <Typography variant="h6" gutterBottom>
        Recent Articles
      </Typography>
      <Grid container spacing={3}>
        {recentArticles.map((article, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Articles; 