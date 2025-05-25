export default function MediumArticles() {
const articles = [
  {
    title: "Editable PDF Reader with Python",
    description:
      "Dive into building an interactive PDF reader using Python and PyMuPDF. This article walks through extracting text and bounding box coordinates from PDFs, and demonstrates how to organize and export this data into structured CSV files. Ideal for anyone dealing with document processing or automating PDF workflows.",
    link: "https://medium.com/@harshadyadav20/developing-an-editable-pdf-reader-with-python-f758c57c1591",
  },
  {
    title: "FastAPI Document Extractor with Tesseract OCR",
    description:
      "This guide details the development of a lightweight document OCR service using FastAPI and Tesseract. Learn how to set up asynchronous routes, integrate OCR capabilities, and handle scanned files to convert them into editable and searchable text. Includes Docker setup and deployment tips.",
    link: "https://medium.com/@harshadyadav20/building-a-fastapi-document-extractor-with-tesseract-ocr-820878c7f6d8",
  },
  {
    title: "Wiki Search Site with Wikipedia API",
    description:
      "Build a fully functional web app that interfaces with the Wikipedia API to deliver live search suggestions and content previews. This project focuses on intuitive UI design, debounced input handling, and displaying structured article data. A great example of API consumption and clean frontend logic.",
    link: "https://medium.com/@harshadyadav20/developing-a-wiki-search-site-using-the-wikipedia-api-ca0b9e424657",
  },
];


  return (
    <section id="medium-articles" className="py-20" style={{ backgroundColor: "#FEFAE0" }}>
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-4xl font-bold mb-12 text-center text-[#283618]">
          📚 Technical Blogs & Medium Articles
        </h3>

        <ul className="divide-y divide-[#DDA15E] border-t border-b border-[#DDA15E]">
          {articles.map(({ title, description, link }, index) => (
            <li key={index} className="py-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <h4 className="text-lg font-semibold text-[#BC6C25] group-hover:underline">
                  {title}
                </h4>
                <p className="text-[#606C38] text-sm mt-1 leading-relaxed">
                  {description}
                </p>
                <span className="text-[#BC6C25] text-sm font-medium mt-2 inline-block group-hover:underline">
                  Read Article →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
