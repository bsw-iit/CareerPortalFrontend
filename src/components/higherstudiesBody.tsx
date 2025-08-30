export default function HigherStudiesBody() {
  return (
    <div className="flex flex-col items-center justify-start w-full ">
          <main className=" p-10 text-gray-900" style={{fontFamily:'Poppins, sans-serif'}}>
            {/* Header */}
            <header>
              <h1 className="text-center text-4xl md:text-5xl font-bold  underline mb-10" style={{fontFamily: 'Cormorant Infant, serif'}}>
                The Complete Guide to Higher Studies
              </h1>
            </header>

            {/* When to Start */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                When Should You Start?
              </h2>
              <p className="mb-3">
                Ideally, start 4 months before the application deadlines. This
                timeline gives you ample time to:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Prepare a list of target universities.</li>
                <li>Request 3 Letters of Recommendation (LORs).</li>
                <li>Take exams like GRE/TOEFL/IELTS (if required).</li>
                <li>
                  Draft and review your Statement of Purpose (SOP) and resume.
                </li>
                <li>Address any application-specific questions.</li>
              </ul>
            </section>

            {/* Timeline */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Typical Application Timeline
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>By December: Finalize your SOP, resume, and LORs.</li>
                <li>January–February: Submit applications.</li>
                <li>March–April: Wait for admission results.</li>
              </ul>
            </section>

            {/* Exams */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">Exams Needed</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>GRE:</strong> Post-COVID, many universities have
                  waived GRE requirements.
                </li>
                <li>
                  <strong>TOEFL/IELTS:</strong> Proof of English proficiency is
                  usually mandatory unless waived.
                </li>
                <li>Some universities might have specific criteria.</li>
              </ul>
            </section>

            {/* University Selection */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                How to Select Universities?
              </h2>
              <p className="mb-3">Shortlist universities in 3 categories:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Dream:</strong> High-ranking universities with tough
                  competition.
                </li>
                <li>
                  <strong>Medium:</strong> Universities where you have a fair
                  chance.
                </li>
                <li>
                  <strong>Safe:</strong> Universities with a high probability of
                  admission.
                </li>
                <li>
                  Start with a list of 20–40 universities in an Excel sheet and
                  narrow it down to 7–12.
                </li>
                <li>
                  Use filters: rankings, research areas, location, funding, and
                  faculty alignment with your interests.
                </li>
              </ul>
            </section>

            {/* Strong Application */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Building a Strong Application
              </h2>
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <span className="font-semibold">
                    Statement of Purpose (SOP):
                  </span>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    <li>
                      It is never too late to think about pursuing higher
                      education post-graduation. If you have realized that you
                      want to go for it, then in high probability, you have
                      already answered the “Why?” part to justify that decision
                      to yourself. Now it is time to frame the same thing to
                      justify it to the selectors at universities. The medium to
                      do that is your SOP.
                    </li>
                    <li>
                      Use the SOP to tell your story and explain your motivation
                      for pursuing higher studies.
                    </li>
                    <li>
                      Format suggestions:
                      <ul className="list-square list-inside ml-5 space-y-1">
                        <li>
                          <strong>Your Story</strong> (≈1.25 pages): Highlight
                          relevant academic and professional experiences.
                        </li>
                        <li>
                          <strong>Why This University</strong> (≈0.6 pages):
                          Mention how its programs align with your goals.
                        </li>
                        <li>
                          <strong>Future Plans</strong> (≈0.15 pages): Briefly
                          outline your aspirations.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Resume:</span>
                  <ul className="list-disc list-inside ml-5 mt-2">
                    <li>
                      Highlight projects, internships, publications, club
                      activities, and TA/RA experiences relevant to your chosen
                      field.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">LORs:</span>
                  <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                    <li>
                      Reach out to professors, mentors, or supervisors who know
                      your work well.
                    </li>
                    <li>
                      Give them sufficient time (at least 2–3 weeks) to draft
                      strong recommendations.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* Funding */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Funding Opportunities
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Teaching Assistantships (TA) and Research Assistantships (RA)
                  are common funding sources.
                </li>
                <li>
                  The availability of funding varies by university, so research
                  thoroughly.
                </li>
                <li>
                  Highlight your teaching or research experience in your
                  application to increase your chances.
                </li>
              </ul>
            </section>
          </main>
        </div>
  );
}
