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
            className="relative py-16 md:py-28 overflow-hidden"
        >
            {/* Golden sunrise behind a temple horizon */}
            <div className="absolute inset-x-0 bottom-0 h-[70vh] pointer-events-none overflow-hidden">
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-[60vh]"
                    style={{
                        background:
                            "radial-gradient(ellipse 50% 55% at 50% 100%, rgba(217,164,65,0.3) 0%, rgba(123,37,31,0.14) 40%, transparent 70%)",
                    }}
                />
                <div className="rays rays-spin absolute left-1/2 -translate-x-1/2 bottom-[-70vmax] w-[170vmax] h-[170vmax] rounded-full opacity-70" />
                <motion.div
                    className="absolute bottom-[3vh] left-1/2 -translate-x-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full blur-[3px] opacity-80"
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

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <SectionHead
                    eyebrow="New Beginning"
                    title="નવું વર્ષ, નવી આશા, નવી શરૂઆત ❤️"
                />

                <div
                    className="mt-10 space-y-4 text-center text-lg md:text-2xl leading-[1.9] text-[#F5E6C8]/90"
                    style={{ fontFamily: '"Noto Serif Gujarati", serif' }}
                >
                    {LINES.map((l, i) => (
                        <FadeUp key={i} delay={i * 0.08}>
                            <p>{l}</p>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.2} className="mt-12 text-center">
                    <p className="text-base md:text-lg italic text-[#C99A45]/90 max-w-2xl mx-auto leading-relaxed">
                        "Leave behind the pain, carry forward the memories,
                        forgive more, love deeper and welcome every new
                        beginning with hope."
                    </p>
                </FadeUp>

                <div className="mt-10 md:mt-12 text-center px-2">
                    <MaskedLine>
                        <span
                            className="text-gold text-xl sm:text-2xl md:text-3xl lg:text-[2.6rem] leading-[1.75] font-semibold max-w-4xl mx-auto block"
                            style={{
                                fontFamily: '"Noto Serif Gujarati", serif',
                                textShadow:
                                    "0 0 14px rgba(16,13,10,0.95), 0 0 28px rgba(16,13,10,0.85), 0 2px 6px rgba(16,13,10,0.9)",
                            }}
                        >
                            "જીવનમાં પૈસા કરતાં પ્રેમ મોટો છે, સફળતા કરતાં સંતોષ મોટો છે અને દરેક વસ્તુ કરતાં પરિવારનો સાથ તથા ભગવાનના આશીર્વાદ સૌથી મોટા છે."
                        </span>
                    </MaskedLine>
                </div>
            </div>
        </section>
    );
}
