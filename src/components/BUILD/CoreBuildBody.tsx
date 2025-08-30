import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import Timeline from "./Timeline";

export default function Body() {
  // ---------- Hardcoded profile data (verbatim from your JSON) ----------
  const overview =
    "If you have a passion for Electrical Engineering (EE) courses and enjoy hands-on circuit and chip design, a Core Electrical profile could be ideal for you. This role involves designing, simulating, and fabricating advanced circuits for various applications, such as digital processors, power electronic converters, and RF/Mixed Signal systems. If you’re excited by creating and optimizing hardware and have a keen interest in cutting-edge technology, read on!";

  const readmore = `Your role starts with designing and engineering hardware for specific applications. As you gain experience, tasks become more specialized. Key roles include Analog/RFIC/Mixed Signal Design Engineer, Digital Design Engineer, Physical Design/Verification Engineer, and Powertrain Designer. Software Engineers in this domain work with embedded systems, programming boards, and developing testing platforms. While company cultures vary, they generally offer a supportive environment with manageable stress levels. <br/><br/><b>Daily tasks</b><ul style="list-style: outside; margin-left: 15px; text-align:left"><li>Design and optimize circuits for various applications</li><li>Simulate and test hardware components</li><li>Work on embedded systems and programming (for Software Engineers)</li><li>Collaborate with teams on complex projects</li></ul>`;

  const videoLinks = [
    "https://www.youtube.com/embed/iLWc-RF_LWI",
    "https://www.youtube.com/embed/cRCx5pUmRQQ",
  ];

  const questionNumbers = ["1", "2", "3", "4", "5", "6", "!!"]; // matches JSON "question"
  const questions = [
    "What are the main roles for which company comes? ",
    "Are there any hard barriers, preferred branches?",
    "What can you do during 3rd and 4th sem to boost your chances?",
    "How to build your CV?",
    "An overview of the selection procedure & Navigating the GD round",
    "Cracking the interview",
  ];
  const timestamps = ["4", "10", "28", "150", "318", "404"];

  const guideHTML = `<div style="text-align: center; margin-bottom: 30px;">
    <h1 style="font-size: 38px; color: black; text-decoration: underline; font-weight: 700; font-family: 'Cormorant Infant', serif;">
        The complete guide for Core Preparation
 </h1>
</div>
<div style="font-size: 18px; line-height: 1.8; margin-bottom: 20px; text-align: justify; margin-left: 30px; margin-right: 30px; font-family: 'Poppins', sans-serif;">
    <div><p style="font-size: 18px; font-weight: bold; display: inline;">The Process:</p> <span> The selection process for an FMCG internship typically involves three to four rounds:
<ol style="margin-left: 30px;">
    <li><strong>Application Stage:</strong> Fill out a form detailing your internships, academic achievements, and skills. Highlight relevant experiences and ensure your details are precise since this forms the company’s first impression of you. Some companies also include a psychometric test to assess personality traits and cultural fit. Treat this test as a chance to showcase your authenticity—don’t overthink your answers.</li>
    <li><strong>Group Discussion (GD):</strong> Emphasis on quality over quantity. Focus on contributing meaningfully to the discussion rather than dominating it. Structure your thoughts before speaking and encourage quieter members to participate. This demonstrates teamwork and improves the overall discussion quality.</li>
    <li><strong>Interview Stage:</strong> <ul style="margin-left: 30px; list-style-type: disc;">
        <li><strong>Technical Round:</strong> This assesses your understanding of key concepts and the projects listed on your resume. Be clear and concise in your answers and prepare for follow-up questions.</li>
        <li><strong>HR Round:</strong> This evaluates your fit for the company and role. Expect questions about your strengths, weaknesses, and past experiences.</li>
    </ul>
Throughout the process, be confident, know your CV thoroughly, and stay calm under pressure.</span></div>
</div>
<div style="font-size: 18px; line-height: 1.8; margin-bottom: 20px; text-align: justify; margin-left: 30px; margin-right: 30px; font-family: 'Poppins', sans-serif;">
    <div><p style="font-size: 18px; font-weight: bold; display: inline;">Building an Effective CV:</p> <span> Your CV is a crucial part of the application process. Here’s how your CV shapes up -
<ul style="margin-left: 30px; list-style-type: disc;">
    <li><strong>Academic Background:</strong> Include your 10th and 12th-grade marks, competitive exam achievements (e.g., NTSE, KVPY, JEE ranks), and relevant certifications.</li>
    <li><strong>CGPA:</strong> Most FMCG companies require a CGPA of 7-7.5. Companies like Wipro prefer 8+. A strong CGPA enhances your CV, but exceptional internships and projects can compensate for a lower score.</li>
    <li><strong>Internships:</strong> Prefer industry-relevant internships such as those in manufacturing roles. SURA projects or AI/ML internships can make your profile stand out.</li>
    <li><strong>Projects:</strong> Include diverse and impactful projects such as COL Projects or Department projects to showcase versatility.</li>
    <li><strong>PORs and ECAs:</strong> Emphasize positions of responsibility and continued involvement in clubs/activities to reflect growth and commitment.</li>
    <li><strong>Relevant Courses:</strong> List courses aligned with the FMCG industry.</li>
</ul></span></div>
</div>
<div style="font-size: 18px; line-height: 1.8; margin-bottom: 20px; text-align: justify; margin-left: 30px; margin-right: 30px; font-family: 'Poppins', sans-serif;">
    <div><p style="font-size: 18px; font-weight: bold; display: inline;">Building your profile during 3rd and 4th Semesters:</p> <span> Approach professors for research projects. Complete internships in relevant areas to gain practical experience and do AI/ML projects to differentiate yourselves among applicants. At the same time, strengthen your understanding of core concepts relevant to the FMCG domain, such as supply chain operations or data analytics. This balance of practical experience and strong fundamentals will give you an edge in the selection process.</span></div>
</div>
<div style="font-size: 18px; line-height: 1.8; margin-bottom: 20px; text-align: justify; margin-left: 30px; margin-right: 30px; font-family: 'Poppins', sans-serif;">
    <div><p style="font-size: 18px; font-weight: bold; display: inline;">Interview Tips:</p> <span>Technical Round: Be concise and prepared to explain your listed projects and internships in detail. If a question seems unclear, ask for clarification and steer the conversation toward your strengths. Be prepared to explain every point and link it to the role you’re applying for.
HR Round: Create a brief but compelling self-introduction. Highlight academic interests, leadership roles, and experiences, connecting them to the company’s vision and the role you’re applying for. Stay calm and ask insightful questions about the role or company. Confidence and calmness can make a significant difference, especially when dealing with challenging questions.</span></div>
</div>`;

  // structured timeline data (verbatim)
  const coreTimeline = [
    { heading: "Prior to 4th Sem", details: "Boost CG as much as possible !! !!" },
    {
      heading: "Post 4th Sem",
      details: "Corporate or research intern, !! preferably in the manufacturing !! sector",
    },
    { heading: "4th Sem", details: "Take up project work either included !! in course, or led by a professor" },
    {
      heading: "Prior to Day 1",
      details:
        "Revisit your journey from childhood to IIT, your !! hobbies and any life changing events (these get !! asked a lot in interviews). Also revisit !! coursework and attempt mock aptitude tests",
    },
    { heading: "Day 1 of Interviews", details: "!! !!" },
  ];

  // ---------- Player / FAQ tooltip state ----------
  const [readMore, setReadMore] = useState(false);
  const [hoveredQuestion, setHoveredQuestion] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [questionClicked, setQuestionClicked] = useState<boolean>(false);
  const [playerKey, setPlayerKey] = useState<number>(0);
  const [playingURL, setPlayingURL] = useState<string>(videoLinks[0] || "");
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    // Reset on mount
    setReadMore(false);
    setPlayerKey((k) => k + 1);
    setPlayingURL(videoLinks[0] || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---------- Tooltip / formatting helpers ----------
  const formatTooltipText = (text: string) =>
    text.split("!!").map((line, index) => (
      <React.Fragment key={index}>
        <span style={{ whiteSpace: "nowrap" }}>{line.trim()}</span>
        {index < text.split("!!").length - 1 && <br />}
      </React.Fragment>
    ));

  const handleMouseEnter = (index: number, event: React.MouseEvent) => {
    setHoveredQuestion(questions[index] || "");
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltipPosition({ x: rect.left + rect.width / 2, y: rect.top - 10 });
  };

  const handleMouseLeave = () => {
    setHoveredQuestion(null);
  };

  const handleQuestionClick = (iddd: number, event: React.MouseEvent) => {
    event.preventDefault();
    const timestamp = parseFloat(timestamps[iddd]);
    setQuestionClicked(true);

    // prevent accidental scroll-to-top hack used previously
    const originalScrollTo = window.scrollTo;
    // @ts-ignore
    window.scrollTo = () => {};
    setTimeout(() => {
      window.scrollTo = originalScrollTo;
    }, 1);

    // seek and play
    if (playerRef.current) {
      try {
        playerRef.current.seekTo(timestamp);
        // try to call play on internal player if available
        const internal = (playerRef.current as any).getInternalPlayer?.();
        internal?.play?.();
      } catch (e) {
        // swallow errors silently
        // console.warn("seek/play failed", e);
      }
    }
  };

  // ---------- Timeline rendering math (sine curve) ----------
  const curveHeight = 360;
  const middle = 180; // vertical center
  const amplitude = 60;
  const startX = -1.1 * Math.PI;
  const endX = 6.5 * Math.PI;

  const mapToPercentage = (x: number): number => ((x - startX) / (endX - startX)) * 100;
  const calculateY = (x: number): number => middle - amplitude * Math.sin(x);

  // Build sampled path for smooth sine curve
  const buildSinePath = (samples = 600) => {
    const step = (endX - startX) / (samples - 1);
    let d = `M0,${middle}`;
    for (let i = 0; i < samples; i++) {
      const xAngle = startX + i * step;
      const xPixel = (i / (samples - 1)) * 1000; // scaled to 1000 width
      const y = calculateY(xAngle);
      d += ` L${xPixel},${y.toFixed(2)}`;
    }
    return d;
  };

  const pathD = buildSinePath(600);

  // For each timeline item, compute its xAngle & display position; direction pattern is up, down, up, down, up (as original data implied)
  const timelineNodes = coreTimeline.map((item, idx) => {
    const frac = coreTimeline.length === 1 ? 0.5 : idx / (coreTimeline.length - 1);
    const xAngle = startX + frac * (endX - startX);
    const posX = `${mapToPercentage(xAngle)}%`;
    const baseY = calculateY(xAngle);
    // direction: indexes 0,2,4 -> up (match original upwardLabels mapping), others down
    const direction = idx % 2 === 0 ? "up" : "down";
    const posY = baseY + (direction === "down" ? 70 : -40);
    return { ...item, idx, xAngle, posX, posY, direction };
  });

  // ---------- Arrow component used on timeline ----------
  function TimelineArrow({ left, top, direction, heading, details }: {
    left: string;
    top: number;
    direction: "up" | "down";
    heading: string;
    details: string;
  }) {
    const formatBody = (text: string) =>
      text.split("!!").map((line, i) => (
        <React.Fragment key={i}>
          <span style={{ whiteSpace: "nowrap" }}>{line.trim()}</span>
          {i < text.split("!!").length - 1 && <br />}
        </React.Fragment>
      ));

    const containerStyle: React.CSSProperties = {
      left,
      top: `${top}px`,
      transform: "translate(-50%, 0)",
      position: "absolute",
      fontFamily: "Montserrat, sans-serif",
      textAlign: "center",
      maxWidth: 260,
      pointerEvents: "auto",
    };

    const arrowLength = 42;

    return (
      <div style={containerStyle}>
        {direction === "down" ? (
          <>
            <div style={{ width: 2, background: "#002F40", height: arrowLength, margin: "0 auto" }} />
            <div style={{ width: 10, height: 10, background: "#002F40", borderRadius: "50%", margin: "4px auto" }} />
            <div style={{ marginTop: 8, color: "#000", background: "white", padding: "8px 10px", borderRadius: 8, boxShadow: "0 6px 14px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 700 }}>{heading}</div>
              <div style={{ fontWeight: 400 }}>{formatBody(details)}</div>
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: 8, color: "#000", background: "white", padding: "8px 10px", borderRadius: 8, boxShadow: "0 6px 14px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 700 }}>{heading}</div>
              <div style={{ fontWeight: 400 }}>{formatBody(details)}</div>
            </div>
            <div style={{ width: 10, height: 10, background: "#002F40", borderRadius: "50%", margin: "4px auto" }} />
            <div style={{ width: 2, background: "#002F40", height: arrowLength, margin: "0 auto" }} />
          </>
        )}
      </div>
    );
  }

  // ---------- Render ----------
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] flex flex-col items-center">
      <div className="flex-grow w-full">
        <div className="w-full py-2 flex flex-col items-center relative">
          <h1
            className="text-3xl md:text-5xl font-bold text-center mb-8 mt-0"
            style={{
              fontFamily: "Cormorant infant, serif",
              color: "#002F40",
              fontWeight: 750,
              position: "relative",
              left: "-2.5vw",
            }}
          >
            Suggested Timeline
          </h1>

          {/* Timeline SVG */}
          <div className="relative w-full" style={{ minHeight: curveHeight + 120 }}>
            <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 1000 ${curveHeight}`} preserveAspectRatio="none" style={{ overflow: "visible" }}>
              <path d={pathD} stroke="#002F40" strokeWidth={14} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            {/* Render arrows (timelineNodes) */}
            {timelineNodes.map((node) => (
              <TimelineArrow
                key={node.idx}
                left={node.posX}
                top={node.posY}
                direction={node.direction as "up" | "down"}
                heading={node.heading}
                details={node.details}
              />
            ))}
          </div>
        </div>

        {/* Video + FAQs */}
        <div className="flex flex-col md:flex-row w-full bg-[#FFFFFF] mt-12">
          <div
            className="w-full md:w-1/2 bg-[#002F40] flex items-center justify-center relative"
            style={{ padding: "4vh", aspectRatio: "1.7" }}
          >
            <ReactPlayer
              key={playerKey}
              url={playingURL}
              className="react-player"
              light={true}
              width="100%"
              height="100%"
              controls
              ref={playerRef}
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-[#FFFFFF]">
            <h1 className="text-4xl font-bold text-center text-black mb-5" style={{ fontFamily: "Cormorant Infant, serif", fontWeight: "700" }}>
              FAQs
            </h1>
            <p className="text-2xl text-center text-black" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}>
              All your Questions Answered!
            </p>
            <p className="text-xl text-center text-black mb-8" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "normal", marginBottom: 50 }}>
              Use the timestamps below to navigate to the questions of your choice:
            </p>

            {/* Render Q links split around the "!!" marker — identical logic to earlier code */}
            <div className="flex flex-col item-center space-y-3">
              <div className="flex flex-wrap justify-center space-x-4">
                {questionNumbers
                  .slice(0, questionNumbers.findIndex((q) => q.includes("!!")))
                  .map((question, index) => (
                    <React.Fragment key={index}>
                      <a
                        href={`#${question.toLowerCase()}`}
                        onClick={(e) => handleQuestionClick(index, e)}
                        onMouseEnter={(e) => handleMouseEnter(index, e)}
                        onMouseLeave={handleMouseLeave}
                        className="text-black text-2xl font-medium underline"
                      >
                        Q{index + 1}
                      </a>
                      {index < questionNumbers.findIndex((q) => q.includes("!!")) - 1 && <span className="text-black text-xl">|</span>}
                    </React.Fragment>
                  ))}
              </div>

              <div className="flex flex-wrap justify-center space-x-4">
                {questionNumbers
                  .slice(questionNumbers.findIndex((q) => q.includes("!!")) + 1)
                  .map((question, idx) => {
                    const start = questionNumbers.findIndex((q) => q.includes("!!")) + 1;
                    const realIndex = idx + start;
                    return (
                      <React.Fragment key={idx}>
                        <a
                          href={`#${question.toLowerCase()}`}
                          onClick={(e) => handleQuestionClick(realIndex, e)}
                          onMouseEnter={(e) => handleMouseEnter(realIndex, e)}
                          onMouseLeave={handleMouseLeave}
                          className="text-black text-2xl font-medium underline"
                        >
                          Q{realIndex + 1}
                        </a>
                        {idx < questionNumbers.length - start - 2 && <span className="text-black text-xl">|</span>}
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>

            {/* Tooltip for hovered question */}
            {hoveredQuestion && (
              <div
                className="fixed shadow-lg text-black text-xl"
                style={{
                  top: tooltipPosition.y,
                  left: tooltipPosition.x,
                  transform: "translate(-50%, -100%)",
                  zIndex: 1000,
                  whiteSpace: "nowrap",
                  backgroundColor: "#D9D9D9",
                  border: "2px solid #002F40",
                  borderRadius: "8px",
                  padding: "6px 12px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                {formatTooltipText(hoveredQuestion)}
              </div>
            )}

            {/* show small notice when a question is clicked (keeps previous behavior) */}
            {questionClicked && <div className="mt-4 text-sm text-gray-600">Question was clicked!</div>}
          </div>
        </div>

        {/* CV Making + second video */}
        <div className="flex flex-col-reverse md:flex-row w-full mt-12">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 bg-[#FFFFFF]">
            <h1 className="text-4xl text-center text-black mb-6" style={{ fontFamily: "Cormorant Infant, serif", fontWeight: 700 }}>
              CV Making
            </h1>
            <p className="text-xl text-center text-black mb-4" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "normal" }}>
              Learn how to make the perfect CV from <br />
              our established experts to maximise <br />
              your shortlists!
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-[#002F40] flex items-center justify-center relative" style={{ padding: "4vh", aspectRatio: "1.7" }}>
            <ReactPlayer url={videoLinks[1] || ""} className="react-player" width="100%" height="100%" controls />
          </div>
        </div>

        {/* Full guide HTML */}
        <div className="w-full bg-[#FFFFFF] p-8 mt-8">
          <div dangerouslySetInnerHTML={{ __html: guideHTML }} />
        </div>
      </div>
    </div>
  );
}
