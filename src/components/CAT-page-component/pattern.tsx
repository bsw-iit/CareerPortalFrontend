import React from "react";

const PatternCard: React.FC = () => {
  return (
    <div className=" p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="font-bold text-lg mb-4">Pattern</h2>
      <ul className="list-disc list-inside text-sm space-y-1 mb-4">
        <li>Exam duration: <b>2 hours (120 minutes)</b>.</li>
        <li>Two types of questions:</li>
        <li><b>Multiple Choice Questions</b> (correct: +3; incorrect: −1)</li>
        <li><b>Type In The Answer</b> (no options; no negative marking)</li>
        <li>Three sections (each section has a dedicated 40-minute timer and appears in fixed order):</li>
        <li>Verbal Ability and Reading Comprehension</li>
        <li>Data Interpretation and Logical Reasoning</li>
        <li>Quantitative Aptitude</li>
        <li>Number of questions varies across the three sections and by year.</li>
      </ul>

      <div className="bg-blue-100 text-blue-900 p-3 rounded-md text-sm border border-blue-200">
        <p className="font-semibold mb-1">Note on Syllabus</p>
        <p>
          There is no official syllabus released. Preparation is based on past-year patterns and representative topic lists.
        </p>
      </div>
    </div>
  );
};

export default PatternCard;
