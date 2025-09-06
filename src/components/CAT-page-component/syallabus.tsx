import React from "react";

const ReferencePDF: React.FC = () => {
  return (
    <div className="border border-blue-400 bg-white rounded-xl p-5 shadow-sm">
      <h2 className="text-lg font-semibold mb-2">Syllabus (Reference PDF)</h2>

      <p className="text-sm text-gray-700 mb-4">
        <strong>Important:</strong> The syllabus is not officially released. The PDF below is reference-only, based on past-year patterns, and should not be trusted completely.
      </p>

      <div className="flex items-center gap-3">
        <a
          href="https://drive.google.com/file/d/154kKPwjO0eDMCj7OPYhhVdt7y7rgRLIh/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-medium hover:underline inline-flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h4m0 0v4m0-4L7 17"
            />
          </svg>
          Open Reference PDF
        </a>

        <span className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-0.5 rounded-full">
          Unofficial
        </span>
      </div>
    </div>
  );
};

export default ReferencePDF;
