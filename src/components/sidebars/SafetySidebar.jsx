import { Box, Typography, LinearProgress, Button } from '@mui/material';
import { Lock as LockIcon } from '@mui/icons-material';

const SafetySidebar = () => {
  const securityTasks = [
    { task: 'Enable 2FA', progress: 100, completed: true },
    { task: 'Security Questions', progress: 66, completed: false },
    { task: 'Recovery Email', progress: 33, completed: false },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Security Checklist
        </Typography>
        {securityTasks.map((task, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2">{task.task}</Typography>
              <Typography 
                variant="body2" 
                color={task.completed ? 'success.main' : 'text.secondary'}
              >
                {task.progress}%
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={task.progress}
              color={task.completed ? 'success' : 'primary'}
              sx={{
                height: 6,
                borderRadius: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              }}
            />
          </Box>
        ))}
        <Button
          fullWidth
          variant="outlined"
          startIcon={<LockIcon />}
          sx={{ 
            mt: 2,
            borderRadius: 2,
            textTransform: 'none',
          }}
        >
          Complete Setup
        </Button>
      </Box>
    </Box>
  );
};

export default SafetySidebar; 