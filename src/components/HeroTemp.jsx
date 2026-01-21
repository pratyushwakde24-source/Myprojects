import { motion } from "framer-motion";
import { Github, FileText, Linkedin, Spline } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-primary font-mono mb-4">Hi, my name is</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Pratyush.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-lg text-slate-400 mb-8 leading-relaxed">
         I'm a <span className="text-primary"> Software Developer</span> and <span className="text-white"> Engineering Student (Electronics & TC) </span>
          specializing in building exceptional digital experiences. Currently
          exploring the intersection of Web Dev and AI. I also have expertise
          in <span className="text-primary">Prompt Engineering</span> and{" "}
          <span className="text-primary">training LLM models</span>
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/pratyushwakde24-source" target="_blank" rel="noreferrer" 
             className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition">
            <Github size={20} /> GitHub
          </a>
          <a href="/resume.pdf" target="_blank" 
             className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
            <FileText size={20} /> Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
