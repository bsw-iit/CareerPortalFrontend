import React from "react";
import { Calendar } from "lucide-react";

type TimelineItem = {
  title: string;
  description: string;
};

type TimelineProps = {
  data: {
    downwardLabels: string[];
  };
};

const parseTimelineData = (labels: string[]): TimelineItem[] => {
  return labels.map((label) => {
    const [title, ...descParts] = label.split("    ");
    return {
      title: title.trim(),
      description: descParts.join(" ").trim(),
    };
  });
};

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const downward = parseTimelineData(data.downwardLabels);

  return (
    <div className="flex flex-col items-center p-10 relative z-0">
      <h1 className="text-3xl font-bold mb-8 text-center">Suggested Timeline</h1>
      <div className="relative w-full flex flex-col">
        <div className="absolute left-6 top-0 h-full border-l-2 border-gray-300 z-0"></div>
        {downward.map((item, index) => (
          <div key={index} className="mb-10 flex items-start">
            <div className="flex items-center justify-center w-6 h-6 md:w-12 md:h-12 bg-blue-100 rounded-full z-10">
              <span className="block md:hidden">
                <Calendar className="text-blue-600" size={18} />
              </span>
              <span className="hidden md:block">
                <Calendar className="text-blue-600" size={28} />
              </span>
            </div>
            <div className="ml-6">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
