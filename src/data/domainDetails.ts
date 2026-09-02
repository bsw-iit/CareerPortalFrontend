import type { DomainDetailData } from "../components/DomainDetail";
import aiImage from "../assets/landing/ai-ml.webp";
import analyticsImage from "../assets/landing/analytics.webp";
import consultImage from "../assets/landing/consult.jpg";
import cvImage from "../assets/landing/cv.jpg";
import interviewImage from "../assets/landing/Interview.jpg";
import researchImage from "../assets/landing/research.jpg";
import startupImage from "../assets/landing/Resource.jpg";
import timelineData from "../assets/TimelineProfile.json";
import { companyStories } from "./companyInsights";
import { preparationGuides } from "./preparationGuides";
import { resourceGuides } from "./resourceGuides";

// Timelines must come from the old BSW dataset; leave the field absent when
// that dataset has no matching career profile.

const company = (name: string, domain: string, note: string) => ({
  name,
  domain,
  note,
  ...companyStories[name],
});

const sharedIntro = "A clear-eyed field guide: what the work is, what it asks of you, and the routes IIT Delhi students have taken into it.";

export const domainDetails: Record<string, DomainDetailData> = {
  "Explore different careers": {
    title: "Explore different careers",
    label: "A place to begin",
    intro: "You do not need to have it all figured out. Start with the kind of problems you enjoy, then follow the evidence.",
    question: "Not sure which path sounds like you yet?",
    answer: "Career exploration is a process of elimination as much as discovery. Compare the work, speak to seniors, try a small project or competition, and pay attention to the problems that keep pulling you back.",
    videos: [
      {
        id: "9g8GEOWqLoo",
        title: "How to explore non-core careers through internships",
        summary: "A panel covering analytics, consulting, product and business roles explains how to test your interests and find off-campus opportunities.",
      },
      {
        id: "TPOMKBhLUyo",
        title: "Why your first job matters",
        summary: "Jugnoo founder Samar Singla discusses how an early role shapes skills, judgement and the opportunities that follow.",
      },
    ],
    companies: [],
    alternateImage: cvImage,
  },
  Consulting: {
    title: "Consulting",
    label: "Strategy · people · decisions",
    intro: sharedIntro,
    question: "Can you turn a messy question into a clear decision?",
    answer: "Consulting means structuring ambiguous business problems, working across teams, and communicating a recommendation people can act on. Curiosity, clear thinking, and storytelling matter as much as the spreadsheet.",
    guide: preparationGuides.Consulting,
    videos: [
      {
        id: "GyVqlN3l1e0",
        title: "Consult internships: roles, CVs, cases and interviews",
        summary: "A complete student primer on consulting work, the selection process, CV spikes, buddy cases and interview day.",
      },
      {
        id: "ssa7AXMpmXs",
        title: "Build a consulting CV with Vinamra Bedia",
        summary: "A section-by-section workshop on scholastics, internships, leadership, extracurriculars and measurable impact.",
      },
      {
        id: "fqmbThtfeXo",
        title: "Build a consulting CV with Udita Wadhwa",
        summary: "A compact walkthrough of turning college experiences into a credible, recruiter-friendly consulting profile.",
      },
      {
        id: "9ly7vY_iEKs",
        title: "A consulting career with McKinsey partner Suvojoy Sengupta",
        summary: "An IIT Delhi alumnus discusses candidate qualities, client work, MBA choices, recruitment and consulting's work-life trade-offs.",
      },
    ],
    timeline: timelineData.consult,
    companies: [
      company("McKinsey & Company", "mckinsey.com", "Structured problem-solving"),
      company("BCG", "bcg.com", "Strategy with creative rigour"),
      company("Bain & Company", "bain.com", "Teams, clients and outcomes"),
      company("Strategy&", "strategyand.pwc.com", "Business strategy at scale"),
      company("KPMG", "kpmg.com", "Advisory across industries"),
      company("Accenture", "accenture.com", "Technology-led transformation"),
    ],
    alternateImage: consultImage,
  },
  Core: {
    title: "Core Engineering",
    label: "Hardware · systems · matter",
    intro: sharedIntro,
    question: "Do you want to build the systems beneath the interface?",
    answer: "Core roles reward strong fundamentals and a taste for physical systems: circuits, chips, machines, energy, manufacturing and the careful engineering that makes complex products reliable.",
    guide: preparationGuides.Core,
    videos: [
      {
        id: "iLWc-RF_LWI",
        title: "Core and FMCG internships: roles, CVs and interviews",
        summary: "An overview of supply-chain, analytics and R&D roles, eligibility, profile building, group discussions and interviews.",
      },
      {
        id: "6pGp5EVT1ZQ",
        title: "Build a core engineering CV with Deep Bansal",
        summary: "A hands-on session on presenting coursework, technical projects, tools and measurable engineering outcomes.",
      },
      {
        id: "cRCx5pUmRQQ",
        title: "Build a core engineering CV with Anup Kulkarni",
        summary: "A detailed walkthrough of academics, projects, research, internships and the evidence core recruiters look for.",
      },
    ],
    timeline: [
      timelineData.core[0],
      timelineData.core[2],
      timelineData.core[1],
      ...timelineData.core.slice(3),
    ],
    companies: [
      company("NVIDIA", "nvidia.com", "Accelerated computing"),
      company("Qualcomm", "qualcomm.com", "Wireless systems and silicon"),
      company("Texas Instruments", "ti.com", "Analog and embedded systems"),
      company("Jaguar Land Rover", "jaguarlandrover.com", "Automotive engineering"),
      company("Hindustan Unilever", "hul.co.in", "Manufacturing at scale"),
      company("Piramal Pharma", "piramalpharma.com", "Process and plant engineering"),
    ],
    alternateImage: researchImage,
  },
  Quant: {
    title: "Quant",
    label: "Probability · code · markets",
    intro: sharedIntro,
    question: "Do hard puzzles make you lose track of time?",
    answer: "Quantitative careers sit where mathematics, statistics, programming and markets meet. The work is fast, exacting, and deeply curious - less about memorised finance and more about reasoning well under uncertainty.",
    guide: preparationGuides.Quant,
    videos: [
      {
        id: "lOMgNxnu2Ig",
        title: "Quant internships: firms, tests and preparation",
        summary: "A concise guide to eligibility, C++, competitive programming, probability, mental maths, market making and interviews.",
      },
      {
        id: "4HDJX0zuycs",
        title: "Build a quant-ready CV with Chaitanya Mittal",
        summary: "A technical CV review focused on projects, skills, measurable results and the formatting details recruiters notice.",
      },
      {
        id: "0dsln2ugHms",
        title: "Present technical projects with Pranav Jain",
        summary: "Practical advice on explaining technology, individual contribution, scale and impact in quant and technical applications.",
      },
    ],
    timeline: timelineData.quant,
    companies: [
      company("Jane Street", "janestreet.com", "Trading through ideas"),
      company("Optiver", "optiver.com", "Markets and fast decisions"),
      company("IMC Trading", "imc.com", "Technology-driven trading"),
      company("Tower Research", "tower-research.com", "High-frequency systems"),
      company("Graviton", "gravitontrading.com", "Quantitative research"),
      company("Quadeye", "quadeye.com", "Systematic trading"),
    ],
    alternateImage: analyticsImage,
  },
  Tech: {
    title: "Software & Tech",
    label: "Code · products · scale",
    intro: sharedIntro,
    question: "Do you want to make useful things from a blank file?",
    answer: "Software roles are for builders who enjoy learning new systems, breaking large problems into smaller ones, and improving a product through code. Strong fundamentals create the base; curiosity keeps the career moving.",
    guide: preparationGuides.Tech,
    videos: [
      {
        id: "33XDA8LPPOA",
        title: "SDE internships: language, DSA, projects and interviews",
        summary: "A focused roadmap covering C++, competitive programming, LeetCode, project selection and communicating code in interviews.",
      },
      {
        id: "0dsln2ugHms",
        title: "Build an SDE CV with Pranav Jain",
        summary: "How to structure software internships and projects around technologies used, ownership, users and measurable outcomes.",
      },
      {
        id: "4HDJX0zuycs",
        title: "Build an SDE CV with Chaitanya Mittal",
        summary: "A sample-CV review covering technical skills, project bullets, consistency and common recruiter red flags.",
      },
    ],
    timeline: timelineData.sde,
    companies: [
      company("LinkedIn", "linkedin.com", "Products for professional life"),
      company("Microsoft", "microsoft.com", "Software at global scale"),
      company("Salesforce", "salesforce.com", "Enterprise cloud products"),
      company("D. E. Shaw", "deshaw.com", "Technology meets finance"),
      company("Samsung", "samsung.com", "Software across devices"),
      company("Flipkart", "flipkart.com", "Commerce for India"),
    ],
    alternateImage: interviewImage,
  },
  Analytics: {
    title: "Analytics & AI",
    label: "Data · models · decisions",
    intro: sharedIntro,
    question: "Can you find the signal and explain why it matters?",
    answer: "Analytics turns data into direction. The best practitioners combine statistical judgement, technical fluency and business context - building models, asking better questions, and communicating the answer without hiding behind jargon.",
    guide: preparationGuides.Analytics,
    videos: [
      {
        id: "ooc-1_4D3y0",
        title: "What does an analytics intern actually do?",
        summary: "A clear overview of the analyst role: collecting, cleaning and visualising data, spotting trends, and preparing the right skills, projects and CV for internships.",
      },
      {
        id: "4HDJX0zuycs",
        title: "Build an analytics CV with Chaitanya Mittal",
        summary: "A sample-CV walkthrough covering technical projects, measurable results, skills and the red and green flags recruiters notice.",
      },
      {
        id: "0dsln2ugHms",
        title: "Present analytics projects with Pranav Jain",
        summary: "Practical advice on presenting tools, individual contribution, model performance and business or user impact.",
      },
      {
        id: "9g8GEOWqLoo",
        title: "Finding a non-core internship off campus",
        summary: "How to decide whether non-core work suits you, find opportunities beyond campus, approach people and move from outreach to applications and interviews.",
      },
    ],
    timeline: timelineData.finance,
    companies: [
      company("Mastercard", "mastercard.com", "Data at network scale"),
      company("American Express", "americanexpress.com", "Risk and customer intelligence"),
      company("Barclays", "barclays.com", "Analytics in global finance"),
      company("Eightfold", "eightfold.ai", "AI for talent intelligence"),
      company("Info Edge", "infoedge.in", "Internet products and data"),
      company("Accertify", "accertify.com", "Fraud and risk analytics"),
    ],
    alternateImage: aiImage,
  },
  UPSC: {
    title: "UPSC & Public Service", label: "Policy · people · public purpose", intro: sharedIntro,
    question: "Do you want your work to operate at the scale of society?",
    answer: "Civil services demand breadth, discipline and a genuine interest in public institutions. Explore the day-to-day reality and the long preparation journey before deciding whether the mission fits you.",
    guide: resourceGuides.UPSC,
    videos: [
      {
        id: "fGwEM4g7x7A",
        title: "Ankur Garg's journey from IIT Delhi to UPSC AIR 1",
        summary: "An IIT Delhi alumnus and IAS officer reflects on civil services, preparation, Harvard and a career in public administration.",
      },
      {
        id: "SPpwL6beOCA",
        title: "A preparation strategy for UPSC CSE",
        summary: "Ankur Garg lays out practical preparation advice drawn from securing AIR 1 in the Civil Services Examination.",
      },
      {
        id: "Ha6XYKCugxc",
        title: "What is it like to be an IAS officer?",
        summary: "A grounded look at the work, responsibility and everyday reality behind a career in the civil services.",
      },
      {
        id: "s9aKT1mOHXE",
        title: "Public service with IAS officer Tanushree Deb Barma",
        summary: "An IIT Delhi alumna discusses her route into the IAS and leadership in Karnataka's urban infrastructure sector.",
      },
    ], companies: [], alternateImage: researchImage,
  },
  CAT: {
    title: "Management & CAT", label: "Leadership · business · range", intro: sharedIntro,
    question: "Are you looking for a wider business lens?",
    answer: "Management education can open paths across strategy, product, marketing, finance and operations. The exam is one part of the route; the more important question is what you want the degree to unlock.",
    guide: resourceGuides.CAT,
    videos: [], companies: [], alternateImage: cvImage,
  },
  "Higher Studies": {
    title: "Higher Studies", label: "Research · depth · discovery", intro: sharedIntro,
    question: "Is there a question you want to stay with for years?",
    answer: "Higher studies is a commitment to depth. Start from the subject, research problem or capability you want to build - then choose the programme, lab and geography that best support it.",
    guide: resourceGuides["Higher Studies"],
    videos: [
      {
        id: "S6rp7XVWpXI",
        title: "From IIT Delhi engineering to an Economics PhD at Columbia",
        summary: "Naman Garg explains master's and PhD routes, economics research, admissions and careers across academia, policy and industry.",
      },
      {
        id: "1Hky-yHQPMI",
        title: "How to pursue a foreign internship",
        summary: "A senior-led session on choosing opportunities, applications, professor outreach and the realities of interning abroad.",
      },
      {
        id: "Djep0-BwbK4",
        title: "A research career in theoretical computer science",
        summary: "UIUC professor Dakshita Khurana discusses discovering cryptography, research internships, graduate study and academic life.",
      },
    ], companies: [], alternateImage: researchImage,
  },
  Startup: {
    title: "Startups", label: "Ideas · ownership · momentum", intro: sharedIntro,
    question: "Would you rather build the map while walking?",
    answer: "Startup careers exchange certainty for ownership and speed. Whether you join early or begin your own, the work rewards initiative, comfort with ambiguity, and the ability to learn directly from users.",
    guide: resourceGuides.Startup,
    videos: [
      {
        id: "DUlErkmxwoA",
        title: "How to start and implement a startup idea",
        summary: "Jugnoo founder Samar Singla discusses moving from an initial idea to execution, learning and an operating business.",
      },
      {
        id: "PS47ExUzAlE",
        title: "Building Delhivery with co-founder Kapil Bharati",
        summary: "A conversation about leaving corporate life, crossing into tech, funding, self-doubt and scaling a logistics startup.",
      },
      {
        id: "1WsI3SCfjn0",
        title: "Building PolicyBazaar with Yashish Dahiya",
        summary: "PolicyBazaar's co-founder traces the domain experience, customer problem and execution behind a major insurance platform.",
      },
      {
        id: "xWuELMu4i8M",
        title: "A founder-operator's journey with Pooja Goyal",
        summary: "Avishkaar's co-founder discusses product, education entrepreneurship and leading marketing, sales and operations.",
      },
    ], companies: [], alternateImage: startupImage,
  },
};
