import { Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Wiki-Search",
      description:
        "A sleek, responsive web application that leverages the Wikipedia API to deliver real-time search suggestions and concise article previews. Built with vanilla JavaScript, it emphasizes asynchronous data handling, debounced inputs, and an accessible UI/UX for quick knowledge lookups.",
      tech: ["HTML", "CSS", "JS"],
      link: "https://wikipedia-search-engine-208.netlify.app",
    },
    {
      title: "Doc Text Extract",
      description:
        "An OCR-powered document processor that utilizes Python and Tesseract to extract searchable, editable text from scanned images and PDFs. Built with modular architecture, the tool supports batch processing and includes features for bounding box visualization and confidence score filtering.",
      tech: ["Python", "Tesseract OCR"],
      link: "https://github.com/harshad208/document_text_extractor",
    },
    {
      title: "Word-Guessing Game",
      description:
        "A browser-based Hangman-style game built with HTML, CSS, and JavaScript. Features include randomized word selection, hint system, and real-time UI feedback. Designed with minimalistic styling and responsive interactions for casual vocabulary testing.",
      tech: ["HTML", "CSS", "JS"],
      link: "https://splendorous-ganache-81f4e8.netlify.app",
    },
  ];

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: "#FEFAE0" }}>
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-bold mb-10 text-center text-[#283618]">
          🛠️ Featured Projects
        </h3>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tech, link }, index) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="bg-white border border-[#DDA15E] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all group min-h-[260px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-[#BC6C25] group-hover:text-[#DDA15E] transition">
                  {title}
                </h4>
                <Code2 className="h-5 w-5 text-[#BC6C25] group-hover:text-[#DDA15E] transition" />
              </div>
              <p className="text-[#606C38] text-sm leading-relaxed mb-4 flex-grow">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-[#606C38] text-[#FEFAE0] px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
