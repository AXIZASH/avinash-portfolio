import React from 'react';
import { motion } from 'framer-motion';
import { site } from '@/data/site';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center space-y-6"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {site.role}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href={`mailto:${site.email}`} className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-colors">
              Contact Me
            </a>
            <a href="#experience" className="px-6 py-3 border border-slate-700 rounded-full font-medium hover:bg-slate-900 transition-colors">
              View Work
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Summary Section */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">About</h2>
            <div className="space-y-2 text-slate-400">
              <p>{site.location}</p>
              <p>{site.phone}</p>
              <p>{site.email}</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-slate-300 leading-relaxed">
              {site.summary}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {site.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l border-slate-800"
            >
              <div className="absolute left-[-5px] top-0 w-2 h-2 bg-blue-500 rounded-full" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <p className="text-slate-500 text-sm">{exp.period} | {exp.location}</p>
              </div>
              <ul className="space-y-3 text-slate-400">
                {exp.description.map((item, j) => (
                  <li key={j} className="flex gap-3 text-sm">
                    <span className="text-blue-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(site.skills).map(([category, skills], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800"
            >
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, j) => (
                  <span key={j} className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 max-w-4xl mx-auto border-t border-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <p className="text-slate-400">{site.education.degree}</p>
            <p className="text-slate-500">{site.education.school} | {site.education.period}</p>
          </div>
          <a href="mailto:pavinashreddy24@gmail.com" className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition-all">
            Get In Touch
          </a>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </footer>
    </div>
  );
}