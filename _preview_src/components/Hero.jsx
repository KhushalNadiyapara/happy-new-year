import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { MaskedLine } from "./Reveal";
import { Divider } from "./Ornament";
import ErrorBoundary from "./ErrorBoundary";

const HeroCanvas = lazy(() => import("./three/HeroCanvas"));

const GUJ_H1 = {
    fontFamily: '"Noto Serif Gujarati", serif',
    fontSize: "clamp(2.6rem, min(9.5vw, 12.5vh), 7rem)",
};

export default function Hero({ active }) {
    const show = (delay) => ({
        initial: { opacity: 0, y: 24 },
        animate: active ? { opacity: 1, y: 0 } : {},
        transition: { duration: 1, ease: EASE, delay },
    });

    return (
        <section
            data-testid="hero-section"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            <div className="vignette absolute inset-0 pointer-events-none z-[5]" />

            <div className="relative z-10 text-center px-6 pt-10 pb-14 max-w-5xl mx-auto">
                {/* <motion.p
                    {...show(0.15)}
                    className="text-[#D9A441]/90 text-sm md:text-base tracking-[0.5em] mb-4"
                    style={{ textShadow: "0 1px 10px rgba(16,13,10,0.9)" }}
                >
                    ॥ શ્રી ગણેશાય નમઃ ॥
                </motion.p> */}

                <h1
                    className="text-gold-static font-semibold leading-[1.12]"
                    style={{
                        ...GUJ_H1,
                        textShadow: "0 0 40px rgba(201,154,69,0.3)",
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
                    {...show(0.85)}
                    className="mt-4 text-xs md:text-sm tracking-[0.35em] uppercase text-[#C99A45]/80"
                >
                    A New Beginning&nbsp;&nbsp;•&nbsp;&nbsp;Endless
                    Blessings&nbsp;&nbsp;•&nbsp;&nbsp;Infinite Happiness
                </motion.p>

                <motion.p
                    {...show(1.2)}
                    className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-[#F5E6C8]/90"
                    style={{
                        fontFamily: '"Noto Serif Gujarati", serif',
                        textShadow: "0 1px 14px rgba(16,13,10,0.9)",
                    }}
                >
                    નવું વર્ષ તમારા જીવનમાં નવી આશાઓ, અનંત ખુશીઓ અને ભગવાનના
                    આશીર્વાદ લઈને આવે.
                </motion.p>

                <motion.p
                    {...show(1.32)}
                    className="mt-3 max-w-2xl mx-auto text-base md:text-lg italic text-[#F5E6C8]/70"
                    style={{ textShadow: "0 1px 14px rgba(16,13,10,0.9)" }}
                >
                    May this New Year bring endless happiness, peace, prosperity
                    and countless blessings into your life.
                </motion.p>

                <motion.div {...show(1.5)}>
                    <Divider className="mt-6" />
                    <p className="mt-4 text-xs md:text-sm tracking-[0.3em] uppercase text-[#F5E6C8]/55">
                        With Love, Respect & Best Wishes
                    </p>
                    <p
                        className="text-gold text-xl md:text-2xl mt-2 font-semibold"
                        style={{ fontFamily: '"Noto Serif Gujarati", serif' }}
                    >
                        Khushal Nadiyapara & Family ❤️
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
