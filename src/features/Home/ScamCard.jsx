/* eslint-disable react/prop-types */
import { 
  Card, 
  Box, 
  Typography, 
  Chip, 
  IconButton, 
  Button,
  Divider,
  Collapse,
  CardMedia,
  MobileStepper,
  Tooltip,
  Skeleton
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ReportIcon from '@mui/icons-material/Report';
import { useState } from 'react';

const criticalLevelColors = {
  low: '#4CAF50',
  medium: '#FF9800',
  high: '#f44336',
  critical: '#b71c1c'
};

const ScamCard = ({ scam, loading = false }) => {
  const [isBookmarked, setIsBookmarked] = useState(scam.isBookmarked);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Mock media data (replace with actual data from scam object)
  const mediaItems = scam.media || [
    {
      type: 'image',
      url: 'https://example.com/scam-screenshot1.jpg',
      caption: 'Fraudulent message screenshot'
    },
    {
      type: 'video',
      url: 'https://example.com/scam-video.mp4',
      thumbnail: 'https://example.com/video-thumbnail.jpg',
      caption: 'How the scam works'
    }
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleShare = (platform) => {
    const shareText = `🚨 Scam Alert: ${scam.title} - ${scam.description}`;
    const shareUrl = window.location.href;

    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: scam.title,
            text: shareText,
            url: shareUrl
          });
        }
    }
    setShowShareOptions(false);
  };

  return (
    <Card 
      elevation={3}
      sx={{ 
        borderLeft: `6px solid ${criticalLevelColors[scam.criticalLevel]}`,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)'
        }
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          {loading ? (
            <Box sx={{ flex: 1 }}>
              <Skeleton variant="text" width="80%" height={40} />
              <Skeleton variant="text" width="40%" />
            </Box>
          ) : (
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" gutterBottom>
                {scam.title}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Chip 
                  icon={<ReportIcon />} 
                  label={`${scam.reportCount} reports`} 
                  size="small" 
                  color="error" 
                  variant="outlined"
                />
                <Chip 
                  label={scam.category} 
                  size="small" 
                  color="primary" 
                  variant="outlined"
                />
              </Box>
            </Box>
          )}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title="Share">
              <IconButton size="small" onClick={() => setShowShareOptions(!showShareOptions)}>
                <ShareIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title={isBookmarked ? "Remove bookmark" : "Bookmark"}>
              <IconButton size="small" onClick={() => setIsBookmarked(!isBookmarked)}>
                {isBookmarked ? <BookmarkIcon fontSize="small" color="primary" /> : <BookmarkBorderIcon fontSize="small" />}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Share Options */}
        <Collapse in={showShareOptions}>
          <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
            {['whatsapp', 'twitter', 'facebook'].map((platform) => (
              <Button 
                key={platform}
                size="small" 
                variant="outlined"
                onClick={() => handleShare(platform)}
                sx={{ 
                  minWidth: 'auto',
                  px: 1,
                  py: 0.5,
                  textTransform: 'capitalize'
                }}
              >
                {platform}
              </Button>
            ))}
          </Box>
        </Collapse>

        {/* Content */}
        {loading ? (
          <Skeleton variant="text" height={100} />
        ) : (
          <>
            <Typography variant="body1" sx={{ my: 2 }}>
              {expanded ? scam.description : `${scam.description.slice(0, 150)}...`}
            </Typography>
            <Button
              size="small"
              onClick={() => setExpanded(!expanded)}
              endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            >
              {expanded ? 'Show less' : 'Read more'}
            </Button>
          </>
        )}

        {/* Media Carousel */}
        {mediaItems && mediaItems.length > 0 && (
          <Box sx={{ position: 'relative', my: 2 }}>
            {loading ? (
              <Skeleton variant="rectangular" height={300} />
            ) : (
              <>
                {mediaItems[activeStep].type === 'video' ? (
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="video"
                      height="300"
                      image={mediaItems[activeStep].url}
                      controls
                      poster={mediaItems[activeStep].thumbnail}
                      sx={{ objectFit: 'cover', borderRadius: 1 }}
                    />
                  </Box>
                ) : (
                  <CardMedia
                    component="img"
                    height="300"
                    image={mediaItems[activeStep].url}
                    alt={mediaItems[activeStep].caption}
                    sx={{ objectFit: 'cover', borderRadius: 1 }}
                  />
                )}
                {mediaItems.length > 1 && (
                  <MobileStepper
                    steps={mediaItems.length}
                    position="static"
                    activeStep={activeStep}
                    sx={{ 
                      background: 'rgba(0,0,0,0.5)',
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      borderRadius: '0 0 8px 8px'
                    }}
                    nextButton={
                      <Button 
                        size="small" 
                        onClick={handleNext} 
                        disabled={activeStep === mediaItems.length - 1}
                        sx={{ color: 'white' }}
                      >
                        Next
                        <KeyboardArrowRight />
                      </Button>
                    }
                    backButton={
                      <Button 
                        size="small" 
                        onClick={handleBack} 
                        disabled={activeStep === 0}
                        sx={{ color: 'white' }}
                      >
                        <KeyboardArrowLeft />
                        Back
                      </Button>
                    }
                  />
                )}
              </>
            )}
          </Box>
        )}

        {/* Tags */}
        {loading ? (
          <Skeleton variant="text" width="60%" />
        ) : (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {scam.tags.map((tag) => (
              <Chip 
                key={tag} 
                label={tag} 
                size="small" 
                variant="outlined"
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Box>
        )}

        <Divider />

        {/* Footer Info */}
        {loading ? (
          <Skeleton variant="text" width="100%" />
        ) : (
          <Box sx={{ mt: 2 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2, 
                color: 'text.secondary',
                mb: 2
              }}
            >
              <Typography variant="body2">📍 {scam.location}</Typography>
              <Typography variant="body2">📅 {new Date(scam.date).toLocaleDateString()}</Typography>
              <Typography variant="body2">💰 Loss: {scam.moneyLost}</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                Source: {scam.source}
              </Typography>
              <Button 
                variant="contained" 
                color="error" 
                size="small"
                startIcon={<ReportIcon />}
              >
                Report Similar Scam
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default ScamCard;