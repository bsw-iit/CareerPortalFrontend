import Navbar from "../components/Navbar";
import Hero from "Hero.tsx";
import BG from "../assets/Resource/explore/analytics-home-bg.svg";
import Body from "AnalyticsExploreBody.tsx";

export default function AnalyticsExplore() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Analytics" title="Explore different career streams!" />
      <Body />
    </div>
  );
}