import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function SDEexplore() {
  const [readMore, setReadMore] = useState(false);

  // hardcoded content from JSON (unchanged text)
  const overview =
            "Before applying for any role, it’s important to understand why you want to do it and what will be required of you for this role. For a software engineering-based role, it’s necessary that you have the desire to build things from scratch, get your hands dirty with new technologies, be enthusiastic to learn new stuff all the time, and be able to apply it to new, impactful interfaces with real-time effects. If this sounds like you, then read on!"
const readmore =
  "Your journey begins with a 2–3 week learning phase at the company, focused on mastering key skills like web development and APIs, tailored to your role. During this time, clear communication with your mentor is essential as they guide you through the job’s nuances. While the post-placement period might bring some pressure, the overall atmosphere remains relaxed. As a software engineer, flexible hours are a significant perk, allowing you to work when it suits you best. Typically, you'll spend 7–8 hours a day working, leaving weekends free for personal activities and time with friends.<br/><br/><b>Daily Tasks</b><ul style='list-style: outside; margin-left: 15px; text-align:left'><li>Code a part of a software application</li><li>Run tests to ensure the software works as expected</li><li>Review code from another engineer</li><li>Work on optimizing the software speed and performance</li><li>Listen to the client or company to understand what new features they want</li><li>Stay up to date on software technology and upgrades</li></ul>";

const faqItems = [
  {
    question: "What is the expected payscale?",
    answer:
      "Base Salary: ₹16–20 LPA<br/>CTC: ₹30–35 LPA",
  },
  {
    question: "What are the preferred branches?",
    answer:
      "No strict preference. Relevant courses (especially in CS, MT, and EE) are crucial. Key courses include COL100, COL106, MTL342, and MTL103.",
  },
  {
    question: "What are the required skills?",
    answer:
      "Hard Skills: Strong foundation in Data Structures and Algorithms (DSA), competitive programming, and knowledge of web development or related fields.<br/>Soft Skills: Effective communication, teamwork, adaptability, and leadership",
  },
  {
    question: "What is the general future trajectory?",
    answer:
      "Career stability with many professionals staying 6–20 years in the role.<br/>Growth is smooth with promotions in 1–1.5 years. Options for career progression include moving into management or continuing as a senior developer.",
  },
  {
    question: "What are the most important resume highlights?",
    answer:
      "CGPA cutoff: Typically 7.5 (some companies may require 8).<br/>Key highlights: Programming assignments, especially from COL100/COL106, participation in hackathons, and self-driven projects in new tech stacks.",
  },
  {
    question: "What are the top companies that hire?",
    answer:
      "Pure SDE Roles: Google, Microsoft, Uber, Amazon, Flipkart, Facebook, Adobe, Infosys, Samsung, LinkedIn, Dell, Intuit.<br/>SDE Roles in Finance: JPMC, Morgan Stanley, Goldman Sachs.",
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
