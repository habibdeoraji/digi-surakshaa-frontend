/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { 
  Box, 
  Container, 
  Typography, 
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  useTheme,
  IconButton,
  Tooltip,
  useMediaQuery
} from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { ResponsiveRadar } from '@nivo/radar';
import { useState } from 'react';
import { scamData, prepareChartData, formatCurrency, formatNumber } from '../utils/dashboardData';
import DownloadIcon from '@mui/icons-material/Download';
import InfoIcon from '@mui/icons-material/Info';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TimelineIcon from '@mui/icons-material/Timeline';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [timeRange, setTimeRange] = useState('2023-24');
  const { pieData, locationData, totalCases, totalLosses } = prepareChartData();

  const StatCard = ({ title, value, subtitle, icon, color }) => (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        height: '100%',
        width: isMobile ? '100%' : '40%',
        background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        border: `1px solid ${color}30`,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ mb: 1, color: color }}>
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
        <Box 
          sx={{ 
            p: 1, 
            borderRadius: '50%', 
            bgcolor: `${color}15`,
            color: color 
          }}
        >
          {icon}
        </Box>
      </Box>
    </Paper>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Scam Analytics Dashboard
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: 2
        }}>
          <Box>
            <Typography variant="body1" color="text.secondary">
              Comprehensive analysis of scam patterns and trends in India
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Data Source: {scamData.meta.data_source.join(', ')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last Updated: {scamData.meta.last_updated}
            </Typography>
          </Box>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Time Period</InputLabel>
            <Select
              value={timeRange}
              label="Time Period"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="2023-24">2023-24</MenuItem>
              <MenuItem value="2022-23">2022-23</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Stats Cards */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 3,
          mb: 3 
        }}
      >
          <StatCard
            title="Total Cases"
            value={formatNumber(totalCases)}
            subtitle="Total reported incidents"
            icon={<SecurityIcon fontSize="large" />}
            color={theme.palette.primary.main}
          />
          <StatCard
            title="Total Losses"
            value={formatCurrency(totalLosses)}
            subtitle="Financial impact"
            icon={<TrendingUpIcon fontSize="large" />}
            color={theme.palette.error.main}
          />
          <StatCard
            title="Digital Scams"
            value="95%"
            subtitle="Of total cases"
            icon={<TimelineIcon fontSize="large" />}
            color={theme.palette.success.main}
          />
          <StatCard
            title="High Risk Areas"
            value="4"
            subtitle="Major affected regions"
            icon={<LocationOnIcon fontSize="large" />}
            color={theme.palette.warning.main}
          />
      </Box>

      {/* Charts */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Trend Analysis */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Scam Cases Trend Analysis</Typography>
            <Box>
              <Tooltip title="Download Data">
                <IconButton size="small">
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="More Info">
                <IconButton size="small">
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Box sx={{ height: { xs: 300, sm: 400 } }}>
            <ResponsiveLine
              data={[
                {
                  id: "Digital Scams",
                  data: [
                    { x: "Jan", y: 280000 },
                    { x: "Feb", y: 290000 },
                    { x: "Mar", y: 270000 },
                    { x: "Apr", y: 290000 },
                    { x: "May", y: 310000 },
                    { x: "Jun", y: 300000 }
                  ]
                },
                {
                  id: "Physical Scams",
                  data: [
                    { x: "Jan", y: 15000 },
                    { x: "Feb", y: 16000 },
                    { x: "Mar", y: 15500 },
                    { x: "Apr", y: 16500 },
                    { x: "May", y: 17000 },
                    { x: "Jun", y: 18000 }
                  ]
                }
              ]}
              margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
              xScale={{ type: 'point' }}
              yScale={{ type: 'linear', min: 0, max: 'auto' }}
              curve="monotoneX"
              enableArea={true}
              areaOpacity={0.15}
              enablePoints={true}
              pointSize={8}
              pointColor={{ theme: 'background' }}
              pointBorderWidth={2}
              pointBorderColor={{ from: 'serieColor' }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: 'right',
                  direction: 'column',
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: 'left-to-right',
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: 'circle',
                  symbolBorderColor: 'rgba(0, 0, 0, .5)',
                  effects: [
                    {
                      on: 'hover',
                      style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1
                      }
                    }
                  ]
                }
              ]}
            />
          </Box>
        </Paper>

        {/* Location Distribution */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Location-wise Distribution</Typography>
            <Box>
              <Tooltip title="Download Data">
                <IconButton size="small">
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Box sx={{ height: { xs: 300, sm: 400 } }}>
            <ResponsiveHeatMap
              data={locationData.map(loc => ({
                id: loc.location,
                data: [
                  {
                    x: 'Digital Scams',
                    y: loc['Digital Scams']
                  },
                  {
                    x: 'Physical Scams',
                    y: loc['Physical Scams']
                  }
                ]
              }))}
              margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
              valueFormat=">-.2s"
              axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                legend: '',
                legendOffset: 46
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Location',
                legendPosition: 'middle',
                legendOffset: -70
              }}
              colors={{
                type: 'sequential',
                scheme: 'blues'
              }}
              emptyColor="#eeeeee"
              borderColor={{
                from: 'color',
                modifiers: [['darker', 0.4]]
              }}
              borderWidth={1}
              borderRadius={2}
              enableLabels={true}
              labelTextColor={{
                from: 'color',
                modifiers: [['darker', 2]]
              }}
              annotations={[]}
              theme={{
                background: "transparent",
                textColor: theme.palette.text.primary,
                fontSize: 11,
                grid: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1
                  }
                },
                tooltip: {
                  container: {
                    background: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    fontSize: 12
                  }
                }
              }}
              hoverTarget="cell"
            />
          </Box>
        </Paper>

        {/* Categories Analysis */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Scam Categories Analysis</Typography>
            <Box>
              <Tooltip title="Download Data">
                <IconButton size="small">
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Box sx={{ height: { xs: 300, sm: 400 } }}>
            <ResponsiveRadar
              data={pieData}
              keys={['value']}
              indexBy="label"
              valueFormat=">-.2f"
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              borderColor={{ from: 'color' }}
              gridLabelOffset={36}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              colors={{ scheme: 'nivo' }}
              blendMode="multiply"
              motionConfig="wobbly"
              theme={{
                background: "transparent",
                textColor: theme.palette.text.primary,
                fontSize: 11
              }}
            />
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;