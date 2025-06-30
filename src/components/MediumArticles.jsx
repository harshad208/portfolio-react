import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    date: "June 2025",
    title: "From First Query to Optimization: A PostgreSQL Guide",
    description: "PostgreSQL is one of the most powerful, open-source relational database systems available today. Whether you’re a backend developer, data engineer, or aspiring DBA, learning PostgreSQL is an investment in performance, scalability, and flexibility.",
    link: "https://medium.com/@harshadyadav20/from-first-query-to-optimization-a-postgresql-guide-e8512f33088b"
  },
  {
    date: "June 2025",
    title: "A Developer’s Guide to MongoDB",
    description: "MongoDB is one of the most popular NoSQL databases used by modern web applications. It offers flexibility, scalability, and ease of use — making it ideal for handling unstructured or semi-structured data.",
    link: "https://medium.com/@harshadyadav20/mongodb-a-practical-guide-for-developers-64bda28492da"
  },  
  {
    date: "November 2024",
    title: "Editable PDF Reader with Python",
    description: "Dive into building an interactive PDF reader using Python and PyMuPDF. This article walks through extracting text and bounding box coordinates from PDFs and exporting the data.",
    link: "https://medium.com/@harshadyadav20/developing-an-editable-pdf-reader-with-python-f758c57c1591",
  },
  {
    date: "October 2023",
    title: "FastAPI Document Extractor with Tesseract OCR",
    description: "A guide detailing the development of a lightweight document OCR service using FastAPI and Tesseract. Learn to set up asynchronous routes and integrate OCR capabilities.",
    link: "https://medium.com/@harshadyadav20/building-a-fastapi-document-extractor-with-tesseract-ocr-820878c7f6d8",
  },
  {
    date: "September 2023",
    title: "Wiki Search Site with Wikipedia API",
    description: "Build a web app that interfaces with the Wikipedia API for live search suggestions. This project focuses on intuitive UI design and debounced input handling.",
    link: "https://medium.com/@harshadyadav20/developing-a-wiki-search-site-using-the-wikipedia-api-ca0b9e424657",
  },
  
];

export default function MediumArticles() {
  return (
    <div className="border-t border-gray-800">
      {articles.map((article) => (
        <a
          key={article.title}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2 border-b border-gray-800 py-6 transition-colors duration-300 hover:bg-gray-500/5"
        >
          {/* Column 1: Date */}
          <div className="md:col-span-1 text-sm text-gray-500">
            {article.date}
          </div>

          {/* Column 2: Content */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
              {article.title}
            </h4>
            <p className="mt-2 text-gray-400 text-sm leading-relaxed">
              {article.description}
            </p>
            {/* Clear Call-to-Action Link */}
            <div className="mt-4 flex items-center text-sm font-semibold text-sky-400 transition-colors duration-300 group-hover:text-sky-300">
              <span>Read Article</span>
              <ArrowUpRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}