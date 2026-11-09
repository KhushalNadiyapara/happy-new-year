import { SectionHead, FadeUp, MaskedLine } from "./Reveal";
import { Divider } from "./Ornament";

const LINES = [
    "આપણે સૌ એકબીજાના જીવનમાં ખુશીનું કારણ બનીએ.",
    "કોઈનું દિલ ના દુભાવીએ, કોઈની લાગણી ના તોડીએ.",
    "જ્યાં શક્ય હોય ત્યાં મદદ કરીએ અને દરેક સાથે પ્રેમથી વર્તીએ.",
    "કારણ કે જીવન ખૂબ સુંદર છે, અને આ જીવનમાં મળેલો દરેક સંબંધ ભગવાનની અમૂલ્ય ભેટ છે.",
];

export default function Heartfelt() {
    return (
        <section
            data-testid="heartfelt-section"
            className="relative py-16 md:py-24 overflow-hidden"
        >
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(123,37,31,0.18), transparent 72%), radial-gradient(ellipse 40% 35% at 50% 100%, rgba(217,164,65,0.1), transparent 70%)",
                }}
            />
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                <SectionHead
                    eyebrow="From The Heart"
                    title="એક નાનકડી પ્રાર્થના... ❤️"
                />

                <div
                    className="mt-10 space-y-6 text-lg md:text-2xl leading-[1.9] text-[#F5E6C8]/90"
                    style={{ fontFamily: '"Noto Serif Gujarati", serif' }}
                >
                    {LINES.map((l, i) => (
                        <FadeUp key={i} delay={i * 0.1}>
                            <p>{l}</p>
                        </FadeUp>
                    ))}
                </div>

                <FadeUp delay={0.2} className="mt-10">
                    <Divider className="mb-10" />
                    <p className="text-xl md:text-2xl italic text-gold leading-relaxed">
                        "Be someone's reason to smile. Spread kindness, forgive
                        freely, love genuinely and make every relationship
                        meaningful."
                    </p>
                </FadeUp>
            </div>
        </section>
    );
}
