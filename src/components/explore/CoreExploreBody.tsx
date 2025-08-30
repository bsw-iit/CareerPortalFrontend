import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Body() {
  const [readMore, setReadMore] = useState(false);

  // hardcoded content
  const overview =
    "If you have a passion for Electrical Engineering (EE) courses and enjoy hands-on circuit and chip design, a Core Electrical profile could be ideal for you. This role involves designing, simulating, and fabricating advanced circuits for various applications, such as digital processors, power electronic converters, and RF/Mixed Signal systems. If you’re excited by creating and optimizing hardware and have a keen interest in cutting-edge technology, read on!";

  const readmore = `Your role starts with designing and engineering hardware for specific applications. As you gain experience, tasks become more specialized. Key roles include Analog/RFIC/Mixed Signal Design Engineer, Digital Design Engineer, Physical Design/Verification Engineer, and Powertrain Designer. Software Engineers in this domain work with embedded systems, programming boards, and developing testing platforms. While company cultures vary, they generally offer a supportive environment with manageable stress levels. <br/><br/><b>Daily tasks</b><ul style="list-style: outside; margin-left: 15px; text-align:left"><li>Design and optimize circuits for various applications</li><li>Simulate and test hardware components</li><li>Work on embedded systems and programming (for Software Engineers)</li><li>Collaborate with teams on complex projects</li></ul>`;

  const faqItems = [
    {
      question: "What is the expected payscale?",
      answer:
        "Base Salary: ₹20-50 LPA (varies by role and skills)<br/>Internships: ₹40K-80K per month",
    },
    {
      question: "What are the preferreed branches?",
      answer:
        "Primarily EE, but CS, EP (in some companies), and MT students with relevant skills are also considered.",
    },
    {
      question: "What are the required skills?",
      answer:
        "Hard Skills: Circuit Design, Digital Electronics, Programming.<br/>Key courses include Digital Electronics, Circuit Theory, Control Systems, and Analog Electronic Circuits",
    },
    {
      question: "What is the general future trajectory?",
      answer:
        "Career growth starts gradually but becomes highly rewarding with experience. Engineers often advance to lead roles within 8-10 years.<br/>The expanding semiconductor industry in India offers stable and lucrative long-term career opportunities.",
    },
    {
      question: "What are the most important resume highlights?",
      answer: `<ul style="list-style: outside; margin-left: 15px;">
                <li>Relevant EE projects and internships (research or corporate)</li>
                <li>CGPA of 7-7.5+ is generally sufficient; some companies may require 8+.</li>
                <li>Strong technical knowledge and relevant projects are prioritized over extracurricular activities.</li>
              </ul>`,
    },
    {
      question: "What are the top companies that hire?",
      answer:
        "Nvidia, Texas Instruments, Qualcomm, Intel, Jaguar, Land Rover, MediaTek, Cadence",
    },
  ];

  useEffect(() => {
    setReadMore(false); // reset when component mounts
  }, []);

  return (
    <div className="w-full min-h-[60vh] overflow-hidden py-16 bg-white">
      <div className="w-full px-8 md:px-16 flex-col flex justify-center items-center h-full">
        <div className="flex flex-col items-center gap-8">
          <h1 className="font-bold text-center text-4xl md:text-5xl">
            Overview
          </h1>
          <p className="text-xl md:text-xl md:text-center max-w-[600px] leading-[1.6]">
            {overview}
          </p>
          <div
            className={`max-w-[600px] md:text-center ${
              readMore ? "block" : "hidden"
            }`}
          >
            <p
              className="text-xl md:text-xl leading-[1.6]"
              dangerouslySetInnerHTML={{ __html: readmore }}
            />
          </div>
          <button
            className="mt-6 border-solid border-2 border-[#133748] py-3 px-6 hover:bg-[#133748] hover:text-white"
            onClick={() => setReadMore(!readMore)}
          >
            Read {readMore ? "Less" : "More"}
          </button>
        </div>
      </div>
      <div className="mt-24">
        <FAQs faqItems={faqItems} />
      </div>
    </div>
  );
}

function FAQs({ faqItems }: { faqItems: { question: string; answer: string }[] }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % faqItems.length);
  const handlePrev = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + faqItems.length) % faqItems.length
    );

  return (
    <div className="w-full md:min-h-[calc(100vh-64px)] min-h-[calc(50vh-32px)] bg-[#133748] py-4 md:py-12 flex flex-col justify-between relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 mt-8 md:my-10 text-center text-white">
        FAQs
      </h2>
      {isSmallScreen ? (
        <div className="relative flex justify-center items-center flex-1 m-2 md:mx-2">
          {/* Left Carousel Button */}
          <button
            className="absolute left-0 p-2 bg-black rounded-full opacity-75 hover:opacity-100 z-10"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <FaArrowLeft size={16} color="white" />
          </button>

          {/* Carousel */}
          <div className="w-full overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="min-w-[80%] mx-[10%] my-auto py-4 px-5 bg-white rounded-2xl text-left text-black shadow-lg md:h-[140px]"
                >
                  <h3 className="font-bold text-lg leading-[1.2]">
                    {faq.question}
                  </h3>
                  <p
                    className="text-base pt-2 leading-[1.4]"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Carousel Button */}
          <button
            className="absolute right-0 p-2 bg-black rounded-full opacity-75 hover:opacity-100 z-10"
            onClick={handleNext}
            aria-label="Next"
          >
            <FaArrowRight size={16} color="white" />
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 px-4 md:px-12 flex-1">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="p-2 md:p-6 bg-white rounded-2xl shadow-lg"
            >
              <h3 className="font-bold text-lg leading-[1.5]">
                {faq.question}
              </h3>
              <p
                className="pt-2 text-base leading-[1.5]"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}