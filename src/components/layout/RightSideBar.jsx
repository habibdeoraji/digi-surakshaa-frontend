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
} from '../sidebars';

const RightSideBar = () => {
  const location = useLocation();

  const getSidebarContent = () => {
    const path = location.pathname;

    // Match the current path to the appropriate sidebar
    if (path === '/') {
      return <HomeSidebar />;
    }
    if (path === '/dashboard') {
      return <DashboardSidebar />;
    }
    if (path === '/safety') {
      return <SafetySidebar />;
    }
    if (path === '/community') {
      return <CommunitySidebar />;
    }
    if (path.startsWith('/scam/')) {
      return <ScamDetailsSidebar />;
    }
    if (path === '/safety-score') {
      return <SafetyScoreSidebar />;
    }
    if (path === '/reported-scams') {
      return <ReportedScamsSidebar />;
    }
    if (path === '/saved-scams') {
      return <SavedScamsSidebar />;
    }
    if (path === '/profile') {
      return <ProfileSidebar />;
    }
    if (path === '/settings') {
      return <SettingsSidebar />;
    }
    if (path.startsWith('/resources')) {
      return <ResourcesSidebar />;
    }
    if (path === '/about') {
      return <AboutSidebar />;
    }
    if (path === '/partners') {
      return <PartnersSidebar />;
    }
    if (path === '/report-scam') {
      return <ReportScamSidebar />;
    }
    if (path === '/contact') {
      return <ContactSidebar />;
    }
    if (path === '/educational') {
      return <EducationalSidebar />;
    }

    return null;
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