import React, { useState, useRef } from "react";

interface FAQProps {
  heading: string;
  data: { [question: string]: string[] };  // value is now an array of strings
}

const FAQAccordion: React.FC<FAQProps> = ({ data,heading }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const entries = Object.entries(data);

  return (
    <div className="p-6 bg-white rounded-lg shadow border border-gray-200">
      <h2 className="font-bold text-lg mb-4">
        {heading}
      </h2>
      <div className="divide-y divide-gray-200">
        {entries.map(([question, answer], index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <button
                className="w-full text-left py-3 font-semibold flex justify-between items-center focus:outline-none"
                onClick={() => toggle(index)}
              >
                {question}
                <svg
                  className={`w-5 h-5 transform transition-transform duration-500 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[index]?.scrollHeight
                    : 0,
                  opacity: isOpen ? 1 : 0,
                  transition: "max-height 0.4s ease, opacity 0.4s ease",
                  overflow: "hidden",
                }}
                className="text-sm text-gray-700"
              >
                <ul className="list-disc list-inside">
                  {answer.map((item, i) => (
                    <li key={i} className="pb-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
