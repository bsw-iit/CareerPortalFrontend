import React from "react";
import { GraduationCap } from 'lucide-react';

const CATGuideContent: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 space-y-6">
      
      {/* Indian Institute of Management Ahmedabad Selection Criteria */}
      <section>
        <h2 className="font-bold text-2xl mb-2">
          <GraduationCap className="inline-block mr-2" />
          Indian Institute of Management Ahmedabad Selection Criteria —
          Explained
        </h2>
        <br />
        <ol className="list-decimal list-inside space-y-3">
          <li>
            <strong>
              Minimum Common Admission Test Percentile Requirement (Preliminary
              Screening)
            </strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>
                For the General category: Overall percentile ≥ 80; Each section
                ≥ 70 percentile. If these are not met, the profile is not
                considered.
              </li>
            </ul>
          </li>

          <li>
            <strong>
              Application Rating Score (≈35% weightage in shortlisting)
            </strong>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>
                <strong>Class 10 marks:</strong> Points by percentage band
                (e.g., ≥90% = 10 points; 81–90% = 8 points). Note: Based on all
                subjects listed on the mark sheet, not the best four or five.
              </li>
              <li>
                <strong>Class 12 marks:</strong> Points depend on stream
                (Science, Commerce, Arts); Commerce/Arts bands are slightly more
                lenient than Science.
              </li>
              <li>
                <strong>Graduation marks:</strong> Mapped to an Academic
                Category (AC1: Medical; AC2: Professional—CA/CS/CFA/ICWA; AC3:
                Commerce/Management/Economics; AC4: Engineering; AC5: Arts &
                Humanities; AC6: Other).
              </li>
              <li>
                <strong>Work experience (maximum 5 points):</strong>
              </li>
              <ul className="list-disc list-inside ml-5 space-y-1">
                <li>Less than 12 months: 0 points</li>
                <li>13 to 36 months: (months – 11) × 0.2</li>
                <li>More than 36 months: capped at 5 points</li>
              </ul>
              <li>
                <strong>Shortlisting composite score:</strong> 0.35 ×
                Application Rating + 0.65 × Common Admission Test percentile
              </li>
            </ul>
          </li>
        </ol>

        <div className="bg-blue-100 p-3 rounded-md text-sm mt-4 mb-6">
          <p>
            <strong>
              Why some candidates get calls at lower percentiles (e.g., ~87)
            </strong>
          </p>
          <p>
            Shortlisting is done category-wise, with a cap on interview calls
            per Academic Category in the General category: AC1, AC2, AC3, and
            AC5 up to 100 candidates each; AC4 (Engineers) up to 150 candidates.
            Engineers face the densest competition and usually need very high
            percentiles (often 99.7+), while under-represented categories may
            get calls at lower percentiles.
          </p>
        </div>
        <div >
          <h3 className="font-semibold text-base mb-2">
            Final Selection Criteria (Post-Interview Round)
          </h3>
          <p className="mb-2">
            Final score: 0.25 × Common Admission Test score + 0.15 × Application
            Rating + 0.10 × Analytical Writing Test + 0.50 × Personal Interview
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              Weight on the Common Admission Test reduces from 65% (shortlisting
              stage) to 25%.
            </li>
            <li>
              60% of weight lies on the interview day (Analytical Writing Test +
              Personal Interview).
            </li>
            <li>
              No category caps in final selection; performance on the day is
              decisive.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CATGuideContent;
