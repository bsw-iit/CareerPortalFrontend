import React, { useState } from 'react';
import { 
  FiChevronDown, 
  FiBookOpen, 
  FiZap, 
  FiTrendingUp, 
  FiUsers, 
  FiShield, 
  FiDownload, 
  FiSend,
  FiBriefcase,
  FiEye
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
const startupData = {
  overview: {
    title: "Ecosystem Philosophy",
    content: [
      "At IIT Delhi, entrepreneurship is approached not as an end goal of company creation, but as a long-term capability developed through sustained exposure, structured experimentation, and mentorship.",
      "<strong>The Student's Journey:</strong> Awareness & Ideation → Validation & Pre-Incubation → MVP Development → Pitching & Incubation → Scale-Up.",
      "<strong>The Founder's Journey:</strong> Problem Discovery → Solution Design → Product Development → Market Entry + Fundraising → Growth & Scale."
    ]
  },
  ideation: {
    problems: [
      "Entrepreneurship begins with identifying meaningful problems. A strong startup problem typically:",
      "1. Occurs frequently in daily routines or industry operations.",
      "2. Affects a specific, identifiable group of users.",
      "3. Lacks a satisfactory existing solution.",
      "4. Causes real inconvenience or friction."
    ],
    founderQualities: [
      "Focus on user behavior rather than opinions.",
      "Listen to the target audience without pitching the idea initially.",
      "Avoid leading questions to get unbiased feedback."
    ]
  },
  mvp: {
    structure: [
      { step: "Rapid Prototyping", detail: "Use available technical resources, labs, and collaborative workspaces to build quickly." },
      { step: "MVP Planning", detail: "Define the minimum set of features required to test key assumptions, rather than building complete solutions." },
      { step: "Go-to-Market Thinking", detail: "Test the MVP in realistic environments rather than controlled settings for meaningful insights." },
      { step: "Rapid Iteration", detail: "Translate feedback into immediate action to reduce the cost of early mistakes." }
    ]
  },
  funding: {
    stages: [
      { type: "Grants & Fellowships", focus: "Non-dilutive funding for early-stage research/innovation. Ideal for deep-tech/social impact." },
      { type: "Competition Funding", focus: "Cash prizes from hackathons and pitch challenges. Great for visibility and validation." },
      { type: "Angel Investment", focus: "Early-stage equity funding providing mentorship and industry connections." },
      { type: "Venture Capital", focus: "For startups ready to scale rapidly post product-market fit. Comes with high growth expectations." }
    ],
    legal: [
      "<strong>Intellectual Property (IP):</strong> Protect ideas, technology, and branding.",
      "<strong>Incorporation:</strong> Required for fundraising, signing contracts, and hiring.",
      "<strong>Founder Agreements:</strong> Clear equity splits, roles, decision-making, and exit clauses.",
      "<strong>Compliance:</strong> Taxes, company law, employment, and data regulations."
    ]
  },
  resources: {
    facilities: [
      { title: "SInC (Student Incubation Cell)", points: ["Shared co-working spaces", "Access to labs and institute facilities", "Peer founder community", "Mentorship from alumni and faculty"] },
      { title: "FITT Incubation", points: ["Office spaces and advanced labs", "Investor access and corporate partnerships", "Technology transfer & patent filing support"] },
      { title: "BECon & Community", points: ["North India's largest student startup summit", "Hackathons, pitch competitions, and startup expos", "Regional ecosystem integration"] }
    ]
  }
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
          <tr key={rowIndex} className="hover:bg-teal-50/50 transition duration-150">
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
const IdeationTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#14b8a6] pb-3 inline-block">Ideation & Discovery</h3>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h4 className="text-xl font-bold text-[#0d2a3d] mb-4 flex items-center gap-2">
        <FiZap className="text-[#14b8a6]" />
        Finding the Right Problem
      </h4>
      <ul className="list-disc list-inside space-y-3 text-slate-600 marker:text-[#14b8a6]">
        {startupData.ideation.problems.map((item, index) => (
          <li key={index} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    </div>
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <AccordionItem
        title="Key Founder Qualities (User Research)"
        icon={FiUsers}
        defaultOpen={true}
        content={
          <ul className="list-disc list-inside space-y-3 mt-2 text-slate-600 marker:text-[#14b8a6]">
            {startupData.ideation.founderQualities.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
          </ul>
        }
      />
    </div>
  </div>
);

const MvpTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#14b8a6] pb-3 inline-block">MVP Development</h3>
    <p className="text-lg text-slate-600 bg-slate-50 p-4 rounded-lg border-l-4 border-[#14b8a6]">
      An MVP is not a smaller version of the final product. It is a learning tool designed to answer one key question: <strong>Will users actually use this?</strong>
    </p>
    <TableComponent
      headers={["Phase", "Focus & Details"]}
      data={startupData.mvp.structure}
      caption="Structured MVP Execution"
    />
  </div>
);

const FundingTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#14b8a6] pb-3 inline-block">Funding & Legal Foundations</h3>
    <TableComponent
      headers={["Funding Type", "Ideal Use Case"]}
      data={startupData.funding.stages}
      caption="Capital Pathways"
    />
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <AccordionItem
        title="Legal & Compliance Basics"
        icon={FiShield}
        defaultOpen={true}
        content={
          <ul className="list-disc list-inside space-y-3 mt-2 text-slate-600 marker:text-[#14b8a6]">
            {startupData.funding.legal.map((item, index) => (
               <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
            ))}
          </ul>
        }
      />
    </div>
  </div>
);

const ResourcesTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#14b8a6] pb-3 inline-block">Ecosystem Support</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {startupData.resources.facilities.map((facility, index) => (
        <div key={index} className="bg-white p-6 border-t-4 border-[#14b8a6] rounded-xl shadow-sm transition duration-300 hover:shadow-md">
          <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
             <div className="p-2 bg-[#0d2a3d]/10 rounded-lg">
                <FiBookOpen className="text-[#0d2a3d] w-5 h-5"/>
             </div>
            <h4 className="text-lg font-bold text-slate-800 leading-tight">{facility.title}</h4>
          </div>
          <ul className="space-y-2 text-slate-600 list-disc pl-5 marker:text-[#14b8a6]">
            {facility.points.map((point, pIndex) => <li key={pIndex} className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: point }}></li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Page Component ---
const StartupGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Ideation');

  const tabs: Tab[] = [
    { name: 'Ideation', component: IdeationTab, icon: FiZap },
    { name: 'MVP Build', component: MvpTab, icon: FiSend },
    { name: 'Funding', component: FundingTab, icon: FiTrendingUp },
    { name: 'Resources', component: ResourcesTab, icon: FiBookOpen },
  ];

  const ActiveComponent = tabs.find(t => t.name === activeTab)?.component || IdeationTab;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Custom CSS-based Professional Hero Section */}
      <section className="relative bg-[#0d2a3d] overflow-hidden">
        {/* Abstract Teal/Emerald Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#0f766e] opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#14b8a6] opacity-20 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f766e]/40 text-[#5eead4] text-sm font-semibold mb-6 tracking-wide uppercase border border-[#0f766e]">
              <FiBriefcase className="w-4 h-4" />
              <span>BSW Initiative</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Startup <span className="text-[#14b8a6]">Playbook</span> Guide
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              From problem discovery to scale-up: The complete founder's journey curated directly from the IITD Startup Playbook.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://bswcareerportal.iitd.ac.in/static/Startup_Playbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#14b8a6] hover:bg-[#0d9488] text-white px-8 py-3.5 rounded-lg font-bold text-lg shadow-lg shadow-[#14b8a6]/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FiEye className="w-5 h-5" />
                Preview Playbook
              </a>
              
              <a 
                href="https://bswcareerportal.iitd.ac.in/static/Startup_Playbook.pdf" 
                download="IITD_Startup_Playbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#14b8a6] hover:bg-[#14b8a6]/10 text-[#5eead4] px-8 py-3.5 rounded-lg font-bold text-lg transition-all duration-200"
              >
                <FiDownload className="w-5 h-5" />
                Download
              </a>
            </div>

          </div>
          
          {/* Decorative Graphic for right side */}
          <div className="hidden md:block md:w-1/3 z-10">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f766e] to-[#14b8a6] rounded-2xl rotate-6 opacity-80 shadow-2xl"></div>
              <div className="absolute inset-0 bg-[#0a1e2c] rounded-2xl flex items-center justify-center border border-[#0f766e] shadow-xl">
                 <FiSend className="w-24 h-24 text-[#14b8a6] opacity-80" />
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
                <tab.icon className={`w-5 h-5 mr-2 ${activeTab === tab.name ? 'text-[#14b8a6]' : 'text-slate-400'}`} />
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

export default StartupGuide;