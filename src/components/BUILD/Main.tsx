import React, {useState, useEffect} from "react";  
import ReactPlayer from "react-player";

import profileData from "../../assets/profiles.json";

const TimelinePage = ({ profileName }: { profileName: string | undefined }) => {  
    const profile = profileData[profileName as keyof typeof profileData];
    const [hoveredQuestion, setHoveredQuestion] = useState<string | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [questionClicked, setQuestionClicked] = useState<boolean>(false); // Track if a question was clicked

    const [playerKey, setPlayerKey] = useState<number>(0);
    const [playingURL, setPlayingURL] = useState<string>(
      profile?.videoLinks?.[0] || ""
  );
  const playerRef = React.useRef<ReactPlayer | null>(null);  // Create a reference for ReactPlayer

    const curveHeight = 300;  
    const middle = 150;  
    const amplitude = 25;
    const startX = -1.1*Math.PI; 
    const endX = 6.5 * Math.PI; 

    const downwardArrowPositions = [-Math.PI / 2, (3 * Math.PI) / 2, (7 * Math.PI) / 2, (11 * Math.PI) / 2];  
    const upwardArrowPositions = [Math.PI / 2, (5 * Math.PI) / 2, (9 * Math.PI) / 2];  

    const mapToPercentage = (x: number): number => ((x - startX) / (endX - startX)) * 100;

    const calculateY = (x: number): number => middle - amplitude * Math.sin(x);
    const formatTooltipText = (text: string) =>
      text.split("!!").map((line, index) => (
        <React.Fragment key={index}>
          <span style={{ whiteSpace: "nowrap" }}>{line.trim()}</span>
          {index < text.split("!!").length - 1 && <br />}
        </React.Fragment>
      ));
    const handleMouseEnter = (index: number, event: React.MouseEvent) => {
      setHoveredQuestion(profile?.questions?.[index] || "");
      
          const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();

      // Positioning the tooltip dynamically
      setTooltipPosition({
        x: rect.left + rect.width /2, // Use viewport-relative coordinates
        y: rect.top - 10, // Position above the cursor (20px offset)
      });
    };
    const handleMouseLeave = () => {
      setHoveredQuestion(null); // Clear hovered question text
    };    
    const handleQuestionClick = (iddd: number, event: React.MouseEvent) => {
      event.preventDefault();
      const timestamp = parseFloat(profile.timestamps[iddd]);  // Get timestamp in seconds
      setQuestionClicked(true); // Mark question as clicked
  
      // Temporarily disable scroll behavior
      const originalScrollTo = window.scrollTo;
      window.scrollTo = () => {}; // Prevent scroll to top
      setTimeout(() => {
          window.scrollTo = originalScrollTo; // Restore scroll behavior after 1ms
      }, 1);
  
      // Seek to the timestamp and play the video
      if (playerRef.current) {
          playerRef.current.seekTo(timestamp);  // Seek to the timestamp (in seconds)
          playerRef.current.getInternalPlayer().play();  // Start playing the video

      }
  };
  
  // Example usage of `questionClicked` for conditional rendering or logic
  {questionClicked && <div>Question was clicked!</div>}
  
  useEffect(() => {
    // Reset player key and URL when profile changes
    setPlayerKey(prevKey => prevKey + 1);
    setPlayingURL(profile?.videoLinks?.[0] || "");
}, [profileName]);
    const arrows = [  
        ...downwardArrowPositions.map((x, index) => ({  
            positionX: `${mapToPercentage(x)}%`,  
            positionY: calculateY(x)+70,  
            direction: "down" as "down",  
            label: profile?.downwardLabels?.[index] || `Down ${index + 1}`,  
        })).filter(arrow => arrow.label.trim() !== ""), // Filter out blank labels
        ...upwardArrowPositions.map((x, index) => ({  
            positionX: `${mapToPercentage(x)}%`,  
            positionY: amplitude+5, // Starting from the top of the sine curve  
            direction: "up" as "up",  
            label: profile?.upwardLabels?.[index] || `Up ${index + 1}`,  
        })).filter(arrow => arrow.label.trim() !== ""), // Filter out blank labels  
    ];  
    
    
      
      

    return (  
      
        <div className="w-full min-h-screen bg-[#FFFFFF] flex flex-col items-center">  
            <div className="flex-grow" >  
               
                <div className="w-full py-2 flex flex-col items-center relative">  
                    <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 mt-0" style={{ fontFamily: "Cormorant infant, serif", color: "#002F40", fontWeight: 750 ,position : "relative", left : "-2.5vw" }}>Suggested Timeline</h1>  

                   
                    <div className="relative w-full min-h-[400px]">  
                         
                        <svg  
                            className="absolute w-full h-full"  
                            xmlns="http://www.w3.org/2000/svg"  
                            viewBox={`0 0 1000 ${curveHeight}`}  
                            preserveAspectRatio="none"  
                        >  
                            <path  
                                d={`M0,${middle} ${Array.from({ length: 1000 }, (_, i) => {
                                  const x = startX + (i * (endX - startX)) / 1000;
                                  const y = middle - amplitude * Math.sin(x) ;
                                  return `L${(i / 1000) * 1000},${y}`;
                              }).join(" ")}`}
                                
                                stroke="#002F40"  
                                strokeWidth="24"  
                                fill="none"  
                            />  
                        </svg>  

                      
                        {arrows.map((arrow, index) => (  
                            <Arrow  
                                key={index}  
                                x={arrow.positionX}  
                                y={arrow.positionY}  
                                direction={arrow.direction}  
                                label={arrow.label}  
                            />  
                        ))}  
                    </div>  
                </div>  

                 
                <div className="flex w-full bg-[#FFFFFF] mt-12">
                
                < div className="w-1/2  bg-[#002F40] flex items-center justify-center relative" style={{ padding: '8vh', aspectRatio: '1.7' }}>
                <ReactPlayer key={playerKey}  url={playingURL}  className="react-player" light = {true} width="100%" height="100%" controls  
    ref={playerRef}/>    </div>
    <div className="w-1/2 flex flex-col items-center justify-center p-8 bg-[#FFFFFF]">
                        <h1 className="text-6xl font-bold text-center text-black mb-5" style={{ fontFamily: "Cormorant Infant, serif", fontWeight: "700" }}>FAQs</h1>
                        <p className="text-2xl text-center text-black" style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 600,
        
      }}>All your Questions Answered!</p>
                        <p className="text-2xl text-center text-black mb-8" style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "normal",
        marginBottom: "50px", // Increased space
      }}>Use the timestamps below to navigate to the questions of your choice:</p>
                        <div className="flex flex-col item-center space-y-3">
                        <div className="flex flex-wrap justify-center space-x-4">
  {profile?.question?.slice(0, profile.question.findIndex((q) => q.includes("!!"))) // Questions before "!!"
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
        {index < profile.question.findIndex((q) => q.includes("!!")) - 1 && (
          <span className="text-black text-xl">|</span>
        )}
      </React.Fragment>
    ))}
