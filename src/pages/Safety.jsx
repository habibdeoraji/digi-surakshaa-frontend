/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo } from 'react';
import { 
  Card, 
  Typography, 
  Box, 
  Container,
  IconButton,
  Collapse,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  QrCode2,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Shield,
  Smartphone,
  Group,
  Storage,
  Home,
  ShoppingCart,
  EmailOutlined,
  TrendingUp,
  Key,
  Wifi,
  CurrencyBitcoin,
  Work,
  ChildCare,
  VideoCall,
  CreditCard,
  VerifiedUser,
  AirplaneTicket,
  HeartBroken,
  AirplaneTicketOutlined,
  School,
  MedicalServices,
  CarCrashOutlined,
  Handshake,
  FileDownloadOff,
  SupervisorAccount,
  AccountBalanceWalletSharp,
  GppGood,
  Search as SearchIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: theme.spacing(2),
  border: `0.1px solid ${alpha(theme.palette.divider, 0.1)}`,
  boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.08)}`,
  overflow: 'visible',
}));

const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

const IconContainer = styled(Box)(({ theme,color }) => ({
  width: 48,
  height: 48,
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
  backgroundColor: alpha(color, 0.1),
  color: color,
}));

const ContentList = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3, 4),
  backgroundColor: alpha(theme.palette.background.default, 0.5),
}));

const ListItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
  padding: theme.spacing(0.8, 0),
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 88, // Adjust based on your header height
  zIndex: 10,
  padding: theme.spacing(2, 0),
  backgroundColor: theme.palette.background.default,
  backdropFilter: 'blur(8px)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(2),
    backgroundColor: alpha(theme.palette.background.paper, 0.8),
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: alpha(theme.palette.background.paper, 0.95),
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`,
    },
  },
}));

