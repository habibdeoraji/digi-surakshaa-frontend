import { Box, Typography, List, ListItem, ListItemText, Chip, Button } from '@mui/material';
import { FilterList as FilterListIcon } from '@mui/icons-material';

const SavedScamsSidebar = () => {
  const categories = [
    { name: 'Investment', count: 12 },
    { name: 'Phishing', count: 8 },
    { name: 'Shopping', count: 5 },
    { name: 'Job Scams', count: 3 },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">
            Categories
          </Typography>
          <Button
            startIcon={<FilterListIcon />}
            size="small"
            sx={{ textTransform: 'none' }}
          >
            Filter
          </Button>
        </Box>
        <List>
          {categories.map((category) => (
            <ListItem key={category.name} sx={{ px: 0 }}>
              <ListItemText primary={category.name} />
              <Chip 
                label={category.count} 
                size="small"
                color="primary"
                variant="outlined"
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default SavedScamsSidebar; 