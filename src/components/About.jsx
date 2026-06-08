import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Card Frame Effect */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Who I Am</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Alex Carter is a fictional creative developer and digital designer specializing in immersive web experiences, interactive storytelling, and modern UI systems.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My design philosophy is simple: write maintainable code, implement defensive optimizations, and never compromise on user experience.
            </p>
          </motion.div>

          {/* Stats Breakdown Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { title: "Task Completion", value: "100%" },
              { title: "Frameworks Covered", value: "React & Spring" },
              { title: "DB Architectures", value: "PostgreSQL & MERN" },
              { title: "API Security", value: "JWT & Rate Limits" }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center hover:border-cyan-500/50 transition-colors">
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.title}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}