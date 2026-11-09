import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Heart, Smile, Users, Trophy, ShieldCheck } from "lucide-react";
import { SectionHead, FadeUp } from "./Reveal";

const WISHES = [
    {
        icon: Heart,
        title: "સાચો પ્રેમ",
        sub: "Love",
        text: "Every relationship grows stronger with trust, affection and understanding.",
    },
    {
        icon: Smile,
        title: "અનંત ખુશીઓ",
        sub: "Happiness",
        text: "May every face shine with a beautiful smile.",
    },
    {
        icon: Users,
        title: "સુખી પરિવાર",
        sub: "Family",
        text: "May every family stay united, peaceful and blessed.",
    },
    {
        icon: Trophy,
        title: "સફળતા અને સમૃદ્ધિ",
        sub: "Success",
        text: "May every effort turn into achievement and every dream become reality.",
    },
    {
        icon: ShieldCheck,
        title: "સ્વાસ્થ્ય અને શાંતિ",
        sub: "Health & Peace",
        text: "May everyone enjoy a healthy, peaceful and joyful life.",
    },
];

const CORNERS = [
    "top-2 left-2 border-t border-l",
    "top-2 right-2 border-t border-r",
    "bottom-2 left-2 border-b border-l",
    "bottom-2 right-2 border-b border-r",
];

function TiltCard({ wish, index }) {
    const rx = useMotionValue(0);
    const ry = useMotionValue(0);
    const srx = useSpring(rx, { stiffness: 160, damping: 18 });
    const sry = useSpring(ry, { stiffness: 160, damping: 18 });
    const ref = useRef(null);

    const onMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        ry.set(px * 11);
        rx.set(-py * 11);
    };
    const onLeave = () => {
        rx.set(0);
        ry.set(0);
    };

    const Icon = wish.icon;
    return (
        <motion.div
            ref={ref}
            data-testid={`wish-card-${index}`}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
            whileHover={{ y: -6 }}
            className={`group relative bg-[#181008]/80 backdrop-blur-sm gold-hairline rounded-[4px] p-8 md:p-10 h-full hover:gold-glow transition-shadow duration-500`}
        >
            {CORNERS.map((c, i) => (
                <span
                    key={i}
                    className={`absolute w-3.5 h-3.5 border-[#C99A45]/60 group-hover:border-[#D9A441] transition-colors duration-500 ${c}`}
                />
            ))}
            <div className="flex flex-col items-center text-center gap-5">
                <span className="w-14 h-14 rounded-full border border-[#C99A45]/50 flex items-center justify-center text-[#D9A441] group-hover:scale-110 group-hover:border-[#D9A441] transition-all duration-500">
                    <Icon className="w-6 h-6" />
                </span>
                <div>
                    <h3
                        className="text-gold text-2xl md:text-[1.7rem] font-semibold"
                        style={{ fontFamily: '"Noto Serif Gujarati", serif' }}
                    >
                        {wish.title}
                    </h3>
                    <p className="mt-1.5 text-[11px] tracking-[0.4em] uppercase text-[#F5E6C8]/50">
                        {wish.sub}
                    </p>
                </div>
                <p className="text-base md:text-[1.05rem] italic leading-relaxed text-[#F5E6C8]/75">
                    {wish.text}
                </p>
            </div>
        </motion.div>
    );
}

export default function Wishes() {
    return (
        <section
            data-testid="wishes-section"
            className="relative py-16 md:py-24 overflow-hidden"
        >
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(217,164,65,0.08), transparent 70%)",
                }}
            />
            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <SectionHead
                    eyebrow="Wishes For Everyone"
                    title="આ નવા વર્ષે દરેકને મળે..."
                />
                <div className="mt-10 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {WISHES.map((w, i) => (
                        <FadeUp key={i} delay={(i % 3) * 0.12} className={`h-full ${i === 4 ? "lg:col-start-2" : ""}`}>
                            <TiltCard wish={w} index={i} />
                        </FadeUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
