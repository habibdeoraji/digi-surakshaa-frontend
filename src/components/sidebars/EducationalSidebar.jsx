import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Chip, Divider } from '@mui/material';
import { 
  School as SchoolIcon,
  OndemandVideo as VideoIcon,
  Quiz as QuizIcon,
  MenuBook as CourseIcon,
} from '@mui/icons-material';

const EducationalSidebar = () => {
  const educationalContent = [
    {
      title: "Learning Paths",
      icon: SchoolIcon,
      description: "Structured learning journeys",
      count: 4,
      color: "#1E88E5"
    },
    {
      title: "Video Tutorials",
      icon: VideoIcon,
      description: "Step-by-step video guides",
      count: 16,
      color: "#E53935"
    },
    {
      title: "Interactive Quizzes",
      icon: QuizIcon,
      description: "Test your knowledge",
      count: 8,
      color: "#43A047"
    },
    {
      title: "Courses",
      icon: CourseIcon,
      description: "Comprehensive courses",
      count: 6,
      color: "#FB8C00"
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom sx={{ px: 2, mb: 3 }}>
        Educational Resources
      </Typography>
      
      <List sx={{ px: 1 }}>
        {educationalContent.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem 
              key={item.title} 
              sx={{ 
                mb: 2,
                p: 2,
                bgcolor: `${item.color}08`,
                borderRadius: 2,
                border: '1px solid',
                borderColor: `${item.color}20`,
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <Icon sx={{ color: item.color }} />
              </ListItemIcon>
              <ListItemText 
                primary={item.title}
                secondary={item.description}
                primaryTypographyProps={{
                  fontWeight: 500,
                  color: item.color
                }}
              />
              <Chip
                label={`${item.count} Items`}
                size="small"
                sx={{
                  bgcolor: `${item.color}15`,
                  color: item.color,
                  height: 24,
                  '& .MuiChip-label': {
                    px: 1,
                    fontSize: '0.75rem'
                  }
                }}
              />
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ my: 3 }} />

      {/* Progress Summary */}
      <Box sx={{ mt: 4, px: 2 }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            mb: 2,
            color: 'text.secondary',
            fontWeight: 500
          }}
        >
          Your Progress
        </Typography>
        <Box 
          sx={{ 
            p: 2, 
            bgcolor: 'background.default',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography variant="h3" sx={{ color: 'primary.main', mb: 1 }}>
            32%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Complete more courses to improve your safety knowledge
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EducationalSidebar; 