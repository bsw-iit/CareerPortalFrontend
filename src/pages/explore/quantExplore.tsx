import Navbar from "../../components/Navbar";
import Hero from "../../components/explore/Hero_modified";
import Body from "../../components/explore/QuantexploreBody";

export default function QuantExplore() {
  return (
    <div>
      <Navbar />
      <Hero bg="../src/assets/explore/quant-home-bg.svg" heading="Quant" title="Explore different career streams!" />
      <Body />
    </div>
  );
}
