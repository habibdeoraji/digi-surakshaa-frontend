import { Box, Container, Card, TextField, InputAdornment, Chip, IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ScamCard from '../features/Home/ScamCard';
import { useState, useMemo } from 'react';

const MOCK_SCAMS = [
  {
    id: 1,
    title: "New UPI Payment Scam Alert",
    description: "Scammers are sending fake payment requests through UPI apps pretending to be bank officials. They convince users to accept payment requests claiming it's for verification. The scammer typically poses as a bank representative and creates a sense of urgency by stating that your account will be blocked if not verified immediately. They may also share fake ID proofs to gain trust.",
    date: "2024-03-15",
    criticalLevel: "high",
    category: "UPI Fraud",
    location: "Mumbai, Maharashtra",
    tags: ["UPI", "Banking", "Payment", "Mobile Banking"],
    reportCount: 234,
    moneyLost: "₹15,00,000",
    source: "Cyber Cell Mumbai",
    isBookmarked: false,
    status: "active",
    media: [
      {
        type: 'image',
        url: 'https://i.imgur.com/uPI1WTF.jpg',
        caption: 'Fraudulent UPI request screenshot'
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/watch?v=example1',
        thumbnail: 'https://i.imgur.com/vPI2WTF.jpg',
        caption: 'How UPI scams work'
      }
    ]
  },
  {
    id: 2,
    title: "Fake KYC Update Scam",
    description: "Fraudsters are sending SMS claiming KYC expiry of bank accounts. They ask users to download screen sharing apps for updating KYC. Once installed, they gain access to your device and can view your banking activities. They often use names of legitimate banks and may even spoof official phone numbers.",
    date: "2024-03-14",
    criticalLevel: "critical",
    category: "KYC Fraud",
    location: "Delhi NCR",
    tags: ["KYC", "Banking", "Mobile", "Screen Sharing"],
    reportCount: 456,
    moneyLost: "₹25,00,000",
    source: "RBI Alert",
    isBookmarked: true,
    status: "active",
    media: [
      {
        type: 'image',
        url: 'https://i.imgur.com/kPI3WTF.jpg',
        caption: 'Fake KYC SMS screenshot'
      }
    ]
  },
  {
    id: 3,
    title: "Phishing Scam via WhatsApp",
    description: "Scammers are posing as friends or family members and sending fake WhatsApp messages asking for money transfers. They use urgent language and may even share fake bank account details to make the request seem legitimate.",
    date: "2024-03-13",
    criticalLevel: "high",
    category: "Phishing",
    location: "Bangalore, Karnataka",
    tags: ["WhatsApp", "Banking", "Mobile", "Phishing"],
    reportCount: 123,
    moneyLost: "₹5,000",
    source: "Cyber Cell Bangalore",
    isBookmarked: false,
    status: "active",
    media: [
      {
        type: 'image',
        url: 'https://i.imgur.com/pPI4WTF.jpg',
        caption: 'Phishing WhatsApp message screenshot'
      }
    ] 
  },
  {
    id: 4,
    title: "Fake Job Offer Scam",
    description: "Fraudsters impersonate reputable companies and offer high-paying jobs. They ask for personal information and may even request money for processing fees or training. Once they have your details, they can use them for identity theft or other fraudulent activities.",
    date: "2024-03-12",
    criticalLevel: "medium",
    category: "Job Fraud",
    location: "Chennai, Tamil Nadu",
    tags: ["Job", "Employment", "Phishing", "Identity Theft"],
    reportCount: 345,
    moneyLost: "₹10,000",
    source: "Cyber Cell Chennai",
    isBookmarked: false,
    status: "active",
    media: [
      {
        type: 'image',
        url: 'https://i.imgur.com/qPI5WTF.jpg',
        caption: 'Fake job offer screenshot'
      }
    ]  
  },
  {
    id: 5,
    title: "Investment Scam via Email",
    description: "Fraudsters send emails claiming to be from reputable investment firms. They offer high returns on investments and ask for personal information or money to process the investment. Once they have your details, they can use them for identity theft or other fraudulent activities.",
    date: "2024-03-11",
    criticalLevel: "high",
    category: "Investment Scam",
    location: "Hyderabad, Telangana",
    tags: ["Investment", "Email", "Phishing", "Identity Theft"],
    reportCount: 234,
    moneyLost: "₹15,000",
    source: "Cyber Cell Hyderabad",
    isBookmarked: false,
    status: "active",
    media: [
      {
        type: 'image',
        url: 'https://i.imgur.com/rPI6WTF.jpg',
        caption: 'Fake investment email screenshot'
      }
    ] 
  },
  {
    id: 6,
    title: "Credit Card Fraud",
    description: "Fraudsters use stolen credit card information to make purchases or withdraw cash. They may also create fake credit cards and use them for fraudulent transactions.",
    date: "2024-03-10",
    criticalLevel: "medium",
    category: "Credit Card Fraud",
    location: "Kolkata, West Bengal",
    tags: ["Credit Card", "Fraud", "Financial", "Identity Theft"],
    reportCount: 123,
    moneyLost: "₹5,000",
    source: "Cyber Cell Kolkata",
    isBookmarked: false,
    status: "active",
    media: [
      {
        type: 'image',
        url: 'https://i.imgur.com/sPI7WTF.jpg',
        caption: 'Fake credit card screenshot'
      }
    ]
  },
  {
    id: 7,
    title: "Online Shopping Fraud",
    description: "Fraudsters create fake online shopping websites and sell counterfeit products. They may also use stolen credit card information to make purchases.",
    date: "2024-03-09",
    criticalLevel: "high",
    category: "Online Shopping Fraud",
    location: "Pune, Maharashtra",
    tags: ["Online Shopping", "Fraud", "Financial", "Identity Theft"],
    reportCount: 123,
    moneyLost: "₹5,000",
    source: "Cyber Cell Pune",
    isBookmarked: false,
    status: "active",
    media: [
      {
        type: 'image',
        url: 'https://i.imgur.com/tPI8WTF.jpg',
        caption: 'Fake online shopping website screenshot'
      }
    ]
  },
  {
    id: 8,
    title: "Fake Job Offer Scam",
    description: "Fraudsters impersonate reputable companies and offer high-paying jobs. They ask for personal information and may even request money for processing fees or training. Once they have your details, they can use them for identity theft or other fraudulent activities.",
    date: "2024-03-12",
    criticalLevel: "medium",
    category: "Job Fraud",
    location: "Chennai, Tamil Nadu",
    tags: ["Job", "Employment", "Phishing", "Identity Theft"],
    reportCount: 345,
    moneyLost: "₹10,000",
    source: "Cyber Cell Chennai",
    isBookmarked: false,
    status: "active",
    media: [
      {
        type: 'image',
        url: 'https://i.imgur.com/qPI5WTF.jpg',
        caption: 'Fake job offer screenshot'
      }
    ]
  }
];

const FILTERS = {
  criticalLevel: ["low", "medium", "high", "critical"],
  category: ["UPI Fraud", "KYC Fraud", "Credit Card Fraud", "Job Fraud", "Investment Scam"],
  status: ["active", "resolved", "investigating"]
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    criticalLevel: [],
    category: [],
    status: []
  });
  const [showFilters, setShowFilters] = useState(false);

  // Filter and search logic
  const filteredScams = useMemo(() => {
    return MOCK_SCAMS.filter(scam => {
      // Search term filter
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === '' || 
        scam.title.toLowerCase().includes(searchLower) ||
        scam.description.toLowerCase().includes(searchLower) ||
        scam.location.toLowerCase().includes(searchLower) ||
        scam.tags.some(tag => tag.toLowerCase().includes(searchLower));

      // Selected filters
      const matchesCriticalLevel = selectedFilters.criticalLevel.length === 0 || 
        selectedFilters.criticalLevel.includes(scam.criticalLevel);
      
      const matchesCategory = selectedFilters.category.length === 0 || 
        selectedFilters.category.includes(scam.category);
      
      const matchesStatus = selectedFilters.status.length === 0 || 
        selectedFilters.status.includes(scam.status);

      return matchesSearch && matchesCriticalLevel && matchesCategory && matchesStatus;
    });
  }, [searchTerm, selectedFilters]);

  const handleFilterChange = (filterType, option) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(option)
        ? prev[filterType].filter(item => item !== option)
        : [...prev[filterType], option]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      criticalLevel: [],
      category: [],
      status: []
    });
    setSearchTerm('');
  };

  return (
    <Container>
      {/* Fixed Search and Filter Section */}
      <Card 
        elevation={3}
        sx={{
          position: 'sticky',
          top: 88,
          zIndex: 10,
          mb: 3,
          p: 2
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: showFilters ? 2 : 0 }}>
          <TextField
            fullWidth
            placeholder="Search scams by title, location, tags, or description..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <IconButton 
            onClick={() => setShowFilters(!showFilters)}
            color={showFilters ? "primary" : "default"}
          >
            <FilterListIcon />
          </IconButton>
        </Box>

        {/* Filter Section */}
        {showFilters && (
          <Box sx={{ mt: 2 }}>
            {Object.entries(FILTERS).map(([filterType, options]) => (
              <Box key={filterType} sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, textTransform: 'capitalize' }}>
                  {filterType.replace(/([A-Z])/g, ' $1').trim()}:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {options.map((option) => (
                    <Chip
                      key={option}
                      label={option}
                      clickable
                      color={selectedFilters[filterType].includes(option) ? "primary" : "default"}
                      onClick={() => handleFilterChange(filterType, option)}
                      sx={{ textTransform: 'capitalize' }}
                    />
                  ))}
                </Box>
              </Box>
            ))}
            {(searchTerm || Object.values(selectedFilters).some(arr => arr.length > 0)) && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  {filteredScams.length} results found
                </Typography>
                <Chip
                  label="Clear All Filters"
                  onClick={clearFilters}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              </Box>
            )}
          </Box>
        )}
      </Card>

      {/* Scam Feed */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {filteredScams.length > 0 ? (
          filteredScams.map((scam) => (
            <ScamCard key={scam.id} scam={scam} />
          ))
        ) : (
          <Card sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No results found
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try adjusting your search or filters to find what you are looking for.
            </Typography>
          </Card>
        )}
      </Box>
    </Container>
  );
};

export default Home;