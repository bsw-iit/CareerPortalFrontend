import Navbar from "../../components/Navbar";
import Hero from "../../components/explore/Hero_modified";
import Body from "../../components/explore/ConsultExploreBody";
import consultHomeBg from "../../assets/explore/consult-home-bg.svg";

export default function AnalyticsExplore() {
  return (
    <div>
      <Navbar />
      <Hero bg={consultHomeBg} heading="Consult" title="Explore different career streams!" />
      <Body />
    </div>
  );
}
