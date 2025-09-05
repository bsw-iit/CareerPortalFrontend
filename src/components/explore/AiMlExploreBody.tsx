import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ConsultExplore() {
  const [readMore, setReadMore] = useState(false);

  // hardcoded content from JSON (unchanged text)
  const overview =
                "Ever wondered how modern technologies work? At the heart of many innovations are Artificial Intelligence (AI) and Machine Learning (ML), enabling systems to learn from data, make decisions, and solve complex problems. These technologies impact nearly every aspect of life—voice assistants, personalized recommendations, weather predictions, and more. In healthcare, they aid early diagnosis and personalized treatments. In finance, they detect fraud and optimize investments. Industries like agriculture and robotics benefit from AI and ML through automation and increased efficiency. At their core, AI and ML rely on mathematical principles and advanced algorithms, using tools like TensorFlow and PyTorch to analyze data and make predictions. By combining theoretical knowledge with practical applications, these technologies empower us to develop intelligent systems that solve real-world challenges, transforming how we live and work."
const readmore =
  "<b>Daily Tasks</b><br/>AI/ML careers are broadly split into research and development roles, each requiring mathematical and programming expertise but differing in focus.<br/><br/><b>Research roles</b><br/>Involve developing new algorithms, exploring theoretical foundations, and tackling advanced topics like generative AI and explainable AI. These roles are found in academia, research labs, and innovative companies.<br/><br/><b>Development roles</b><br/>Focus on building and deploying machine learning models to address real-world problems. These practical roles are prevalent in industries like finance, healthcare, and e-commerce, driving impactful solutions through applied AI/ML techniques.";

const faqItems = [
  {
    question: "What is the expected payscale?",
    answer:
      "Median Joining Package: Data varies; typically high in leading tech companies and research institutions.",
  },
  {
    question: "What are the preferred branches?",
    answer:
      "<b>Research Roles:</b><br/>Circuital branches like CSE, EE, and MT are preferred due to their strong theoretical foundation.<br/><b>Development Roles:</b><br/>Open to all branches, as practical applications value problem-solving and programming skills",
  },
  {
    question: "What are the required skills?",
    answer:
      "<b>Research Roles:</b><br/>- Linear Algebra, Probability Theory, Multivariable Calculus, Optimization<br/>- Programming (Python, R, and research tools like Jupyter Notebooks and PyTorch)<br/>- Domain Expertise (LLMs), generative models, and neural networks.<br/><b>Development Roles:</b><br/>- Python (TensorFlow, Scikit-learn, PyTorch, Jupyter)<br/>- Tools like Docker, Kubernetes, and cloud platforms (AWS, GCP, Azure)<br/>- Solid understanding of applied statistics and probability.",
  },
  {
    question: "What is the general future trajectory?",
    answer:
      "<b>Research:</b><br/>- Pursue advanced studies (Master’s/Ph.D.), publish in top-tier conferences, and work in leading research labs (Google Brain, DeepMind, FAIR).<br/>- Transition to academic roles or apply research in AI startups.<br/><b>Development:</b><br/>- Master AI/ML tools contribute to open-source projects and progress to leadership roles (tech lead, manager, or product manager).<br/>- Offer AI/ML consulting or freelancing across industries.",
  },
  {
    question: "What are the most important resume highlights?",
    answer:
      "<b>Research:</b><br/>- High CGPA and department ranks.<br/>- Published research papers in reputed AI/ML conferences or journals.<br/>- Internships at research labs or innovative tech companies.<br/><b>Development:</b><br/>- Successful machine learning projects with measurable impact.<br/>- Practical experience with data pipelines and model deployment.<br/>- Collaborative projects demonstrating teamwork and initiative.",
  },
  {
    question: "What are the top companies that hire?",
    answer:
      "(not necessarily on-campus recruitments)<br/><b>Research:</b><br/>- Research Labs: Microsoft Research, FAIR (Meta), Adobe Research.<br/>- Universities: MIT, Stanford, IITs, CMU<br/>- Companies: OpenAI, DeepMind, Anthropic, Meta.<br/><b>Development:</b><br/>- Companies: Microsoft AI, Amazon AI, NVIDIA.<br/>- Startups: Glean, Eightfold AI, Cohere, Stability AI.<br/>- Domains: Healthcare (Zebra Medical), Finance (American Express)",
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
