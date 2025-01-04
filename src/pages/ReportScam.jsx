import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  TextField, 
  Button, 
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

const scamTypes = [
  "KYC Fraud",
  "UPI Scam",
  "Credit Card Fraud",
  "Job Fraud",
  "Investment Scam",
  "Online Shopping Fraud",
  "Lottery Scam",
  "Other"
];

const ReportScam = () => {
  return (
    <Container>
      <Card elevation={3}>
        <Box sx={{ py: 6, px: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
            Report a Scam
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6 }} color="text.secondary">
            Help Us Fight Cyber Crime by Reporting Incidents
          </Typography>

          <Alert severity="warning" sx={{ mb: 4 }}>
            If you have lost money, immediately contact your bank and file an FIR at your local police station.
          </Alert>

          {/* Report Form */}
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Type of Scam</InputLabel>
                    <Select label="Type of Scam">
                      {scamTypes.map((type) => (
                        <MenuItem key={type} value={type}>{type}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    required
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Date of Incident"
                    type="date"
                    required
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Amount Lost (if applicable)"
                    type="number"
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Detailed Description of the Incident"
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    placeholder="Please provide as much detail as possible including any phone numbers, account numbers, or websites involved"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Evidence (URLs, Screenshots, etc.)"
                    multiline
                    rows={2}
                    variant="outlined"
                    placeholder="Provide links to screenshots or any evidence you have"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    sx={{ py: 1.5 }}
                    startIcon={<WarningIcon />}
                  >
                    Submit Report
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

export default ReportScam; 