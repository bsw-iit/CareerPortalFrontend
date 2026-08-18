export type CompanyStory = {
  insight: {
    quote: string;
    person: string;
    role: string;
    academic: string;
  };
  process: string[];
};

// Condensed from the BSW IIT Delhi Bluebook. Quotes are kept short and
// attributed exactly as far as the source allows; several entries are anonymous.
export const companyStories: Record<string, CompanyStory> = {
  "Jane Street": {
    insight: {
      quote: "They really judge your thought process, so make sure to write it down clearly.",
      person: "Savya Goel",
      role: "Quant Trader / Researcher",
      academic: "B.Tech · Computer Science & Engineering · Year not reported",
    },
    process: ["Online assessment", "Group discussion", "Two technical interviews"],
  },
  Optiver: {
    insight: {
      quote: "Clearly explain your thought process out loud without hesitating.",
      person: "Aniket Gupta",
      role: "Quantitative Trading Intern",
      academic: "M.Tech · Mathematics & Computing · Year not reported",
    },
    process: ["Two online tests", "Trading group discussion", "Technical interview", "Behavioural interview"],
  },
  "IMC Trading": {
    insight: {
      quote: "Treat your interviews like a chill discussion, not an interrogation.",
      person: "Nihal Popat",
      role: "Trading / SDE Intern",
      academic: "B.Tech · Computer Science & Engineering · Year not reported",
    },
    process: ["Role-specific online tests", "Group discussion", "Technical rounds", "HR interview"],
  },
  "Tower Research": {
    insight: {
      quote: "Active participation and maintaining a clear, logical chain of thought are crucial for standing out.",
      person: "Anonymous Bluebook respondent",
      role: "Quant Researcher / Developer",
      academic: "Department and year not reported",
    },
    process: ["Two-hour HackerRank test", "C++ and project interview", "Two quant interviews"],
  },
  Graviton: {
    insight: {
      quote: "Be thorough with DSA, but don't neglect your computer architecture fundamentals.",
      person: "Anonymous Bluebook respondent",
      role: "Quant / Systems Intern",
      academic: "M.Tech · Computer Science & Engineering · Year not reported",
    },
    process: ["Pen-and-paper test", "Two to three technical interviews", "Optional HR round"],
  },
  Quadeye: {
    insight: {
      quote: "Do not just prepare for the technical rounds; you must practice your speaking skills as well.",
      person: "Anonymous Bluebook respondent",
      role: "Quantitative Trading Intern",
      academic: "Department and year not reported",
    },
    process: ["CV / CG shortlist", "Online assessment", "Two technical interviews"],
  },

  "McKinsey & Company": {
    insight: {
      quote: "Your CV only gets you through the door, not the offer.",
      person: "Anonymous Bluebook respondent",
      role: "Business Analyst Intern",
      academic: "Department and year not reported",
    },
    process: ["CV shortlist", "Buddy and partner cases", "Final case + fit interview"],
  },
  BCG: {
    insight: {
      quote: "Rapid improvement based on feedback is closely observed.",
      person: "Anonymous Bluebook respondent",
      role: "Consulting Intern",
      academic: "Department and year not reported",
    },
    process: ["CV shortlist", "Buddy rounds", "Three final interviews"],
  },
  "Bain & Company": {
    insight: {
      quote: "Candidates are expected to demonstrate comfort with real-world business thinking, not just structured frameworks.",
      person: "Anonymous Bluebook respondent",
      role: "Associate Consultant Intern",
      academic: "Department and year not reported",
    },
    process: ["CV, CGPA, test and essay", "Buddy rounds", "Two to four final interviews"],
  },
  "Strategy&": {
    insight: {
      quote: "The most important things are your case-solving ability, good communication, and just being confident.",
      person: "Anonymous Bluebook respondent",
      role: "Summer Associate",
      academic: "Department and year not reported",
    },
    process: ["CV shortlist", "Buddy call and case", "Two partner interviews"],
  },
  KPMG: {
    insight: {
      quote: "Staying calm, being authentic, and expressing your thoughts clearly often leaves a stronger impression.",
      person: "Anonymous Bluebook respondent",
      role: "Associate Consultant Intern",
      academic: "Department and year not reported",
    },
    process: ["Group discussion", "Partner interview", "HR interview", "Technical / case interview"],
  },
  Accenture: {
    insight: {
      quote: "Have faith in yourself and your CV.",
      person: "Anonymous Bluebook respondent",
      role: "Delivery Associate",
      academic: "Department and year not reported",
    },
    process: ["Aptitude test", "CV-based technical interview", "HR interview", "Possible case discussion"],
  },

  NVIDIA: {
    insight: {
      quote: "During the interview, they cared more about how I think rather than my final answers.",
      person: "Apporva Saraf",
      role: "ASIC Intern",
      academic: "Electrical Engineering · Year not reported",
    },
    process: ["30-minute online assessment", "Test review", "Technical interview"],
  },
  Qualcomm: {
    insight: {
      quote: "Just do all the basic core revision during vacations for all companies.",
      person: "Apoorv Sharma",
      role: "Hardware Intern",
      academic: "B.Tech · Electrical Engineering · Year not reported",
    },
    process: ["Hardware or software test", "Single technical interview"],
  },
  "Texas Instruments": {
    insight: {
      quote: "Your CGPA and test performance are the most important factors.",
      person: "Tripti Sahu",
      role: "Analog Intern",
      academic: "B.Tech · Electrical Engineering · Year not reported",
    },
    process: ["Aptitude + two domain tests", "Technical interview"],
  },
  "Jaguar Land Rover": {
    insight: {
      quote: "Own your CV and present it clearly.",
      person: "Anonymous Bluebook respondent",
      role: "Powertrain / Mechatronics / Software Intern",
      academic: "Department and year not reported",
    },
    process: ["Aptitude test", "Role-specific technical test", "Technical + CV interview"],
  },
  "Hindustan Unilever": {
    insight: {
      quote: "What helped me stand out was my genuine interest in factories, chemistry, and how things work in real life.",
      person: "Vaibhav Pandey",
      role: "R&D (ULIP) Intern",
      academic: "B.Tech · Department and year not reported",
    },
    process: ["Application + CV shortlist", "Psychometric and aptitude test", "Video response", "Role interview"],
  },
  "Piramal Pharma": {
    insight: {
      quote: "Whatever you do, you must have the skill to present it really well in the interview.",
      person: "Stuti Upadhyay",
      role: "Global Emerging Leader Intern",
      academic: "B.Tech · Chemical Engineering · Year not reported",
    },
    process: ["Online test", "Group discussion", "Final interview"],
  },

  LinkedIn: {
    insight: {
      quote: "Consistency matters far more than intensity.",
      person: "Anonymous Bluebook respondent",
      role: "Software Engineering Intern",
      academic: "B.Tech · Computer Science & Engineering · Year not reported",
    },
    process: ["DSA online test", "Technical interview", "HR / personal interview"],
  },
  Microsoft: {
    insight: {
      quote: "Approach and clarity often matter more than the final code.",
      person: "Anonymous Bluebook respondent",
      role: "Software Development Intern",
      academic: "Department and year not reported",
    },
    process: ["One-hour online assessment", "Technical + behavioural interview"],
  },
  Salesforce: {
    insight: {
      quote: "Don't fake answers; honesty and self-awareness are valued more than rehearsed responses.",
      person: "Anonymous Bluebook respondent",
      role: "AMTS Intern",
      academic: "Department and year not reported",
    },
    process: ["HackerRank assessment", "Online technical interview", "Tech Accelerator", "Final interview"],
  },
  "D. E. Shaw": {
    insight: {
      quote: "Be prepared to explain every point on your CV clearly and in depth.",
      person: "Anonymous Bluebook respondent",
      role: "Technology Developer Intern",
      academic: "Department and year not reported",
    },
    process: ["CV / CGPA shortlist", "HackerRank test", "Two technical interviews"],
  },
  Samsung: {
    insight: {
      quote: "Focus on DP, graphs, and trees, and include data-structure-centric projects in your CV.",
      person: "Himanshu",
      role: "Associate Engineer",
      academic: "B.Tech · Mathematics & Computing · Year not reported",
    },
    process: ["CGPA + CV shortlist", "Three-hour coding test", "HR interview", "Technical interview"],
  },
  Flipkart: {
    insight: {
      quote: "While solving a problem, continuously explain your thought process.",
      person: "Anonymous Bluebook respondent",
      role: "Software Engineering Intern",
      academic: "Department and year not reported",
    },
    process: ["DSA online test", "Technical interview", "Technical + HR interview"],
  },

  Mastercard: {
    insight: {
      quote: "Good projects combined with solid domain knowledge make a big difference in technical interviews.",
      person: "Anonymous Bluebook respondent",
      role: "Data Science / AI-ML Intern",
      academic: "Department and year not reported",
    },
    process: ["CV / CG shortlist", "Aptitude + ML + DSA test", "Two technical interviews", "HR interview"],
  },
  "American Express": {
    insight: {
      quote: "Look into what factors go into making a fraud detection model.",
      person: "Anonymous Bluebook respondent",
      role: "Data Science / AI-ML Intern",
      academic: "Department and year not reported",
    },
    process: ["One-hour technical test", "Technical + strategy interview", "HR interview"],
  },
  Barclays: {
    insight: {
      quote: "Be prepared to discuss every single line in detail.",
      person: "Anonymous Bluebook respondent",
      role: "Data Analyst Intern",
      academic: "Department and year not reported",
    },
    process: ["CV / CG shortlist", "Aptitude + psychometric test", "Technical / situational interview", "HR interview"],
  },
  Eightfold: {
    insight: {
      quote: "Consistency in practice matters the most.",
      person: "Anonymous Bluebook respondent",
      role: "Data Science / AI-ML Intern",
      academic: "Department and year not reported",
    },
    process: ["CV shortlist", "One-hour coding test", "Two technical interviews", "HR interview"],
  },
  "Info Edge": {
    insight: {
      quote: "It is okay to clearly say that you haven't studied a topic yet and that you are willing to learn it.",
      person: "Krish Goel",
      role: "Data Science / AI-ML Intern",
      academic: "B.Tech · Electrical Engineering · Year not reported",
    },
    process: ["Online test", "Three technical interviews", "HR interview"],
  },
  Accertify: {
    insight: {
      quote: "Clearly communicate your work and understanding during interviews, especially while explaining projects.",
      person: "Anonymous Bluebook respondent",
      role: "Data Science / AI-ML Intern",
      academic: "Department and year not reported",
    },
    process: ["Pen-and-paper test", "Aptitude + technical interview", "Project interview", "Director round"],
  },
};
