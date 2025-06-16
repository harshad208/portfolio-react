// src/components/Section.jsx

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Section({ title, id, children }) {
  // Each Section now manages its own "open" or "closed" state.
  // We'll default them to true (open) on page load.
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id={id} className="py-12 grid md:grid-cols-4 gap-x-8">
      {/* Left Column: Section Title (now a clickable button) */}
      <div
        className="md:col-span-1 cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)} // Toggle the state on click
      >
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold uppercase text-gray-500 group-hover:text-white tracking-widest transition-colors">
            {title}
          </h2>
          {/* Chevron icon rotates based on the 'isOpen' state */}
          <ChevronDown
            className={`h-4 w-4 text-gray-500 transition-transform duration-300 group-hover:text-white ${!isOpen && "-rotate-90"}`}
          />
        </div>
      </div>

      {/* Right Column: Collapsible Content */}
      <div className="md:col-span-3">
        {/* This wrapper div handles the smooth collapse/expand animation */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            {/* The content itself */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}