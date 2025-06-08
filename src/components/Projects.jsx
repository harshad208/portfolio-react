import { useState } from "react";
import { Code2, PlayCircle } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Wiki-Search",
      description:
        "A sleek, responsive web application that leverages the Wikipedia API to deliver real-time search suggestions and concise article previews. Built with vanilla JavaScript, it emphasizes asynchronous data handling, debounced inputs, and an accessible UI/UX for quick knowledge lookups.",
      tech: ["HTML", "CSS", "JS"],
      link: "https://wikipedia-search-engine-208.netlify.app",
      videoSrc: "/videos/wiki.webm",
      thumbnail: "/videos/search.jpg",
    },
    {
      title: "Doc Text Extract",
      description:
        "An OCR-powered document processor that utilizes Python and Tesseract to extract searchable, editable text from scanned images and PDFs. Built with modular architecture, the tool supports batch processing and includes features for bounding box visualization and confidence score filtering.",
      tech: ["Python", "Tesseract OCR"],
      link: "https://github.com/harshad208/document_text_extractor",
      videoSrc: "/videos/doc_text_extract.webm",
      thumbnail: "/videos/extract.jpeg",
    },
    {
      title: "Word-Guessing Game",
      description:
        "A browser-based Hangman-style game built with HTML, CSS, and JavaScript. Features include randomized word selection, hint system, and real-time UI feedback. Designed with minimalistic styling and responsive interactions for casual vocabulary testing.",
      tech: ["HTML", "CSS", "JS"],
      link: "https://splendorous-ganache-81f4e8.netlify.app",
      videoSrc: "/videos/word.webm",
      thumbnail: "/videos/hangman.jpeg",
    },
    {
      title: "DocuMind: LLM Semantic Search API",
      description:
        "A semantic document search API that lets users upload files (PDF, DOCX, TXT), then query them using natural language. It retrieves relevant text and optionally generates answers using an LLM.",
      tech: [
        "Python",
        "FastAPI",
        "Uvicorn",
        "ChromaDB",
        "Llama.cpp (for GGUF models)",
        "Sentence Transformers",
        "PyPDF",
        "python-docx",
        "Pydantic",
      ],
      link: "https://github.com/harshad208/llm_doc_search_project",
      videoSrc: "/videos/llm_doc.webm",
      thumbnail: "/videos/llm.png",
    },
    {
      title: "Smart Inventory & Order Management System",
      description:
        "A real-time inventory management API built with FastAPI and PostgreSQL that tracks stock levels, purchase orders, supplier data, and inventory movements. It showcases modern backend design and efficient use of relational databases.",
      tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "Docker",
      "Docker Compose",
      "Uvicorn",
      "Git",
      "MyPy"
    ],
      link: "https://github.com/harshad208/smart_inventory.git",
      videoSrc: "/videos/database.webm",
      thumbnail: "/videos/database.jpg",
    },
  ];

  const [modalVideo, setModalVideo] = useState(null);

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: "#FEFAE0" }}>
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-4xl font-bold mb-10 text-center text-[#283618]">
      🛠️ Featured Projects
    </h3>

    <div className="flex flex-col space-y-12">
      {projects.map(({ title, description, tech, link, videoSrc, thumbnail }, index) => (
        <div
          key={index}
          className="bg-white border border-[#DDA15E] rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-start gap-6"
        >
          {/* Thumbnail */}
          <div
            onClick={() => setModalVideo(videoSrc)}
            className="relative w-full md:w-1/3 cursor-pointer rounded-lg overflow-hidden shadow-md"
            title="Play Video"
          >
            <img
              src={thumbnail}
              alt={`${title} video thumbnail`}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-80 w-14 h-14" />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-semibold text-[#BC6C25]">{title}</h4>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-[#BC6C25] hover:text-[#DDA15E]"
                title="Visit Project"
              >
                <Code2 className="h-5 w-5" />
              </a>
            </div>

            <p className="text-[#606C38] text-sm leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-2">
              {tech.map((techItem, i) => (
                <span
                  key={i}
                  className="bg-[#606C38] text-[#FEFAE0] px-2 py-1 rounded-full text-xs font-medium"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Video Modal */}
  {modalVideo && (
    <div
      onClick={() => setModalVideo(null)}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full"
      >
        <video src={modalVideo} controls autoPlay className="w-full h-auto" />
        <button
          onClick={() => setModalVideo(null)}
          className="absolute top-3 right-3 text-white text-3xl font-bold"
          aria-label="Close video modal"
        >
          &times;
        </button>
      </div>
    </div>
  )}
</section>

  );
}
