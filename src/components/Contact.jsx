import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Message sent successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900/20 border-t border-slate-900 relative"
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start A Conversation
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Have an exciting internship opening or a creative project? Let's
            connect.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-2xl text-left"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Alex Carter"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-700 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@email.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-700 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Message
              </label>

              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Let's build something amazing..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-slate-200 placeholder-slate-700 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {error && (
              <div className="text-red-500 font-medium">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-500 font-medium">
                {success}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-xl shadow-cyan-500/10 hover:opacity-95 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}