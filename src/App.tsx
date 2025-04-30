import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Landing from "./pages/Landing";
import ExplorePage from "./pages/Explore";
import BuildPage from "./pages/BUILD"; // Placeholder for build pages
import ResourcePage from "./pages/Resource"; 

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<Landing />} />
        
        {/* Dynamic Profile Page */}
        <Route path="/explore/:profileName" element={<ExplorePage />} />
        
        {/* Build Folder Pages */}
        <Route path="/build/:profileName" element={<BuildPage />} />
        <Route path="/Resource/:profileName" element={<ResourcePage />} />
        
      </Routes>
    </Router>
  );
}
