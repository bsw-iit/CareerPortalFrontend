import Navbar from "../components/Navbar";
import Hero from "Hero.tsx";
import BG from "../assets/Resource/explore/default-home-bg.svg";
import Body from "CoreExploreBody.tsx";

export default function CoreExplore() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Core !! (Electrical)" title="Build your career the right way!" />
      <Body />
    </div>
  );
}