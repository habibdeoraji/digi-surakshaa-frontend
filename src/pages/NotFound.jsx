import { Box, Typography, Button, useTheme, alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { SentimentVeryDissatisfiedIcon } from '../assets/icons';

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        background: `radial-gradient(circle at 50% 50%, 
          ${alpha(theme.palette.primary.main, 0.03)} 0%, 
          ${alpha(theme.palette.background.default, 1)} 100%
        )`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto'
      }}
    >
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            p: { xs: 3, md: 6 },
            borderRadius: 4,
          }}
        >
          {/* Large 404 Background */}
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: { xs: '150px', sm: '200px', md: '250px' },
              fontWeight: 900,
              color: alpha(theme.palette.primary.main, 0.03),
              userSelect: 'none',
              zIndex: 0
            }}
          >
            404
          </Typography>

          {/* Content */}
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <SentimentVeryDissatisfiedIcon 
              sx={{ 
                fontSize: { xs: '4rem', sm: '5rem' },
                color: theme.palette.primary.main,
                mb: 2
              }}
            />
            <Typography 
              variant="h2"
              sx={{ 
                fontSize: { xs: '2rem', sm: '2.5rem' },
                fontWeight: 700,
                color: theme.palette.primary.main,
                mb: 1
              }}
            >
              Oops!
            </Typography>
            <Typography 
              variant="h4"
              sx={{ 
                fontSize: { xs: '1.5rem', sm: '1.75rem' },
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 2
              }}
            >
              Page Not Found
            </Typography>
            <Typography 
              sx={{ 
                color: theme.palette.text.secondary,
                mb: 4,
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              We could not find the page you are looking for. It might have been moved or does not exist.
            </Typography>
            <Box 
              sx={{ 
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <Button
                component={RouterLink}
                to="/"
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  background: `linear-gradient(45deg, 
                    ${theme.palette.primary.main} 30%, 
                    ${theme.palette.primary.light} 90%
                  )`,
                  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.25)}`,
                  '&:hover': {
                    background: `linear-gradient(45deg, 
                      ${theme.palette.primary.dark} 30%, 
                      ${theme.palette.primary.main} 90%
                    )`,
                  }
                }}
              >
                Return Home
              </Button>
              <Button
                component={RouterLink}
                to="/report-scam"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  borderWidth: 2,
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  '&:hover': {
                    borderWidth: 2,
                    background: alpha(theme.palette.primary.main, 0.05)
                  }
                }}
              >
                Report a Scam
              </Button>
            </Box>
          </Box>
        </Box>
    </Box>
  );
};

export default NotFound; 