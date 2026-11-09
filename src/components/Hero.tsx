"use client";

import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { MaskedLine } from "./Reveal";
import { Divider } from "./Ornament";
import ErrorBoundary from "./ErrorBoundary";

const HeroCanvas = lazy(() => import("./three/HeroCanvas"));

const GUJ_H1 = {
  fontFamily: '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
  fontSize: "clamp(2.55rem, min(9.5vw, 11vh), 6.5rem)",
};

export default function Hero({ active }: { active: boolean }) {
  const show = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 1, ease: EASE, delay: active ? delay : 0 },
  });

  return (
    <section
      data-testid="hero-section"
      className="relative flex min-h-[100svh] items-center justify-center overflow-x-clip"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 62% 52% at 50% 74%, rgba(217,164,65,0.16), transparent 70%)",
        }}
      />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </ErrorBoundary>
      <div className="vignette pointer-events-none absolute inset-0 z-[5]" />

      {/* Clear zone between temple beam (top) and diya (bottom) */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pt-[18vh] pb-[26vh] text-center sm:px-6 sm:pt-[16vh] sm:pb-[28vh] md:pt-[14vh]">
        <h1
          className="text-gold-static leading-[1.15] font-semibold"
          style={{
            ...GUJ_H1,
            textShadow: "0 0 48px rgba(201,154,69,0.38)",
          }}
        >
          <MaskedLine active={active} delay={0.35}>
            નવા વર્ષના
          </MaskedLine>
          <MaskedLine active={active} delay={0.5}>
            રામ રામ
          </MaskedLine>
        </h1>

        <motion.p
          {...show(0.7)}
          className="text-gold mt-3 font-display text-2xl italic font-medium tracking-wide sm:mt-4 sm:text-3xl md:text-4xl"
          style={{ textShadow: "0 2px 18px rgba(16,13,10,0.85)" }}
        >
          Happy New Year
        </motion.p>

        <motion.p
          {...show(0.85)}
          className="mt-3 text-sm tracking-[0.32em] text-[#C99A45]/90 uppercase sm:mt-4 sm:text-base md:text-lg"
        >
          A New Beginning&nbsp;&nbsp;•&nbsp;&nbsp;Endless
          Blessings&nbsp;&nbsp;•&nbsp;&nbsp;Infinite Happiness
        </motion.p>

        <motion.p
          {...show(1.1)}
          className="mx-auto mt-4 max-w-3xl text-[1.05rem] leading-relaxed text-[#F5E6C8]/95 sm:mt-5 sm:text-xl md:text-2xl"
          style={{
            fontFamily:
              '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
            textShadow: "0 1px 14px rgba(16,13,10,0.9)",
          }}
        >
          નવું વર્ષ તમારા જીવનમાં નવી આશાઓ, અનંત ખુશીઓ અને ભગવાનના આશીર્વાદ
          લઈને આવે.
        </motion.p>

        <motion.p
          {...show(1.22)}
          className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-[#F5E6C8]/78 italic sm:text-lg md:text-xl"
          style={{ textShadow: "0 1px 14px rgba(16,13,10,0.9)" }}
        >
          May this New Year bring endless happiness, peace, prosperity and
          countless blessings into your life.
        </motion.p>

        <motion.div {...show(1.4)} className="mt-5 sm:mt-7">
          <Divider />
          <p className="mt-4 text-xs tracking-[0.3em] text-[#F5E6C8]/55 uppercase md:text-sm">
            With Love, Respect & Best Wishes
          </p>
          <div className="signature-highlight signature-highlight--hero mt-3 sm:mt-4">
            <p
              className="text-gold text-[1.55rem] leading-tight font-bold sm:text-[1.85rem] md:text-3xl lg:text-[2.65rem]"
              style={{
                fontFamily:
                  '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
              }}
            >
              Khushal Nadiyapara & Family ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
