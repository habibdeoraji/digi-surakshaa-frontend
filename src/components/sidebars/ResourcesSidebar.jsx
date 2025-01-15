import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Chip } from '@mui/material';
import { 
  Security as SecurityIcon,
  Help as HelpIcon,
  Article as ArticleIcon,
  Info as InfoIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const ResourcesSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const resourceLinks = [
    {
      title: "Safety Guide",
      icon: SecurityIcon,
      path: "/resources/safety",
      description: "Learn about online safety",
      count: 12,
      color: "#2196F3"
    },
    {
      title: "FAQ",
      icon: HelpIcon,
      path: "/resources/faq",
      description: "Common questions answered",
      count: 50,
      color: "#4CAF50"
    },
    {
      title: "Articles & Updates",
      icon: ArticleIcon,
      path: "/resources/articles",
      description: "Latest news and updates",
      count: 28,
      color: "#FF9800"
    },
    {
      title: "Features",
      icon: InfoIcon,
      path: "/resources/features",
      description: "Platform features guide",
      count: 8,
      color: "#9C27B0"
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ px: 2, mb: 3 }}>
        Resource Categories
      </Typography>
      <List sx={{ px: 1 }}>
        {resourceLinks.map((item) => {
          const Icon = item.icon;
          const isSelected = location.pathname === item.path;
          
          return (
            <ListItem 
              key={item.title} 
              disablePadding 
              sx={{ mb: 1 }}
            >
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={isSelected}
                sx={{
                  borderRadius: 2,
                  gap: 1,
                  transition: 'all 0.2s ease',
                  '&.Mui-selected': {
                    bgcolor: `${item.color}15`,
                    '&:hover': {
                      bgcolor: `${item.color}20`,
                    }
                  },
                  '&:hover': {
                    bgcolor: `${item.color}10`,
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Icon sx={{ color: isSelected ? item.color : 'action.active' }} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.title}
                  secondary={item.description}
                  primaryTypographyProps={{
                    fontWeight: isSelected ? 600 : 400,
                    color: isSelected ? item.color : 'text.primary'
                  }}
                  secondaryTypographyProps={{
                    variant: 'caption'
                  }}
                />
                <Chip
                  label={item.count}
                  size="small"
                  sx={{
                    bgcolor: isSelected ? `${item.color}15` : 'action.hover',
                    color: isSelected ? item.color : 'text.secondary',
                    height: 24,
                    '& .MuiChip-label': {
                      px: 1,
                      fontSize: '0.75rem'
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default ResourcesSidebar; 