"use client";

import { lazy, Suspense } from "react";
import { SectionHead, FadeUp } from "./Reveal";
import ErrorBoundary from "./ErrorBoundary";

const BlessingsCanvas = lazy(() => import("./three/BlessingsCanvas"));

const PRAYER = [
  "હે પ્રભુ!",
  "આ નવા વર્ષમાં દરેકના જીવનમાંથી દુઃખ, દર્દ, ચિંતા અને મુશ્કેલીઓ દૂર કરજો.",
  "જેના જીવનમાં ઉદાસી છે, તેમના ચહેરા પર સ્મિત આપજો.",
  "જેના હૃદયમાં પીડા છે, તેમને શાંતિ આપજો.",
  "જે મુશ્કેલીઓ સામે લડી રહ્યા છે, તેમને હિંમત અને શક્તિ આપજો.",
  "દરેક પરિવારને સુખ, શાંતિ, સમૃદ્ધિ અને સ્વાસ્થ્ય આપજો.",
];

export default function Blessings() {
  return (
    <section
      data-testid="blessings-section"
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(123,37,31,0.22), transparent 70%)",
        }}
      />
      <ErrorBoundary fallback={null}>
        <Suspense fallback={null}>
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <BlessingsCanvas />
          </div>
        </Suspense>
      </ErrorBoundary>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <SectionHead
          eyebrow="Divine Blessings"
          title="ભગવાનના આશીર્વાદ સદાય તમારી સાથે રહે 🙏"
        />

        <FadeUp delay={0.15} className="mt-10">
          <div className="gold-hairline gold-glow relative rounded-[4px] bg-[#181008]/70 px-7 py-10 backdrop-blur-sm md:px-14 md:py-14">
            {[
              "top-2 left-2 border-t border-l",
              "top-2 right-2 border-t border-r",
              "bottom-2 left-2 border-b border-l",
              "bottom-2 right-2 border-b border-r",
            ].map((c, i) => (
              <span
                key={i}
                className={`absolute h-4 w-4 border-[#C99A45]/70 ${c}`}
              />
            ))}
            <div
              className="space-y-5 text-center text-lg leading-[1.9] text-[#F5E6C8]/90 md:text-2xl"
              style={{
                fontFamily:
                  '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
              }}
            >
              {PRAYER.map((line, i) => (
                <p
                  key={i}
                  className={
                    i === 0 ? "text-gold text-2xl font-semibold md:text-3xl" : ""
                  }
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-9 text-center text-base leading-relaxed text-[#C99A45]/90 italic md:text-lg">
              &ldquo;May every broken heart find peace, every struggling soul
              find strength, and every family be blessed with love and
              happiness.&rdquo;
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
