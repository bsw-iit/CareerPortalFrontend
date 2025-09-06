import Navbar from "../../components/Navbar";
import Hero from "../../components/explore/Hero_modified";
import BG from "../../assets/explore/default-home-bg.svg";
import Body from "../../components/explore/CoreExploreBody";

export default function CoreExplore() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Core !! (Electrical)" title="Build your career the right way!" />
      <Body />
    </div>
  );
}