import { 
  Box, 
  Typography, 
  Chip, 
  Button, 
  Stack, 
  Divider, 
  Avatar, 
  Grid,
  TextField,
  IconButton,
  Paper
} from '@mui/material';
import { 
  Warning as WarningIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  AttachMoney as MoneyIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Send as SendIcon,
  PlayCircle as PlayCircleIcon,
  ZoomIn as ZoomInIcon
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ScamDetails = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');

  const scamDetails = {
    id,
    title: "Sophisticated UPI Payment Fraud",
    description: `A new sophisticated UPI payment fraud has been detected where scammers pose as bank officials. They convince victims to install screen sharing apps claiming to help with KYC verification. Once installed, they gain access to the victim's device and perform unauthorized transactions.`,
    criticalLevel: "critical",
    reportCount: 234,
    location: "Mumbai, Maharashtra",
    date: "2024-02-15",
    moneyLost: "₹45,00,000",
    category: "UPI Fraud",
    source: "Cyber Crime Cell",
    tags: ["UPI", "Banking", "KYC", "Remote Access"],
    steps: [
      "Initial contact through SMS claiming KYC expiry",
      "Follow-up call from a spoofed bank number",
      "Request to install remote access apps",
      "Social engineering to gain trust",
      "Multiple small transactions to avoid detection"
    ],
    preventiveMeasures: [
      "Never install remote access apps on request",
      "Bank officials never ask for OTP or PIN",
      "Verify caller's identity through official numbers",
      "Don't click on suspicious links in SMS"
    ],
    comments: [
      {
        id: 1,
        user: {
          name: "Rajesh Kumar",
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
        },
        content: "I encountered a similar scam last week. Thanks for sharing the details.",
        likes: 24,
        date: "2024-02-16"
      },
      {
        id: 2,
        user: {
          name: "Cyber Security Expert",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
          verified: true
        },
        content: "This is a growing concern. Always verify the source before installing any apps.",
        likes: 56,
        date: "2024-02-15"
      }
    ],
    evidence: {
      images: [
        {
          url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
          caption: "Fraudulent SMS Example"
        },
        {
          url: "https://images.unsplash.com/photo-1617791160505-6f00504e3519",
          caption: "Fake Bank Interface"
        },
        {
          url: "https://images.unsplash.com/photo-1590935217281-8f102120d683",
          caption: "Screen Recording App"
        }
      ],
      videos: [
        {
          thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "How the scam operates"
        }
      ]
    }
  };

  const criticalLevelConfig = {
    low: { color: "#4CAF50", label: "Low Risk" },
    medium: { color: "#FF9800", label: "Medium Risk" },
    high: { color: "#f44336", label: "High Risk" },
    critical: { color: "#b71c1c", label: "Critical Risk" }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4, px: 2 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <WarningIcon 
            sx={{ 
              color: criticalLevelConfig[scamDetails.criticalLevel].color,
              fontSize: 32 
            }} 
          />
          <Box>
            <Typography variant="h4" fontWeight="500">
              {scamDetails.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {criticalLevelConfig[scamDetails.criticalLevel].label} • {scamDetails.reportCount} reports
            </Typography>
          </Box>
        </Box>

        <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
          {scamDetails.tags.map(tag => (
            <Chip 
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ borderRadius: 1 }}
            />
          ))}
        </Stack>

        {/* Meta Information */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationIcon color="action" />
              <Typography variant="body2">{scamDetails.location}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarIcon color="action" />
              <Typography variant="body2">
                {new Date(scamDetails.date).toLocaleDateString()}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MoneyIcon color="action" />
              <Typography variant="body2">Loss: {scamDetails.moneyLost}</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Description */}
        <Typography variant="body1" paragraph>
          {scamDetails.description}
        </Typography>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>Evidence Gallery</Typography>
        
        {/* Images */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {scamDetails.evidence.images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  aspectRatio: '16/9',
                  cursor: 'pointer',
                  '&:hover .overlay': {
                    opacity: 1
                  }
                }}
              >
                <Box
                  component="img"
                  src={image.url}
                  alt={image.caption}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.7)',
                    opacity: 0,
                    transition: 'opacity 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2
                  }}
                >
                  <ZoomInIcon sx={{ color: 'white', mb: 1 }} />
                  <Typography 
                    variant="caption" 
                    align="center"
                    sx={{ color: 'white' }}
                  >
                    {image.caption}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Videos */}
        {scamDetails.evidence.videos.map((video, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              aspectRatio: '16/9',
              cursor: 'pointer',
              '&:hover .overlay': {
                bgcolor: 'rgba(0,0,0,0.7)'
              }
            }}
          >
            <Box
              component="img"
              src={video.thumbnail}
              alt={video.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s'
              }}
            >
              <PlayCircleIcon 
                sx={{ 
                  fontSize: 64, 
                  color: 'white',
                  mb: 2 
                }} 
              />
              <Typography 
                variant="subtitle1" 
                sx={{ color: 'white' }}
              >
                {video.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Steps & Prevention */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>How it Works</Typography>
          <Stack spacing={1.5}>
            {scamDetails.steps.map((step, index) => (
              <Box 
                key={index}
                sx={{ 
                  display: 'flex',
                  gap: 2,
                  p: 2,
                  bgcolor: 'background.default',
                  borderRadius: 2
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'primary.main',
                    fontWeight: 600,
                    minWidth: 24 
                  }}
                >
                  {index + 1}.
                </Typography>
                <Typography variant="body2">{step}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Stay Safe</Typography>
          <Stack spacing={1.5}>
            {scamDetails.preventiveMeasures.map((measure, index) => (
              <Box 
                key={index}
                sx={{ 
                  display: 'flex',
                  gap: 2,
                  p: 2,
                  bgcolor: 'error.light',
                  color: 'error.dark',
                  borderRadius: 2
                }}
              >
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    minWidth: 24 
                  }}
                >
                  {index + 1}.
                </Typography>
                <Typography variant="body2">{measure}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      {/* Comments Section */}
      <Box>
        <Typography variant="h6" gutterBottom>Discussion</Typography>
        
        {/* Comment Input */}
        <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
          <Avatar src="https://mui.com/static/images/avatar/2.jpg" />
          <Box sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Share your thoughts or experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              variant="outlined"
              sx={{ mb: 1 }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ 
                borderRadius: 2,
                textTransform: 'none'
              }}
            >
              Comment
            </Button>
          </Box>
        </Box>

        {/* Comments List */}
        <Stack spacing={2}>
          {scamDetails.comments.map((comment) => (
            <Paper 
              key={comment.id}
              elevation={0}
              sx={{ 
                p: 2,
                bgcolor: 'background.default',
                borderRadius: 2
              }}
            >
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Avatar src={comment.user.avatar} />
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                    <Typography variant="subtitle2">
                      {comment.user.name}
                    </Typography>
                    {comment.user.verified && (
                      <Chip 
                        label="Expert" 
                        size="small" 
                        color="primary"
                        sx={{ height: 20 }}
                      />
                    )}
                    <Typography variant="caption" color="text.secondary">
                      • {new Date(comment.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Typography variant="body2" paragraph>
                    {comment.content}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton size="small">
                      <ThumbUpIcon fontSize="small" />
                    </IconButton>
                    <Typography variant="caption">
                      {comment.likes}
                    </Typography>
                    <IconButton size="small">
                      <ThumbDownIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Paper>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ScamDetails; 