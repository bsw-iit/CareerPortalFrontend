import React from "react";
import { Compass } from 'lucide-react';

const InfoCard: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <section className="mb-6">
        <h2 className="font-bold text-lg mb-2">Basic Introduction</h2>
        <p className="font-semibold flex items-center gap-2 mb-2">
          <Compass className="h-4 w-4" />
          What is the Common Admission Test?
        </p>
        <p className="mb-3 text-sm">
          The Common Admission Test is a national-level entrance examination conducted annually by the Indian Institutes of Management. It serves as the primary admission test for MBA/PGDM programs at the Indian Institutes of Management and is also accepted by over 1,200 other top business schools across India.
        </p>
        <p className="font-semibold mb-1">Who Should Apply?</p>
        <ul className="list-disc list-inside mb-4 text-sm space-y-1">
          <li>Students in the final year of their undergraduate studies</li>
          <li>Graduates looking to pursue an MBA/PGDM</li>
          <li>Working professionals aiming to transition into managerial roles or gain leadership skills</li>
          <li>Individuals planning a career switch or interested in entrepreneurship</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-bold text-lg mb-2">Eligibility Criteria</h2>
        <ul className="list-disc list-inside mb-4 text-sm space-y-1">
          <li>A Bachelor’s degree with a minimum of 50% marks or equivalent CGPA (45% for Scheduled Caste/Scheduled Tribe/Persons with Disabilities)</li>
          <li>Final-year undergraduate students are also eligible to apply</li>
          <li>No age limit</li>
          <li>No restriction on the number of attempts (the exam is conducted once per year)</li>
        </ul>

        <p className="font-bold mb-2">What Is a Good Score?</p>
        <ul className="list-disc list-inside mb-4 text-sm space-y-1">
          <li><b>99.7+ percentile</b>: Typically required for top Indian Institutes of Management (Ahmedabad, Bangalore, Calcutta)</li>
          <li><b>97–99 percentile</b>: Competitive for institutes like Indian Institute of Management Lucknow, Indian Institute of Technology Bombay (Shailesh J. Mehta School of Management), Management Development Institute, S. P. Jain Institute of Management and Research, etc.</li>
          <li><b>90–97 percentile</b>: Eligible for newer Indian Institutes of Management and several Tier-1 private business schools</li>
        </ul>

        <p className="font-bold mb-1">Self-Study vs Coaching</p>
        <p className="text-sm mb-4">
          <b>Self-Study:</b> Plenty of quality resources are available online (videos, PDFs, past papers). <br />
          <b>Coaching Institutes:</b> Offer structured programs with mocks, classes, and doubt resolution (for example, iQuanta, TIME, IMS, Career Launcher). <br />
          <i>Note:</i> Coaching is optional and can help streamline your preparation.
        </p>

        <p className="font-bold mb-1">What Happens After the Exam?</p>
        <ul className="list-disc list-inside mb-4 text-sm space-y-1">
          <li>Shortlisting by business schools is based on Common Admission Test percentile, academic background, work experience, and diversity.</li>
          <li>Further rounds typically include: <b>Written Ability Test / Analytical Writing Test</b> and <b>Personal Interview.</b></li>
          <li>Final selection is based on a composite score considering all these components.</li>
        </ul>

        <p className="font-bold mb-1">Validity & Attempts</p>
        <ul className="list-disc list-inside mb-4 text-sm space-y-1">
          <li>Score validity: <b>1 year</b></li>
          <li>Attempts: <b>Unlimited</b> over the years (once per year)</li>
          <li>Age limit: <b>None</b></li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-lg mb-2">Alternatives to the Common Admission Test</h2>
        <p className="text-sm mb-4">
          If the Common Admission Test does not go well, consider these entrance exams: XAT (by XLRI), SNAP (by Symbiosis), NMAT (by GMAC), CMAT (by NTA), MAT. Some private colleges offer direct admissions based on academic profile.
        </p>

        <h2 className="font-bold text-lg mb-2">Should Engineers Consider the Common Admission Test?</h2>
        <p className="text-sm">
          Absolutely. A large portion of Common Admission Test aspirants and top scorers each year come from engineering backgrounds due to their quantitative aptitude. Engineers are eligible even without prior work experience, and many write the exam in their final year of college while preparing for placements.
        </p>
      </section>
    </div>
  );
};

export default InfoCard;