</div>

<div className="flex flex-wrap justify-center space-x-4">
  {profile?.question
    ?.slice(profile.question.findIndex((q) => q.includes("!!")) + 1) // Questions after "!!"
    .map((question, index) => (
      <React.Fragment key={index}>
        <a
          href={`#${question.toLowerCase()}`}
          onClick={(e) => handleQuestionClick(index + profile.question.findIndex((q) => q.includes("!!")) + 1, e)} // Adjust the index to continue from where the first part ended
          onMouseEnter={(e) => handleMouseEnter(index + profile.question.findIndex((q) => q.includes("!!")) + 1, e)} // Adjust the index for mouse enter
          onMouseLeave={handleMouseLeave}
          className="text-black text-2xl font-medium underline"
        >
          Q{index + profile.question.findIndex((q) => q.includes("!!")) + 1} {/* Adjust the question numbering */}
        </a>
        {index < profile.question.length - profile.question.findIndex((q) => q.includes("!!")) - 2 && (
          <span className="text-black text-xl">|</span>
        )}
      </React.Fragment>
    ))}
</div>

</div>

                        {hoveredQuestion && (
  <div
    className="fixed shadow-lg text-black text-xl"
    style={{
      top: tooltipPosition.y,
      left: tooltipPosition.x,
      transform: "translate(-50%, -100%)", // Center the tooltip horizontally
      zIndex: 1000, // Ensure the tooltip appears above all elements
      whiteSpace: "nowrap", // Prevent text wrapping
      backgroundColor: "#D9D9D9", // Set the background color
      border: "2px solid #002F40", // Add a 2px solid border
      borderRadius: "8px", // Rounded corners
      padding: "6px 12px", // Smaller padding to reduce size
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Drop shadow effect
    }}
  >
     {formatTooltipText(hoveredQuestion)}
  </div>
)}

                    </div>
