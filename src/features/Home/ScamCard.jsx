import { Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
import PropTypes from 'prop-types';
const ScamFeedCard = ({ 
    titleKey, 
    descriptionKey,
    severity,
    timestamp,
    sourceKey,
    locationKey,
    media,
    references,
    preventionTips,
    engagementStats
}) => {
  return (
    <Card sx={{ borderRadius: 4, width: '100%' }}>
      {media && (
        <CardMedia
          component="img"
          height="140"
          image={media}
          alt={titleKey}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {titleKey}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descriptionKey}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Severity: {severity}
        </Typography>
        <Typography variant="caption" display="block">
          {new Date(timestamp).toLocaleDateString()}
        </Typography>
        <Typography variant="body2">
          Source: {sourceKey}
        </Typography>
        <Typography variant="body2">
          Location: {locationKey}
        </Typography>
        {preventionTips && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Prevention Tips: {preventionTips}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {references && (
          <Button size="small" href={references} target="_blank">
            Learn More
          </Button>
        )}
        {engagementStats && (
          <Typography variant="caption" sx={{ ml: 'auto' }}>
            👁️ {engagementStats.views} • 💬 {engagementStats.comments}
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};

ScamFeedCard.propTypes = {
  titleKey: PropTypes.string.isRequired,
  descriptionKey: PropTypes.string.isRequired,
  severity: PropTypes.string,
  timestamp: PropTypes.string,
  sourceKey: PropTypes.string,
  locationKey: PropTypes.string,
  media: PropTypes.string,
  references: PropTypes.string,
  preventionTips: PropTypes.string,
  engagementStats: PropTypes.shape({
    views: PropTypes.number,
    comments: PropTypes.number
  })
};

export default ScamFeedCard;