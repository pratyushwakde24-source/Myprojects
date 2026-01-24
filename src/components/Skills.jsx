import { motion } from "framer-motion";

const skills = [
  "JavaScript ", "React", "Node.js", "Tailwind CSS", 
  "Python(Basic)", "AI Integration","Git/GitHub"
];

const Skills = () => {
  return (
    <section id="skills">
      <motion.h3 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-8 flex items-center gap-4"
      >
        <span className="text-primary">01.</span> Technical Skills
        <span className="h-px bg-slate-700 flex-grow max-w-xs"></span>
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 p-4 rounded border border-slate-700 hover:border-primary/50 hover:-translate-y-1 transition duration-300"
          >
            <span className="text-primary">▹</span> {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;