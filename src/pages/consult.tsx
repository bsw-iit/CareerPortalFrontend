import Navbar from "../components/Navbar";
import Hero from "../components/Hero.tsx";
import BG from "../assets/explore/consult-home-bg.svg";
import VideoGrid from "../components/videogrid.tsx";
import Timeline from "../components/timeline.tsx";

export default function ConsultBody() {
  const cousltdata = {
  downwardLabels: [
    "                Start shaping your CV convey !! the story you want!! Look to achieve 'spikes'",
    "Post 3rd Sem    Complete internship/project to boost CV. !! Start reaching out for one timely",
    "Post 4th Sem    Complete corporate/startup/ !! foreign internships. !! Start reaching out during 4th Sem",
    "1-2 months before interviews    Form case group and start !! practicing cases",
    "Shortly after shortlists    Buddies are assigned; !! buddy cases begin",
  ],
};


  return (
    <div>
      <Navbar />
      <Hero
        bg={BG}
        heading="Consult"
        title="Build your career the right way!"
      />
      <Timeline data={cousltdata}/>
      <VideoGrid iframeUrl1="https://www.youtube.com/embed/GyVqlN3l1e0" iframeUrl2="https://www.youtube.com/embed/ssa7AXMpmXs" questions={["What does a consultant do?", "An overview of the process", "What are different sections of CV? What is a spike?", "What is the importance of CG and Schols?", "How should the internship section look like? ", "How should PoR section look like?"," "," How should the ECA section look like?"," Tell us about buddy cases"," How to navigate through the interview day?"]} timestamps={["4",  "140",  "201","257","359","448"," ","633","655","905"]}/>
      <div className="flex flex-col items-center justify-start w-full ">
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
              The complete guide for Consult preparation
            </h1>
          </header>

          {/* Process Overview */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Process Overview</h2>
            <p>
              The selection process for consulting internships consists of three
              main stages: CV Shortlisting, Buddy Rounds, and Offline
              Interviews. CV shortlisting is by far the biggest bottleneck,
              where ~50 unique students are shortlisted from a pool of 500+
              applicants. As such, preparing a standout CV is crucial. Begin
              working on your CV early to allow sufficient time for refinement
              and development. Your CV should tell a compelling story about your
              achievements and experiences.
            </p>
          </section>

          {/* Building Your CV */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Building Your CV</h2>
            <p>
              A consulting CV typically comprises five sections: CG, Scholastic
              Achievements, Internships, PORs, and ECAs. A consulting CV is
              judged via the 'spike' framework. A 'spike' section is one where
              you are well above the average applicant. It is the section that
              stands out to the person evaluating your CV. Although there is
              some subjectivity to what you call a spike, being well above
              average in atleast 3-4 sections is non-negotiable for a shortlist
              among the top firms.
            </p>
          </section>

          {/* CG */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">CG</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Generally top firms consider CG above 8 to be satisfactory, some
                firms have also put hard barriers in the past. A CG above 8.5 or
                9 is an ideal spike.
              </li>
              <li>
                A lower CG makes getting shortlisted tougher but can be
                compensated by excelling in other sections. (Note: These numbers
                are subject to the relative performance of the applicants in a
                particular batch)
              </li>
            </ul>
          </section>

          {/* Schols */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Schols</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                This section includes institute-level awards such as Merit List,
                Department Rank, and pre-institute achievements like Olympiad
                ranks or scholarships.
              </li>
              <li>
                If this section of yours is lacking, do not worry, with some
                conscious effort you can build your section up to a satisfactory
                level.
              </li>
            </ul>
          </section>

          {/* Internships */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Internships</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                These include corporate, start-up and research interns
                (offline/online). It is highly advised to complete multiple
                internships. Internships in big brand corporations or business
                schools are valued.
              </li>
              <li>
                An offline intern at a well-established corporate (even more
                impactful if it is in the consulting sector) or at a foreign
                research institute are considered as particularly great options.
                These can be coupled with a remote intern at a business school,
                which is usually a significantly less time commitment.
              </li>
            </ul>
          </section>

          {/* PORs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">PORs</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                This section conveys the story of your campus involvements over
                the course of two years. Continuity in PORs is hence valued,
                indicating progress in whatever activity you have devoted time
                to.
              </li>
              <li>
                3rd year PORs are important. Elected PORs are generally
                considered more valuable than nominated PORs.
              </li>
            </ul>
          </section>

          {/* ECAs */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">ECAs</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Organize your ECAs into 2-3 broad sections to provide structure.
                Having multiple ECAs in a few select sections shows excellence
                and dedication as opposed to having them scattered across
                various sections.
              </li>
              <li>
                Ensure that the most valuable achievements are presented well to
                make your CV stand out.
              </li>
            </ul>
          </section>

          {/* Buddy Rounds */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Buddy Rounds</h2>
            <p>
              Once you are shortlisted, the firm will allot you buddies. A buddy
              is a consultant working at the firm and is usually an alum of the
              institute. Buddies will conduct case solving sessions with you,
              guiding you through your preparation. These sessions are
              evaluative, with firms using them to create a "hotlist" of
              preferred candidates. Although not being on the hotlist does not
              eliminate your chances, performing well in these rounds increases
              your likelihood of being prioritized.
            </p>
          </section>

          {/* Case Prep */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Case Prep</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Form a Case Group:</strong> Work with 3-4 serious
                aspirants who have diverse networks. This allows you to access
                varied insights and resources. Case groups help maintain regular
                practice but also seek opportunities to practice with seniors
                and peers outside your group.
              </li>
              <li>
                You can start practicing cases 1-2 months before your interviews
                ensuring you are at your peak during the interviews and senior
                buddy cases. Start with guesstimates and profitability, while
                aiming to cover other types of cases towards the end of your
                prep.
              </li>
              <li>
                Practice in pairs, taking turns as interviewer and interviewee.
                After each case, spend time analyzing your performance and
                building a deeper understanding of frameworks and solutions.
              </li>
            </ul>
          </section>

          {/* Resources */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Resources</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                A conventionally followed method to begin is getting an overview
                of case preps via the recorded lectures of Victor Cheng and Case
                Interviews Cracked:{" "}
                <a
                  href="https://www.youtube.com/playlist?list=PLRfC6rXAvJzcp_bkNMbbMgRm0gER0fbr2"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube Playlist
                </a>{" "}
                (stick to the first few relevant lectures)
              </li>
              <li>
                Case Compendium (a good beginner-friendly option), Case
                Interviews Cracked and IIM Ahmedabad Case Book (slightly more
                advanced than the former) are some conventional case books used
                by applicants.{" "}
                <a
                  href="https://owncloud.iitd.ac.in/nextcloud/index.php/s/q97gkNsXzyC5wik?dir=undefined&openfile=12489832"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download here
                </a>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
