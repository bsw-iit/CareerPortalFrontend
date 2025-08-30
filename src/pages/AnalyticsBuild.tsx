import Navbar from "../components/Navbar";
import Hero from "Hero.tsx";
import BG from "../assets/Resource/build/default-home-bg.svg";
import Body from "AnalyticsBuildBody.tsx";

export default function AnalyticsBuild() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Analytics" title="Build your career the right way!!" />
      <Body />
    </div>
  );
}