import React from "react";
import { BookOpen } from "lucide-react";

const HeaderBar: React.FC = () => {
  return (
    <div
      className="flex items-center justify-between px-6 py-3 rounded-lg"
      style={{
        background:
          "linear-gradient(90deg, rgba(10,95,255,0.08) 0%, rgba(10,95,255,0.12) 100%)",
      }}
    >
      {/* Left side title */}
      <h1 className="font-bold text-lg">CAT Guide</h1>

      {/* Right side buttons */}
      <div className="flex gap-3 flex-wrap justify-end max-w-full">
        <button className="flex items-center gap-2 border border-blue-600 text-blue-600 rounded-full text-sm md:text-base font-medium cursor-pointer 
                           px-2 py-1 md:px-4 md:py-1.5">
          <BookOpen className="h-3 w-3 md:h-4 md:w-4" />
          <span className="whitespace-nowrap">Syllabus (Ref)</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
