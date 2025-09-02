import Navbar from "../components/Navbar";
import Hero from "../components/BUILD/Hero_modified"
import BG from "../assets/explore/default-home-bg.svg";
import Body from "../components/BUILD/CoreBuildBody";

export default function CoreBuild() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Core(FMCG)" title="Build your career the right way!!" />
      <Body />
    </div>
  );
}