import { useState } from "react";
import { Plus } from "lucide-react";

export default function Section({ title, id, children }) {
  
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-6 border-b border-gray-800">
      {/* The full-width, clickable bar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-800/80 hover:bg-gray-700/80 rounded-md transition-colors duration-300"
        aria-expanded={isOpen}
        aria-controls={`section-content-${id}`}
      >
        <h2 className="text-sm font-bold uppercase text-gray-300 tracking-wider">
          {title}
        </h2>
        <Plus
          className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
        />
      </button>

      {/* The Collapsible Content Area */}
      <div
        id={`section-content-${id}`}
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          {/* Add padding to the content so it doesn't touch the edges */}
          <div className="pt-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}