import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Landing from "./pages/Landing";
// import ExplorePage from "./pages/Explore";
// import BuildPage from "./pages/BUILD"; 
// import ResourcePage from "./pages/Resource"; 
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
// import SDEExplore from "./pages/SDEexplore.tsx";
// import QuantExplore from "./pages/Quantexplore.tsx";
// import ConsultExplore from "./pages/ConsultExplore.tsx"

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Default Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Dynamic Explore Pages */}
        {/* <Route path="/explore/sde" element={<SDEExplore />} />
        <Route path="/explore/quant" element={<QuantExplore />} /> */}
        <Route path="/explore/core" element={<CoreExplore />} />
        <Route path="/explore/finance" element={<AnalyticsExplore />} />
        <Route path="/explore/ai-ml" element={<Aiml />} />       
        {/* <Route path="/explore/consult" element={<ConsultExplore />} /> */}


        {/* Dynamic Build Page */}
        <Route path="/BUILD/sde" element={<SDE />} />
        <Route path="/BUILD/quant" element={<Quant />} />
        <Route path="/BUILD/core" element={<CoreBuild />} />
        <Route path="/BUILD/finance" element={<AnalyticsBuild />} />
        <Route path="/BUILD/consult" element={<Consult />} />
        
        {/* Dynamic Resource page */}
        <Route path="/Resource/UPSC" element={<Upsc />} />
        <Route path="/Resource/CAT" element={<Cat />} />
        <Route path="/Resource/Higher_Studies" element={<HigherStudies />} />
        <Route path="/Resource/summer_guide" element={<SummerGuide />} />
               
        {/* <Route path="/explore/:profileName" element={<ExplorePage />} /> */}
        {/* <Route path="/build/:profileName" element={<BuildPage />} /> */}
        {/* <Route path="/Resource/:profileName" element={<ResourcePage />} /> */}

        {/* ALL OTHER CATCH */}
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}
