"use client";

import { lazy, Suspense } from "react";
import { FadeUp, MaskedLine } from "./Reveal";
import { Divider, DiyaSvg } from "./Ornament";
import ErrorBoundary from "./ErrorBoundary";

const FinaleCanvas = lazy(() => import("./three/FinaleCanvas"));

function TempleSilhouette() {
  return (
    <svg
      viewBox="0 0 1000 460"
      className="absolute bottom-0 left-1/2 h-auto w-[1300px] max-w-none -translate-x-1/2"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <g fill="#181008">
        <rect x="497" y="26" width="6" height="22" />
        <circle cx="500" cy="20" r="9" />
        <path d="M500 44 L520 84 H508 L528 128 H514 L538 176 H462 L486 128 H472 L492 84 H480 Z" />
        <ellipse cx="500" cy="182" rx="52" ry="11" />
        <rect x="470" y="192" width="60" height="12" />
        <rect x="350" y="204" width="300" height="14" />
        <rect x="365" y="218" width="12" height="110" />
        <rect x="440" y="218" width="12" height="110" />
        <rect x="548" y="218" width="12" height="110" />
        <rect x="623" y="218" width="12" height="110" />
        <path
          id="shrine"
          d="M160 330 L160 260 L178 260 L178 230 L196 230 L196 205 L210 186 L224 205 L224 230 L242 230 L242 260 L260 260 L260 330 Z"
        />
        <use href="#shrine" transform="matrix(-1,0,0,1,1000,0)" />
        <rect x="110" y="330" width="780" height="16" />
        <rect x="70" y="346" width="860" height="18" />
        <rect x="30" y="364" width="940" height="22" />
        <rect x="0" y="386" width="1000" height="74" />
      </g>
      <path
        d="M470 328 V254 Q500 224 530 254 V328 Z"
        fill="#D9A441"
        opacity="0.13"
      />
    </svg>
  );
}

const MiniDiya = () => (
  <DiyaSvg className="h-8 w-9 drop-shadow-[0_0_10px_rgba(217,164,65,0.5)]" />
);

export default function Finale() {
  return (
    <section
      data-testid="finale-section"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 88%, rgba(217,164,65,0.22), rgba(123,37,31,0.1) 45%, transparent 75%)",
        }}
      />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <div className="absolute inset-0">
            <FinaleCanvas />
          </div>
        </Suspense>
      </ErrorBoundary>

      <TempleSilhouette />

      <div className="absolute bottom-5 left-1/2 z-[5] flex -translate-x-1/2 items-end gap-5">
        {[0, 1, 2, 3, 4].map((i) => (
          <MiniDiya key={i} />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <MaskedLine>
          <h2
            className="text-gold-static text-4xl leading-[1.25] font-semibold sm:text-5xl md:text-6xl"
            style={{
              fontFamily:
                '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
            }}
          >
            નવા વર્ષના હાર્દિક રામ રામ 🙏
          </h2>
        </MaskedLine>

        <FadeUp delay={0.2}>
          <p
            className="mx-auto mt-10 max-w-3xl text-lg leading-[1.9] text-[#F5E6C8]/90 md:text-2xl"
            style={{
              fontFamily:
                '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
            }}
          >
            ભગવાન શ્રીકૃષ્ણ અને શ્રી ગણેશજીની કૃપાથી તમારા જીવનમાં સુખ, શાંતિ,
            સમૃદ્ધિ, સ્વાસ્થ્ય અને સફળતાનો હંમેશાં વાસ રહે.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#F5E6C8]/65 italic md:text-lg">
            May God bless you and your family with happiness, good health, peace,
            prosperity and success throughout the year.
          </p>
        </FadeUp>

        <FadeUp delay={0.45} className="mt-10">
          <div className="signature-highlight signature-highlight--finale mx-auto">
            <p
              className="text-gold text-3xl leading-tight font-bold sm:text-4xl md:text-5xl"
              style={{
                fontFamily:
                  '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
              }}
            >
              Khushal Nadiyapara
            </p>
            <p
              className="text-gold mt-2 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl"
              style={{
                fontFamily:
                  '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
              }}
            >
              & Family ❤️
            </p>
            <p className="mt-5 text-[11px] tracking-[0.55em] text-[#F5E6C8]/75 uppercase md:text-xs">
              AND BY NADIYAPARA FAMILY
            </p>
          </div>
          <Divider className="mt-10" />
          <p
            className="text-gold mt-8 text-xl font-semibold md:text-2xl"
            style={{
              fontFamily:
                '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
            }}
          >
            🙏 નવા વર્ષના રામ રામ 🙏
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <p
            className="mt-10 text-[10px] tracking-[0.4em] text-[#C99A45]/75 uppercase"
            style={{
              textShadow:
                "0 1px 6px rgba(16,13,10,1), 0 0 14px rgba(16,13,10,1)",
            }}
          >
            Crafted with love • Happy New Year 
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
