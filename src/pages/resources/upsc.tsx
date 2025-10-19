import React, { useState } from 'react';
import { ChevronDown, BookOpen, Clock, Users, CalendarDays, Zap } from 'lucide-react';

// --- Data Structure (Derived from User Input) ---

const initialData = {
  overview: {
    title: "Examination Overview",
    content: [
      "The UPSC Civil Services Examination (CSE) is conducted in three sequential stages:",
      "1. Prelims (Preliminary Examination): Objective type (MCQs).",
      "2. Mains (Written Examination): Written, descriptive/essay type, including case studies.",
      "3. Interview (Personality Test): Viva voce."
    ]
  },
  prelims: {
    structure: [
      { paper: "Paper I", subject: "General Studies", questions: 100, marks: 200, duration: "2 Hours", cutoff: "Yes (for merit shortlisting)" },
      { paper: "Paper II", subject: "CSAT (Aptitude)", questions: 80, marks: 200, duration: "2 Hours", cutoff: "Qualifying only (33%)" }
    ],
    cutoff: [
      "**CSAT (Paper II)** must be cleared with minimum **66 marks** (33% of 200).",
      "Your score in **GS Paper I** must be above the cut-off (general range is **90-120 marks**).",
      "Only if both conditions are met are you selected for Mains."
    ],
    syllabus: [
      { title: "GS Paper I Syllabus", content: ["Current Affairs (National & International)", "History (Ancient, Medieval, Modern India)", "Geography (Indian & World)", "Polity (Governance & Constitution)", "Economy (Economic & Social Development)", "Environment (Ecology, Biodiversity)", "Science and Tech (Basic + Current Developments)"] },
      { title: "CSAT Paper II Syllabus", content: ["Comprehension", "Logical Reasoning", "Numeracy", "Data Interpretation"] }
    ],
    materials: [
      { title: "Polity", books: ["**Indian Polity** by M. Laxminath", "NCERT political science classes 9-12", "**Introduction to the Constitution of India** by D.D. Basu"] },
      { title: "History", books: ["**History of Modern India** by Bipan Chandra (Modern Hisotry)", "**History of Medivial India** by Satish Chandra (Medieval)", "**India's Ancient Past** by R.S. Sharma (Ancient)", "NCERT books 6-12 (for comprehensive coverage)"] },
      { title: "Geography", books: ["NCERT geography textbook (6-12)", "**Geography of India** by Majid Husain", "**Certificate Physical and Human Geography** by Goh Cheng Leong", "Oxford Student Atlas"] },
      { title: "Economics", books: ["Primary Resource: **Indian Economy** by Ramesh Singh", "NCERT book 9-12", "**Economics Survey** (latest Edition)", "**Union Budget** documents"] },
      { title: "Environment", books: ["**Environment** by Shankar IAS Academy (10th Edition)", "NCERT Biology chapters on ecology", "Down to Earth Magazine, MoEF website"] },
      { title: "Science and Technology", books: ["Basics: NCERTs class 6-12", "Current affairs from PIB, ISRO, DRDO websites", "Focus on current developments in the sector"] },
      { title: "Current Affairs", books: ["**Daily Sources:** The Hindu, Indian Express, Press Information Bureau (PIB)", "**Monthly Compilations:** Vision IAS (PT 365, Monthly magazines), Rau's Focus Magazine"] }
    ]
  },
  mains: {
    structure: [
      { paper: "Paper A", subject: "Indian Language (8th Schedule)", marks: 300, nature: "Qualifying" },
      { paper: "Paper B", subject: "English", marks: 300, nature: "Qualifying" },
      { paper: "Paper I", subject: "Essay", marks: 250, nature: "Merit" },
      { paper: "Paper II", subject: "General Studies I", marks: 250, nature: "Merit" },
      { paper: "Paper III", subject: "General Studies II", marks: 250, nature: "Merit" },
      { paper: "Paper IV", subject: "General Studies III", marks: 250, nature: "Merit" },
      { paper: "Paper V", subject: "General Studies IV (Ethics)", marks: 250, nature: "Merit" },
      { paper: "Paper VI", subject: "Optional Paper I", marks: 250, nature: "Merit" },
      { paper: "Paper VII", subject: "Optional Paper II", marks: 250, nature: "Merit" },
    ],
    qualifying: [
      { title: "Paper A – Indian Language", content: ["Essay writing", "Translation (English ↔ Regional Language)", "Precis writing", "Grammar and comprehension"] },
      { title: "Paper B – English", content: ["Essay", "Comprehension", "Precis writing", "Grammar and vocabulary"] }
    ],
    gsSyllabus: [
      { title: "GS Paper I (Indian Heritage, History, Society, Geography)", content: ["Indian Art & Culture", "World History", "Modern Indian History & Freedom Struggle", "Indian Society (Population, Issues, Diversity)", "Indian & World Geography"] },
      { title: "GS Paper II (Polity, Governance, Social Justice, IR)", content: ["Constitution, Parliament, Judiciary", "Governance, Transparency, E-governance", "Welfare Schemes, NGOs, SHGs", "International Relations (IR)"] },
      { title: "GS Paper III (Economy, S&T, Environment, Security)", content: ["Indian Economy & Development, Infrastructure, Budget, Agriculture", "Science & Tech (ISRO, DRDO, Biotech)", "Environment, Biodiversity, Climate Change", "Internal Security, Cybersecurity, Disaster Management"] },
      { title: "GS Paper IV (Ethics, Integrity & Aptitude)", content: ["Ethics and Human Interface", "Attitude, Emotional Intelligence", "Moral Thinkers & Philosophers", "Public Service Values", "Case Studies (major component)"] }
    ],
    mainsCutoff: [
      "Paper A & B must be qualified (minimum 75/300 marks in each).",
      "Merit is based on the total score of **Essay + GS I–IV + Optional I & II** (total 1750 marks)."
    ],
    mainsMaterials: [
      { title: "IR (International Relations)", books: ["MEA website, IDSA, Current Affairs"] },
      { title: "Governance", books: ["Yojana, PIB, PRS"] },
      { title: "Security", books: ["Internal Security by Ashok Kumar, IDSA"] },
      { title: "Society", books: ["NCERT Sociology, Vision/Forum notes"] },
      { title: "Ethics (GS IV)", books: ["Lexicon, Subbarao, Focus on Case studies"] }
    ]
  },
  timeline: {
    plan: [
      { title: "Months 1–2: Foundation Phase (NCERT + Basics)", icon: BookOpen, activities: ["Polity: NCERTs + Laxmikanth", "History: NCERTs + Bipan Chandra, RS Sharma, Satish Chandra", "Geography: NCERTs + Goh Cheng Leong", "Economy: NCERTs + Ramesh Singh", "CSAT: Basic reasoning + comprehension (alt days)", "Current Affairs: Start Hindu/PIB + Vision Monthly"] },
      { title: "Months 3–4: Standard Sources + Optional Subject Finalization", icon: Zap, activities: ["Complete Laxmikanth, Majid Husain, Shankar IAS", "Start Economic Survey + Budget", "Finalize and begin Optional subject", "Continue CSAT practice + answer writing (1–2 Qs/day)", "Continue Current Affairs + monthly compilations"] },
      { title: "Months 5–6: Optional + Mains Writing Begins", icon: Users, activities: ["Focus on Optional Paper I", "Begin GS Mains answer writing (GS I–IV)", "Start Ethics: Lexicon + basic case studies", "Essay writing: 1 every 10 days", "Prelims MCQs topic-wise", "CSAT: 1 full mock every week"] },
      { title: "Months 7–8: Prelims + Optional Completion", icon: Clock, activities: ["Revise all GS subjects + attempt full-length Prelims mocks", "Finish Optional Paper II", "Revise PT365 and Economy Survey thoroughly", "CSAT: Full mock every 4 days"] },
      { title: "Months 9–10: Prelims Focus", icon: Zap, activities: ["Daily GS MCQ practice + mock every 2 days", "CSAT full mocks regularly", "Revise mistake logbook and current affairs"] },
      { title: "Months 11–13: Post-Prelims Mains Focus", icon: CalendarDays, activities: ["Full focus on GS I–IV, Essay, Ethics, Optional", "Daily answer writing + full-length tests", "Ethics: Thinkers + case studies", "Essay: 2 per week", "Optional: Revise both papers + attempt mocks", "CA: Use PRS, Yojana, MEA, IDSA for GS II & III enrichment"] },
      { title: "Post-Mains (Interview Prep)", icon: Users, activities: ["DAF-based questions preparation", "4–6 Mock Interviews", "Revise IR, Governance, Ethics, and opinion-based issues", "Daily Hindu reading + PIB updates"] }
    ]
  }
};

