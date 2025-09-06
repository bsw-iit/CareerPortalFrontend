import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Timeline from "../../components/timeline.tsx";
import Videogrid from "../../components/videogrid.tsx"
export default function SDE(){
  const sdeData = {
  downwardLabels: [
    "First year    Get good hands on !! experience with !! coding in COL100",
    "Second year    Seek coding-related projects with  !! professors; interdisciplinary work is a !! plus",
    "Second year    Regardless of taking COL106, familiarize !! yourself with data structures and !! algorithms in any language you prefer",
    "Second year    Complete intermediate-level DSA !! questions by the end of 4th semester",
    "Summer break before 3rd year    Use pre-internship summer to tackle !! hard DSA questions and study OS, !! DBMS, and other theories.",
    "A month before interviews    Tests begins for different companies after !! CV shortlist (if any) May have some !! aptitude questions",
    "Interview    Interviews focus on DSA; answer !! expected starting from brute force to !! optimal solutions.",
  ],
};
    return (
      <div>
        <Navbar />
        <Hero bg="../assets/explore/sde-home-bg.svg" heading="SDE" title="Build your career right way!"/>
        <Timeline data={sdeData}/>
        <Videogrid iframeUrl1="https://www.youtube.com/embed/33XDA8LPPOA" iframeUrl2="https://www.youtube.com/embed/0dsln2ugHms" questions={["What programming language to use?", "How important is ML?", "When should one start CP?", "How to balance time between CP and LeetCode?", "What projects to write? How to prepare for interviews?", "How to present your codes during interviews?"]}
  timestamps={["4", "28", "84","150","240","298"]}/>


        <div className="flex flex-col items-center justify-start w-full">
      <main
        className="p-10 text-gray-900"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {/* Header */}
        <header>
          <h1
            className="text-center text-4xl md:text-5xl font-bold underline mb-10"
            style={{ fontFamily: "Cormorant Infant, serif" }}
          >
            The Complete Guide to SDE Preparation
          </h1>
        </header>

        {/* Guidelines */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Guidelines for Preparation</h2>
          <ol className="list-decimal list-inside space-y-4 ml-5">
            <li>
              <strong>Preferred Language:</strong> Consider using C++ as your
              primary language. Some HFT firms mandate C++ for coding rounds.
            </li>
            <li>
              <strong>Preparation Strategy (Based on Time):</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  <strong>More than 3 Months:</strong> Start with CP to build
                  intuition and mathematical skills. Gradually shift to DSA-specific
                  preparation closer to your OAs and Interviews.
                </li>
                <li>
                  <strong>2–3 Months:</strong> Use the above resources but skip
                  dedicated CP prep (though regular contests are still essential).
                </li>
                <li>
                  <strong>Less than 1–2 Months:</strong> Focus on Striver's
                  Leetcode sheet and past company Online Assessments (available
                  on Leetcode discussions).
                </li>
              </ul>
            </li>
            <li>
              <strong>Important Concepts:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Master OOPS concepts since they are asked in nearly all company
                  interviews. (Use GeeksforGeeks)
                </li>
                <li>
                  (Optional) Learn core CS concepts (OS, Networks, DBMS); some
                  firms ask MCQ-based problems in their OAs regarding these
                  concepts.
                </li>
              </ul>
            </li>
            <li>
              <strong>Don't Skip DSA, even if you are strong in CP:</strong>{" "}
              Companies often ask standard DSA questions in their online
              assessments and interviews.
            </li>
            <li>
              <strong>Mocks:</strong> Practice company-wise mocks on platforms
              like{" "}
              <a
                href="https://maang.in/mocks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Maang
              </a>{" "}
              and others.
            </li>
          </ol>
        </section>

        {/* DSA Prep */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">DSA Prep</h2>
          <ol className="list-decimal list-inside space-y-3 ml-5">
            <li>
              <strong>Striver SDE Sheet:</strong>{" "}
              <a
                href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Link
              </a>
            </li>
            <li>
              <strong>Dynamic Programming, Graphs and Binary Search (A2Z
              Sheet):</strong>{" "}
              <a
                href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Link
              </a>
            </li>
            <li>
              <strong>Neetcode Roadmap:</strong>{" "}
              <a
                href="https://neetcode.io/roadmap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Link
              </a>
            </li>
            <li>Focus especially on Backtracking (it sets the base for DP).</li>
            <li>
              Do Leetcode Daily Problems: Use extensions like Leetrooms to create
              randomized problem sets.
            </li>
            <li>
              If time permits, explore InterviewBit problems (interface can be a
              challenge).
            </li>
          </ol>
        </section>

        {/* Competitive Programming */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Competitive Programming (CP)</h2>
          <ol className="list-decimal list-inside space-y-3 ml-5">
            <li>
              <strong>TLE 31 Sheets:</strong>{" "}
              <a
                href="https://www.tle-eliminators.com/cp-sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Link
              </a>
            </li>
            <li>
              Participate in regular contests on Codeforces and CodeChef
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Solve at least Problem C in Div2 and Problem E in Div3.</li>
              </ul>
            </li>
            <li>
              <strong>Optional Advanced CP Resources:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Problems in the USACO Guide.</li>
                <li>
                  CP Algorithms:{" "}
                  <a
                    href="https://cp-algorithms.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Link
                  </a>
                </li>
                <li>Various ladders such as A2OJ and ACD.</li>
                <li>
                  Follow YouTube channels like William Lin, Errichto Algorithms,
                  etc.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Repository */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">
            Treat this Repository as a Bible
          </h2>
          <a
            href="https://github.com/ChinmayMittal/IITD-CSE/tree/main/3rd-year/internship-season"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            IITD-CSE Internship Season Repository
          </a>
        </section>

        {/* CSES Must-Do */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">CSES Must-Do Topics</h2>
          <ol className="list-decimal list-inside space-y-2 ml-5">
            <li>Sorting and Searching</li>
            <li>Dynamic Programming</li>
            <li>Graph Algorithms</li>
            <li>Range Queries</li>
            <li>Tree Algorithms</li>
          </ol>
          <p className="mt-3">
            Approach: Do problems with a solved count of more than 8K (use the
            CSES helper extension to filter efficiently).
          </p>
        </section>

        {/* Industry Trivia */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Industry Trivia</h2>
          <ol className="list-decimal list-inside space-y-2 ml-5">
            <li>
              <strong>Core CS:</strong> DE Shaw and some HFT firms focus heavily
              on core CS and C++ fundamentals.
            </li>
            <li>
              <strong>Inclusivity:</strong> Big firms like Amazon and many
              startups provide equal opportunities to all branches if your CGPA
              exceeds 7.
            </li>
          </ol>
        </section>

        {/* Advice & Motivation */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Advice and Motivation</h2>
          <ol className="list-decimal list-inside space-y-4 ml-5">
            <li>
              <strong>Challenges Are Normal:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Preparing for an SDE interview can be frustrating. There will
                  be days when you feel stuck and see little to no progress. It’s
                  important to remember that everyone has a different pace. What
                  matters most is your approach and thought process.
                </li>
              </ul>
            </li>
            <li>
              <strong>Shortlisting Phase:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  This is the toughest part. Companies often shortlist based on
                  CGPA, branch, and pre-college achievements.
                </li>
                <li>
                  Many great companies come after Day 1 and Day 2 (e.g., Wells
                  Fargo, Deutsche Bank, JLR, Microsoft, Tech Mahindra).
                </li>
              </ul>
            </li>
            <li>
              <strong>Don't ignore Quant Prep:</strong>
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  Even if targeting SDE roles, practice Brainsteller puzzles and
                  Puzzledquant problems. Companies like Goldman Sachs and JPMC
                  include these in aptitude rounds or interviews.
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Final Note */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Final Note</h2>
          <p>
            The journey is tough, but setbacks are part of the process. Stick to
            the plan, stay consistent, and trust your preparation. All the best!
          </p>
        </section>

        {/* Credits */}
        <footer className="text-sm text-right mt-10 mr-5">
          Content credits: Pratham Malhotra EE'26
        </footer>
      </main>
    </div>
        </div>
    )
}