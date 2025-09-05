import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero.tsx";
import BG from "../../assets/explore/ai-ml-home-bg.svg";
import Body from "../../components/explore/AiMlExploreBody.tsx"

export default function Aiml() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="AI/ML" title="Build your career the right way!" />
      <Body/>
    </div>
  );
}