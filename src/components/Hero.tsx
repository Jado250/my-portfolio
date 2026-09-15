"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70svh] sm:min-h-[74svh] md:min-h-[78svh] lg:min-h-[84svh] xl:min-h-[88svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6rem] top-10 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute right-[-5rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-signal/15 blur-3xl" />
        <div className="absolute left-[20%] top-[35%] h-[14rem] w-[14rem] rounded-full bg-ember/10 blur-3xl" />
        <div className="absolute inset-0 hero-background" />
      </div>

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center">
          <div className="w-full">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,360px)] items-center">
              {/* Left: Intro */}
              <div className="order-last lg:order-first z-10">
                <div className="space-y-6 max-w-xl sm:max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono tracking-[0.25em] uppercase text-text-muted"
                  >
                    <span className="inline-block text-[0.65rem]">🟡</span>
                    Available for Freelance & Contract Work • Rwanda
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}>
                    <p className="text-lg text-text-muted">👋 Hi, I'm</p>
                    <h1 className="font-display text-[clamp(1.9rem,5vw,3rem)] leading-[1.02] text-text">Jean de Dieu KWIZERA</h1>
                    <p className="text-sm sm:text-base text-text-muted font-medium">Full-Stack Developer & IT Solutions Engineer</p>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-gold">Virtual Assistant | IT Support & Digital Operations</p>
                  </motion.div>

                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }} className="mt-2 text-sm sm:text-base text-text-muted max-w-lg sm:max-w-xl">
                    I build fast, scalable websites and software systems, and I help remote teams stay organized through dependable virtual assistance, IT support, and modern digital operations.
                  </motion.p>

                  <div className="lg:hidden pt-6">
                    <ProfileCard />
                  </div>

                  <motion.ul initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }} className="flex flex-wrap gap-2 mt-3">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "TypeScript",
                      "MySQL",
                      "Git & GitHub",
                    ].map((t) => (
                      <li key={t} className="tech-badge bg-bg-panel-2 border border-white/8 px-3 py-1 rounded-full text-xs text-text-muted hover:border-gold/40 transition">
                        {t}
                      </li>
                    ))}
                  </motion.ul>

                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.26 }} className="flex flex-wrap gap-2 items-center mt-4">
                    <a href="/Jean-de-Dieu-KWIZERA-CV.pdf" download className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-panel px-5 py-3 text-sm font-medium text-text hover:border-gold/60 hover:bg-bg-panel-2 hover:text-gold transition-colors"> <Download size={14} /> Download CV</a>
                    <a href="#contact" className="text-sm text-text-muted underline-offset-2 hover:text-text">Let's Talk →</a>
                  </motion.div>
                </div>
              </div>

              {/* Right: Profile card (desktop only) */}
              <div className="hidden lg:block mx-auto lg:mx-0 order-first lg:order-last">
                <ProfileCard />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
