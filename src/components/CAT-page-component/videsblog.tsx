import React from "react";

interface LinkItem {
  text: string;
  url: string;
}

interface VideosBlogsProps {
  youtubeLinks: LinkItem[];
  blogLinks: LinkItem[];
}

const VideosAndBlogs: React.FC<VideosBlogsProps> = ({ youtubeLinks, blogLinks }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Videos and Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* YouTube Section */}
        <div>
          <h3 className="font-medium mb-2">YouTube</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-600">
            {youtubeLinks.map(({ text, url }, idx) => (
              <li key={idx}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Blogs Section */}
        <div>
          <h3 className="font-medium mb-2">Blogs</h3>
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
      </div>
    </div>
  );
};

export default VideosAndBlogs;
