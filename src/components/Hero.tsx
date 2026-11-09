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
  fontSize: "clamp(2.2rem, min(8.6vw, 9.5vh), 6.5rem)",
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
      className="relative flex min-h-[100svh] items-start justify-center overflow-x-clip sm:items-center"
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

      {/* Soft veil so signature stays readable above diya on mobile */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] h-[38%] sm:hidden"
        style={{
          background:
            "linear-gradient(to top, rgba(16,13,10,0.72) 0%, rgba(16,13,10,0.28) 45%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-[16vh] pb-[34vh] text-center sm:px-6 sm:pt-[16vh] sm:pb-[26vh] md:pt-[14vh] md:pb-[28vh]">
        <h1
          className="text-gold-static leading-[1.1] font-semibold"
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
          className="text-gold mt-2 font-display text-xl italic font-medium tracking-wide sm:mt-3 sm:text-3xl md:text-4xl"
          style={{ textShadow: "0 2px 18px rgba(16,13,10,0.85)" }}
        >
          Happy New Year
        </motion.p>

        <motion.p
          {...show(0.85)}
          className="mt-2 max-w-[20rem] text-[0.7rem] leading-relaxed tracking-[0.18em] text-[#C99A45]/90 uppercase sm:mt-3 sm:max-w-none sm:text-sm sm:tracking-[0.32em] md:text-base md:text-lg"
        >
          A New Beginning&nbsp;•&nbsp;Endless Blessings&nbsp;•&nbsp;Infinite
          Happiness
        </motion.p>

        <motion.p
          {...show(1.1)}
          className="mx-auto mt-3 max-w-3xl text-[1.05rem] leading-snug text-[#F5E6C8]/95 sm:mt-4 sm:text-xl sm:leading-relaxed md:text-2xl"
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
          className="mx-auto mt-2 max-w-3xl text-[0.95rem] leading-snug text-[#F5E6C8]/78 italic sm:mt-3 sm:text-lg sm:leading-relaxed md:text-xl"
          style={{ textShadow: "0 1px 14px rgba(16,13,10,0.9)" }}
        >
          May this New Year bring endless happiness, peace, prosperity and
          countless blessings into your life.
        </motion.p>

        <motion.div
          {...show(1.4)}
          className="mt-3.5 flex w-full max-w-[21rem] flex-col items-center sm:mt-6 sm:max-w-none"
        >
          <Divider />
          <p className="mt-2.5 text-[0.7rem] tracking-[0.26em] text-[#F5E6C8]/55 uppercase sm:mt-4 sm:text-xs md:text-sm">
            With Love, Respect & Best Wishes
          </p>
          <div className="signature-highlight signature-highlight--hero mt-2 w-full sm:mt-3 sm:w-auto">
            <p
              className="text-gold text-[1.2rem] leading-[1.25] font-bold sm:text-[1.85rem] md:text-3xl lg:text-[2.65rem]"
              style={{
                fontFamily:
                  '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
              }}
            >
              <span className="block sm:inline">Khushal Nadiyapara</span>
              <span className="block sm:inline">
                <span className="hidden sm:inline"> </span>& Family ❤️
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
