/* eslint-disable react/prop-types */
import { Box, Typography, Card, CardContent, CardMedia, Chip, Stack, IconButton, Divider } from '@mui/material';
import {
  Bookmark as BookmarkIcon,
  Share as ShareIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';

const ArticleCard = ({ article, featured = false }) => (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => `0 8px 24px ${theme.palette.action.hover}`
        }
      }}
    >
      {featured && (
        <CardMedia
          component="img"
          height="200"
          image={article.image}
          alt={article.title}
        />
      )}
      <CardContent sx={{ flex: 1, p: 3 }}>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
          <Chip 
            label={article.category}
            color="primary"
            size="small"
          />
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            color: 'text.secondary',
            fontSize: '0.875rem'
          }}>
            <TimeIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
            {article.readTime}
          </Box>
        </Stack>

        <Typography variant="h6" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {article.description}
        </Typography>

        <Box sx={{ mt: 'auto' }}>
          <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
            {article.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Typography variant="caption" color="text.secondary">
              {article.date}
            </Typography>
            <Box>
              <IconButton size="small">
                <BookmarkIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <ShareIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
);
  
export default ArticleCard;