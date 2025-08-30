import Navbar from "../components/Navbar";
import Hero from "../components/Hero.tsx";
import BG from "../assets/Resource/Higher_Studies.svg";
import Body from "../components/higherstudiesBody.tsx";
export default function HigherStudies() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="Higher Studies" title="Build your career the right way!" />
      <Body />
    </div>
  );
}