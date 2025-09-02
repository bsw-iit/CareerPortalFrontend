import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Landing from "./pages/Landing";
import ExplorePage from "./pages/Explore";
import BuildPage from "./pages/BUILD"; // Placeholder for build pages
import ResourcePage from "./pages/Resource"; 
import NotFound from "./pages/NotFound";
import Footer from './components/Footer';
import HigherStudies from "./pages/HigherStudies.tsx"; 
import SummerGuide from "./pages/SummerGuide.tsx";
import Aiml from "./pages/aiml.tsx";
import Consult from "./pages/consult.tsx";
import Cat from "./pages/cat.tsx";
import Upsc from "./pages/upsc.tsx";
import CoreExplore from "./pages/CoreExplore";
import AnalyticsExplore from "./pages/AnalyticsExplore";
import CoreBuild from "./pages/CoreBuild";
import AnalyticsBuild from "./pages/AnalyticsBuild";
import SDE from "./pages/SDE";
import Quant from "./pages/quant";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<Landing />} />
        
        {/* Dynamic Profile Page */}
        <Route path="/higher-studies" element={<HigherStudies />} />
        <Route path="/summer-guide" element={<SummerGuide />} />
        <Route path="/aiml" element={<Aiml />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/cat" element={<Cat />} />
        <Route path="/upsc" element={<Upsc />} />
        <Route path="/sde" element={<SDE />} />
        <Route path="/quant" element={<Quant />} />
        <Route path="/coreExplore" element={<CoreExplore />} />
        <Route path="/coreBuild" element={<CoreBuild />} />
        <Route path="/analyticsExplore" element={<AnalyticsExplore />} />
        <Route path="/analyticsBuild" element={<AnalyticsBuild />} />
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
