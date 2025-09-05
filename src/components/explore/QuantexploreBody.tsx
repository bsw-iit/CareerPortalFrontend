import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function QuantExplore() {
  const [readMore, setReadMore] = useState(false);

  // hardcoded content from JSON (unchanged text)
  const overview =
              "Before applying for any role, it’s important to understand why you want to do it and what will be required of you for this role. A career in quantitative analysis is all about solving complex puzzles with a mix of mathematical, statistical, and programming skills. If you enjoy tackling challenging problems, analyzing data, and creating your own tools, then a Quant role might be the perfect fit for you."
const readmore =
  "As a Quant, your typical day might involve:<ul style='list-style: outside; margin-left: 15px; text-align:left'><li>Analyzing financial data using mathematical and statistical methods.</li><li>Developing algorithms and models to predict market trends.</li><li>Writing custom tools and software to process and clean messy data.</li><li>Collaborating with team leaders to work on projects that align with the company's strategic goals.</li><li>Continuously learning and applying new techniques in fields like data analysis, probability, and game theory.</li></ul>";

const faqItems = [
  {
    question: "What is the expected payscale?",
    answer:
      "Median Joining Package: ₹50-70 LPA<br/>Quants typically receive higher compensation than most other fields, reflecting the high expectations and specialized skills required.",
  },
  {
    question: "What are the preferred branches?",
    answer:
      "Preferred branches include CS1, CS5, MT1, MT6 (also consider electrical branches). However, a strong foundation in mathematics, probability, and statistics is crucial, regardless of the branch.",
  },
  {
    question: "What are the required skills?",
    answer:
      "Exceptional coding skills, particularly in C++ and Python.<br/>Proficiency in Object-Oriented Programming, Data Analysis Techniques, and Statistical Methods.<br/>Strong problem-solving abilities, with a deep understanding of probability and game theory.",
  },
  {
    question: "What is the general future trajectory?",
    answer:
      "High-pressure environments with high rewards with potential job switches after a few years or transitions to tech.<br/>Significant pay hikes and complex problem-solving opportunities for those who excel.<br/>Paths include further specialization or shifts to tech/finance roles.",
  },
  {
    question: "What are the most important resume highlights?",
    answer:
      "<ul style='list-style: outside; margin-left: 15px;'><li>Strong CGPA or department rank.</li><li>Projects in coding and quantitative analysis.</li><li>Competitive programming experience.</li><li>Hackathons or self-driven projects showcasing problem-solving skills.</li></ul>",
  },
  {
    question: "What are the top companies that hire?",
    answer:
      "Elite Quant Firms: Tower Research Capital, Optiver, Jane Street, Citadel Securities, Quadeye, Alphagrep, Graviton, NK Securities.<br/>Finance Giants with Quant Roles: JP Morgan Chase, Goldman Sachs.",
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
