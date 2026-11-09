import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { EASE } from "@/lib/motion";
import { DiyaSvg } from "./Ornament";

const RitualContent = ({ visible }) => (
    <motion.div
        className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none"
        animate={{ opacity: visible ? 1 : 0, transition: { duration: 0.5 } }}
    >
        <motion.div
            className="absolute w-[60vmax] h-[60vmax] rounded-full"
            style={{
                background:
                    "radial-gradient(circle, rgba(217,164,65,0.28) 0%, rgba(123,37,31,0.12) 35%, transparent 65%)",
            }}
            initial={{ scale: 0.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.6, ease: EASE }}
        />
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
            className="relative flex flex-col items-center"
        >
            <div className="relative flex flex-col items-center mb-6">
                <DiyaSvg className="w-24 h-20 drop-shadow-[0_0_24px_rgba(217,164,65,0.6)]" />
            </div>
            <p
                className="text-gold text-xl sm:text-2xl md:text-3xl"
                style={{ fontFamily: '"Noto Serif Gujarati", serif' }}
            >
                ॥ શ્રી ગણેશાય નમઃ ॥
            </p>
        </motion.div>
    </motion.div>
);

const DoorPanel = ({ side, open }) => (
    <motion.div
        className={`absolute top-0 h-full w-[50.4%] wood-door z-30 overflow-hidden ${
            side === "left" ? "left-0" : "right-0"
        }`}
        initial={{ x: "0%" }}
        animate={{ x: open ? (side === "left" ? "-103%" : "103%") : "0%" }}
        transition={{ duration: 2.4, ease: EASE, delay: 0.2 }}
        style={{ boxShadow: "inset 0 0 90px rgba(0,0,0,0.65)" }}
    >
        <div
            className="absolute inset-3 sm:inset-5 border border-[#C99A45]/35 pointer-events-none"
            style={{
                borderRadius:
                    side === "left" ? "4px 170px 4px 4px" : "170px 4px 4px 4px",
            }}
        />
        <div
            className="absolute inset-6 sm:inset-8 border border-[#C99A45]/15 pointer-events-none"
            style={{
                borderRadius:
                    side === "left" ? "4px 140px 4px 4px" : "140px 4px 4px 4px",
            }}
        />
        <div
            className="absolute top-0 bottom-0 w-[5px] bg-gradient-to-b from-[#C99A45]/70 via-[#C99A45]/25 to-[#C99A45]/70"
            style={side === "left" ? { right: 0 } : { left: 0 }}
        />
        {[18, 38, 58, 78].map((p) => (
            <span
                key={p}
                className="absolute w-2.5 h-2.5 rounded-full border border-[#C99A45]/50"
                style={{
                    top: `${p}%`,
                    [side === "left" ? "right" : "left"]: "12px",
                }}
            />
        ))}
    </motion.div>
);

const FallingPetals = () => {
    const petals = useMemo(
        () =>
            Array.from({ length: 16 }, (_, i) => ({
                id: i,
                left: Math.random() * 100,
                delay: 1 + Math.random() * 1.6,
                dur: 2.6 + Math.random() * 2.4,
                size: 8 + Math.random() * 9,
                rot: Math.random() * 360,
            })),
        []
    );
    return (
        <div className="absolute inset-0 z-40 overflow-hidden pointer-events-none">
            {petals.map((p) => (
                <motion.span
                    key={p.id}
                    className="petal"
                    style={{
                        left: `${p.left}%`,
                        width: p.size,
                        height: p.size * 1.3,
                    }}
                    initial={{ y: "-8vh", rotate: p.rot, opacity: 0.9 }}
                    animate={{ y: "112vh", rotate: p.rot + 260, opacity: 0.5 }}
                    transition={{
                        duration: p.dur,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default function Intro({ onComplete, reduced }) {
    const [phase, setPhase] = useState("gate");
    const timers = useRef([]);

    useEffect(() => {
        if (reduced) setPhase("done");
    }, [reduced]);

    useEffect(() => {
        return () => timers.current.forEach(clearTimeout);
    }, []);

    const enter = () => {
        if (phase !== "gate") return;
        setPhase("ritual");
        window.dispatchEvent(new Event("ny:start-music"));
        timers.current.push(setTimeout(() => setPhase("doors"), 3100));
        timers.current.push(
            setTimeout(() => {
                setPhase("done");
                onComplete();
            }, 6300)
        );
    };

    if (phase === "done") return null;

    return (
        <div
            data-testid="intro-overlay"
            className="fixed inset-0 z-[100] bg-[#060402] overflow-hidden"
        >
            {phase === "gate" && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-10 px-6">
                    <div
                        className="absolute w-[46vmax] h-[46vmax] rounded-full"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(217,164,65,0.14) 0%, transparent 60%)",
                        }}
                    />
                    <div className="relative flex flex-col items-center">
                        <DiyaSvg className="w-20 h-16 drop-shadow-[0_0_18px_rgba(217,164,65,0.55)]" />
                    </div>
                    <button
                        data-testid="enter-celebration-btn"
                        onClick={enter}
                        className="group relative overflow-hidden border border-[#C99A45]/60 rounded-full px-10 py-4 text-sm md:text-base tracking-[0.35em] uppercase text-[#F5E6C8] hover:text-[#100D0A] transition-colors duration-500 gold-glow"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-[#C99A45] to-[#D9A441] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        <span className="relative flex items-center gap-3">
                            Enter Celebration
                            <Volume2 className="w-4 h-4 opacity-70" />
                        </span>
                    </button>
                    <p className="text-[#C99A45]/50 text-xs tracking-[0.3em] uppercase">
                        Best experienced with sound
                    </p>
                </div>
            )}

            {(phase === "ritual" || phase === "doors") && (
                <RitualContent visible={phase === "ritual"} />
            )}

            {(phase === "ritual" || phase === "doors") && (
                <DoorPanel side="left" open={phase === "doors"} />
            )}
            {(phase === "ritual" || phase === "doors") && (
                <DoorPanel side="right" open={phase === "doors"} />
            )}

            {phase === "doors" && (
                <>
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[30vmax] h-[30vmax] rounded-full pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(245,230,200,0.75) 0%, rgba(217,164,65,0.4) 30%, transparent 65%)",
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 2.6, 3.4], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.2, delay: 0.4, ease: EASE }}
                    />
                    <FallingPetals />
                </>
            )}
        </div>
    );
}
