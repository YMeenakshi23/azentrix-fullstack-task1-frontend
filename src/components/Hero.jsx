import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-bounce [animation-duration:10s]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce [animation-duration:14s]"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">

        {/* Availability Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6"
        >
          Available for Creative Projects
        </motion.span>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Designing Digital Experiences
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            That Leave an Impression
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Hi, I'm <span className="text-cyan-400 font-semibold">Alex Carter</span>,
          a fictional Creative Developer, Motion Designer, and Digital Storyteller
          focused on building immersive web experiences with elegant animations
          and modern user interfaces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 group"
          >
            Explore My Work

            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium bg-slate-900 border border-slate-800 text-slate-200 hover:bg-slate-800 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-6 text-slate-500"
        >
          <a
            href="#"
            className="hover:text-cyan-400 transition-colors font-medium"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition-colors font-medium"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition-colors font-medium"
          >
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}