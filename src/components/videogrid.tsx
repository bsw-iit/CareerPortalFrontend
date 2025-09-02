import React, { useState, useRef } from "react";

interface VideoGridProps {
  iframeUrl1: string;
  iframeUrl2: string;
  questions: string[];
  timestamps: string[];
}

const VideoGrid: React.FC<VideoGridProps> = ({
  iframeUrl1,
  iframeUrl2,
  questions,
  timestamps,
}) => {
  const [hoveredQuestion, setHoveredQuestion] = useState<string | null>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const handleJumpToTime = (timestamp: string) => {
    if (videoRef.current) {
      const baseUrl = iframeUrl1.split("?")[0];
      videoRef.current.src = `${baseUrl}?start=${timestamp}&autoplay=1`;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full min-h-[600px]">
      {/* Cell (1,1) */}
      <div className="bg-[#0B2937] flex justify-center items-center min-h-[600px]">
        <iframe
          ref={videoRef}
          src={iframeUrl1}
          className="w-4/5 h-4/5 border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Cell (1,2) */}
      <div className="w-full h-full flex flex-col justify-center items-center p-8 relative min-h-[400px]">
        <h1 className="mb-5 text-4xl font-bold text-center text-black font-['Cormorant Infant']">
          FAQs
        </h1>
        <h1 className="text-2xl text-center text-black font-semibold">
          All your Questions Answered!
        </h1>
        <p className="mb-8 text-center text-black text-xl font-['Montserrat'] font-normal">
          Use the timestamps below to navigate to the questions of your choice:
        </p>

        {/* Q links */}
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          {questions.map((q, idx) => {
            if (!timestamps[idx]) return null;

            return (
              <React.Fragment key={idx}>
                <button
                  onClick={() => handleJumpToTime(timestamps[idx])}
                  onMouseEnter={() => setHoveredQuestion(q)}
                  onMouseLeave={() => setHoveredQuestion(null)}
                  className="text-black text-2xl font-medium underline cursor-pointer"
                >
                  Q{idx + 1}
                </button>
                {idx < questions.length - 1 && (
                  <span className="text-black text-xl">|</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Hovered question display */}
        {hoveredQuestion && (
          <div className="absolute bottom-6 text-lg font-medium text-center text-gray-700 bg-white px-4 py-2 rounded shadow-md">
            {hoveredQuestion}
          </div>
        )}
      </div>

      {/* Cell (2,1) */}
      <div className="w-full flex flex-col items-center justify-center p-8 bg-white min-h-[400px]">
        <h1 className="text-4xl text-center text-black mb-6 font-['Cormorant Infant'] font-bold">
          CV Making
        </h1>
        <p className="text-xl text-center text-black mb-4 font-['Montserrat'] font-normal">
          Learn how to make the perfect CV from <br />
          our established experts to maximise <br /> your shortlists!
        </p>
      </div>

      {/* Cell (2,2) */}
      <div className="bg-[#0B2937] flex justify-center items-center min-h-[600px]">
        <iframe
          src={iframeUrl2}
          className="w-4/5 h-4/5 border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoGrid;
