import type { DomainDetailData } from "../components/DomainDetail";

type PreparationGuide = NonNullable<DomainDetailData["guide"]>;

export const resourceGuides: Record<string, PreparationGuide> = {
  UPSC: {
    title: "UPSC CSE Ultimate Guide",
    introduction: "Complete Structure, Syllabus, Materials, and 1-Year Plan",
    sections: [
      {
        heading: "Examination Overview",
        points: [
          "The UPSC Civil Services Examination (CSE) is conducted in three sequential stages:",
          "1. Prelims (Preliminary Examination): Objective type (MCQs).",
          "2. Mains (Written Examination): Written, descriptive/essay type, including case studies.",
          "3. Interview (Personality Test): Viva voce.",
        ],
      },
      {
        heading: "Prelims Exam Structure",
        points: [
          "Paper I — General Studies — 100 questions — 200 marks — 2 Hours — Cut-off: Yes (for merit shortlisting)",
          "Paper II — CSAT (Aptitude) — 80 questions — 200 marks — 2 Hours — Cut-off: Qualifying only (33%)",
        ],
      },
      {
        heading: "Prelims Cut-off Summary",
        points: [
          "CSAT (Paper II) must be cleared with minimum 66 marks (33% of 200).",
          "Your score in GS Paper I must be above the cut-off (general range is 90-120 marks).",
          "Only if both conditions are met are you selected for Mains.",
        ],
      },
      {
        heading: "Detailed Prelims Syllabus",
        points: [
          "GS Paper I Syllabus: Current Affairs (National & International); History (Ancient, Medieval, Modern India); Geography (Indian & World); Polity (Governance & Constitution); Economy (Economic & Social Development); Environment (Ecology, Biodiversity); Science and Tech (Basic + Current Developments).",
          "CSAT Paper II Syllabus: Comprehension; Logical Reasoning; Numeracy; Data Interpretation.",
        ],
      },
      {
        heading: "Recommended Study Material — Prelims",
        points: [
          "Polity: Indian Polity by M. Laxminath; NCERT political science classes 9-12; Introduction to the Constitution of India by D.D. Basu.",
          "History: History of Modern India by Bipan Chandra (Modern Hisotry); History of Medivial India by Satish Chandra (Medieval); India's Ancient Past by R.S. Sharma (Ancient); NCERT books 6-12 (for comprehensive coverage).",
          "Geography: NCERT geography textbook (6-12); Geography of India by Majid Husain; Certificate Physical and Human Geography by Goh Cheng Leong; Oxford Student Atlas.",
          "Economics: Primary Resource: Indian Economy by Ramesh Singh; NCERT book 9-12; Economics Survey (latest Edition); Union Budget documents.",
          "Environment: Environment by Shankar IAS Academy (10th Edition); NCERT Biology chapters on ecology; Down to Earth Magazine, MoEF website.",
          "Science and Technology: Basics: NCERTs class 6-12; Current affairs from PIB, ISRO, DRDO websites; Focus on current developments in the sector.",
          "Current Affairs: Daily Sources: The Hindu, Indian Express, Press Information Bureau (PIB); Monthly Compilations: Vision IAS (PT 365, Monthly magazines), Rau's Focus Magazine.",
        ],
      },
      {
        heading: "Mains Paper Structure",
        points: [
          "Paper A — Indian Language (8th Schedule) — 300 marks — Qualifying",
          "Paper B — English — 300 marks — Qualifying",
          "Paper I — Essay — 250 marks — Merit",
          "Paper II — General Studies I — 250 marks — Merit",
          "Paper III — General Studies II — 250 marks — Merit",
          "Paper IV — General Studies III — 250 marks — Merit",
          "Paper V — General Studies IV (Ethics) — 250 marks — Merit",
          "Paper VI — Optional Paper I — 250 marks — Merit",
          "Paper VII — Optional Paper II — 250 marks — Merit",
        ],
      },
      {
        heading: "Mains Cut-Off Criteria",
        points: [
          "Paper A & B must be qualified (minimum 75/300 marks in each).",
          "Merit is based on the total score of Essay + GS I–IV + Optional I & II (total 1750 marks).",
        ],
      },
      {
        heading: "Detailed GS & Essay Syllabus",
        points: [
          "Paper I – Essay (250 Marks): Candidates write 2 essays (125 marks each) on topics ranging from abstract, philosophical to socio-political themes.",
          "GS Paper I (Indian Heritage, History, Society, Geography): Indian Art & Culture; World History; Modern Indian History & Freedom Struggle; Indian Society (Population, Issues, Diversity); Indian & World Geography.",
          "GS Paper II (Polity, Governance, Social Justice, IR): Constitution, Parliament, Judiciary; Governance, Transparency, E-governance; Welfare Schemes, NGOs, SHGs; International Relations (IR).",
          "GS Paper III (Economy, S&T, Environment, Security): Indian Economy & Development, Infrastructure, Budget, Agriculture; Science & Tech (ISRO, DRDO, Biotech); Environment, Biodiversity, Climate Change; Internal Security, Cybersecurity, Disaster Management.",
          "GS Paper IV (Ethics, Integrity & Aptitude): Ethics and Human Interface; Attitude, Emotional Intelligence; Moral Thinkers & Philosophers; Public Service Values; Case Studies (major component).",
          "Optional Subject (Paper VI & VII): Two papers (250 marks each) are taken on ONE optional subject chosen by the candidate from the list provided by UPSC.",
        ],
      },
      {
        heading: "Qualifying Papers (Paper A & B)",
        points: [
          "Paper A – Indian Language: Essay writing; Translation (English ↔ Regional Language); Precis writing; Grammar and comprehension.",
          "Paper B – English: Essay; Comprehension; Precis writing; Grammar and vocabulary.",
        ],
      },
      {
        heading: "Recommended Material — Mains",
        points: [
          "IR (International Relations): MEA website, IDSA, Current Affairs.",
          "Governance: Yojana, PIB, PRS.",
          "Security: Internal Security by Ashok Kumar, IDSA.",
          "Society: NCERT Sociology, Vision/Forum notes.",
          "Ethics (GS IV): Lexicon, Subbarao, Focus on Case studies.",
        ],
      },
      {
        heading: "1-Year Preparation Timeline",
        points: [
          "Months 1–2: Foundation Phase (NCERT + Basics) — Polity: NCERTs + Laxmikanth; History: NCERTs + Bipan Chandra, RS Sharma, Satish Chandra; Geography: NCERTs + Goh Cheng Leong; Economy: NCERTs + Ramesh Singh; CSAT: Basic reasoning + comprehension (alt days); Current Affairs: Start Hindu/PIB + Vision Monthly.",
          "Months 3–4: Standard Sources + Optional Subject Finalization — Complete Laxmikanth, Majid Husain, Shankar IAS; Start Economic Survey + Budget; Finalize and begin Optional subject; Continue CSAT practice + answer writing (1–2 Qs/day); Continue Current Affairs + monthly compilations.",
          "Months 5–6: Optional + Mains Writing Begins — Focus on Optional Paper I; Begin GS Mains answer writing (GS I–IV); Start Ethics: Lexicon + basic case studies; Essay writing: 1 every 10 days; Prelims MCQs topic-wise; CSAT: 1 full mock every week.",
          "Months 7–8: Prelims + Optional Completion — Revise all GS subjects + attempt full-length Prelims mocks; Finish Optional Paper II; Revise PT365 and Economy Survey thoroughly; CSAT: Full mock every 4 days.",
          "Months 9–10: Prelims Focus — Daily GS MCQ practice + mock every 2 days; CSAT full mocks regularly; Revise mistake logbook and current affairs.",
          "Months 11–13: Post-Prelims Mains Focus — Full focus on GS I–IV, Essay, Ethics, Optional; Daily answer writing + full-length tests; Ethics: Thinkers + case studies; Essay: 2 per week; Optional: Revise both papers + attempt mocks; CA: Use PRS, Yojana, MEA, IDSA for GS II & III enrichment.",
          "Post-Mains (Interview Prep) — DAF-based questions preparation; 4–6 Mock Interviews; Revise IR, Governance, Ethics, and opinion-based issues; Daily Hindu reading + PIB updates.",
        ],
      },
    ],
  },

  CAT: {
    title: "CAT Guide",
    sections: [
      {
        heading: "Basic Introduction",
        paragraphs: [
          "What is the Common Admission Test?",
          "The Common Admission Test is a national-level entrance examination conducted annually by the Indian Institutes of Management. It serves as the primary admission test for MBA/PGDM programs at the Indian Institutes of Management and is also accepted by over 1,200 other top business schools across India.",
        ],
        points: [
          "Who Should Apply?",
          "Students in the final year of their undergraduate studies",
          "Graduates looking to pursue an MBA/PGDM",
          "Working professionals aiming to transition into managerial roles or gain leadership skills",
          "Individuals planning a career switch or interested in entrepreneurship",
        ],
      },
      {
        heading: "Eligibility Criteria",
        points: [
          "A Bachelor’s degree with a minimum of 50% marks or equivalent CGPA (45% for Scheduled Caste/Scheduled Tribe/Persons with Disabilities)",
          "Final-year undergraduate students are also eligible to apply",
          "No age limit",
          "No restriction on the number of attempts (the exam is conducted once per year)",
        ],
      },
      {
        heading: "What Is a Good Score?",
        points: [
          "99.7+ percentile: Typically required for top Indian Institutes of Management (Ahmedabad, Bangalore, Calcutta)",
          "97–99 percentile: Competitive for institutes like Indian Institute of Management Lucknow, Indian Institute of Technology Bombay (Shailesh J. Mehta School of Management), Management Development Institute, S. P. Jain Institute of Management and Research, etc.",
          "90–97 percentile: Eligible for newer Indian Institutes of Management and several Tier-1 private business schools",
        ],
      },
      {
        heading: "Self-Study vs Coaching",
        paragraphs: [
          "Self-Study: Plenty of quality resources are available online (videos, PDFs, past papers).",
          "Coaching Institutes: Offer structured programs with mocks, classes, and doubt resolution (for example, iQuanta, TIME, IMS, Career Launcher).",
          "Note: Coaching is optional and can help streamline your preparation.",
        ],
      },
      {
        heading: "What Happens After the Exam?",
        points: [
          "Shortlisting by business schools is based on Common Admission Test percentile, academic background, work experience, and diversity.",
          "Further rounds typically include: Written Ability Test / Analytical Writing Test and Personal Interview.",
          "Final selection is based on a composite score considering all these components.",
          "Score validity: 1 year",
          "Attempts: Unlimited over the years (once per year)",
          "Age limit: None",
        ],
      },
      {
        heading: "Alternatives and Engineering Backgrounds",
        paragraphs: [
          "If the Common Admission Test does not go well, consider these entrance exams: XAT (by XLRI), SNAP (by Symbiosis), NMAT (by GMAC), CMAT (by NTA), MAT. Some private colleges offer direct admissions based on academic profile.",
          "Should Engineers Consider the Common Admission Test?",
          "Absolutely. A large portion of Common Admission Test aspirants and top scorers each year come from engineering backgrounds due to their quantitative aptitude. Engineers are eligible even without prior work experience, and many write the exam in their final year of college while preparing for placements.",
        ],
      },
      {
        heading: "Pattern",
        points: [
          "Exam duration: 2 hours (120 minutes).",
          "Two types of questions:",
          "Multiple Choice Questions (correct: +3; incorrect: −1)",
          "Type In The Answer (no options; no negative marking)",
          "Three sections (each section has a dedicated 40-minute timer and appears in fixed order):",
          "Verbal Ability and Reading Comprehension",
          "Data Interpretation and Logical Reasoning",
          "Quantitative Aptitude",
          "Number of questions varies across the three sections and by year.",
          "Note on Syllabus: There is no official syllabus released. Preparation is based on past-year patterns and representative topic lists.",
        ],
      },
      {
        heading: "Verbal Ability and Reading Comprehension — Preparation",
        points: [
          "Key challenges: Score fluctuations across passages; progress can feel hard to track.",
          "Preparation focus: Emphasize process over marks until August/September. Build reading ability (speed + comprehension) and critical thinking.",
          "Why Reading Comprehension dominates: Reading Comprehension covers roughly 70–80% of this section; mastering it also helps with para summary, para completion, para jumbles, and fill‑in‑the‑blanks.",
          "Strategies for reading ability: Read diverse materials: The Hindu editorials (language/style), The Economist (global context), Aeon essays (denser prose). Paraphrase each paragraph in one sentence to lock in the main idea. Prefer articles over books for exposure to varied writing styles.",
          "Question strategies: General/main‑idea: Use your paragraph summaries without revisiting the passage. Specific‑detail: Refer back to the exact lines. Interpretation/strengthen/weaken: Analyze options against the passage’s central idea; revisit only if needed.",
          "Key techniques: Skimming for structure, then revisit for details. Eliminate wrong options (extreme words, out‑of‑scope additions, distortions). Vocabulary: learn meanings in context while reading; dedicated vocab memorization is not necessary.",
          "Resources: Books: RC 99, Manhattan GMAT Reading Comprehension. Online: Newspapers, magazines, GMATClub threads, previous year questions, and mock explanations. Mocks/sectionals: Crucial from August onward for practice and benchmarking.",
        ],
      },
      {
        heading: "Data Interpretation and Logical Reasoning — Preparation",
        points: [
          "Key challenges: Highly unpredictable set styles and difficulty; progress can vary. Time management is critical.",
          "What the section typically looks like: 20–22 questions in 40 minutes, arranged as 4–5 sets of 4–6 questions each. Expected mix: Data Interpretation ~8–10 and Logical Reasoning ~10–12; mixed DI–LR sets are common.",
          "Preparation focus: Set selection decides your score. Build analytical thinking (tables/graphs/charts/caselets) and logical reasoning (seating arrangements, grid puzzles, tournaments, Venn diagrams). Improve calculation speed; prioritize accuracy first, then speed.",
          "Strategies: Spend 3–5 minutes scanning all sets at the start. Aim to solve 2–3 clean sets with ~95% accuracy (often enough for 95th percentile+). Practice recognizing solvable sets within 10–12 minutes.",
          "Solving approach: Logical Reasoning: Draw grids/diagrams; start with the most restrictive constraints. Data Interpretation: Identify trends/ratios first; compute only what is necessary. Use elimination when options contradict constraints or data trends.",
          "Speed boosters: Approximations; fraction–percentage pairs (e.g., 1/6 = 16.67%); multiplication tables up to 20; squares and cubes up to 40; regular mental‑math sprints.",
          "Recommended resources: Books: Arun Sharma (DI & LR), Nishit K. Sinha, R. S. Aggarwal. Online: Previous year papers (last 5 years; ~75 strong sets), free practice on 2IIM, Cracku, Quantifiers; business news graphics for data sense.",
          "Additional tips: Daily practice: 3–4 hours, including 5 weekly sittings of 1 hour each. Avoid the sunk‑cost trap—if a set stalls beyond 13–14 minutes, move on.",
        ],
      },
      {
        heading: "Quantitative Aptitude — Preparation",
        points: [
          "Key challenges: Broad conceptual range; time pressure; application‑heavy questions; fluctuating difficulty.",
          "Preparation focus: Build fundamentals; develop speed with accuracy; learn shortcuts and option elimination; prioritize high‑weight topics.",
          "Typical topic weight — Arithmetic (8–10): Percentages; profit & loss; simple/compound interest; ratio & proportion; time & work; time–speed–distance; averages; mixtures & alligation.",
          "Typical topic weight — Algebra (6–8): Linear/quadratic equations; inequalities; functions; progressions; logarithms.",
          "Typical topic weight — Geometry & Mensuration (3–5): Triangles; circles; coordinate geometry; 3D geometry; areas; volumes.",
          "Typical topic weight — Number Systems (2–4): Factors; multiples; divisibility; remainders; LCM/HCF; indices; surds.",
          "Typical topic weight — Modern Math (1–3): Permutations & combinations; probability; set theory.",
          "Study routine: Revisit basics (NCERT 8–10 or CAT‑specific texts). Focus one topic per week; solve 20–30 questions per day (easy → medium → hard) and finish with a few Type In The Answer problems. Maintain a mistake log (concept gap / misread / speed / carelessness).",
          "Time management: Easier questions in 1–1.5 minutes; tougher ones in 2–3 minutes. In mocks, prioritize arithmetic and algebra; target 14–16 attempts with ~95% accuracy for a strong score. Type In The Answer questions (~6–8 per section): no negative marking—accuracy matters.",
          "Resources: Books: Arun Sharma (laddered difficulty), Nishit K. Sinha (concept depth), R. S. Aggarwal (foundational practice). Online: Previous year questions (last 5–7 years), free tests on 2IIM, Career Launcher, Hitbullseye; YouTube channels (Rodha, 2IIM).",
          "Additional tips: Daily practice: 3–4 hours, with 5–6 weekly sittings of 1 hour each. Analyze mocks; track topic‑wise accuracy; practice mental math; avoid overcomplicating straightforward questions.",
        ],
      },
      {
        heading: "Mocks and Planning",
        points: [
          "When to start: Do topic drills and sectionals early; begin regular full-length mocks from August/September.",
          "How many: Quality over quantity: ~10–20 full mocks plus focused sectionals is common.",
          "Mock analysis (non-negotiable): Tag every error as concept / misread / speed / guess. Redo unsolved questions; turn learnings into brief checklists (e.g., “draw a table,” “check units,” “scan all sets first”). Track topic-wise accuracy weekly.",
          "Simple weekly loop — Mon–Fri: 60–90 min Quantitative Aptitude + 45 min reading/paraphrasing + 45–60 min Data Interpretation/Logical Reasoning sets.",
          "Simple weekly loop — Sat: 1 full mock + 2 hours analysis.",
          "Simple weekly loop — Sun: Weak-area clinic + revise formulas/ratios/shortcuts.",
        ],
      },
      {
        heading: "Indian Institute of Management Ahmedabad Selection Criteria — Explained",
        points: [
          "Minimum Common Admission Test Percentile Requirement (Preliminary Screening): For the General category: Overall percentile ≥ 80; Each section ≥ 70 percentile. If these are not met, the profile is not considered.",
          "Application Rating Score (≈35% weightage in shortlisting).",
          "Class 10 marks: Points by percentage band (e.g., ≥90% = 10 points; 81–90% = 8 points). Note: Based on all subjects listed on the mark sheet, not the best four or five.",
          "Class 12 marks: Points depend on stream (Science, Commerce, Arts); Commerce/Arts bands are slightly more lenient than Science.",
          "Graduation marks: Mapped to an Academic Category (AC1: Medical; AC2: Professional—CA/CS/CFA/ICWA; AC3: Commerce/Management/Economics; AC4: Engineering; AC5: Arts & Humanities; AC6: Other).",
          "Work experience (maximum 5 points): Less than 12 months: 0 points; 13 to 36 months: (months – 11) × 0.2; More than 36 months: capped at 5 points.",
          "Shortlisting composite score: 0.35 × Application Rating + 0.65 × Common Admission Test percentile.",
          "Why some candidates get calls at lower percentiles (e.g., ~87): Shortlisting is done category-wise, with a cap on interview calls per Academic Category in the General category: AC1, AC2, AC3, and AC5 up to 100 candidates each; AC4 (Engineers) up to 150 candidates. Engineers face the densest competition and usually need very high percentiles (often 99.7+), while under-represented categories may get calls at lower percentiles.",
          "Final Selection Criteria (Post-Interview Round): Final score: 0.25 × Common Admission Test score + 0.15 × Application Rating + 0.10 × Analytical Writing Test + 0.50 × Personal Interview.",
          "Weight on the Common Admission Test reduces from 65% (shortlisting stage) to 25%.",
          "60% of weight lies on the interview day (Analytical Writing Test + Personal Interview).",
          "No category caps in final selection; performance on the day is decisive.",
        ],
      },
      {
        heading: "Syllabus, Blogs, and References",
        paragraphs: [
          "Syllabus (Reference PDF)",
          "Important: The syllabus is not officially released. The PDF below is reference-only, based on past-year patterns, and should not be trusted completely.",
        ],
        resources: [
          { label: "Open Reference PDF", href: "https://drive.google.com/file/d/154kKPwjO0eDMCj7OPYhhVdt7y7rgRLIh/view?usp=drivesdk", note: "Unofficial" },
          { label: "How to start Common Admission Test 2025 preparation — InsideIIM", href: "https://insideiim.com/how-to-start-cat-2025-preparation?_gl=1*tbo9li*_ga*bERZQTJlZjZSLUo2cUpCTXZqWlNRSEJ4LV9BUktpdUZyY3RVQVRVWThpMzk2ejBfemJUTUIwY1c1RzY0OXhBcw.." },
          { label: "2IIM blog hub", href: "https://online.2iim.com/cat-exam/blogs/" },
        ],
      },
      {
        heading: "Senior Advice",
        points: [
          "Vagish (100 percentile): No new concepts beyond Joint Entrance Examination level—focus on speed and accuracy.",
          "Vagish: 2 to 4–5 months of consistent preparation is sufficient (you do not need a year‑long grind).",
          "Vagish: Primary focus: Last 3 years’ previous year questions and selected mock tests.",
          "Vagish: Daily time: Even 15–30 minutes/day over a long stretch is effective; quality and consistency matter more than hours.",
          "Vagish: Mocks attempted: Around 10.",
          "Vagish: Explore: Entrepreneurship; What after MBA; Financial knowledge; Current affairs / Static General Knowledge; Indian and foreign context; Finance involved; Case competitions.",
          "Laksh (100 percentile): Be strong in at least two sections to insure the overall percentile even if one section dips.",
          "Laksh: Solve as many mock tests as possible, especially in the last few days, to handle varying section difficulty.",
          "Laksh: Speed is key for a 100 percentile—aim to attempt almost all questions with ~90% accuracy.",
          "Laksh: Mental calculations: Train with mental‑math resources (e.g., QuantGuide).",
          "Laksh: Interview experience: Ahmedabad focused slightly on undergrad course content; Bangalore and Calcutta felt more general‑knowledge‑based (panel dependent).",
        ],
      },
      {
        heading: "Quick Do/Don't",
        points: [
          "Do: Read daily and paraphrase each paragraph",
          "Do: Scan all sets first and pick clean ones",
          "Do: Maintain a mistake log and review weekly.",
          "Do: Drill arithmetic shortcuts, approximation, and fraction–percentage pairs (QA).",
          "Do: Spend more time analyzing mocks than taking new ones.",
          "Don't: Memorize vocabulary lists—learn words in context.",
          "Don't: Stay stuck on one DILR set beyond 13–14 minutes.",
          "Don't: Neglect TITA questions—there is no negative marking.",
          "Don't: Over‑engineer simple quantitative questions.",
        ],
      },
    ],
    credit: "Disclaimer: This guide is informational and based on recent exam trends and senior insights. The official CAT authority (IIMs) may change pattern/criteria without prior notice. Always refer to the official CAT website and institute‑specific admissions pages for the latest updates.",
  },

  "Higher Studies": {
    title: "The Complete Guide to Higher Studies",
    sections: [
      {
        heading: "When Should You Start?",
        paragraphs: ["Ideally, start 4 months before the application deadlines. This timeline gives you ample time to:"],
        points: [
          "Prepare a list of target universities.",
          "Request 3 Letters of Recommendation (LORs).",
          "Take exams like GRE/TOEFL/IELTS (if required).",
          "Draft and review your Statement of Purpose (SOP) and resume.",
          "Address any application-specific questions.",
        ],
      },
      {
        heading: "Typical Application Timeline",
        points: [
          "By December: Finalize your SOP, resume, and LORs.",
          "January–February: Submit applications.",
          "March–April: Wait for admission results.",
        ],
      },
      {
        heading: "Exams Needed",
        points: [
          "GRE: Post-COVID, many universities have waived GRE requirements.",
          "TOEFL/IELTS: Proof of English proficiency is usually mandatory unless waived.",
          "Some universities might have specific criteria.",
        ],
      },
      {
        heading: "How to Select Universities?",
        paragraphs: ["Shortlist universities in 3 categories:"],
        points: [
          "Dream: High-ranking universities with tough competition.",
          "Medium: Universities where you have a fair chance.",
          "Safe: Universities with a high probability of admission.",
          "Start with a list of 20–40 universities in an Excel sheet and narrow it down to 7–12.",
          "Use filters: rankings, research areas, location, funding, and faculty alignment with your interests.",
        ],
      },
      {
        heading: "Building a Strong Application",
        points: [
          "Statement of Purpose (SOP): It is never too late to think about pursuing higher education post-graduation. If you have realized that you want to go for it, then in high probability, you have already answered the “Why?” part to justify that decision to yourself. Now it is time to frame the same thing to justify it to the selectors at universities. The medium to do that is your SOP.",
          "Use the SOP to tell your story and explain your motivation for pursuing higher studies.",
          "Your Story (≈1.25 pages): Highlight relevant academic and professional experiences.",
          "Why This University (≈0.6 pages): Mention how its programs align with your goals.",
          "Future Plans (≈0.15 pages): Briefly outline your aspirations.",
          "Resume: Highlight projects, internships, publications, club activities, and TA/RA experiences relevant to your chosen field.",
          "LORs: Reach out to professors, mentors, or supervisors who know your work well.",
          "Give them sufficient time (at least 2–3 weeks) to draft strong recommendations.",
        ],
      },
      {
        heading: "Funding Opportunities",
        points: [
          "Teaching Assistantships (TA) and Research Assistantships (RA) are common funding sources.",
          "The availability of funding varies by university, so research thoroughly.",
          "Highlight your teaching or research experience in your application to increase your chances.",
        ],
      },
    ],
  },

  Startup: {
    title: "Startup Playbook Guide",
    introduction: "From problem discovery to scale-up: The complete founder's journey curated directly from the IITD Startup Playbook.",
    sections: [
      {
        heading: "Ecosystem Philosophy",
        points: [
          "At IIT Delhi, entrepreneurship is approached not as an end goal of company creation, but as a long-term capability developed through sustained exposure, structured experimentation, and mentorship.",
          "The Student's Journey: Awareness & Ideation → Validation & Pre-Incubation → MVP Development → Pitching & Incubation → Scale-Up.",
          "The Founder's Journey: Problem Discovery → Solution Design → Product Development → Market Entry + Fundraising → Growth & Scale.",
        ],
      },
      {
        heading: "Ideation & Discovery",
        points: [
          "Finding the Right Problem",
          "Entrepreneurship begins with identifying meaningful problems. A strong startup problem typically:",
          "1. Occurs frequently in daily routines or industry operations.",
          "2. Affects a specific, identifiable group of users.",
          "3. Lacks a satisfactory existing solution.",
          "4. Causes real inconvenience or friction.",
          "Key Founder Qualities (User Research)",
          "Focus on user behavior rather than opinions.",
          "Listen to the target audience without pitching the idea initially.",
          "Avoid leading questions to get unbiased feedback.",
        ],
      },
      {
        heading: "MVP Development",
        paragraphs: [
          "An MVP is not a smaller version of the final product. It is a learning tool designed to answer one key question: Will users actually use this?",
        ],
        points: [
          "Rapid Prototyping: Use available technical resources, labs, and collaborative workspaces to build quickly.",
          "MVP Planning: Define the minimum set of features required to test key assumptions, rather than building complete solutions.",
          "Go-to-Market Thinking: Test the MVP in realistic environments rather than controlled settings for meaningful insights.",
          "Rapid Iteration: Translate feedback into immediate action to reduce the cost of early mistakes.",
        ],
      },
      {
        heading: "Funding & Legal Foundations",
        points: [
          "Grants & Fellowships: Non-dilutive funding for early-stage research/innovation. Ideal for deep-tech/social impact.",
          "Competition Funding: Cash prizes from hackathons and pitch challenges. Great for visibility and validation.",
          "Angel Investment: Early-stage equity funding providing mentorship and industry connections.",
          "Venture Capital: For startups ready to scale rapidly post product-market fit. Comes with high growth expectations.",
          "Intellectual Property (IP): Protect ideas, technology, and branding.",
          "Incorporation: Required for fundraising, signing contracts, and hiring.",
          "Founder Agreements: Clear equity splits, roles, decision-making, and exit clauses.",
          "Compliance: Taxes, company law, employment, and data regulations.",
        ],
      },
      {
        heading: "Ecosystem Support",
        points: [
          "SInC (Student Incubation Cell): Shared co-working spaces; Access to labs and institute facilities; Peer founder community; Mentorship from alumni and faculty.",
          "FITT Incubation: Office spaces and advanced labs; Investor access and corporate partnerships; Technology transfer & patent filing support.",
          "BECon & Community: North India's largest student startup summit; Hackathons, pitch competitions, and startup expos; Regional ecosystem integration.",
        ],
        resources: [
          { label: "Download Startup Playbook PDF", href: "/resources/Startup_Playbook.pdf", note: "IITD Startup Playbook" },
        ],
      },
    ],
  },
};
