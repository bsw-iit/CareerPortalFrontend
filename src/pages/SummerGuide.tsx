import Navbar from "../components/Navbar";
import Hero from "../components/Hero.tsx";
import BG from "../assets/Resource/SummerGuide.svg"
export default function SummerGuide() {
  return (
    <div>
      <Navbar />
      <Hero bg={BG} heading="BSW Summer Guide" title="Build your career the right way!" />
      <div className="flex flex-col items-center justify-start w-full">
      <main className="p-10 text-gray-900 leading-8 text-justify" style={{fontFamily:'Poppins, sans-serif'}}>

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-center text-4xl md:text-5xl font-bold underline" style={{fontFamily: 'Cormorant Infant, serif'}}>
            What To Do in Summers: A Guide for Incoming 2nd Year Students
          </h1>
        </header>

        {/* Intro */}
        <p>
          So, the first year is done. You survived the <strong>8 a.m. classes</strong>,{" "}
          <strong>quizzes out of nowhere</strong>, and the{" "}
          <strong>limitless all-nighters</strong>.
        </p>
        <p>
          Now it's summer – finally a breather! But before you start binge-watching series,
          here's a guide to make your summer <em>productive and fun</em>.
        </p>

        {/* Section 1 */}
        <section className="mt-6 mb-4">
          <h2 className="text-xl font-bold mb-2">1. Explore Career Paths</h2>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li><strong>Tech</strong> (software/dev/ML/quant)</li>
            <li><strong>Core</strong> (your department stuff)</li>
            <li><strong>Consulting</strong></li>
            <li><strong>Finance</strong></li>
            <li><strong>Research</strong></li>
            <li><strong>Product</strong></li>
            <li>The opportunity is limitless.</li>
          </ul>
          <p className="mt-2">
            Try different things and see what sticks—you still have tons of time to explore,
            don't worry.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-6 mb-4">
          <h2 className="text-xl font-bold mb-2">2. Start Figuring Out What You Like</h2>
          <ul className="list-disc list-inside ml-5 space-y-2">
            <li>This is the time to explore what field excites you (tech? consulting? core? something random but cool?).</li>
            <li>Use the process of elimination – you don’t have to know what you love, but start ruling out what you don’t.</li>
            <li>You’re usually good at things you’re naturally drawn to – follow that instinct 🧠.</li>
            <li>
              <strong>Try these out!</strong>
              <ul className="list-[circle] list-inside ml-6 space-y-1">
                <li>
                  <strong>Case comps</strong> on{" "}
                  <a href="https://unstop.com/all-opportunities?oppstatus=recent&searchTerm=case%20competitions" className="text-blue-600 no-underline">
                    Unstop
                  </a>{" "}
                  – great for exploring <strong>consulting</strong>.
                </li>
                <li>
                  <strong>Hackathons</strong> on{" "}
                  <a href="https://devfolio.co/" className="text-blue-600 no-underline">Devfolio</a>{" "}
                  or{" "}
                  <a href="https://unstop.com/all-opportunities?oppstatus=recent&searchTerm=case%20competitions" className="text-blue-600 no-underline">Unstop</a>.
                </li>
                <li>
                  <strong>CP contests</strong> on{" "}
                  <a href="https://codeforces.com/" className="text-blue-600 no-underline">Codeforces</a>,{" "}
                  <a href="https://atcoder.jp/" className="text-blue-600 no-underline">AtCoder</a>.
                </li>
                <li>
                  Check this{" "}
                  <a href="https://www.theforage.com/" className="text-blue-600 no-underline">simulator</a>{" "}
                  out and better understand if the profile interests you!
                </li>
                <li>See what excites you!!</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mt-6 mb-4">
          <h2 className="text-xl font-bold mb-2">3. Build Your LinkedIn Profile</h2>
          <p>
            This will help at every stage ahead. Refer{" "}
            <a
              href="https://file.notion.so/f/f/dcb3031a-7190-810b-99d4-000373e1fcde/b026c4fc-c6d1-4c68-b0cb-93dac480298a/AR_LinkedIn_Session_Guide.pdf"
              className="text-blue-600 no-underline"
            >
              this guide
            </a>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mt-6 mb-4">
          <h2 className="text-xl font-bold mb-2">4. Tech Stuff</h2>

          {/* DSA */}
          <h3 className="font-bold mt-2">DSA (COL106)</h3>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>Tough CS course in 2nd year – if you plan to take it, summer prep is a lifesaver.</li>
            <li>It is one of the best courses for non-circuital branches to learn tech. It opens up a viable and great career path.</li>
            <li>If you struggled with COL100, start by clearing the basics of a programming language. You can go for <strong>C++ (recommended), Python or Java.</strong></li>
            <li>Focus on syntax basics like <strong>data types, loops, functions, arrays, etc.</strong></li>
            <li>Then move to <strong>DSA</strong> (core of COL106).</li>
            <li>
              Start with{" "}
              <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" className="text-blue-600 no-underline">
                Striver's A2Z DSA Sheet
              </a>{" "}
              or{" "}
              <a href="https://www.codewithharry.com/" className="text-blue-600 no-underline">
                CodeWithHarry
              </a>.
            </li>
            <li>
              Practice on <strong>LeetCode and Codeforces</strong> – this is the <strong>MOST IMPORTANT</strong> part!
            </li>
            <li>Start contests early – div 3 and div 2 are great practice.</li>
          </ul>

          {/* ML */}
          <h3 className="font-bold mt-4">Machine Learning (ML)</h3>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>If ‘AI or Machine Learning’ sounds exciting, start now – this is the perfect time.</li>
            <li>Later semesters get hectic, so use this summer.</li>
            <li>
              Basics: <strong>Python + sklearn + YouTube + free courses</strong>
              <ul className="list-[circle] list-inside ml-6 space-y-1">
                <li><strong>Andrew NG</strong> (Machine Learning Specialization) – free and great</li>
                <li>
                  <a href="https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU" className="text-blue-600 no-underline">
                    Stanford CS229 (Andrew Ng lectures)
                  </a>
                </li>
                <li>StatQuest YouTube channel</li>
                <li><strong>Kaggle:</strong> learn ML projects hands-on</li>
                <li><strong>Remember:</strong> {`completing > starting`}</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mt-6 mb-4">
          <h2 className="text-xl font-bold mb-2">5. Consulting Curious?</h2>
          <ul className="list-disc list-inside ml-5 space-y-2">
            <li>If you enjoy problem-solving, structured thinking, or people management – this might be for you!</li>
            <li>Consulting = advising companies on strategy, operations, finance, tech.</li>
            <li>
              <strong>Start with case comps</strong>
              <ul className="list-[circle] list-inside ml-6 space-y-1">
                <li>
                  <a href="https://unstop.com/all-opportunities?oppstatus=recent&searchTerm=case%20competitions" className="text-blue-600 no-underline">
                    Unstop
                  </a>
                </li>
                <li>IIMs</li>
                <li>Clubs like BnC, Enactus, Energy Society (Rendezvous/Tech GC)</li>
              </ul>
            </li>
            <li>
              Explore <strong>case studies</strong>:
              <ul className="list-[circle] list-inside ml-6 space-y-1">
                <li><a href="https://www.edx.org/learn/business-administration/georgetown-university-global-business-in-practice" className="text-blue-600 no-underline">Global Business in Practice</a></li>
                <li><a href="https://www.edx.org/learn/business-strategy/the-wharton-school-of-the-university-of-pennsylvania-business-strategy-from-wharton-competitive-advantage" className="text-blue-600 no-underline">Wharton: Business Strategy</a></li>
                <li><a href="https://www.edx.org/learn/strategic-management/indian-institute-of-management-bangalore-strategic-management" className="text-blue-600 no-underline">IIMBx: Strategic Management</a></li>
                <li><a href="https://www.coursera.org/specializations/managementconsulting" className="text-blue-600 no-underline">Management Consulting Specialisation</a></li>
                <li><a href="https://www.coursera.org/learn/corporatestrategy" className="text-blue-600 no-underline">University of London: Corporate Strategy</a></li>
                <li><a href="https://www.coursera.org/specializations/wharton-business-foundations" className="text-blue-600 no-underline">Wharton Business Foundation</a></li>
                <li><a href="https://www.coursera.org/specializations/business-analytics" className="text-blue-600 no-underline">Wharton Business Analytics</a></li>
              </ul>
            </li>
            <li>Communication/storytelling matters – join DebSoc</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="mt-6 mb-4">
          <h2 className="text-xl font-bold mb-2">6. For the Quant Curious</h2>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>
              Like logic, math, or probability? Try <strong>Brainstellar</strong>, Brilliant.org, puzzle platforms – good for{" "}
              <strong>quant/analytics/finance roles</strong>.
              <ul className="list-[circle] list-inside ml-6">
                <li><strong>Competitive programming is a must</strong> – builds problem-solving skills valued in quant/trading firms.</li>
              </ul>
            </li>
            <li>Platforms: <strong>Codeforces, AtCoder, USACO</strong></li>
            <li>Very useful for <strong>quantitative/trading roles</strong></li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="mt-6 mb-4">
          <h2 className="text-xl font-bold mb-2">7. Projects with Professors (Research 101)</h2>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>Email professors and ask about summer projects (personalized mails work better).</li>
            <li>Even small work with professors is valued + looks great on CV.</li>
            <li>You’re in IIT Delhi – use it!</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mt-6 mb-4">
          <h2 className="text-xl font-bold mb-2">8. Talk to Seniors – Seriously</h2>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>Not just +1 seniors – reach out to +2, +3, alumni.</li>
            <li>Use LinkedIn, society meets, or text randomly 😅</li>
            <li>Ask about work life, internships, placements, goals, regrets</li>
          </ul>
        </section>

        {/* Plan Year */}
        <section className="mt-6 mb-4">
          <h2 className="text-2xl font-bold mb-2">Plan Your 2nd Year</h2>
          <h3 className="font-bold mt-2">Set Clear Goals</h3>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>Think about research internships, student exchange, GSoC, etc.</li>
            <li>
              Break into smaller steps:
              <ul className="list-[circle] list-inside ml-6 space-y-1">
                <li>Foreign intern → explore research areas & build resume</li>
                <li>GSoC → learn open source + contribute small</li>
                <li>Student exchange → check requirements early</li>
              </ul>
            </li>
            <li>Everyone’s pace is different – be intentional.</li>
          </ul>
          <p>
            Refer{" "}
            <a href="https://file.notion.so/f/f/dcb3031a-7190-810b-99d4-000373e1fcde/f00d2eec-9384-46ae-bc30-2a2e48f5e78d/foreign_intern.pdf" className="text-blue-600 no-underline">
              FAQs
            </a>{" "}
            from last year's <strong>'Foreign Intern Session'</strong>.
          </p>
        </section>

        {/* Tradeoffs */}
        <section className="mt-6 mb-4">
          <h2 className="text-2xl font-bold mb-2">Understand the Tradeoffs</h2>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>What’s tech life like? Consulting? Core?</li>
            <li>How risky/safe is it? Are exits easy?</li>
            <li>Linear vs exponential growth?</li>
            <li>9–5 vs flexible vs grind?</li>
          </ul>
          <p><em>No right answer</em> – it’s about what <strong>YOU</strong> prefer.</p>
        </section>

        {/* IITD */}
        <section className="mt-6 mb-4">
          <h2 className="text-2xl font-bold mb-2">Make the Most of IIT Delhi</h2>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>IITD gives you <strong>shorter, clearer paths</strong> to big goals</li>
            <li>Opportunities: profs, clubs, competitions, alumni, resources</li>
          </ul>
        </section>

        {/* Blockquote */}
        <blockquote className="mt-6 mb-6 p-4 bg-gray-100 border-l-4 border-gray-400 italic">
          You've already made it here. Don't waste it – use everything that IITD offers.
        </blockquote>

        {/* TLDR */}
        <section className="mt-6 mb-4">
          <h2 className="text-3xl font-bold mb-2">TL;DR Summer To-Do List</h2>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>
              Check out{" "}
              <a href="https://bswcareerportal.iitd.ac.in/" className="text-blue-600 no-underline">
                https://bswcareerportal.iitd.ac.in/
              </a>
            </li>
            <li>Explore career paths</li>
            <li>Start COL106 prep (if taking it)</li>
            <li>Pick one area (DSA, ML, Quant, etc.)</li>
            <li>Try a mini-project or comp</li>
            <li>Talk to seniors</li>
            <li>Build LinkedIn profile</li>
          </ul>
        </section>

        {/* Aside */}
        <aside className="mt-6 mb-6 p-6 bg-yellow-50 border border-yellow-400 border-dashed italic">
          📢 This is a time you will cherish — have fun, don’t leave room for regrets.
        </aside>

        {/* Closing */}
        <p>
          All in all, this is probably your last “free” summer; use it wisely, but remember
          to have fun, don’t stress yourself out; your upcoming acads got you covered for that ;)
        </p>
        <p>
          This is the best time to learn hobbies you’ve procrastinated on — driving, guitar,
          photography. Have a fantastic summer and excited to see you back on campus with your juniors!
        </p>

      </main>
    </div>
    </div>
  );
}