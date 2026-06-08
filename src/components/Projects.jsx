import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Multi-Tenant Notes REST API",
      desc: "Robust Spring Boot engine showcasing strict tenant isolation, JWT access/refresh security, and Bucket4j rate limiting.",
      tags: ["Spring Boot", "PostgreSQL", "JWT Security", "Docker"],
      link: "#"
    },
    {
      title: "High-Performance URL Shortener",
      desc: "Custom URL routing microservice featuring atomic database hit tracking counter lookups and real-time analytical monitoring.",
      tags: ["Java 22", "Spring JPA", "PostgreSQL", "Swagger UI"],
      link: "#"
    },
    {
      title: "Interactive Art Gallery",
      desc: "Animated virtual exhibition experience built with React, Tailwind CSS, and Framer Motion featuring smooth transitions and immersive UI interactions.",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of projects demonstrating full-stack development,
            creative design, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.2
              }}
              className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm flex flex-col justify-between shadow-xl hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {proj.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide bg-slate-950 text-cyan-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-medium bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                View Project

                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}