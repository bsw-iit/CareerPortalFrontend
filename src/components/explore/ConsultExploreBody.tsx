import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ConsultExplore() {
  const [readMore, setReadMore] = useState(false);

  // hardcoded content from JSON (unchanged text)
  const overview =
    "If you’re interested in solving complex business problems, working with diverse teams, and influencing organizational decisions, a career in consulting might be the right path for you. Consulting involves advising companies on a variety of issues, from strategy and operations to finance and technology.";

 const readmore =
  "Your journey typically begins with rigorous training in core consulting skills, such as problem structuring, data analysis, and client management. You'll quickly get involved in client-facing projects, where you’ll apply your skills to solve real business challenges.<br/><br/>Do talk to your seniors in this area before deciding upon consulting to learn the pros and the cons of the profile. For instance, it’s known for a heavy workload and an often difficult work-life balance but offers an exceptional career growth potential.<br/><br/><b>Daily Tasks</b><ul style='list-style: outside; margin-left: 15px; text-align:left'><li>Analyzing data to identify trends and insights (Working on a lot of excel sheets and powerpoints)</li><li>Developing strategies and recommendations based on market research and analysis.</li><li>Preparing and delivering presentations to clients.</li><li>Working closely with client teams to implement solutions.</li></ul>";

const faqItems = [
  {
    question: "What is the expected payscale?",
    answer:
      "Average Internship Stipend: ₹1 Lakh<br/>Base Salary: ₹20-25 LPA<br/>Tend to pay lesser than other profiles initially but offer a very steep salary increase",
  },
  {
    question: "What are the preferred branches?",
    answer:
      "No specific branch preference. DR’s of any branch are preferred, CG matters",
  },
  {
    question: "What are the required skills?",
    answer:
      "Soft Skills – Management skills, Communication skills, Leadership skills, Problem Solving<br/>Hard Skills – Excel, Teams, Data Analysis, Presentation Tools, Project Management",
  },
  {
    question: "What is the general future trajectory?",
    answer:
      "A career in consulting offers a structured yet dynamic growth path, typically starting with entry-level roles like Analyst or Associate Consultant. With experience and strong performance, you can expect promotions every 1–2 years in the early stages, advancing through roles such as Consultant, Senior Consultant, and Manager.<br/><br/>Most consultants opt out of consulting in a few years. There are a lot of exit options – startups, private equity, management roles, MBAs etc.",
  },
  {
    question: "What are the most important resume highlights?",
    answer:
      "There is a CV shortlisting in consulting roles which is a huge bottleneck as students apply. 20–30 shortlists are made (might vary with company) who would be eligible for further rounds. Hence making a good CV is very important.<br/><br/>A consulting CV has 5 sections<ul style='list-style: outside; margin-left: 15px;'><li>CG</li><li>Scholastic Achievements</li><li>Internship (Startup/Research/Corporate)</li><li>POR</li><li>ECA</li></ul>When a section of your CV is above average, it's known as a ‘spike’.<br/>Generally, you should be shortlisted if you have at least 3–4 ‘spikes’ among the 5 sections.<br/><br/>We advise you to have a talk with your seniors or see the BSW Podcasts to understand the CV Building procedure in detail.",
  },
  {
    question: "What are the top companies that hire?",
    answer:
      "McKinsey & Company, Boston Consulting Group (BCG), Bain & Company, LEK Consulting, Strategy&, Kearney, Accenture, Nomura, KPMG",
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
