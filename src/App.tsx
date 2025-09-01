import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Landing from "./pages/Landing";
import ExplorePage from "./pages/Explore";
import BuildPage from "./pages/BUILD"; // Placeholder for build pages
import ResourcePage from "./pages/Resource"; 
import NotFound from "./pages/NotFound";
import Footer from './components/Footer';
import CoreExplore from "./pages/CoreExplore";
import AnalyticsExplore from "./pages/AnalyticsExplore";
import CoreBuild from "./pages/CoreBuild";
import AnalyticsBuild from "./pages/AnalyticsBuild";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<Landing />} />
        
        {/* Dynamic Profile Page */}
        <Route path="/explore/core" element={<CoreExplore />} />
        <Route path="/explore/analytics" element={<AnalyticsExplore />} />
        <Route path="/explore/:profileName" element={<ExplorePage />} />
        
        {/* Build Folder Pages */}
        <Route path="/build/core" element={<CoreBuild />} />
        <Route path="/build/analytics" element={<AnalyticsBuild />} />
        <Route path="/build/:profileName" element={<BuildPage />} />
        <Route path="/Resource/:profileName" element={<ResourcePage />} />
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}
