// src/components/Projects.jsx

import { useState } from "react"; // useEffect is no longer needed
import { Github, PlayCircle } from "lucide-react";

const projectData = [
  {
    year: 2025,
    title: "QueryDocs",
    description: "A full-stack Document Q&A system with a FastAPI backend and Next.js frontend. Documents are processed asynchronously, stored in a vector database, and queried using natural language.",
    tech: ["Next.js", "FastAPI", "OpenAI", "ChromaDB"],
    link: "https://github.com/harshad208/doc_qna",
    videoSrc: "/videos/docqna.webm",
  },
  {
    year: 2025,
    title: "DocuMind: LLM Semantic Search API",
    description: "A semantic document search API that lets users upload files (PDF, DOCX, TXT), then query them using natural language. It retrieves relevant text and optionally generates answers using an LLM.",
    tech: ["Python", "FastAPI", "ChromaDB", "Llama.cpp"],
    link: "https://github.com/harshad208/llm_doc_search_project",
    videoSrc: "/videos/llm_doc.webm",
  },
  {
    year: 2024,
    title: "Smart Inventory Management System",
    description: "A real-time inventory management API built with FastAPI and PostgreSQL that tracks stock levels, purchase orders, supplier data, and inventory movements.",
    tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker"],
    link: "https://github.com/harshad208/smart_inventory.git",
    videoSrc: "/videos/database.webm",
  },
  {
    year: 2023,
    title: "Wiki-Search",
    description: "A responsive web app that leverages the Wikipedia API to deliver real-time search suggestions and article previews. Built with vanilla JavaScript.",
    tech: ["HTML", "CSS", "JS", "Wikipedia API"],
    link: "https://github.com/harshad208/wiki-search",
    videoSrc: "/videos/wiki.webm",
  },
];

export default function Projects() {
  // We only need state for the video modal now
  const [modalVideo, setModalVideo] = useState(null);

  // The useEffect and states for hover have been removed.

  return (
    <>
      <div className="border-t border-gray-800">
        {projectData.map((project) => (
          // The onMouseEnter and onMouseLeave events have been removed from this div
          <div
            key={project.title}
            className="group grid grid-cols-1 md:grid-cols-8 gap-x-4 gap-y-2 border-b border-gray-800 py-8 transition-colors duration-300 hover:bg-gray-500/5"
          >
            {/* Column 1: Year */}
            <div className="md:col-span-1 text-sm text-gray-500">{project.year}</div>

            {/* Column 2: Title */}
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            
            {/* Column 3: Description, Tech, and Actions */}
            <div className="md:col-span-4">
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <span
                      key={techItem}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 ml-auto">
                    <button
                      onClick={() => setModalVideo(project.videoSrc)}
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300"
                      title="Watch Demo"
                    >
                      <PlayCircle className="h-4 w-4" />
                      <span className="text-sm">Demo</span>
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300"
                      title="View Source Code"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal (No changes needed here) */}
      {modalVideo && (
        <div
          onClick={() => setModalVideo(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-black rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full"
          >
            <video src={modalVideo} controls autoPlay className="w-full h-auto" />
            <button
              onClick={() => setModalVideo(null)}
              className="absolute top-2 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
              aria-label="Close video modal"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}