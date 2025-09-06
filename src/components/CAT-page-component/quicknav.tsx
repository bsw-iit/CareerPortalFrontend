import React from "react";

interface CellProps {
  pillText: string;
  mainText: string;
  scrollToId?: string;
}

const Cell: React.FC<CellProps> = ({ pillText, mainText, scrollToId }) => {
  const handleClick = () => {
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      className="w-full h-full inline-flex items-center gap-2 rounded-xl px-3 py-1.5 font-sans text-sm cursor-pointer select-none bg-white border border-black/10 shadow-lg"
    >
      <span className="bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full whitespace-nowrap">
        {pillText}
      </span>
      <span className="text-black font-normal whitespace-nowrap">{mainText}</span>
    </div>
  );
};

export default Cell;
