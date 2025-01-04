/* eslint-disable no-unused-vars */
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Link,
  Alert,
  Stepper,
  Step,
  StepLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  InputAdornment,
  IconButton
} from '@mui/material';
import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const steps = ['Verify Account', 'Enter OTP', 'Reset Password'];

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Mock function to check if phone number exists for the email
  const checkPhoneAvailability = (email) => {
    // This should be replaced with actual API call
    return Promise.resolve('+91 98765-43210'); // Return null if no phone exists
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleVerificationMethodChange = (e) => {
    setVerificationMethod(e.target.value);
    setError('');
  };

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleInitiateReset = async () => {
    setLoading(true);
    setError('');

    try {
      if (!validateEmail(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Check if phone number exists for this email
      const phoneNumber = await checkPhoneAvailability(formData.email);
      if (phoneNumber) {
        formData.phone = phoneNumber;
      }

      // Send OTP based on selected method
      // Replace with actual API call
      console.log(`Sending OTP to ${verificationMethod}:`, 
        verificationMethod === 'email' ? formData.email : formData.phone
      );

      setActiveStep(1);
    } catch (err) {
      setError(err.message || 'Failed to initiate password reset');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    setError('');

    try {
      if (formData.otp.length !== 6) {
        throw new Error('Please enter a valid 6-digit OTP');
      }

      // Verify OTP
      // Replace with actual API call
      console.log('Verifying OTP:', formData.otp);

      setActiveStep(2);
    } catch (err) {
      setError(err.message || 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    setLoading(true);
    setError('');

    try {
      if (formData.newPassword.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }
      if (formData.newPassword !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Reset password
      // Replace with actual API call
      console.log('Resetting password');

      // Navigate to login on success
      navigate('/login', { 
        state: { message: 'Password reset successful. Please login with your new password.' }
      });
    } catch (err) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
            />
            {formData.phone && (
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Select verification method:
                </Typography>
                <RadioGroup
                  name="verificationMethod"
                  value={verificationMethod}
                  onChange={handleVerificationMethodChange}
                >
                  <FormControlLabel 
                    value="email" 
                    control={<Radio />} 
                    label={`Email (${formData.email})`}
                  />
                  <FormControlLabel 
                    value="phone" 
                    control={<Radio />} 
                    label={`Phone (${formData.phone})`}
                  />
                </RadioGroup>
              </FormControl>
            )}
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleInitiateReset}
              disabled={loading}
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </Button>
          </>
        );

      case 1:
        return (
          <>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Enter the OTP sent to your {verificationMethod}:
              {verificationMethod === 'email' ? ` ${formData.email}` : ` ${formData.phone}`}
            </Typography>
            <TextField
              fullWidth
              label="Enter OTP"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
              inputProps={{
                maxLength: 6,
                pattern: '[0-9]*'
              }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleVerifyOTP}
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </Button>
          </>
        );

      case 2:
        return (
          <>
            <TextField
              fullWidth
              label="New Password"
              name="newPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.newPassword}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              label="Confirm New Password"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              sx={{ mb: 3 }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleResetPassword}
              disabled={loading}
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </Button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        bgcolor: 'background.default'
      }}
    >
      {/* Left Section - Form */}
      <Box 
        sx={{ 
          flex: { xs: '1', md: '0 0 50%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: { xs: 2, sm: 4, md: 8 }
        }}
      >
        <Box sx={{ maxWidth: 400, mx: 'auto', width: '100%' }}>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
            <Typography variant="h4" gutterBottom>
              Reset Password
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Follow the steps to reset your password
            </Typography>
          </Box>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {renderStepContent()}

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Link 
              component={RouterLink} 
              to="/login"
              variant="body2"
              underline="hover"
            >
              Back to Login
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Right Section - Image/Info */}
      <Box 
        sx={{ 
          flex: '0 0 50%',
          bgcolor: 'primary.light',
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          p: 8,
          position: 'relative'
        }}
      >
        <Box sx={{ maxWidth: 500, color: 'white', position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" gutterBottom>
            Account Recovery
          </Typography>
          <Typography variant="h5" gutterBottom>
            Secure Password Reset Process
          </Typography>
          <Typography variant="body1">
            We take your account security seriously. Follow our secure password 
            reset process to regain access to your account.
          </Typography>
        </Box>
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0,0,0,0.1)',
            backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px'
          }}
        />
      </Box>
    </Box>
  );
};

export default ForgotPassword; 