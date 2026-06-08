import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: "Backend Core",
      skills: ["Java 21/22", "Spring Boot", "Spring Security", "RESTful APIs", "JWT Auth"]
    },
    {
      title: "Frontend Architecture",
      skills: ["React SPA", "Vite", "Tailwind CSS v4", "Framer Motion", "JavaScript / ES6"]
    },
    {
      title: "Data & Systems",
      skills: ["PostgreSQL", "MongoDB", "Hibernate JPA", "Docker Compose", "Git / GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/40 border-y border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">Technical Armory</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
              className="p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-lg relative group overflow-hidden hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-slate-900 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}