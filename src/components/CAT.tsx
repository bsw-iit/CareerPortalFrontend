import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
export default function Kartik2(){
    return (
      <div>
        <Navbar />
        <Hero bg="../assets/Resource/CAT.svg" heading="CAT" title="Build your career right way!"></Hero>
        <div className="flex flex-col items-center mb-8">
      <h1
        className="text-[47px] font-bold underline text-black"
        style={{ fontFamily: "'Cormorant Infant', serif" }}
      >
        A Guide to CAT Preparation
      </h1>
      <p
        className="text-center text-2xl leading-8 mt-6"
        style={{ fontFamily: "'Times New Roman', serif" }}
      >
        A detailed guide is under works and will be added very soon! Please stay
        tuned for the same!
      </p>
    </div>
      </div>
    )
}