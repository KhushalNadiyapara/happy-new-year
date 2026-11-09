"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";
import { Divider } from "./Ornament";

export function MaskedLine({
  children,
  delay = 0,
  className = "",
  active = true,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  active?: boolean;
}) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (!active) {
      setUnlocked(false);
      return;
    }
    const t = window.setTimeout(
      () => setUnlocked(true),
      Math.round((delay + 1.15) * 1000),
    );
    return () => window.clearTimeout(t);
  }, [active, delay]);

  return (
    <span
      className={`block ${unlocked ? "overflow-visible" : "overflow-hidden"} ${className}`}
    >
      <motion.span
        className="block pt-[0.08em] pb-[0.14em]"
        initial={{ y: "115%" }}
        animate={active ? { y: "0%" } : { y: "115%" }}
        transition={{ duration: 1.1, ease: EASE, delay }}
        onAnimationComplete={() => {
          if (active) setUnlocked(true);
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function FadeUp({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="text-center">
      <FadeUp>
        <p className="mb-3 text-[10px] font-semibold tracking-[0.4em] text-[#C99A45]/85 uppercase sm:mb-5 sm:text-[11px] md:text-xs">
          {eyebrow}
        </p>
      </FadeUp>
      <MaskedLine>
        <h2
          className="text-gold text-[1.65rem] leading-[1.25] font-semibold sm:text-4xl md:text-5xl lg:text-6xl"
          style={{
            fontFamily:
              '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
          }}
        >
          {title}
        </h2>
      </MaskedLine>
      <Divider className="mt-5 sm:mt-8" />
    </div>
  );
}
