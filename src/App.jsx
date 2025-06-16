import Intro from './components/Intro';
import Projects from './components/Projects';
import MediumArticles from './components/MediumArticles';
import Section from './components/Section'; // We'll create this reusable component

function App() {
  return (
    // The main container centers the content
    <div className="max-w-4xl mx-auto px-6">
      <Intro />
      <main>
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