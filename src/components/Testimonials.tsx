"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow index="05" label="Client Feedback" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-balance max-w-2xl mb-14"
        >
          What it&apos;s like to work together.
        </motion.h2>

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl rounded-2xl border border-border bg-bg-panel p-8 sm:p-12"
        >
          <Quote className="text-gold/40" size={36} strokeWidth={1.5} />
          <blockquote className="mt-6 font-display text-xl sm:text-2xl leading-snug text-balance text-text">
            Jean de Dieu approached our website with real professionalism.
            technically sound, creative in how he solved problems, and
            reliable through every stage of the project. He delivered a
            high-quality result we were genuinely proud to launch, and we
            wouldn&apos;t hesitate to work with him again.
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-gold to-signal flex items-center justify-center font-display font-semibold text-ink-0 text-sm">
              SB
            </div>
            <div>
              <div className="font-medium text-sm text-text">
                Smartlink Business Solutions Ltd
              </div>
              <div className="font-mono text-xs text-text-muted">
                Client · Corporate Website Project
              </div>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
