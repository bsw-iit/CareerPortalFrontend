import Navbar from "../components/Navbar";
import Hero from "../components/BUILD/Hero_modified";
import BG from "../assets/Resource/build/default-home-bg.svg";
import Body from "../components/BUILD/AnalyticsBuildBody";

export default function AnalyticsBuild() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Analytics" title="Build your career the right way!!" />
      <Body />
    </div>
  );
}