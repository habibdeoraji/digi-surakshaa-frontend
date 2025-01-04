import { Drawer, Box, Typography, Paper, Chip } from "@mui/material";

// TODO: Add the data from the backend
const cardData = [
    {
      title: "Active Scams",
      value: "1,247",
      subtitle: "+32% Last Week",
      backgroundColor: "#B71C1C",
      textColor: "#FFFFFF",
    },
    {
      title: "Money Lost",
      value: "₹258Cr",
      subtitle: "This Month",
      backgroundColor: "#B71C1C",
      textColor: "#FFFFFF",
    },
    {
      title: "Cases Reported",
      value: "13,892",
      subtitle: "This Year",
      backgroundColor: "#B71C1C",
      textColor: "#FFFFFF",
    },
  ];
  
  const trendingData = [
    { title: "KYC Fraud", percentage: "+127%" },
    { title: "Crypto Scams", percentage: "+89%" },
    { title: "Job Fraud", percentage: "+45%" },
  ];

const RightSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: 'max(240px, 25%)',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 'max(240px, 25%)',
          boxSizing: 'border-box',
          backgroundColor: '#F8F9FA',
          position: 'fixed',
          height: 'calc(100% - 64px)',
          top: '64px',
          boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.2), -3px -3px 15px rgba(0, 0, 0, 0.2);',
          margin: '20px',
          borderRadius: '20px',
        },
      }}
    >
      <Box sx={{ p: 2, overflowY: 'auto' }}>
        {/* Card Data */}
        {cardData.map((card, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              padding: 2,
              marginBottom: 2,
              backgroundColor: theme => theme.palette.warning.dark,
              color: card.textColor,
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle1">{card.title}</Typography>
            <Typography variant="h4" fontWeight="bold">
              {card.value}
            </Typography>
            <Typography variant="body2">{card.subtitle}</Typography>
          </Paper>
        ))}

        {/* Trending Section */}
        <Box>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Trending
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {trendingData.map((trend, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 1,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 2,
                  boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
                }}
              >
                <Typography variant="body1">{`${index + 1}. ${trend.title}`}</Typography>
                <Chip label={trend.percentage} color="error" size="small" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default RightSidebar;