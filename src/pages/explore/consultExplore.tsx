import Navbar from "../../components/Navbar";
import Hero from "../../components/explore/Hero_modified";
import Body from "../../components/explore/ConsultExploreBody";

export default function AnalyticsExplore() {
  return (
    <div>
      <Navbar />
      <Hero bg="../src/assets/explore/consult-home-bg.svg" heading="Consult" title="Explore different career streams!" />
      <Body />
    </div>
  );
}
