import Intro from './components/Intro';
import Projects from './components/Projects';
import MediumArticles from './components/MediumArticles';
import Skills from './components/Skills';
import Section from './components/Section'; 
import Experience from './components/Experience'; 

function App() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <Intro />
      <main>
        <Section title="Skills & Tooling" id="skills">
          <Skills />
        </Section>        
        <Section title="Experience & Education" id="experience">
          <Experience />
        </Section>
        <Section title="Projects" id="projects">
          <Projects />
        </Section>
        <Section title="Blog" id="blog">
          <MediumArticles />
        </Section>
      </main>
    </div>
  );
}

export default App;