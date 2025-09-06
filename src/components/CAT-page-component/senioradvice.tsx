import React from "react";

interface AdviceCard {
  title: string;
  details: string[];
}

interface SeniorAdviceProps {
  adviceList: AdviceCard[];
}

const SeniorAdvice: React.FC<SeniorAdviceProps> = ({ adviceList }) => {
  return (
    <section className="p-6 bg-white rounded-lg shadow border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span>💡</span> Senior Advice
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {adviceList.map(({ title, details }, idx) => (
          <div
            key={idx}
            className="border border-blue-400 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="font-semibold text-blue-600 mb-3">{title}</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
              {details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeniorAdvice;