</div>

<div className="flex w-full">
<div className="w-1/2 flex flex-col items-center justify-center p-8 bg-[#FFFFFF]">
    <h1
        className="text-5xl text-center text-black mb-6"
        style={{
            fontFamily: "Cormorant Infant, serif", // Set font for CV Making
            fontWeight: "700" // Custom font weight for the heading
        }}
    >
        CV Making
    </h1>
    <p
        className="text-2xl text-center text-black mb-4"
        style={{
            fontFamily: "Montserrat, sans-serif", // Set font for the paragraph text
            fontWeight: "normal" // Normal font weight for the body text
        }}
    >
        Learn how to make the perfect CV from <br></br>our established experts to maximise <br></br> your shortlists!
    </p>
</div>

< div className="w-1/2  bg-[#002F40] flex items-center justify-center relative" style={{ padding: '8vh', aspectRatio: '1.7' }}>
 
    <ReactPlayer
    url={profile?.videoLinks?.[1] || ""} // Access videoLinks[1] for embedded YouTube link
    className="react-player"
    width="100%"
    height="100%"
    controls
    // Automatically play the video when the component renders
  />
       
    </div>
</div>
 

                 
<div className="w-full bg-[#FFFFFF] p-8">
{profile?.guide?.html && (
        <div
            dangerouslySetInnerHTML={{ __html: profile.guide.html }}
        />
    )}
</div>
            </div>  
        </div>  
    );  
};  


interface ArrowProps {
  x: string; // X position as a percentage string
  y: number; // Y position as a number
  direction: "up" | "down"; // Direction can be either "up" or "down"
  label: string; // Label for the arrow
}

const Arrow: React.FC<ArrowProps> = ({ x, y, direction, label }) => {
    const arrowLength = 40;
  
    // Split label into heading and body
    const splitLabel = label.split(/\s{4}/); // Split at the first sentence ending
    const heading = splitLabel[0]; // First part is the heading
    const body = splitLabel.slice(1).join(" "); // Remaining text is the body
  
    // Function to format body text with breaks only on "!!"
    const formatBodyText = (text: string) =>
      text.split("!!").map((line, index) => (
        <React.Fragment key={index}>
          <span style={{ whiteSpace: "nowrap" }}>{line.trim()}</span>
          {index < text.split("!!").length - 1 && <br />}
        </React.Fragment>
      ));
  
    return (
      <div
        className="absolute flex flex-col items-center"
        style={{
          left: x,
          top: `${y}px`,
          transform: "translate(-50%, 0)",
          fontFamily: "Montserrat, sans-serif",
          
        }}
      >
        {direction === "down" ? (
          <>
            <div
              className="w-[2px] bg-[#002F40]"
              style={{ height: `${arrowLength}px` }}
            ></div>
            <div className="w-3 h-3 bg-[#002F40] rounded-full"></div>
            <div
              className="text-sm mt-2 text-[#000000] font-semibold text-center max-w-xs"
              style={{ textAlign: "center" }}
            >
              <span style={{ fontWeight: 700 }}>{heading}</span>
              <p style={{ fontWeight: 5} }>{formatBodyText(body)}</p>
            </div>
          </>
        ) : (
          <>
            <div
              className="text-sm mb-2 text-[#000000] font-semibold text-center max-w-xs"
              style={{ textAlign: "center" }}
            >
              <span style={{ fontWeight: 700 }}>{heading}</span>
              <p style={{ fontWeight: 50 }}>{formatBodyText(body)}</p>
            </div>
            <div className="w-3 h-3 bg-[#002F40] rounded-full"></div>
            <div
              className="w-[2px] bg-[#002F40]"
              style={{ height: `${arrowLength}px` }}
            ></div>
          </>
        )}
      </div>
    );
  };
  
  

export default TimelinePage;
