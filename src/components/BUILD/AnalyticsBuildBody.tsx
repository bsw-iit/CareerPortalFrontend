import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import Timeline from "./Timeline";

export default function Body() {
  // ---------- Hardcoded profile data (from Finance JSON) ----------
  const overview =
    "A career in finance involves managing and analyzing financial data, making strategic decisions, and helping businesses achieve their financial goals. Whether you're interested in investment banking, private equity, or finance within a tech company, understanding the demands and rewards of the field is crucial. If you’re ready for a challenging yet rewarding career with diverse opportunities, finance might be the right fit for you!";

  const readmore = `In finance, daily activities vary based on the specific role. In investment banking, expect long hours (80-100 per week) dealing with high-stakes deals and rigorous analyses. Private equity roles involve around 80 hours a week, with more intensive periods during active deals. Finance roles in tech companies generally offer a better work-life balance, with 40-50 hours a week. The day involves reviewing financial reports, conducting market analysis, and preparing presentations for stakeholders. The role demands strong analytical skills, attention to detail, and adaptability to fast-paced environments.<br/><br/><b>Daily Tasks</b><ul style="list-style: outside; margin-left: 15px; text-align:left"><li>Analyze financial data and create financial models</li><li>Prepare and present reports to senior management</li><li>Monitor market trends and financial performance</li><li>Collaborate with other departments and clients</li></ul>`;

  const videoLinks = [
    "https://www.youtube.com/embed/ooc-1_4D3y0",
    "https://www.youtube.com/embed/4HDJX0zuycs",
  ];

  const questionNumbers = ["1", "2", "3", "4", "5", "!!", "6", "7", "8", "9"];
  const questions = [
    "What exactly is the Finance profile?",
    "What is the work-life balance in this sector?",
    "What kind of internships can help?",
    "Which skills are most important?",
    "Which companies generally recruit?",
    "What are typical salaries offered?",
    "How can I prepare my CV?",
    "What is the interview process like?",
    "How to practice for aptitude and case studies?",
  ];
  const timestamps = ["8", "36", "72", "145", "230", "310", "370", "420", "485"];

  const guideHTML = `<div style="text-align: center; margin-bottom: 30px;">
    <h1 style="font-size: 38px; color: black; text-decoration: underline; font-weight: 700; font-family: 'Cormorant Infant', serif;">
        The complete guide for Finance Preparation
    </h1>
  </div>
  <div style="font-size: 18px; line-height: 1.8; margin-bottom: 20px; text-align: justify; margin-left: 30px; margin-right: 30px; font-family: 'Poppins', sans-serif;">
    <div><p style="font-size: 18px; font-weight: bold; display: inline;">The Process:</p> 
    <span>The selection process for finance internships typically involves aptitude tests, case studies, and multiple interview rounds (technical + HR). Strong analytical thinking and familiarity with financial concepts are expected. You may face questions on valuation, corporate finance, and brain teasers. Be clear, concise, and practice solving problems under time pressure.</span></div>
  </div>
  <div style="font-size: 18px; line-height: 1.8; margin-bottom: 20px; text-align: justify; margin-left: 30px; margin-right: 30px; font-family: 'Poppins', sans-serif;">
    <div><p style="font-size: 18px; font-weight: bold; display: inline;">Building an Effective CV:</p> 
    <span>Highlight finance-related projects, internships, and coursework. Showcase your analytical and problem-solving skills. Strong CGPA (8+) is generally expected, but relevant experience can compensate. Positions of responsibility (PORs), certifications (like CFA Level 1, financial modeling), and impactful projects can strengthen your CV.</span></div>
  </div>
  <div style="font-size: 18px; line-height: 1.8; margin-bottom: 20px; text-align: justify; margin-left: 30px; margin-right: 30px; font-family: 'Poppins', sans-serif;">
    <div><p style="font-size: 18px; font-weight: bold; display: inline;">Preparation Tips:</p> 
    <span>Work on aptitude practice (quant + logical), read finance news daily, and follow case interview frameworks. Gain familiarity with financial statements and Excel modeling. Practical exposure through internships or competitions like CFA Research Challenge is highly valued.</span></div>
  </div>`;

  // structured timeline data (from Finance JSON)
  const coreTimeline = [
    { heading: " ", details: "Start by identifying the !! exact profile of analytics you !! want to target !! e.g Finance, Data etc" },
    { heading: "3rd Sem", details: "Start coding and reach an optimum !! level till your winter break" },
    { heading: "4th Sem", details: "Develop niche knowledge about !! SQL and DBMS in totality" },
    { heading: " ", details: "Continue with project lookouts and !! gather the projects as mentioned in !! the written guide" },
    { heading: "Post 4th Sem", details: "Learn from your projects and !! practice the resources given in !! the written guide" },
  ];

  // ---------- Player / FAQ state ----------
  const [hoveredQuestion, setHoveredQuestion] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [questionClicked, setQuestionClicked] = useState<boolean>(false);
  const [playerKey, setPlayerKey] = useState<number>(0);
  const [playingURL, setPlayingURL] = useState<string>(videoLinks[0] || "");
  const playerRef = useRef<ReactPlayer | null>(null);

  useEffect(() => {
    setPlayerKey((k) => k + 1);
    setPlayingURL(videoLinks[0] || "");
  }, []);

  // ---------- Tooltip helpers ----------
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
  const handleMouseLeave = () => setHoveredQuestion(null);

  const handleQuestionClick = (iddd: number, event: React.MouseEvent) => {
    event.preventDefault();
    const timestamp = parseFloat(timestamps[iddd]);
    setQuestionClicked(true);
    if (playerRef.current) {
      try {
        playerRef.current.seekTo(timestamp);
        const internal = (playerRef.current as any).getInternalPlayer?.();
        internal?.play?.();
      } catch {}
    }
  };

  // ---------- Timeline rendering ----------
  const curveHeight = 360;
  const middle = 180;
  const amplitude = 60;
  const startX = -1.1 * Math.PI;
  const endX = 6.5 * Math.PI;
  const mapToPercentage = (x: number): number => ((x - startX) / (endX - startX)) * 100;
  const calculateY = (x: number): number => middle - amplitude * Math.sin(x);

  const buildSinePath = (samples = 600) => {
    const step = (endX - startX) / (samples - 1);
    let d = `M0,${middle}`;
    for (let i = 0; i < samples; i++) {
      const xAngle = startX + i * step;
      const xPixel = (i / (samples - 1)) * 1000;
      const y = calculateY(xAngle);
      d += ` L${xPixel},${y.toFixed(2)}`;
    }
    return d;
  };
  const pathD = buildSinePath(600);

  const timelineNodes = coreTimeline.map((item, idx) => {
    const frac = coreTimeline.length === 1 ? 0.5 : idx / (coreTimeline.length - 1);
    const xAngle = startX + frac * (endX - startX);
    const posX = `${mapToPercentage(xAngle)}%`;
    const baseY = calculateY(xAngle);
    const direction = idx % 2 === 0 ? "up" : "down";
    const posY = baseY + (direction === "down" ? 70 : -40);
    return { ...item, idx, posX, posY, direction };
  });

  function TimelineArrow({ left, top, direction, heading, details }: any) {
    const formatBody = (text: string) =>
      text.split("!!").map((line: string, i: number) => (
        <React.Fragment key={i}>
          <span style={{ whiteSpace: "nowrap" }}>{line.trim()}</span>
          {i < text.split("!!").length - 1 && <br />}
        </React.Fragment>
      ));
    return (
      <div style={{ left, top: `${top}px`, transform: "translate(-50%,0)", position: "absolute", textAlign: "center", maxWidth: 260 }}>
        {direction === "down" ? (
          <>
            <div style={{ width: 2, background: "#002F40", height: 42, margin: "0 auto" }} />
            <div style={{ width: 10, height: 10, background: "#002F40", borderRadius: "50%", margin: "4px auto" }} />
            <div style={{ marginTop: 8, background: "white", padding: "8px 10px", borderRadius: 8 }}>
              <div style={{ fontWeight: 700 }}>{heading}</div>
              <div>{formatBody(details)}</div>
            </div>
          </>
        ) : (
          <>
            <div style={{ marginBottom: 8, background: "white", padding: "8px 10px", borderRadius: 8 }}>
              <div style={{ fontWeight: 700 }}>{heading}</div>
              <div>{formatBody(details)}</div>
            </div>
            <div style={{ width: 10, height: 10, background: "#002F40", borderRadius: "50%", margin: "4px auto" }} />
            <div style={{ width: 2, background: "#002F40", height: 42, margin: "0 auto" }} />
          </>
        )}
      </div>
    );
  }

  // ---------- Render ----------
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] flex flex-col items-center">
      <div className="flex-grow w-full">
        {/* Timeline */}
        <div className="w-full py-2 flex flex-col items-center relative">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8" style={{ color: "#002F40" }}>
            Suggested Timeline
          </h1>
          <div className="relative w-full" style={{ minHeight: curveHeight + 120 }}>
            <svg className="absolute w-full h-full" viewBox={`0 0 1000 ${curveHeight}`} preserveAspectRatio="none">
              <path d={pathD} stroke="#002F40" strokeWidth={14} fill="none" />
            </svg>
            {timelineNodes.map((node) => (
              <TimelineArrow key={node.idx} left={node.posX} top={node.posY} direction={node.direction} heading={node.heading} details={node.details} />
            ))}
          </div>
        </div>

        {/* Video + FAQs */}
        <div className="flex flex-col md:flex-row w-full mt-12">
          <div className="w-full md:w-1/2 bg-[#002F40] flex items-center justify-center" style={{ padding: "4vh", aspectRatio: "1.7" }}>
            <ReactPlayer key={playerKey} url={playingURL} className="react-player" light width="100%" height="100%" controls ref={playerRef} />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-5">FAQs</h1>
            <p className="text-2xl font-semibold">All your Questions Answered!</p>
            <p className="text-xl mb-8">Use the timestamps below to navigate:</p>
            <div className="flex flex-col space-y-3">
              <div className="flex flex-wrap justify-center space-x-4">
                {questionNumbers.slice(0, questionNumbers.findIndex((q) => q.includes("!!"))).map((_, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => handleQuestionClick(index, e)}
                    onMouseEnter={(e) => handleMouseEnter(index, e)}
                    onMouseLeave={handleMouseLeave}
                    className="text-black text-2xl underline"
                  >
                    Q{index + 1}
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap justify-center space-x-4">
                {questionNumbers.slice(questionNumbers.findIndex((q) => q.includes("!!")) + 1).map((_, idx) => {
                  const start = questionNumbers.findIndex((q) => q.includes("!!")) + 1;
                  const realIndex = idx + start;
                  return (
                    <a
                      key={idx}
                      href="#"
                      onClick={(e) => handleQuestionClick(realIndex, e)}
                      onMouseEnter={(e) => handleMouseEnter(realIndex, e)}
                      onMouseLeave={handleMouseLeave}
                      className="text-black text-2xl underline"
                    >
                      Q{realIndex + 1}
                    </a>
                  );
                })}
              </div>
            </div>
            {hoveredQuestion && (
              <div
                className="fixed shadow-lg text-black text-xl"
                style={{ top: tooltipPosition.y, left: tooltipPosition.x, transform: "translate(-50%,-100%)", backgroundColor: "#D9D9D9", border: "2px solid #002F40", borderRadius: "8px", padding: "6px 12px" }}
              >
                {formatTooltipText(hoveredQuestion)}
              </div>
            )}
          </div>
        </div>

        {/* CV + second video */}
        <div className="flex flex-col-reverse md:flex-row w-full mt-12">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl mb-6">CV Making</h1>
            <p className="text-xl text-center">Learn how to make the perfect CV for Finance roles with expert advice.</p>
          </div>
          <div className="w-full md:w-1/2 bg-[#002F40] flex items-center justify-center" style={{ padding: "4vh", aspectRatio: "1.7" }}>
            <ReactPlayer url={videoLinks[1] || ""} className="react-player" width="100%" height="100%" controls />
          </div>
        </div>

        {/* Full Guide */}
        <div className="w-full p-8 mt-8">
          <div dangerouslySetInnerHTML={{ __html: guideHTML }} />
        </div>
      </div>
    </div>
  );
}
