import Navbar from "../components/Navbar";
import Hero from "../components/Hero.tsx";
import BG from "../assets/Resource/SummerGuide.svg"
import Body from "../components/summerguideBody.tsx";
export default function SummerGuide() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="BSW Summer Guide" title="Build your career the right way!" />
      <Body />
    </div>
  );
}