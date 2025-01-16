import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
// TODO: Add Auth related routes in the next phase
// import ProtectedRoute from "./components/auth/ProtectedRoute";
import {
  Home,
  ScamDetails,
  Safety,
  Resources,
  FaqSection,
  Features,
  Dashboard,
  AboutUs,
  Partners,
  Contact,
  NotFound,
  // TODO: Add Auth related routes in the next phase
  // Educational,
  // Community,
  // Profile,
  // ReportScam,
  // ReportedScams,
  // SafetyScore,
  // SavedScams,
  // Settings,
  // Login,
  // Signup,
  // ForgotPassword,
} from "./pages";
import Articles from "./pages/Articles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scam/:id" element={<ScamDetails />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/faq" element={<FaqSection />} />
          <Route path="resources/articles" element={<Articles />} />
          <Route path="resources/safety" element={<Safety />} />
          <Route path="resources/features" element={<Features />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="partners" element={<Partners />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />

          {/* TODO: Add Auth related routes in the next phase */}
          {/* <Route path="educational" element={<Educational />} /> */}
          {/* <Route
            path="community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="report-scam"
            element={
              <ProtectedRoute>
                <ReportScam />
              </ProtectedRoute>
            }
          />
          <Route
            path="reported-scams"
            element={
              <ProtectedRoute>
                <ReportedScams />
              </ProtectedRoute>
            }
          />
          <Route
            path="saved-scams"
            element={
              <ProtectedRoute>
                <SavedScams />
              </ProtectedRoute>
            }
          />
          <Route
            path="safety-score"
            element={
              <ProtectedRoute>
                <SafetyScore />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
