import React from "react";

const MocksAndPlanning: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow border border-gray-200">
      <h2 className="font-bold text-lg mb-4">Mocks and Planning</h2>
      
      <p className="mb-3">
        <strong>When to start</strong><br />
        Do topic drills and sectionals early; begin regular full-length mocks from August/September.
      </p>

      <p className="mb-3">
        <strong>How many</strong><br />
        Quality over quantity: ~10–20 full mocks plus focused sectionals is common.
      </p>

      <p className="mb-3">
        <strong>Mock analysis (non-negotiable)</strong>
      </p>
      <ul className="list-disc pl-5 mb-3 space-y-1">
        <li>Tag every error as concept / misread / speed / guess.</li>
        <li>Redo unsolved questions; turn learnings into brief checklists (e.g., “draw a table,” “check units,” “scan all sets first”).</li>
        <li>Track topic-wise accuracy weekly.</li>
      </ul>

      <p className="mb-3">
        <strong>Simple weekly loop</strong>
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Mon–Fri: 60–90 min Quantitative Aptitude + 45 min reading/paraphrasing + 45–60 min Data Interpretation/Logical Reasoning sets</li>
        <li>Sat: 1 full mock + 2 hours analysis</li>
        <li>Sun: Weak-area clinic + revise formulas/ratios/shortcuts</li>
      </ul>
    </div>
  );
};

export default MocksAndPlanning;
