"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profileImage from "../../image/profile.jpeg";

export default function ProfileCard() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto lg:mx-0">
      <div className="premium-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_90px_-35px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:-translate-y-1.5">
        <div className="absolute inset-0 bg-white/4 blur-3xl opacity-60" />
        <div className="relative z-10 flex flex-col items-center gap-4 py-6">
          <div className="relative flex items-center justify-center float-y">
            <div className="avatar-gradient-border absolute inset-0 rounded-full pointer-events-none" />
            <div className="relative overflow-hidden rounded-full border border-white/8 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] shadow-[0_10px_30px_rgba(80,60,120,0.18)] bg-bg-panel-2">
              <Image
                src={profileImage}
                alt="Jean de Dieu KWIZERA portrait"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 300px"
                style={{ objectFit: "cover", objectPosition: "55% 20%" }}
                className="avatar-img"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
