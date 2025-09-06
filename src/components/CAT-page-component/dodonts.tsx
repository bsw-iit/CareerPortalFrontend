import React from "react";

interface QuickDoDontProps {
  doList: string[];
  dontList: string[];
}

const QuickDoDont: React.FC<QuickDoDontProps> = ({ doList, dontList }) => {
  return (
    <section className=" p-6 bg-white rounded-lg shadow border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Quick Do/Don't</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Do Section */}
        <div className="border border-blue-400 rounded-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
            <span>✔️</span> Do
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {doList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Don't Section */}
        <div className="border border-blue-400 rounded-lg p-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-blue-600">
            <span>❌</span> Don't
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {dontList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuickDoDont;
