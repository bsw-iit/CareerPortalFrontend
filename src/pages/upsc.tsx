import Navbar from "../components/Navbar";
import Hero from "../components/Hero.tsx";
import BG from "../assets/Resource/UPSC.svg";

export default function upsc() {
  return (
    <div>
      <Navbar />
      <Hero
        bg={BG}
        heading="UPSC"
        title="Build your career the right way!"
      />
      <div className="flex flex-col items-center mb-8">
        <h1
          className="text-[47px] font-bold underline text-black"
          style={{ fontFamily: "'Cormorant Infant', serif" }}
        >
          A Guide to UPSC Preparation
        </h1>
        <p
          className="text-center text-2xl leading-8 mt-6"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          A detailed guide is under works and will be added very soon! Please
          stay tuned for the same!
        </p>
      </div>
      </div>
  )
}