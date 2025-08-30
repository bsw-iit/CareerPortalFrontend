import Navbar from "../components/Navbar";
import Hero from "Hero.tsx";
import BG from "../assets/Resource/build/default-home-bg.svg";
import Body from "CoreBuildBody.tsx";

export default function CoreBuild() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Core(FMCG)" title="Build your career the right way!!" />
      <Body />
    </div>
  );
}