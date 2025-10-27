import Navbar from "../../components/Navbar";
import Hero from "../../components/explore/Hero_modified";
import Body from "../../components/explore/QuantexploreBody";
import quantExporeBg from "../../assets/explore/quant-home-bg.svg";
export default function QuantExplore() {
  return (
    <div>
      <Navbar />
      <Hero bg={quantExporeBg} heading="Quant" title="Explore different career streams!" />
      <Body />
    </div>
  );
}
