import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Fixed Layout Navigation */}
      <Navbar />

      {/* Main Structural Assembly Layer */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;