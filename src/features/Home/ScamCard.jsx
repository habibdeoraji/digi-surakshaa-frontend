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
  Tooltip,
  useTheme,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ReportIcon from "@mui/icons-material/Report";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

// Updated color configuration for different risk levels
const criticalLevelConfig = {
  low: {
    color: "#4CAF50",
    bgColor: "#E8F5E9",
    borderColor: "#A5D6A7",
    icon: ErrorOutlineIcon,
    label: "Low Risk",
  },
  medium: {
    color: "#FF9800",
    bgColor: "#FFF3E0",
    borderColor: "#FFB74D",
    icon: WarningAmberIcon,
    label: "Medium Risk",
  },
  high: {
    color: "#F44336",
    bgColor: "#FFEBEE",
    borderColor: "#EF9A9A",
    icon: ReportProblemIcon,
    label: "High Risk",
  },
  critical: {
    color: "#D32F2F",
    bgColor: "#FFCDD2",
    borderColor: "#E57373",
    icon: ReportIcon,
    label: "Critical Risk",
  },
};

const ScamCard = ({ scam, loading = false }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [isBookmarked, setIsBookmarked] = useState(scam.isBookmarked);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const levelConfig = criticalLevelConfig[scam.criticalLevel];
  const CriticalIcon = levelConfig.icon;

  const handleShare = (platform) => {
    const shareText = `🚨 Scam Alert: ${scam.title} - ${scam.description}`;
    const shareUrl = window.location.href;

    switch (platform) {
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        );
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: scam.title,
            text: shareText,
            url: shareUrl,
          });
        }
    }
    setShowShareOptions(false);
  };

  const handleViewDetails = () => {
    navigate(`/scam/${scam.id}`);
  };

  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          borderColor: levelConfig.borderColor,
        },
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Chip
            icon={<CriticalIcon />}
            label={levelConfig.label}
            size="small"
            sx={{
              bgcolor: levelConfig.bgColor,
              color: levelConfig.color,
              borderRadius: 1,
              '& .MuiChip-icon': {
                color: 'inherit',
              },
              fontWeight: 500,
            }}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              size="small"
              onClick={() => setShowShareOptions(!showShareOptions)}
              sx={{
                color: 'action.active',
                '&:hover': {
                  bgcolor: `${theme.palette.primary.main}15`,
                  color: theme.palette.primary.main,
                },
              }}
            >
              <ShareIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => setIsBookmarked(!isBookmarked)}
              sx={{
                color: isBookmarked ? 'primary.main' : 'action.active',
                '&:hover': {
                  bgcolor: `${theme.palette.primary.main}15`,
                  color: theme.palette.primary.main,
                },
              }}
            >
              {isBookmarked ? (
                <BookmarkIcon fontSize="small" />
              ) : (
                <BookmarkBorderIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Box>

        {/* Title */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {scam.title}
        </Typography>

        {/* Share Options */}
        <Collapse in={showShareOptions}>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            {['whatsapp', 'twitter', 'facebook'].map((platform) => (
              <Button
                key={platform}
                size="small"
                variant="outlined"
                onClick={() => handleShare(platform)}
                sx={{
                  borderRadius: 1,
                  textTransform: 'capitalize',
                  borderColor: 'divider',
                  px: 2,
                }}
              >
                {platform}
              </Button>
            ))}
          </Box>
        </Collapse>

        {/* Description */}
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            mb: 2,
            lineHeight: 1.6
          }}
        >
          {expanded ? scam.description : `${scam.description.slice(0, 150)}...`}
        </Typography>

        <Button
          size="small"
          sx={{
            p: 0,
            mb: 2,
            color: theme.palette.primary.main,
            '&:hover': {
              bgcolor: 'transparent',
              color: theme.palette.primary.dark,
            },
          }}
          onClick={() => setExpanded(!expanded)}
          endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {expanded ? "Show less" : "Read more"}
        </Button>

        {/* Tags */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
          {scam.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                borderRadius: 1,
                bgcolor: `${theme.palette.primary.main}08`,
                color: theme.palette.primary.main,
                border: '1px solid',
                borderColor: `${theme.palette.primary.main}20`,
              }}
            />
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Footer */}
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              color: "text.secondary",
              mb: 2,
            }}
          >
            <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              📍 {scam.location}
            </Typography>
            <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              📅 {new Date(scam.date).toLocaleDateString()}
            </Typography>
            <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              💰 Loss: {scam.moneyLost}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              Source: {scam.source}
            </Typography>
            <Button
              variant="contained"
              size="small"
              endIcon={<ArrowForwardIcon />}
              onClick={handleViewDetails}
              sx={{
                borderRadius: 1,
                textTransform: 'none',
                boxShadow: 'none',
                bgcolor: levelConfig.bgColor,
                color: levelConfig.color,
                border: '1px solid',
                borderColor: levelConfig.borderColor,
                '&:hover': {
                  bgcolor: levelConfig.bgColor,
                  opacity: 0.9,
                  boxShadow: 'none',
                },
              }}
            >
              View Details
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ScamCard;
