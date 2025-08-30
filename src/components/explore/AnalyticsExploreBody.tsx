import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Body() {
  const [readMore, setReadMore] = useState(false);

  // hardcoded content from JSON (unchanged text)
  const overview =
    "If you’re fascinated by markets, numbers, and strategy, a Finance profile might be the right fit for you. This role involves financial analysis, risk management, investment banking, consulting, and corporate finance. You’ll be working with large datasets, valuations, and strategies to help businesses and clients make smarter financial decisions. If problem-solving with data excites you, read on!";

  const readmore =
    "In finance, your career path often starts with analytical roles, where you build models, analyze reports, and work closely with clients. With experience, you may move to leadership and strategy roles like Portfolio Manager, Risk Consultant, or Investment Banker. The industry is fast-paced and competitive, but offers high rewards.<br/><br/><b>Daily tasks</b><ul style='list-style: outside; margin-left: 15px; text-align:left'><li>Financial modeling and valuation</li><li>Analyzing market data and preparing reports</li><li>Consulting with businesses for risk and strategy</li><li>Working with investment portfolios, banking operations, or advisory services</li></ul>";

  const faqItems = [
    {
      question: "What is the expected payscale?",
      answer:
        "Base Salary: ₹15-40 LPA depending on firm and role<br/>Internships: ₹30K-70K per month",
    },
    {
      question: "What are the preferred branches?",
      answer:
        "Any branch with strong quantitative and analytical skills. Many Finance firms prefer students from EE, CS, ME, or Mathematics backgrounds with relevant interest and knowledge.",
    },
    {
      question: "What are the required skills?",
      answer:
        "Hard Skills: Financial modeling, Statistics, Excel, and familiarity with tools like R, Python, or SQL.<br/>Knowledge of Economics, Accounting, and Business Strategy is a plus.",
    },
    {
      question: "What is the general future trajectory?",
      answer:
        "Initial years focus on analytical and support roles. With 5-8 years of experience, professionals often move into VP/Manager positions, with potential to reach Partner/Director level in consulting or senior roles in investment firms.",
    },
    {
      question: "What are the most important resume highlights?",
      answer:
        "<ul style='list-style: outside; margin-left: 15px;'><li>Relevant internships in consulting, banking, or analytics</li><li>Good CGPA (7.5+ is preferred, but skills and internships weigh heavily)</li><li>Knowledge of financial concepts, Excel models, and programming (for quant roles)</li></ul>",
    },
    {
      question: "What are the top companies that hire?",
      answer:
        "Goldman Sachs, JP Morgan Chase, McKinsey, Boston Consulting Group, Bain & Co., Deloitte, KPMG, EY, PwC",
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
