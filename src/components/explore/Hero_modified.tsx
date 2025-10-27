import React from "react";
import logo from "../../assets/logo.png";
type HeroProps = {
  bg: string;
  heading: string;
  title: string;
};

export default function Hero({ bg, heading, title }: HeroProps) {
  return (
    <div className="h-screen flex relative overflow-hidden md:bg-transparent bg-[#133748]">
      <Background bg_image={bg} />
      <div className="flex flex-col text-center justify-center items-center gap-[6px] text-white md:pl-[10vw] md:pt-[10vh] p-2">
        <img src={logo} alt="Logo" className="md:hidden w-[60%] mb-4" />
        <div>
          <h1 className="text-6xl font-bold font-[Poppins] md:flex">
            {splitAndRender(heading)}
          </h1>
          <p className="text-2xl max-w-[40ch] text-left text-balance">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function Background({ bg_image }: { bg_image: string }) {
  // Workaround for opacity differences in exported SVGs
  return (
    <div className="hidden md:flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src={bg_image}
          alt="Background Image"
          className="absolute w-full -z-10 object-cover h-full"
        />
      ))}
    </div>
  );
}

function splitAndRender(text: string): JSX.Element {
  const parts = text.split("!!");

  return (
    <div
      className={parts.length > 1 ? "text-left" : "text-center"}
      style={{ lineHeight: "70px" }}
    >
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {part}
        </React.Fragment>
      ))}
    </div>
  );
}
