/* eslint-disable no-unused-vars */
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
  Tooltip
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ReportIcon from '@mui/icons-material/Report';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { useState } from 'react';

const criticalLevelConfig = {
  low: {
    color: '#4CAF50',
    icon: ErrorOutlineIcon,
    label: 'Low Risk'
  },
  medium: {
    color: '#FF9800',
    icon: WarningAmberIcon,
    label: 'Medium Risk'
  },
  high: {
    color: '#f44336',
    icon: ReportProblemIcon,
    label: 'High Risk'
  },
  critical: {
    color: '#b71c1c',
    icon: ReportIcon,
    label: 'Critical Risk'
  }
};

const ScamCard = ({ scam, loading = false }) => {
  const [isBookmarked, setIsBookmarked] = useState(scam.isBookmarked);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  const CriticalIcon = criticalLevelConfig[scam.criticalLevel].icon;

  return (
    <Card elevation={3}>
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="h5">
                {scam.title}
              </Typography>
              <Tooltip title={criticalLevelConfig[scam.criticalLevel].label}>
                <CriticalIcon 
                  sx={{ 
                    color: criticalLevelConfig[scam.criticalLevel].color,
                    fontSize: 24
                  }} 
                />
              </Tooltip>
            </Box>
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
        <Typography variant="body1" sx={{ mt: 2 }}>
          {expanded ? scam.description : `${scam.description.slice(0, 150)}...`}
        </Typography>
        <Button
          size="small"
          variant='text'
          sx={{p:0, mb: 2}}
          onClick={() => setExpanded(!expanded)}
          endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {expanded ? 'Show less' : 'Read more'}
        </Button>

        {/* Tags */}
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

        <Divider />

        {/* Footer Info */}
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
      </Box>
    </Card>
  );
};

export default ScamCard;