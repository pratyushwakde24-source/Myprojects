import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary font-mono mb-4">03. What's Next?</p>
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          I'm currently looking for new opportunities in Software Development. 
          Whether you have a question or just want to say hi, my inbox is open!
        </p>
        <a href="mailto:pratyushwakde24@gmail.com" 
           className="px-8 py-4 border border-primary text-primary rounded hover:bg-primary/10 transition">
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;