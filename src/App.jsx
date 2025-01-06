import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Safety from './pages/Safety';
import Community from './pages/Community';
import Resources from './pages/Resources';
import Educational from './pages/Educational';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import Features from './pages/Features';
import AboutUs from './pages/AboutUs';
import Partners from './pages/Partners';
import Profile from './pages/Profile';
import ReportScam from './pages/ReportScam';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="safety" element={<Safety />} />
          <Route path="community" element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          } />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/educational" element={<Educational />} />
          <Route path="resources/faq" element={<FAQ />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
