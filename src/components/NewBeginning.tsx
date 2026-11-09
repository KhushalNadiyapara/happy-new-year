"use client";

import { motion } from "framer-motion";
import { SectionHead, FadeUp, MaskedLine } from "./Reveal";

const LINES = [
  "વીતેલા વર્ષના દરેક દુઃખને ભૂલી જઈએ.",
  "જૂની યાદોમાંથી સુંદર પળોને સાચવી લઈએ.",
  "મનમાંથી નારાજગી અને હૃદયમાંથી વેરભાવ દૂર કરીએ.",
  "પ્રેમ, લાગણી અને સંબંધોને વધુ મજબૂત બનાવીએ.",
  "આવનારું દરેક સવાર નવી ખુશીઓ લઈને આવે.",
];

export default function NewBeginning() {
  return (
    <section
      data-testid="new-beginning-section"
      className="relative overflow-hidden py-16 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70vh] overflow-hidden">
        <div
          className="absolute bottom-0 left-1/2 h-[60vh] w-[150vw] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse 50% 55% at 50% 100%, rgba(217,164,65,0.3) 0%, rgba(123,37,31,0.14) 40%, transparent 70%)",
          }}
        />
        <div className="rays rays-spin absolute bottom-[-70vmax] left-1/2 h-[170vmax] w-[170vmax] -translate-x-1/2 rounded-full opacity-70" />
        <motion.div
          className="absolute bottom-[3vh] left-1/2 h-36 w-36 -translate-x-1/2 rounded-full opacity-80 blur-[3px] md:h-48 md:w-48"
          style={{
            background:
              "radial-gradient(circle, #EFD9A0 0%, #C99A45 50%, rgba(201,154,69,0) 72%)",
          }}
          initial={{ y: 160, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <SectionHead
          eyebrow="New Beginning"
          title="નવું વર્ષ, નવી આશા, નવી શરૂઆત ❤️"
        />

        <div
          className="mt-10 space-y-4 text-center text-lg leading-[1.9] text-[#F5E6C8]/90 md:text-2xl"
          style={{
            fontFamily:
              '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
          }}
        >
          {LINES.map((l, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <p>{l}</p>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2} className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#C99A45]/90 italic md:text-lg">
            &ldquo;Leave behind the pain, carry forward the memories, forgive
            more, love deeper and welcome every new beginning with hope.&rdquo;
          </p>
        </FadeUp>

        <div className="mt-10 px-2 text-center md:mt-12">
          <MaskedLine>
            <span
              className="text-gold mx-auto block max-w-4xl text-xl leading-[1.75] font-semibold sm:text-2xl md:text-3xl lg:text-[2.6rem]"
              style={{
                fontFamily:
                  '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
                textShadow:
                  "0 0 14px rgba(16,13,10,0.95), 0 0 28px rgba(16,13,10,0.85), 0 2px 6px rgba(16,13,10,0.9)",
              }}
            >
              &ldquo;જીવનમાં પૈસા કરતાં પ્રેમ મોટો છે, સફળતા કરતાં સંતોષ મોટો છે
              અને દરેક વસ્તુ કરતાં પરિવારનો સાથ તથા ભગવાનના આશીર્વાદ સૌથી મોટા
              છે.&rdquo;
            </span>
          </MaskedLine>
        </div>
      </div>
    </section>
  );
}
