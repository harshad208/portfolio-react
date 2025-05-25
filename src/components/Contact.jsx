import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6" style={{ backgroundColor: '#FEFAE0' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-8 text-[#283618]">Get in Touch</h3>
        <p className="text-[#606C38] mb-10">
          I’m always open to connecting! Feel free to reach out through email or connect with me on social platforms.
        </p>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Mail className="text-[#BC6C25]" />
            <a
              href="mailto:harshadyadav20@gmail.com"
              className="text-[#283618] hover:text-[#DDA15E] text-lg transition"
            >
              harshadyadav20@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Linkedin className="text-[#BC6C25]" />
            <a
              href="https://in.linkedin.com/in/harshad-yadav-208"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#283618] hover:text-[#DDA15E] text-lg transition"
            >
              linkedin.com/in/harshad-yadav-208
            </a>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Github className="text-[#BC6C25]" />
            <a
              href="https://github.com/harshad208/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#283618] hover:text-[#DDA15E] text-lg transition"
            >
              github.com/harshad208
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="mt-12">
            <a
              href="/Resume.pdf" // Put your actual resume file path here
              download
              className="inline-block bg-[#BC6C25] hover:bg-[#DDA15E] text-white font-semibold py-3 px-8 rounded-lg transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
