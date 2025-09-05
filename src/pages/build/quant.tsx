import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Timeline from "../../components/timeline.tsx";
import VideoGrid from "../../components/videogrid.tsx";

export default function Quant(){
  const quantData = {
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
        <Hero bg="../assets/explore/quant-home-bg.svg" heading="QUANT" title="Build your career right way!"/>
        <Timeline data={quantData} />
        <VideoGrid iframeUrl1="https://www.youtube.com/embed/lOMgNxnu2Ig" iframeUrl2="https://www.youtube.com/embed/4HDJX0zuycs" questions={["What companies come for internships? ", "What is the branch wise scope? ", "When to start preparing?", "Is Finance or ML knowledge required?", "What is the application procedure?  ", "What are the basic requirements !! for the role?"," ","What are the test procedures? !! How to prepare for them? ","What is the minimum CP Rating !! & Mental Maths Knowledge required?","How important are internships !! or projects?"]}
  timestamps={["2",  "19",  "42","62","82","118","23","151","242","365"]} />


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
            The Complete Guide for Quant Preparation
          </h1>
        </header>

        {/* The Process */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">The Process</h2>
          <p className="text-justify">
            Brush up your probability theory and start solving problems on{" "}
            <strong>Brainstellar</strong> / <strong>PuzzledQuant</strong> and
            then move on to the books. Give plenty of time and effort before you
            look at the hint/solution. Intuition builds over time. You’ll be able
            to solve more and more problems on your own once you get the hang of
            it. Give Codeforces contests regularly. Remember, rating doesn’t
            matter much. Company-specific prep can be done towards the end of the
            summer (mental math, market making prep etc). Another important
            aspect which people miss out—HR Round is important. Do some mock
            interviews with your friends and seniors so you don’t get flustered
            during the actual interview. Look at some HR questions and prepare
            your answers well.
          </p>
        </section>

        {/* Probability Theory */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Probability Theory</h2>
          <p className="text-justify">
            MTL106 is helpful. You can also refer to{" "}
            <em>Introduction to Probability Models</em> by Sheldon Ross. Topics—
            Conditional probability, Bayes Theorem etc (JEE Stuff). Random
            Variables, PDF, CDF, Expected Value, Variance. Some common
            distributions (discrete and continuous both), Central Limit Theorem.
          </p>
        </section>

        {/* Puzzles */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Puzzles, Probability Questions</h2>
          <p className="text-justify">
            <strong>Resources:</strong> Brainstellar website,{" "}
            <em>Heard on the Street</em>,{" "}
            <em>A Practical Guide to Quantitative Finance Interviews</em> by
            Xinfeng Zhao,{" "}
            <em>50 Challenging Problems in Probability</em>. These are the 4
            standard, well-known resources (not all chapters are relevant, only
            probability and brainteasers). I recommend using{" "}
            <strong>PuzzledQuant</strong>; it helped me keep track and has a good
            collection of problems (Brainstellar is a subset of PuzzledQuant).
          </p>
        </section>

        {/* CP */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">CP</h2>
          <p className="text-justify">
            <a
              href="https://cses.fi/book/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Competitive Programmer’s Handbook
            </a>{" "}
            —a go-to guide for some new algorithm you found in an editorial,{" "}
            <a
              href="https://cp-algorithms.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              CP-Algorithms
            </a>{" "}
            to learn about any new algorithm and its implementation.
          </p>
        </section>

        {/* C++ Concepts */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            C++ Concepts (More Important for Quant Developer Roles)
          </h2>
          <p>Learn C++</p>
        </section>

        {/* Mental Math */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Mental Math</h2>
          <a
            href="https://www.puzzledquant.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Arithmetic Game, Games | PuzzledQuant
          </a>
        </section>

        {/* ML (Optional) */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">ML (Optional)</h2>
          <p className="text-justify">
            If interested, you can refer to the following sections from Prof.
            Parag’s course{" "}
            <a
              href="https://www.cse.iitb.ac.in/~parags/col774/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              COL774: Machine Learning
            </a>
          </p>
          <ol className="list-decimal list-inside ml-6 mt-2 space-y-1">
            <li>
              Supervised Learning—Linear Regression, Gradient Descent, Stochastic
              Gradient Descent
            </li>
            <li>
              Linear Regression—Alternate interpretation (probabilistic), Logistic
              Regression, GLMs
            </li>
            <li>Decision Trees, Random Forests</li>
          </ol>
          <p className="mt-3">
            Other resources—{" "}
            <a
              href="https://github.com/Aniruddha-Deb/quant-prep"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Aniruddha-Deb/quant-prep
            </a>
            , Quant Interview/Test Prep, Internship Season | Chinmay Mittal
          </p>
        </section>
      </main>
    </div>
      </div>
    )
}