// --- Custom Components ---

const AccordionItem = ({ title, content, defaultOpen = false, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 px-4 text-left font-semibold text-lg text-gray-800 hover:bg-indigo-50 transition duration-150 rounded-t-lg focus:outline-none"
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="w-5 h-5 text-indigo-600" />}
          <span className="text-balance">{title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-indigo-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-2 text-gray-600 bg-gray-50 rounded-b-lg shadow-inner">
          {content}
        </div>
      )}
    </div>
  );
};

const TableComponent = ({ headers, data, caption }) => (
  <div className="overflow-x-auto my-4 shadow-lg rounded-lg border border-gray-100">
    <table className="min-w-full divide-y divide-gray-200">
      <caption className="py-2 px-4 text-lg font-medium text-indigo-800 bg-indigo-50 border-b border-indigo-200 rounded-t-lg">{caption}</caption>
      <thead className="bg-indigo-600 text-white">
        <tr>
          {headers.map((header, index) => (
            <th key={index} scope="col" className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50 transition duration-100">
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                {cellIndex === 1 ? <span className="font-semibold text-indigo-700">{cell}</span> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MaterialList = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    {items.map((item, index) => (
      <div key={index} className="bg-white p-5 border-l-4 border-indigo-500 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
        <h4 className="text-xl font-bold mb-2 text-indigo-800">{item.title}</h4>
        <ul className="space-y-2 text-gray-700 list-disc pl-5">
          {item.books.map((book, bIndex) => (
            <li key={bIndex} className="text-sm" dangerouslySetInnerHTML={{ __html: book }}></li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

// --- Main Tab Content Components ---

const OverviewTab = () => (
  <div className="space-y-6 p-6">
    <h3 className="text-3xl font-extrabold text-gray-900 border-b-2 border-indigo-500 pb-2">UPSC CSE Overview</h3>
    <div className="bg-indigo-50 p-6 rounded-xl shadow-inner border border-indigo-200">
      <h4 className="text-2xl font-bold text-indigo-700 mb-4">The Three Stages</h4>
      <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
        {initialData.overview.content.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ol>
    </div>
  </div>
);

const PrelimsTab = () => (
  <div className="space-y-6 p-6">
    <h3 className="text-3xl font-extrabold text-gray-900 border-b-2 border-indigo-500 pb-2">Stage 1: Preliminary Examination</h3>

    <div className="space-y-2">
      <h4 className="text-2xl font-bold text-indigo-700">Exam Structure</h4>
      <TableComponent
        headers={["Paper", "Subject", "Questions", "Marks", "Duration", "Cut-off Consideration"]}
        data={initialData.prelims.structure}
        caption="UPSC Prelims Paper Pattern"
      />
    </div>

    <AccordionItem
      title="Prelims Cut-off Summary"
      icon={Zap}
      content={
        <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
          {initialData.prelims.cutoff.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ul>
      }
    />

    <AccordionItem
      title="Detailed Prelims Syllabus"
      icon={BookOpen}
      content={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {initialData.prelims.syllabus.map((section, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-indigo-700">{section.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      }
    />

    <AccordionItem
      title="Recommended Study Material - Prelims"
      icon={BookOpen}
      defaultOpen={true}
      content={<MaterialList items={initialData.prelims.materials} />}
    />

  </div>
);

const MainsTab = () => (
  <div className="space-y-6 p-6">
    <h3 className="text-3xl font-extrabold text-gray-900 border-b-2 border-indigo-500 pb-2">Stage 2: Main Examination</h3>

    <div className="space-y-2">
      <h4 className="text-2xl font-bold text-indigo-700">Paper Structure (Total 9 Papers)</h4>
      <TableComponent
        headers={["Paper", "Subject", "Marks", "Nature"]}
        data={initialData.mains.structure}
        caption="UPSC Mains Paper Pattern (Total 1750 Merit Marks)"
      />
    </div>

    <AccordionItem
      title="Mains Cut-Off Criteria"
      icon={Zap}
      content={
        <ul className="list-disc list-inside space-y-1 ml-4 text-gray-700">
          {initialData.mains.mainsCutoff.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ul>
      }
    />

    <AccordionItem
      title="Detailed GS & Essay Syllabus"
      icon={BookOpen}
      defaultOpen={true}
      content={
        <div className="space-y-4">
           <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-indigo-700">Paper I – Essay (250 Marks)</h4>
              <p className="text-gray-600">Candidates write 2 essays (125 marks each) on topics ranging from abstract, philosophical to socio-political themes.</p>
            </div>
          {initialData.mains.gsSyllabus.map((section, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-indigo-700">{section.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
           <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-indigo-700">Optional Subject (Paper VI & VII)</h4>
              <p className="text-gray-600">Two papers (250 marks each) are taken on ONE optional subject chosen by the candidate from the list provided by UPSC.</p>
            </div>
        </div>
      }
    />

    <AccordionItem
      title="Qualifying Papers (Paper A & B)"
      icon={Users}
      content={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {initialData.mains.qualifying.map((section, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-bold mb-3 text-indigo-700">{section.title}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      }
    />

    <AccordionItem
      title="Recommended Material - Mains (GS Specific)"
      icon={BookOpen}
      content={<MaterialList items={initialData.mains.mainsMaterials} />}
    />

  </div>
);

const TimelineTab = () => (
  <div className="space-y-6 p-6">
    <h3 className="text-3xl font-extrabold text-gray-900 border-b-2 border-indigo-500 pb-2">1-Year Preparation Timeline</h3>
    <div className="relative border-l-4 border-indigo-400 pl-6 space-y-10">
      {initialData.timeline.plan.map((stage, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-8 top-0 flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full text-white shadow-lg">
            <stage.icon className="w-4 h-4" />
          </div>
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-xl hover:border-indigo-400">
            <h4 className="text-xl font-bold text-indigo-800 mb-3">{stage.title}</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              {stage.activities.map((activity, aIndex) => (
                <li key={aIndex} dangerouslySetInnerHTML={{ __html: activity }}></li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Main App Component ---

const App = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = [
    { name: 'Overview', component: OverviewTab, icon: BookOpen },
    { name: 'Prelims', component: PrelimsTab, icon: Zap },
    { name: 'Mains', component: MainsTab, icon: Users },
    { name: 'Timeline', component: TimelineTab, icon: Clock },
  ];

  const ActiveComponent = tabs.find(t => t.name === activeTab)?.component || OverviewTab;

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="bg-indigo-700 text-white shadow-lg p-6">
        <h1 className="text-4xl font-extrabold text-center tracking-tight">
          UPSC CSE Ultimate Guide
        </h1>
        <p className="text-center text-indigo-200 mt-2 text-lg">
          Complete Structure, Syllabus, Materials, and 1-Year Plan
        </p>
      </header>

      <div className="max-w-7xl mx-auto py-8">
        {/* Tab Navigation */}
        <div className="bg-white p-4 rounded-xl shadow-xl sticky top-0 z-10 border-b border-gray-200">
          <nav className="flex space-x-1 sm:space-x-4 justify-around" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`
                  ${activeTab === tab.name
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
                  }
                  flex items-center justify-center px-3 py-2 sm:px-4 sm:py-3 font-medium text-sm sm:text-lg rounded-xl transition duration-300 ease-in-out w-full sm:w-auto
                `}
              >
                <tab.icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <main className="mt-8 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <ActiveComponent />
        </main>
      </div>

      <footer className="py-4 text-center text-sm text-gray-500">
        UPSC Guide generated from provided content data. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
