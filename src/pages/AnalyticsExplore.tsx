import Navbar from "../components/Navbar";
import Hero from "../components/explore/Hero_modified";
import BG from "../assets/Resource/explore/analytics-home-bg.svg";
import Body from "../components/explore/AnalyticsExploreBody";

export default function AnalyticsExplore() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Analytics" title="Explore different career streams!" />
      <Body />
    </div>
  );
}