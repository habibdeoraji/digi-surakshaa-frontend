import { Drawer } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {
  HomeSidebar,
  ScamDetailsSidebar,
  SafetyScoreSidebar,
  ReportedScamsSidebar,
  SavedScamsSidebar,
  ProfileSidebar,
  SettingsSidebar,
  DashboardSidebar,
  SafetySidebar,
  CommunitySidebar,
  ResourcesSidebar,
  AboutSidebar,
  PartnersSidebar,
  ReportScamSidebar,
  ContactSidebar,
  EducationalSidebar,
  SubscriptionSideBar,
} from '../sidebars';
import ScamVerificationSidebar from '../sidebars/ScamVerificationSidebar';

const RightSideBar = () => {
  const location = useLocation();

  const getSidebarContent = () => {
    const path = location.pathname;

    // Use a mapping object to match the current path to the appropriate sidebar
    const sidebarMap = {
      '/': <HomeSidebar />,
      '/dashboard': <DashboardSidebar />,
      '/safety': <SafetySidebar />,
      '/community': <CommunitySidebar />,
      '/safety-score': <SafetyScoreSidebar />,
      '/report-scam': <ReportScamSidebar />,
      '/reported-scams': <ReportedScamsSidebar />,
      '/saved-scams': <SavedScamsSidebar />,
      '/profile': <ProfileSidebar />,
      '/settings': <SettingsSidebar />,
      '/about': <AboutSidebar />,
      '/partners': <PartnersSidebar />,
      '/contact': <ContactSidebar />,
      '/educational': <EducationalSidebar />,
      '/subscription': <SubscriptionSideBar />,
      '/verify': <ScamVerificationSidebar />,
    };

    // Check for paths that start with '/scam/' or '/resources'
    if (path.startsWith('/scam/')) {
      return <ScamDetailsSidebar />;
    }
    if (path.startsWith('/resources')) {
      return <ResourcesSidebar />;
    }

    // Return the corresponding sidebar or null if not found
    return sidebarMap[path] || null;
  };

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
          height: '-webkit-fill-available',
          overflowY: 'auto',
          top: '64px',
          boxShadow: '3px 3px 15px rgba(0, 0, 0, 0.2), -3px -3px 15px rgba(0, 0, 0, 0.2);',
          margin: '20px',
          borderRadius: '20px',
        },
      }}
    >
      {getSidebarContent()}
    </Drawer>
  );
};

export default RightSideBar;