import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import {
  ReportedScams,
  SafetyScore,
  SavedScams,
  Settings,
  Educational,
  Home,
  ScamDetails,
  Safety,
  Community,
  Resources,
  FaqSection,
  Blog,
  Features,
  Dashboard,
  AboutUs,
  Partners,
  Profile,
  ReportScam,
  Contact,
  NotFound,
  Login,
  Signup,
  ForgotPassword
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scam/:id" element={<ScamDetails />} />
          <Route path="safety" element={<Safety />} />
          <Route path="community" element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          } />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/educational" element={<Educational />} />
          <Route path="resources/faq" element={<FaqSection />} />
          <Route path="resources/blog" element={<Blog />} />
          <Route path="resources/features" element={<Features />} />
          <Route path="dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="about" element={<AboutUs />} />
          <Route path="partners" element={<Partners />} />
          <Route path="profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="report-scam" element={
            <ProtectedRoute>
              <ReportScam />
            </ProtectedRoute>
          } />
          <Route path="contact" element={<Contact />} />
          <Route path="reported-scams" element={
            <ProtectedRoute>
              <ReportedScams />
            </ProtectedRoute>
          } />
          <Route path="saved-scams" element={
            <ProtectedRoute>
              <SavedScams />
            </ProtectedRoute>
          } />
          <Route path="safety-score" element={
            <ProtectedRoute>
              <SafetyScore />
            </ProtectedRoute>
          } />
          <Route path="settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />

        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
