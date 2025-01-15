import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { School, Article, Help, Info } from '@mui/icons-material';

const ResourcesSidebar = () => {
  const resourceStats = [
    { 
      icon: School,
      title: 'Educational Resources',
      count: 45,
      label: 'Available Courses'
    },
    { 
      icon: Article,
      title: 'Blog Posts',
      count: 128,
      label: 'Articles'
    },
    { 
      icon: Help,
      title: 'FAQ',
      count: 56,
      label: 'Questions'
    },
    { 
      icon: Info,
      title: 'Features',
      count: 24,
      label: 'Available'
    }
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Resource Overview
        </Typography>
        <List sx={{ py: 1 }}>
          {resourceStats.map((item, index) => (
            <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <item.icon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary={item.title}
                secondary={item.label}
                primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500
                }}
                secondaryTypographyProps={{
                  variant: 'caption'
                }}
              />
              <Chip 
                label={item.count}
                color="primary"
                size="small"
                variant="outlined"
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ResourcesSidebar; 