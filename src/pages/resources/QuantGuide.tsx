import React, { useState } from 'react';
import { 
  FiChevronDown, 
  FiBookOpen, 
  FiTarget, 
  FiDownload, 
  FiCpu, 
  FiCode, 
  FiBriefcase,
  FiEye,
  FiBarChart2,
  FiClock,
  FiCrosshair
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
const quantData = {
  prepResources: {
    core: [
      "<strong>The Green Book (Xinfeng Zhou):</strong> The ultimate starting point for probability, Expected Value (EV), and core quant fundamentals.",
      "<strong>Brainstellar & PuzzledQuant:</strong> Essential platforms to build speed in puzzle-solving and recognize standard logical patterns.",
      "<strong>50 Challenging Problems in Probability:</strong> Critical for mastering conditional probability, variance, and expectation.",
      "<strong>QuantGuide.io:</strong> Highly recommended for building intuition across a wide range of quantitative problems."
    ],
    advanced: [
      "<strong>Heard on the Street (Timothy Falcon Crack):</strong> Blends quant questions with logic brain teasers from top hedge funds.",
      "<strong>Peter Winkler (Mathematical Puzzles):</strong> Advanced prep; many online assessment and interview questions are directly inspired by these.",
      "<strong>FAQ in Quantitative Finance (Paul Wilmott):</strong> Brilliant breakdown of math, models, and industry practices for late-stage QR interviews."
    ],
    mentalMath: [
      "<strong>TradeMath:</strong> The best free platform for rapid-fire mental math. Practice until you consistently score 80+.",
      "<strong>OpenQuant (Game Room):</strong> The ultimate tool for exact OA replicas. Simulates the Optiver '80 in 8' test, sequence tests, and the Da Vinci 16-min quiz.",
      "<strong>TradingInterview.com:</strong> Market-making games to build intuition for pricing and spreads."
    ]
  },
  techStack: {
    dsa: [
      "<strong>Codeforces:</strong> Target a 1600-1700+ rating for competitive programming proficiency.",
      "<strong>CSES Problem Set:</strong> Mandatory for structured DSA practice (Graphs, Trees, DP).",
      "<strong>LeetCode / Striver:</strong> For standard, structured DSA-focused problem patterns."
    ],
    systems: [
      "<strong>C++ Mastery:</strong> Deep understanding of memory allocation, pointers, and OOP fundamentals for low-latency roles (Use learncpp.com).",
      "<strong>Core OS & Architecture:</strong> Operating Systems (OSTEP), Computer Architecture (Patterson & Hennessy).",
      "<strong>Networks:</strong> Deep understanding of networking protocols (Kurose & Ross)."
    ],
    machineLearning: [
      "<strong>Theory:</strong> Andrew Ng ML Specialization / CS229 / StatQuest on YouTube.",
      "<strong>Coding:</strong> Hands-On ML (Géron), CampusX 100 Days of ML.",
      "<strong>Key Metrics:</strong> Deep understanding of F1 scores, bagging, bootstrapping, and regression assumptions."
    ]
  },
  strategies: [
    { stage: "Think Out Loud", details: "Communication is an evaluation metric. Articulate your thought process continuously. How you break down a problem is often more important than the perfect answer." },
    { stage: "Embrace the Hints", details: "Interviews are designed to push you until you're stuck. The key metric is your ability to catch, understand, and build upon hints. Treat it as a collaborative discussion." },
    { stage: "Mental Math Speed", details: "Speed and accuracy under pressure are vital in initial rounds. Practice fast mental math and estimation without relying on paper or calculators." },
    { stage: "Group Discussions (GDs)", details: "Quant GDs are often market-making games or strategy simulations. Be confident, proactive, and mathematically aggressive. Explain your strategy clearly." }
  ],
  programs: [
    { program: "Jane Street (FTTP & SEE)", dates: "May & July", focus: "OCaml immersion, mock trading, and the famous 'Estimathon' (Fermi problems)." },
    { program: "Optiver (Future Focus)", dates: "June", focus: "5-day immersive shadowing traders, building a Python autotrader for market-making." },
    { program: "Citadel Securities (The Terminal)", dates: "March", focus: "Virtual, week-long competitive software engineering and game-theory coding challenge." },
    { program: "WorldQuant BRAIN (IQC)", dates: "March - May", focus: "Global team competition building predictive mathematical signals (alphas) using historical data." },
    { program: "Jump Trading (Winter Intern)", dates: "Dec - Feb", focus: "10-week full-cycle engineering, highly distributed low-latency C++ and Python systems." },
    { program: "IMC Trading (Launchpad)", dates: "May", focus: "2-day discovery event with real-time trading simulations and algorithmic optimization." }
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
          <tr key={rowIndex} className="hover:bg-orange-50/50 transition duration-150">
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
const ResourcesTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#ea580c] pb-3 inline-block">Preparation Resources</h3>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition duration-300 hover:shadow-md hover:border-[#ea580c]">
        <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">
          <div className="p-2 bg-[#0d2a3d]/10 rounded-lg">
            <FiBookOpen className="text-[#0d2a3d] w-6 h-6"/>
          </div>
          <h4 className="text-xl font-bold text-slate-800">Core Puzzles</h4>
        </div>
        <ul className="space-y-3 text-slate-600 list-disc pl-5 marker:text-[#ea580c]">
          {quantData.prepResources.core.map((item, i) => (
             <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition duration-300 hover:shadow-md hover:border-[#ea580c]">
        <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">
          <div className="p-2 bg-[#0d2a3d]/10 rounded-lg">
            <FiTarget className="text-[#0d2a3d] w-6 h-6"/>
          </div>
          <h4 className="text-xl font-bold text-slate-800">Advanced Prep</h4>
        </div>
        <ul className="space-y-3 text-slate-600 list-disc pl-5 marker:text-[#ea580c]">
          {quantData.prepResources.advanced.map((item, i) => (
             <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition duration-300 hover:shadow-md hover:border-[#ea580c]">
        <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">
          <div className="p-2 bg-[#0d2a3d]/10 rounded-lg">
            <FiClock className="text-[#0d2a3d] w-6 h-6"/>
          </div>
          <h4 className="text-xl font-bold text-slate-800">Mental Math</h4>
        </div>
        <ul className="space-y-3 text-slate-600 list-disc pl-5 marker:text-[#ea580c]">
          {quantData.prepResources.mentalMath.map((item, i) => (
             <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>

    </div>
  </div>
);

const TechStackTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#ea580c] pb-3 inline-block">Tech Stack & Systems</h3>
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mt-4">
      <AccordionItem
        title="Competitive Programming & DSA"
        icon={FiCode}
        defaultOpen={true}
        content={
          <ul className="list-disc list-inside space-y-3 mt-2 text-slate-600 marker:text-[#ea580c]">
            {quantData.techStack.dsa.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
          </ul>
        }
      />
      <AccordionItem
        title="C++ & Low-Level Systems"
        icon={FiCpu}
        content={
          <ul className="list-disc list-inside space-y-3 mt-2 text-slate-600 marker:text-[#ea580c]">
            {quantData.techStack.systems.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
          </ul>
        }
      />
      <AccordionItem
        title="Machine Learning & Stats"
        icon={FiBarChart2}
        content={
          <ul className="list-disc list-inside space-y-3 mt-2 text-slate-600 marker:text-[#ea580c]">
            {quantData.techStack.machineLearning.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
          </ul>
        }
      />
    </div>
  </div>
);

const StrategyTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#ea580c] pb-3 inline-block">Interview Strategy</h3>
    <div className="relative border-l-2 border-slate-200 pl-8 space-y-10 mt-8 ml-4">
      {quantData.strategies.map((step, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-[41px] top-1 flex items-center justify-center w-10 h-10 bg-[#0d2a3d] rounded-full text-white shadow-md border-4 border-white">
            <FiCrosshair className="w-4 h-4" />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition duration-300 hover:shadow-md hover:border-[#ea580c]">
            <h4 className="text-xl font-bold text-slate-800 mb-3">{step.stage}</h4>
            <p className="text-slate-600 leading-relaxed">{step.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProgramsTab: React.FC = () => (
  <div className="space-y-6 animate-fadeIn">
    <h3 className="text-2xl font-bold text-slate-800 border-b-2 border-[#ea580c] pb-3 inline-block">Global Immersion Programs</h3>
    <p className="text-slate-600 text-lg">A quick breakdown of global programs, contests, and immersion opportunities available to students.</p>
    <TableComponent
      headers={["Program & Firm", "Expected Timeline", "Core Focus"]}
      data={quantData.programs}
      caption="Top-Tier Quantitative Finance Programs"
    />
  </div>
);

// --- Main Page Component ---
const QuantGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Resources');

  const tabs: Tab[] = [
    { name: 'Resources', component: ResourcesTab, icon: FiBookOpen },
    { name: 'Tech Stack', component: TechStackTab, icon: FiCpu },
    { name: 'Strategy', component: StrategyTab, icon: FiTarget },
    { name: 'Programs', component: FiBarChart2, icon: FiBriefcase },
  ];

  const ActiveComponent = tabs.find(t => t.name === activeTab)?.component || ResourcesTab;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Custom CSS-based Professional Hero Section */}
      <section className="relative bg-[#0d2a3d] overflow-hidden">
        {/* Abstract Amber/Orange Background Shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#c2410c] opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#ea580c] opacity-20 blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c2410c]/30 text-[#fdba74] text-sm font-semibold mb-6 tracking-wide uppercase border border-[#c2410c]">
              <FiBriefcase className="w-4 h-4" />
              <span>BSW Initiative</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Quant 101 <span className="text-[#ea580c]">Preparation</span> Guide
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
              Your comprehensive roadmap to quantitative finance. Master mental math, system design, and interview logic curated from the IITD Quant 101 guide.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://bswcareerportal.iitd.ac.in/static/Quant101_Guide_BSW_IITD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white px-8 py-3.5 rounded-lg font-bold text-lg shadow-lg shadow-[#ea580c]/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FiEye className="w-5 h-5" />
                Preview Quant Guide
              </a>
              
              <a 
                href="https://bswcareerportal.iitd.ac.in/static/Quant101_Guide_BSW_IITD.pdf" 
                download="Quant101_Guide_BSW_IITD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#ea580c] hover:bg-[#ea580c]/10 text-[#fdba74] px-8 py-3.5 rounded-lg font-bold text-lg transition-all duration-200"
              >
                <FiDownload className="w-5 h-5" />
                Download
              </a>
            </div>

          </div>
          
          {/* Decorative Graphic for right side */}
          <div className="hidden md:block md:w-1/3 z-10">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#c2410c] to-[#ea580c] rounded-2xl rotate-6 opacity-80 shadow-2xl"></div>
              <div className="absolute inset-0 bg-[#0a1e2c] rounded-2xl flex items-center justify-center border border-[#c2410c] shadow-xl">
                 <FiBarChart2 className="w-24 h-24 text-[#ea580c] opacity-80" />
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
                <tab.icon className={`w-5 h-5 mr-2 ${activeTab === tab.name ? 'text-[#ea580c]' : 'text-slate-400'}`} />
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

export default QuantGuide;