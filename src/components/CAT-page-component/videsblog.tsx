import React from "react";

interface LinkItem {
  text: string;
  url: string;
}

interface VideosBlogsProps {
  blogLinks: LinkItem[];
}

const VideosAndBlogs: React.FC<VideosBlogsProps> = ({ blogLinks }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Blogs</h2>
      <ul className="list-disc list-inside space-y-1 text-blue-600">
        {blogLinks.map(({ text, url }, idx) => (
          <li key={idx}>
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideosAndBlogs;
