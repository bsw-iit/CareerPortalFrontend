import Navbar from "../components/Navbar";
import Hero from "../components/BUILD/Hero_modified";
import BG from "../assets/explore/analytics-home-bg.svg";
import Body from "../components/BUILD/AnalyticsBuildBody.tsx";

export default function AnalyticsBuild() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Analytics" title="Build your career the right way!!" />
      <Body />
    </div>
  );
}