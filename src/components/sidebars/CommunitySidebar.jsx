import { Box, Typography, Avatar, Stack, Chip, Divider } from '@mui/material';

const CommunitySidebar = () => {
  const topContributors = [
    { name: 'John Doe', points: 1250, avatar: '/path/to/avatar1.jpg' },
    { name: 'Jane Smith', points: 980, avatar: '/path/to/avatar2.jpg' },
    { name: 'Mike Johnson', points: 875, avatar: '/path/to/avatar3.jpg' },
  ];

  const activeDiscussions = [
    { topic: 'New Phishing Technique', replies: 23 },
    { topic: 'Crypto Scam Alert', replies: 15 },
    { topic: 'Online Shopping Safety', replies: 8 },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Top Contributors
        </Typography>
        <Stack spacing={2}>
          {topContributors.map((contributor, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 1.5
              }}
            >
              <Avatar src={contributor.avatar} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {contributor.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {contributor.points} points
                </Typography>
              </Box>
              <Chip 
                label={`#${index + 1}`} 
                size="small"
                color="primary"
                variant="outlined"
              />
            </Box>
          ))}
        </Stack>
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box>
        <Typography variant="h6" gutterBottom>
          Active Discussions
        </Typography>
        <Stack spacing={2}>
          {activeDiscussions.map((discussion, index) => (
            <Box 
              key={index}
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 1
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {discussion.topic}
              </Typography>
              <Chip 
                label={`${discussion.replies} replies`}
                size="small"
                color="default"
                variant="outlined"
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default CommunitySidebar; 