const Safety = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggle = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  const safetyGuidelines = [
    {
        title: 'Online Banking Safety',
        icon: <Home />,
        color: '#4285F4',
        description: 'Essential tips for secure online banking',
        safetyItems: [
            'Never share OTP or PIN with anyone, including bank officials',
            'Use strong, unique passwords for banking accounts',
            'Enable two-factor authentication when available',
            'Avoid accessing banking on public Wi-Fi networks',
            'Regularly monitor your account statements',
            'Verify website security (look for https:// and padlock icon)',
            'Never click on links in unsolicited emails claiming to be from your bank',
            'Keep your banking app and device software updated',
        ],
    },
    {
        title: 'UPI Transaction Safety',
        icon: <QrCode2 />,
        color: '#34A853',
        description: 'Protect yourself during UPI payments',
        safetyItems: [
            'Never share your UPI PIN with anyone',
            'Verify recipient details before making payments',
            'Don\'t scan QR codes from untrusted sources',
            'Be cautious of requests to send money for "verification"',
            'Check transaction amount carefully before confirming',
            'Don\'t install unknown UPI apps',
            'Never share your device screen during transactions',
            'Report suspicious transactions immediately',
        ],
    },
    {
        title: 'Identity Protection',
        icon: <Shield />,
        color: '#FBBC05',
        description: 'Guard your personal information',
        safetyItems: [
            'Keep your Aadhaar and PAN details confidential',
            'Use privacy settings on social media accounts',
            'Don\'t share personal documents on messaging apps',
            'Be cautious when providing KYC information',
            'Regularly check your credit report',
            'Use secure passwords for all accounts',
            'Enable login notifications when available',
            'Be wary of unsolicited calls asking for personal details',
        ],
    },
    {
        title: 'Digital Device Security',
        icon: <Smartphone />,
        color: '#EA4335',
        description: 'Secure your smartphones and computers',
        safetyItems: [
            'Keep your device software and apps updated',
            'Use strong screen locks and biometric security',
            'Install reliable antivirus software',
            'Back up important data regularly',
            'Don\'t install apps from unknown sources',
            'Use app locks for sensitive applications',
            'Enable remote wipe features',
            'Be careful when granting app permissions',
        ],
    },
    {
        title: 'Social Media Safety',
        icon: <Group />,
        color: '#9C27B0',
        description: 'Stay safe on social media platforms',
        safetyItems: [
            'Use strong privacy settings on all social accounts',
            'Be cautious of friend requests from unknown people',
            'Don\'t share personal information publicly',
            'Avoid clicking suspicious links in messages',
            'Be wary of viral challenges and contests',
            'Think twice before sharing location data',
            'Report suspicious or abusive behavior',
            'Regularly review connected apps and permissions',
        ],
    },
    {
        title: 'E-commerce Protection',
        icon: <ShoppingCart />,
        color: '#009688',
        description: 'Shop safely on online platforms',
        safetyItems: [
            'Shop only from verified sellers and platforms',
            'Check seller ratings and customer reviews',
            'Be wary of deals that seem too good to be true',
            'Use secure payment methods only',
            'Never share OTP or CVV during transactions',
            'Keep proof of payment and order details',
            'Check return and refund policies',
            'Avoid clicking on promotional links in emails',
        ],
    },
    {
        title: 'Phishing Prevention',
        icon: <EmailOutlined />,
        color: '#FF5722',
        description: 'Avoid email and message scams',
        safetyItems: [
            'Don\'t click links in unexpected emails',
            'Verify sender email addresses carefully',
            'Be suspicious of urgent or threatening messages',
            'Never download attachments from unknown sources',
            'Check for spelling and grammar errors',
            'Hover over links before clicking',
            'Don\'t trust emails asking for sensitive information',
            'Use email spam filters',
        ],
    },
    {
        title: 'Investment Safety',
        icon: <TrendingUp />,
        color: '#795548',
        description: 'Protect your investments from fraud',
        safetyItems: [
            'Research thoroughly before investing',
            'Be wary of guaranteed high returns',
            'Verify credentials of investment advisors',
            'Don\'t invest based on social media tips',
            'Understand the risks involved',
            'Keep records of all transactions',
            'Use only regulated investment platforms',
            'Avoid pressure tactics and time-sensitive offers',
        ],
    },
    {
        title: 'Password Management',
        icon: <Key />,
        color: '#607D8B',
        description: 'Secure your digital accounts',
        safetyItems: [
            'Use unique passwords for each account',
            'Create strong passwords with mixed characters',
            'Enable two-factor authentication',
            'Use a reliable password manager',
            'Change passwords regularly',
            'Don\'t share passwords across accounts',
            'Avoid using personal info in passwords',
            'Keep recovery options updated',
        ],
    },
    {
        title: 'Public WiFi Security',
        icon: <Wifi />,
        color: '#00BCD4',
        description: 'Stay safe on public networks',
        safetyItems: [
            'Use VPN on public networks',
            'Avoid accessing sensitive accounts',
            'Disable auto-connect to WiFi',
            'Verify network names carefully',
            'Keep WiFi and Bluetooth off when not needed',
            'Use HTTPS websites only',
            'Don\'t share files on public networks',
            'Enable firewall protection',
        ],
    },
    {
        title: 'Cryptocurrency Safety',
        icon: <CurrencyBitcoin />,
        color: '#FF9800',
        description: 'Secure your crypto investments',
        safetyItems: [
            'Use reputable cryptocurrency exchanges only',
            'Enable all available security features',
            'Store large amounts in hardware wallets',
            'Never share your private keys',
            'Be wary of crypto investment schemes',
            'Verify wallet addresses multiple times',
            'Keep backup of recovery phrases offline',
            'Don\'t respond to crypto giveaway offers',
        ],
    },
    {
        title: 'Job Scam Prevention',
        icon: <Work />,
        color: '#3F51B5',
        description: 'Avoid employment fraud',
        safetyItems: [
            'Research companies thoroughly',
            'Never pay for job opportunities',
            'Be suspicious of high salary for minimal work',
            'Verify job postings on official websites',
            'Don\'t share personal documents before verification',
            'Avoid interviews on personal messaging apps',
            'Check company registration details',
            'Be wary of work-from-home schemes',
        ],
    },
    {
        title: 'Child Online Safety',
        icon: <ChildCare />,
        color: '#8BC34A',
        description: 'Protect children in digital space',
        safetyItems: [
            'Set up parental controls',
            'Monitor online activities',
            'Teach about online privacy',
            'Set screen time limits',
            'Use child-safe browsers and apps',
            'Discuss online stranger danger',
            'Keep devices in common areas',
            'Teach responsible social media use',
        ],
    },
    {
        title: 'Video Call Security',
        icon: <VideoCall />,
        color: '#673AB7',
        description: 'Stay safe during video calls',
        safetyItems: [
            'Use password-protected meetings',
            'Don\'t share meeting links publicly',
            'Be careful what you share on screen',
            'Update video call apps regularly',
            'Use virtual backgrounds when needed',
            'Verify participant identities',
            'Don\'t click links in chat windows',
            'Disable unnecessary permissions',
        ],
    },
    {
        title: 'Digital Payment Safety',
        icon: <CreditCard />,
        color: '#E91E63',
        description: 'Secure your digital transactions',
        safetyItems: [
            'Use official payment apps only',
            'Enable transaction notifications',
            'Keep payment apps updated',
            'Don\'t save card details on websites',
            'Check merchant credentials',
            'Avoid payments on public networks',
            'Review transactions regularly',
            'Report unauthorized charges immediately',
        ],
    },
    {
        title: 'Counterfeit Products',
      icon: <VerifiedUser/>,
        color: '#FFC107',
        description: 'Avoid fake products and counterfeits',
        safetyItems: [
            'Be suspicious of heavily discounted luxury items',
            'Buy gold/jewelry only from hallmarked dealers',
            'Check product authenticity certificates',
            'Verify seller credentials and history',
            'Compare prices with official retailers',
            'Look for quality of packaging and labels',
            'Use official brand websites/stores',
            'Report counterfeit sellers to authorities',
        ],
    },
    {
        title: 'Rental Scam Safety',
        icon: <Home />,
        color: '#26A69A',
        description: 'Protect yourself from property frauds',
        safetyItems: [
            'Never pay rent without viewing property',
            'Verify property ownership documents',
            'Avoid cash transactions for deposits',
            'Get proper rental agreements',
            'Be wary of below-market prices',
            'Meet landlords in person',
            'Keep all communication records',
            'Use verified property platforms',
        ],
    },
    {
        title: 'Insurance Fraud Prevention',
        icon: <Shield />,
        color: '#7E57C2',
        description: 'Avoid insurance-related scams',
        safetyItems: [
            'Buy insurance only from licensed agents',
            'Read policy documents carefully',
            'Don\'t sign blank forms',
            'Keep premium payment receipts',
            'Verify agent credentials with insurer',
            'Be wary of too-good-to-be-true benefits',
            'Check policy status regularly',
            'Report suspicious claims activities',
        ],
    },
    {
        title: 'Travel Booking Safety',
        icon: <AirplaneTicket />,
        color: '#26C6DA',
        description: 'Book travel safely and securely',
        safetyItems: [
            'Book through verified travel agencies',
            'Research hotel/airline reviews',
            'Keep booking confirmations',
            'Verify visa processing agencies',
            'Be cautious of last-minute deals',
            'Use secure payment methods',
            'Check cancellation policies',
            'Avoid wire transfers for bookings',
        ],
    },
    {
        title: 'Matrimonial Profile Safety',
        icon: <HeartBroken />,
        color: '#EC407A',
        description: 'Stay safe on matrimonial platforms',
        safetyItems: [
            'Verify profile details thoroughly',
            'Don\'t share personal info initially',
            'Meet in public places first',
            'Be wary of money requests',
            'Keep family involved in process',
            'Report suspicious profiles',
            'Do background verification',
            'Don\'t rush into financial commitments',
        ],
    },
    {
        title: 'Lottery & Prize Scams',
        icon: <AirplaneTicketOutlined />,
        color: '#FF6F00',
        description: 'Avoid fake lottery and prize frauds',
        safetyItems: [
            'Never pay to claim a prize or lottery',
            'Be skeptical of unexpected winnings',
            'Verify lottery/contest authenticity',
            'Don\'t share bank details for prizes',
            'Report suspicious lottery messages',
            'Check official lottery websites',
            'Be wary of foreign lottery claims',
            'Ignore "guaranteed winning" promises',
        ],
    },
    {
        title: 'Educational Scams',
        icon: <School />,
        color: '#1565C0',
        description: 'Protect from fake education offers',
        safetyItems: [
            'Verify institution accreditation',
            'Check course recognition status',
            'Research placement guarantees',
            'Be wary of heavy admission discounts',
            'Verify scholarship requirements',
            'Check university rankings',
            'Read student reviews carefully',
            'Avoid advance fee requirements',
        ],
    },
    {
        title: 'Healthcare Product Safety',
        icon: <MedicalServices />,
        color: '#43A047',
        description: 'Avoid counterfeit medicines and products',
        safetyItems: [
            'Buy medicines from licensed pharmacies',
            'Check product registration numbers',
            'Verify authenticity of health products',
            'Be wary of miracle cure claims',
            'Check expiry dates carefully',
            'Avoid unofficial online pharmacies',
            'Report fake medical products',
            'Don\'t trust unrealistic health claims',
        ],
    },
    {
        title: 'Loan Fraud Prevention',
        icon: <CreditCard />,
        color: '#6D4C41',
        description: 'Protect from loan scams',
        safetyItems: [
            'Verify lender\'s RBI registration',
            'Read loan agreement thoroughly',
            'Don\'t pay processing fees upfront',
            'Check interest rates carefully',
            'Avoid instant loan apps',
            'Keep loan documentation safe',
            'Report unauthorized debits',
            'Be wary of "guaranteed approval"',
        ],
    },
    {
        title: 'Vehicle Purchase Safety',
        icon: <CarCrashOutlined />,
        color: '#546E7A',
        description: 'Safe vehicle buying guidelines',
        safetyItems: [
            'Verify vehicle registration details',
            'Check vehicle history report',
            'Inspect vehicle thoroughly',
            'Verify seller ownership',
            'Use secure payment methods',
            'Get proper sale documents',
            'Check for pending loans/dues',
            'Avoid deals without proper paperwork',
        ],
    },
    {
        title: 'Charity Donation Safety',
        icon: <Handshake />,
        color: '#D81B60',
        description: 'Donate safely to genuine causes',
        safetyItems: [
            'Verify charity registration',
            'Research organization background',
            'Check donation utilization reports',
            'Be wary of emotional pressure',
            'Keep donation receipts',
            'Use official donation channels',
            'Avoid cash donations to strangers',
            'Report fake charity collectors',
        ],
    },
    {
        title: 'Document Safety',
        icon: <FileDownloadOff />,
        color: '#0097A7',
        description: 'Protect important documents',
        safetyItems: [
            'Keep digital copies securely',
            'Never share document photos publicly',
            'Use secure cloud storage',
            'Report lost documents immediately',
            'Shred unnecessary documents',
            'Monitor document misuse',
            'Use watermarks for copies',
            'Keep original documents safe',
        ],
    },
    {
        title: 'Elderly Scam Protection',
        icon: <SupervisorAccount />,
        color: '#8E24AA',
        description: 'Protect seniors from fraud',
        safetyItems: [
            'Monitor elderly\'s financial activities',
            'Educate about common scams',
            'Set up banking alerts',
            'Verify callers claiming to be relatives',
            'Install caller ID systems',
            'Report suspicious activities',
            'Keep emergency contact list',
            'Review financial statements regularly',
        ],
    },
    {
        title: 'Peer Lending Safety',
        icon: <AccountBalanceWalletSharp />,
        color: '#00897B',
        description: 'Safe peer-to-peer transactions',
        safetyItems: [
            'Use verified lending platforms',
            'Document all transactions',
            'Set clear repayment terms',
            'Keep communication records',
            'Avoid lending to strangers',
            'Use digital payment trails',
            'Be wary of urgent requests',
            'Report defaulting borrowers',
        ],
    },
    {
        title: 'Data Recovery Scams',
        icon: <Storage />,
        color: '#5E35B1',
        description: 'Avoid data recovery frauds',
        safetyItems: [
            'Use reputable recovery services',
            'Get written cost estimates',
            'Backup data regularly',
            'Don\'t pay upfront fees',
            'Check service reviews',
            'Keep original damaged device',
            'Get recovery guarantee',
            'Avoid unauthorized repair shops',
        ],
    },
  ];

  const filteredGuidelines = useMemo(() => {
    if (!searchQuery.trim()) return safetyGuidelines;

    const query = searchQuery.toLowerCase();
    return safetyGuidelines.filter(guide =>
      guide.title.toLowerCase().includes(query) ||
      guide.description.toLowerCase().includes(query) ||
      guide.safetyItems.some(item => 
        item.toLowerCase().includes(query)
      )
    );
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setExpandedId(null); // Collapse all cards when searching
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={3}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: (theme) => `linear-gradient(45deg, 
                ${theme.palette.primary.main}, 
                ${theme.palette.primary.light}
              )`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Stay Safe Online
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Protect yourself from scams with our safety guidelines
          </Typography>
        </Box>

        <SearchContainer>
          <StyledTextField
            fullWidth
            placeholder="Search safety guidelines..."
            value={searchQuery}
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </SearchContainer>

        {filteredGuidelines.length === 0 ? (
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 8,
              color: 'text.secondary'
            }}
          >
            <Typography variant="h6">
              {`No guidelines found for ${searchQuery}`}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Try searching with different keywords
            </Typography>
          </Box>
        ) : (
          filteredGuidelines.map((guide, index) => (
            <StyledCard key={index}>
              <CardHeader onClick={() => handleToggle(index)}>
                <IconContainer color={guide.color}>
                  {guide.icon}
                </IconContainer>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {guide.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {guide.description}
                  </Typography>
                </Box>
                <IconButton 
                  sx={{ 
                    transform: expandedId === index ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s',
                  }}
                >
                  {expandedId === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
              </CardHeader>
              
              <Collapse in={expandedId === index}>
                <ContentList>
                  {guide.safetyItems.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>
                      <GppGood
                        sx={{ 
                          color: guide.color,
                          fontSize: 20,
                        }} 
                      />
                      <Typography variant="body2">
                        {item}
                      </Typography>
                    </ListItem>
                  ))}
                </ContentList>
              </Collapse>
            </StyledCard>
          ))
        )}
      </Stack>
    </Container>
  );
};

export default Safety; 