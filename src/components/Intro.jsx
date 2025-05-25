export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col justify-center items-start text-left px-6 md:px-0 max-w-4xl mx-auto"
      style={{ backgroundColor: '#FEFAE0' }} // matches body for full width
    >
      <h1 className="text-5xl font-extrabold mb-6 text-[#283618] leading-tight">
        Hi, I'm Harshad Yadav
      </h1>

      <p className="text-lg text-[#606C38] mb-6 max-w-xl leading-relaxed">
        Software Engineer passionate about building innovative machine learning and NLP solutions.
        Skilled in Python, Java, full-stack development, and deploying scalable applications
        with Docker and Spring frameworks. I love solving challenging problems and driving
        continuous innovation.
      </p>

      <a
        href="#projects"
        className="inline-block bg-[#BC6C25] text-white px-7 py-3 rounded-lg hover:bg-[#DDA15E] transition"
      >
        View My Work
      </a>
    </section>
  );
}
