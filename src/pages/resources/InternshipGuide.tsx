import React, { useState } from 'react';
import { 
  FiChevronDown, 
  FiBookOpen, 
  FiTarget, 
  FiUsers, 
  FiDownload, 
  FiCpu, 
  FiCode, 
  FiBriefcase 
} from 'react-icons/fi';
import Navbar from '../../components/Navbar';

// --- Types & Interfaces ---
interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ElementType;
}

interface TableComponentProps {
  headers: string[];
  data: Record<string, string | number>[];
  caption: string;
}

interface Tab {
  name: string;
  component: React.ComponentType;
  icon: React.ElementType;
}

// --- Data ---
const internshipData = {
  prepResources: {
    quant: [
      "**Puzzles:** Brainstellar, 50 Challenging Problems in Probability (F. Mosteller), The Green Book (Xinfeng Zhou).",
      "**Coding/DSA:** Codeforces, CSES Problem Set, LeetCode Hard.",
      "**Platform:** QuantGuide.io, PuzzledQuant.",
      "**Concepts:** Core Probability, Statistics (MTL106 level), C++ OOPS & Systems."
    ],
    tech: [
      "**DSA Mastery:** Striver's A2Z DSA Sheet, LeetCode (150/Blind 75).",
      "**Fundamentals:** CSES Problem Set (Graphs, DP, Trees).",
      "**Core CS:** GeeksForGeeks (OS, DBMS, Computer Networks, OOPS).",
      "**Practical Skills:** DevClub IITD GitHub Repositories (Intern-Prep Series)."
    ],
    consulting: [
      "**Case Prep:** Case Interviews Cracked (YouTube & Book), SRCC Case Compendium, IIM-A/B Casebooks.",
      "**Guesstimates:** Focus on structured breakdown and mental math speed.",
      "**Business Awareness:** Company financial reports, Business Insider, general fintech/startup knowledge."
    ]
  },
  selectionProcess: [
    { stage: "Stage 1: Online Assessment (OA)", details: "Aptitude, speed-math, or coding (depending on role). Strict time limits; accuracy and speed are heavily tested. High CGPA acts as a strict initial filter here." },
    { stage: "Stage 2: Technical / Case Interviews", details: "1 to 3 rounds. Deep dives into CV projects. For Quants: rapid-fire math & betting strategies. For SDE: live coding & CS fundamentals. For Consult: Guesstimates and business cases." },
    { stage: "Stage 3: HR / Behavioral Fit", details: "Conversational rounds testing teamwork, past challenges, leadership, and 'Why this company?'. Honesty and clear communication are key." }
  ],
  companyInsights: [
    { role: "Quant / HFT (e.g., Jane Street, Tower, Optiver)", cgpa: "Strict, often 9.0+ or Top DR", focus: "Rapid mental math, flawless C++ implementation, probability puzzles, betting strategies. Communication is crucial." },
    { role: "Consult / Strategy (e.g., BCG, Bain, McKinsey)", cgpa: "8.0 - 8.5+ Preferred", focus: "Exceptional CVs (Leadership, Spikes), Buddy round performance, structured case solving, guesstimates." },
    { role: "Tech / Software (e.g., Microsoft, Salesforce)", cgpa: "7.0 - 7.5+", focus: "DSA (Trees, DP, Graphs), clean modular coding, deep understanding of CV projects (especially ML/Systems)." },
    { role: "Core Engineering (e.g., Texas Instruments, JLR)", cgpa: "7.0 - 7.5+", focus: "Core subject mastery (Digital Electronics, Verilog, Fluid Mechanics). OA performance is heavily weighted." }
  ]
};

// --- Shared Components ---
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, defaultOpen = false, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 px-5 text-left font-semibold text-lg text-slate-800 hover:bg-slate-50 transition duration-150 focus:outline-none"
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="w-5 h-5 text-[#0d2a3d]" />}
          <span className="text-balance">{title}</span>
        </div>
        <FiChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-2 text-slate-600 bg-slate-50/50">
          {content}
        </div>
      )}
    </div>
  );
};

