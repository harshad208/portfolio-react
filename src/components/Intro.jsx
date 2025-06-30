import { MapPin, Mail, Github, Linkedin, Check } from "lucide-react";

export default function Intro() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
        
        {/* Column 1: Profile Photo (Tick has been removed from here) */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <img
              src="/videos/photo.jpg" 
              alt="Harshad Yadav"
              className="w-full h-full rounded-full object-cover border-4 border-gray-700 shadow-lg"
            />
          </div>
        </div>

        {/* Column 2: Text Content */}
        <div className="md:col-span-2 space-y-4 text-center md:text-left">
          
          {/* Flex container to align Name and Verified Tick */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <h1 className="text-4xl md:text-6xl font-black uppercase text-white">
              Harshad Yadav
            </h1>
            {/* Blue Verified Tick */}
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500">
              <Check className="h-4 w-4 text-white" strokeWidth={3} />
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-medium text-gray-300">
            Software Engineer
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Passionate about building innovative machine learning and NLP solutions.
            Skilled in Python, full-stack development, and deploying scalable applications. 
            I love solving challenging problems and driving continuous innovation.
          </p>

          {/* Details Section */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <MapPin className="h-5 w-5" />
              <span>Mumbai, Maharashtra, India</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Social & Contact Links */}
          <div className="pt-2 flex items-center justify-center md:justify-start space-x-6 text-gray-300">
            <a href="mailto:harshadyadav20@gmail.com" className="hover:text-white transition-colors duration-300" title="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://github.com/harshad208/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" title="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://in.linkedin.com/in/harshad-yadav-208" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300" title="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold border px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-300">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}