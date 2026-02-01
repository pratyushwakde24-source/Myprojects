import { motion } from "framer-motion";
import { Folder, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Resume Builder",
    description: "A web application that helps users generate resumes with AI-driven suggestions and formatting tools.",
    tech: ["React", "OpenAI API", "Tailwind"],
    github: "https://github.com/pratyushwakde24-source/resume-builder",
    link: "#"
  },
  {
    title: "Hospital-management-system",
    description:"Manage patients, staff, appointments, and billing",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/pratyushwakde24-source/hospital-management-system.",
    link: "#"
  }, 
  { 
    title: "EventBooker",
    description:"An event booking platform for users to browse and reserve spots at various events.",
    tech:["React", "Firebase", "Tailwind CSS"],
    github:"https://github.com/pratyushwakde24-source/Eventapp.",
    link:"#"



  }

  

  ];
const Projects = () => {
  return (
    <section id="projects">
      <motion.h3 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-8 flex items-center gap-4"
      >
        <span className="text-primary">02.</span> Projects
        <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 group hover:border-primary/50 transition"
          >
            <div className="flex justify-between items-start mb-4">
              <Folder className="text-primary" size={40} />
              <div className="flex gap-4 text-slate-400">
                <a href={project.github} className="hover:text-primary"><Github size={20} /></a>
                <a href={project.link} className="hover:text-primary"><ExternalLink size={20} /></a>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition">{project.title}</h4>
            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
            <div className="flex gap-3 text-xs font-mono text-slate-500">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;