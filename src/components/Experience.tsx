"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code } from "lucide-react";
import SectionEyebrow from "./SectionEyebrow";
import { experience } from "@/data/experience";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [openId, setOpenId] = useState<string>("");

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow index="04" label="Timeline" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-balance max-w-2xl mb-14"
        >
          How the last two years connected.
        </motion.h2>

        <div className="relative max-w-3xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />

          <ul className="space-y-3">
            {experience.map((entry, i) => {
              const isOpen = openId === entry.id;
              return (
                <motion.li
                  key={entry.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative pl-11"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? "" : entry.id)}
                    data-cursor-hover
                    aria-expanded={isOpen}
                    className="absolute left-0 top-1 h-8 w-8 rounded-full border border-border bg-bg flex items-center justify-center text-text-muted hover:border-gold/60 hover:text-gold transition-colors"
                  >
                    {entry.type === "education" ? (
                      <GraduationCap size={14} />
                    ) : (
                      <Code size={14} />
                    )}
                  </button>

                  <div
                    className={cn(
                      "rounded-2xl border transition-colors",
                      isOpen
                        ? "border-gold/40 bg-bg-panel"
                        : "border-border bg-bg-panel/60"
                    )}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? "" : entry.id)}
                      data-cursor-hover
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <div>
                        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-signal mb-1">
                          {entry.period} · {entry.org}
                        </div>
                        <div className="font-display font-semibold text-base">
                          {entry.title}
                        </div>
                      </div>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="shrink-0 h-6 w-6 rounded-full border border-border flex items-center justify-center text-text-faint text-lg leading-none"
                      >
                        +
                      </motion.span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-sm text-text-muted leading-relaxed mb-4">
                          {entry.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono rounded-full bg-bg-panel-2 px-2.5 py-1 text-text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
