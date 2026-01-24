import Hero from './components/HeroTemp';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen text-slate-200 selection:bg-primary selection:text-white">
      <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-md z-50 border-b border-slate-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Pratyush.
          </h1>
          <div className="space-x-6 text-sm font-medium hidden md:block">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-24">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="text-center py-8 text-slate-500 text-sm">
         pratyushwakde24@gmail.com 
      </footer>
    </div>
  );
}

export default App;