const TableComponent: React.FC<TableComponentProps> = ({ headers, data, caption }) => (
  <div className="overflow-x-auto my-6 shadow-sm rounded-xl border border-slate-200">
    <table className="min-w-full divide-y divide-slate-200">
      <caption className="py-3 px-5 text-lg font-semibold text-slate-800 bg-slate-50 border-b border-slate-200">
        {caption}
      </caption>
      <thead className="bg-[#0d2a3d] text-white">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-slate-100">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-sky-50/50 transition duration-150">
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className={`px-6 py-4 text-sm ${cellIndex === 0 ? 'font-semibold text-[#0d2a3d] whitespace-nowrap' : 'text-slate-700 min-w-[200px]'}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- Tab Components ---
const PrepResourcesTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#65a3d4] pb-3 inline-block">Domain-Specific Preparation</h3>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition duration-300 hover:shadow-md hover:border-[#65a3d4]">
        <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">
          <div className="p-2 bg-[#0d2a3d]/10 rounded-lg">
            <FiCpu className="text-[#0d2a3d] w-6 h-6"/>
          </div>
          <h4 className="text-xl font-bold text-slate-800">Quant / HFT</h4>
        </div>
        <ul className="space-y-3 text-slate-600 list-disc pl-5 marker:text-[#65a3d4]">
          {internshipData.prepResources.quant.map((item, i) => (
             <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition duration-300 hover:shadow-md hover:border-[#65a3d4]">
        <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">
          <div className="p-2 bg-[#0d2a3d]/10 rounded-lg">
            <FiCode className="text-[#0d2a3d] w-6 h-6"/>
          </div>
          <h4 className="text-xl font-bold text-slate-800">Software / Tech</h4>
        </div>
        <ul className="space-y-3 text-slate-600 list-disc pl-5 marker:text-[#65a3d4]">
          {internshipData.prepResources.tech.map((item, i) => (
             <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition duration-300 hover:shadow-md hover:border-[#65a3d4]">
        <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">
          <div className="p-2 bg-[#0d2a3d]/10 rounded-lg">
            <FiBriefcase className="text-[#0d2a3d] w-6 h-6"/>
          </div>
          <h4 className="text-xl font-bold text-slate-800">Consult / Strategy</h4>
        </div>
        <ul className="space-y-3 text-slate-600 list-disc pl-5 marker:text-[#65a3d4]">
          {internshipData.prepResources.consulting.map((item, i) => (
             <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

    </div>
  </div>
);

const SelectionProcessTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#65a3d4] pb-3 inline-block">The Standard Selection Pipeline</h3>
    <div className="relative border-l-2 border-slate-200 pl-8 space-y-10 mt-8 ml-4">
      {internshipData.selectionProcess.map((step, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[41px] top-1 flex items-center justify-center w-10 h-10 bg-[#0d2a3d] rounded-full text-white shadow-md border-4 border-white">
            <FiTarget className="w-4 h-4" />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition duration-300 hover:shadow-md hover:border-[#65a3d4]">
            <h4 className="text-xl font-bold text-slate-800 mb-3">{step.stage}</h4>
            <p className="text-slate-600 leading-relaxed">{step.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CompanyInsightsTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#65a3d4] pb-3 inline-block">Role & Company Insights</h3>
    <p className="text-slate-600 text-lg">A quick breakdown of expectations and CGPA cutoffs based on historical data from the BSW Bluebook.</p>
    <TableComponent
      headers={["Profile Types", "CGPA Expectation", "Core Focus Areas"]}
      data={internshipData.companyInsights}
      caption="Industry Expectations Summary"
    />
  </div>
);

// --- Main Page Component ---
const InternshipGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Prep Resources');

  const tabs: Tab[] = [
    { name: 'Prep Resources', component: PrepResourcesTab, icon: FiBookOpen },
    { name: 'Selection Process', component: SelectionProcessTab, icon: FiTarget },
    { name: 'Role Insights', component: CompanyInsightsTab, icon: FiUsers },
  ];

  const ActiveComponent = tabs.find(t => t.name === activeTab)?.component || PrepResourcesTab;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Custom CSS-based Professional Hero Section */}
      <section className="relative bg-[#0d2a3d] overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#164360] opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#65a3d4] opacity-20 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#164360] text-[#8abce0] text-sm font-semibold mb-6 tracking-wide uppercase">
              <FiBriefcase className="w-4 h-4" />
              <span>BSW Initiative</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Internship <span className="text-[#65a3d4]">Preparation</span> Guide
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              The ultimate distillation of preparation strategies, company pipelines, and role-specific insights curated from the IITD BSW Bluebook.
            </p>
            <a 
              href="/path-to-your-bsw-bluebook.pdf" 
              download="Bluebook_BSW_IITD.pdf"
              className="inline-flex items-center justify-center gap-3 bg-[#65a3d4] hover:bg-[#528ebf] text-[#0d2a3d] px-8 py-3.5 rounded-lg font-bold text-lg shadow-lg shadow-[#65a3d4]/20 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <FiDownload className="w-5 h-5" />
              Download Bluebook PDF
            </a>
          </div>
          
          {/* Decorative Graphic for right side */}
          <div className="hidden md:block md:w-1/3 z-10">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#164360] to-[#65a3d4] rounded-2xl rotate-6 opacity-80 shadow-2xl"></div>
              <div className="absolute inset-0 bg-[#0a1e2c] rounded-2xl flex items-center justify-center border border-[#164360] shadow-xl">
                 <FiBookOpen className="w-24 h-24 text-[#65a3d4] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 -mt-8 relative z-20">
        
        {/* Professional Tab Navigation */}
        <div className="bg-white p-2 rounded-xl shadow-md border border-slate-200 mb-8 flex overflow-x-auto hide-scrollbar">
          <nav className="flex space-x-2 w-full" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`${
                  activeTab === tab.name 
                  ? 'bg-[#0d2a3d] text-white shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-[#0d2a3d]'
                } flex-1 flex items-center justify-center px-4 py-3 font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 whitespace-nowrap min-w-[160px]`}
              >
                <tab.icon className={`w-5 h-5 mr-2 ${activeTab === tab.name ? 'text-[#65a3d4]' : 'text-slate-400'}`} />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content Render */}
        <main className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden p-6 md:p-8">
          <ActiveComponent />
        </main>
        
      </div>
    </div>
  );
};

export default InternshipGuide;