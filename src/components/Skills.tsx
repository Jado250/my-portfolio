"use client";

import { motion } from "framer-motion";
import SectionEyebrow from "./SectionEyebrow";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow index="01" label="Skills" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-balance max-w-2xl"
        >
          Core areas of focus.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-xl text-text-muted"
        >
          These are the business and technical strengths I bring to every
          client engagement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-3xl border border-border bg-bg-panel p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold/40"
            >
              <p className="font-display text-xl font-semibold text-text">
                {skill}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
