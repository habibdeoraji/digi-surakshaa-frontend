export const scamData = {
  "meta": {
    "title": "Scam Data in India (2023–2024)",
    "description": "This dataset includes information about various types of scams reported in India, categorized by type, sub-type, location, and aggregated data for visualizations.",
    "data_source": [
      "BusinessWorld",
      "Economic Times",
      "Statista",
      "PWC Reports",
      "Indian Cyber Crime Coordination Centre (I4C)"
    ],
    "last_updated": "2024-12-31"
  },
  "data": {
    "categories": [
      {
        "type": "Digital Scams",
        "description": "Scams involving digital platforms like payments, social media, and phishing.",
        "total_cases": 1130000,
        "total_losses_in_inr": 51709000000,
        "sub_categories": [
          {
            "name": "Payment Scams",
            "cases": 450000,
            "losses_in_inr": 15000000000,
            "description": "Fraudulent transactions via digital payment platforms like UPI and wallets."
          },
          {
            "name": "Phishing Attacks",
            "cases": 300000,
            "losses_in_inr": 10000000000,
            "description": "Fraudulent attempts to steal sensitive information through emails or messages."
          },
          {
            "name": "Social Media Frauds",
            "cases": 150000,
            "losses_in_inr": 5000000000,
            "description": "Frauds conducted via platforms like WhatsApp and Instagram."
          },
          {
            "name": "Identity Theft",
            "cases": 200000,
            "losses_in_inr": 7000000000,
            "description": "Fraud involving misuse of personal identity documents."
          }
        ]
      },
      {
        "type": "Physical Scams",
        "description": "Scams involving direct personal or organizational fraud such as bank fraud and investment scams.",
        "total_cases": 63000,
        "total_losses_in_inr": 139300000000,
        "sub_categories": [
          {
            "name": "Bank Frauds",
            "cases": 40000,
            "losses_in_inr": 90000000000,
            "description": "Frauds involving loans, forged cheques, and unauthorized transactions."
          },
          {
            "name": "Investment Scams",
            "cases": 23000,
            "losses_in_inr": 49300000000,
            "description": "Fake investment schemes leading to monetary losses."
          }
        ]
      }
    ],
    "location_data": [
      {
        "location": "Delhi NCR",
        "scams": [
          {
            "type": "Digital Scams",
            "cases": 15000,
            "losses_in_inr": 3000000000
          },
          {
            "type": "Physical Scams",
            "cases": 5000,
            "losses_in_inr": 1500000000
          }
        ]
      },
      {
        "location": "Mumbai",
        "scams": [
          {
            "type": "Digital Scams",
            "cases": 10000,
            "losses_in_inr": 2500000000
          },
          {
            "type": "Physical Scams",
            "cases": 4000,
            "losses_in_inr": 1300000000
          }
        ]
      },
      {
        "location": "Bengaluru",
        "scams": [
          {
            "type": "Digital Scams",
            "cases": 8000,
            "losses_in_inr": 1800000000
          },
          {
            "type": "Physical Scams",
            "cases": 3000,
            "losses_in_inr": 1000000000
          }
        ]
      },
      {
        "location": "Hyderabad",
        "scams": [
          {
            "type": "Digital Scams",
            "cases": 7500,
            "losses_in_inr": 1500000000
          },
          {
            "type": "Physical Scams",
            "cases": 2500,
            "losses_in_inr": 900000000
          }
        ]
      }
    ]
  },
  "aggregated_data": {
    "total_cases": 1193000,
    "total_losses_in_inr": 191009000000,
    "category_distribution": {
      "Digital Scams": 95,
      "Physical Scams": 5
    },
    "losses_by_category": {
      "Digital Scams": 51709000000,
      "Physical Scams": 139300000000
    }
  }
};

// Utility functions for data formatting
export const formatCurrency = (amount) => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`;
  }
  return `₹${amount.toLocaleString()}`;
};

export const formatNumber = (number) => {
  if (number >= 100000) {
    return `${(number / 100000).toFixed(2)}L`;
  }
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  return number.toLocaleString();
};

// Prepare chart data
export const prepareChartData = () => {
  const pieData = scamData.data.categories[0].sub_categories.map(cat => ({
    id: cat.name,
    label: cat.name,
    value: cat.cases,
    lossAmount: cat.losses_in_inr
  }));

  const locationData = scamData.data.location_data.map(loc => ({
    location: loc.location,
    "Digital Scams": loc.scams[0].cases,
    "Physical Scams": loc.scams[1].cases,
    digitalLosses: loc.scams[0].losses_in_inr,
    physicalLosses: loc.scams[1].losses_in_inr
  }));

  return {
    pieData,
    locationData,
    totalCases: scamData.aggregated_data.total_cases,
    totalLosses: scamData.aggregated_data.total_losses_in_inr
  };
}; 