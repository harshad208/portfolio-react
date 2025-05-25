import Navbar from './components/Navbar';
import './index.css';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Intro from './components/Intro';
import MediumArticles from './components/MediumArticles';


function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20 px-6 max-w-5xl mx-auto">
        <Intro />

        <MediumArticles />
        
        <br/>

        <Projects />
        
        <br/>
        
        <Contact />

      </main>
    </div>
  );
}

export default App;
