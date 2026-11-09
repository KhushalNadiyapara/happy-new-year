"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { EASE } from "@/lib/motion";
import { DiyaSvg } from "./Ornament";

const AUTO_ENTER_MS = 4000;

function RitualContent({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.65, ease: EASE }}
    >
      <motion.div
        className="absolute h-[60vmax] w-[60vmax] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(217,164,65,0.28) 0%, rgba(123,37,31,0.12) 35%, transparent 65%)",
        }}
        initial={{ scale: 0.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      />
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.35, delay: 0.35, ease: EASE }}
        className="relative flex flex-col items-center"
      >
        <DiyaSvg className="mb-7 h-20 w-28 drop-shadow-[0_0_28px_rgba(217,164,65,0.7)]" />
        <p
          className="text-gold text-xl sm:text-2xl md:text-3xl"
          style={{
            fontFamily:
              '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
          }}
        >
          ॥ શ્રી ગણેશાય નમઃ ॥
        </p>
        <p className="mt-4 text-[11px] tracking-[0.42em] text-[#C99A45]/65 uppercase">
          Opening the celebration
        </p>
      </motion.div>
    </motion.div>
  );
}

function DoorPanel({ side, open }: { side: "left" | "right"; open: boolean }) {
  return (
    <motion.div
      className={`wood-door absolute top-0 z-30 h-full w-[50.4%] overflow-hidden ${
        side === "left" ? "left-0" : "right-0"
      }`}
      initial={{ x: "0%" }}
      animate={{ x: open ? (side === "left" ? "-103%" : "103%") : "0%" }}
      transition={{ duration: 2.4, ease: EASE, delay: open ? 0.15 : 0 }}
      style={{ boxShadow: "inset 0 0 90px rgba(0,0,0,0.65)" }}
    >
      <div
        className="pointer-events-none absolute inset-3 border border-[#C99A45]/35 sm:inset-5"
        style={{
          borderRadius:
            side === "left" ? "4px 170px 4px 4px" : "170px 4px 4px 4px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-6 border border-[#C99A45]/15 sm:inset-8"
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
          className="absolute h-2.5 w-2.5 rounded-full border border-[#C99A45]/50"
          style={{
            top: `${p}%`,
            [side === "left" ? "right" : "left"]: "12px",
          }}
        />
      ))}
    </motion.div>
  );
}

function FallingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: 0.8 + Math.random() * 1.5,
        dur: 2.5 + Math.random() * 2.2,
        size: 8 + Math.random() * 9,
        rot: Math.random() * 360,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
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
          animate={{ y: "112vh", rotate: p.rot + 260, opacity: 0.45 }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Intro({
  onComplete,
  reduced,
}: {
  onComplete: () => void;
  reduced: boolean;
}) {
  const [phase, setPhase] = useState<
    "boot" | "gate" | "ritual" | "doors" | "exit" | "done"
  >("boot");
  const [progress, setProgress] = useState(0);
  const entered = useRef(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const rafRef = useRef(0);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    if (reduced) {
      onComplete();
      return;
    }

    // Soft boot: black first, then reveal gate (not abrupt)
    timers.current.push(
      setTimeout(() => setPhase("gate"), 420),
    );

    return clearTimers;
  }, [reduced, onComplete, clearTimers]);

  const finish = useCallback(() => {
    setPhase("exit");
    timers.current.push(
      setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 900),
    );
  }, [onComplete]);

  const enter = useCallback(() => {
    if (entered.current) return;
    if (phase !== "gate") return;
    entered.current = true;
    clearTimers();

    setPhase("ritual");
    window.dispatchEvent(new Event("ny:start-music"));

    timers.current.push(setTimeout(() => setPhase("doors"), 2800));
    timers.current.push(setTimeout(finish, 5600));
  }, [phase, clearTimers, finish]);

  // Auto navigate after 4s on gate if user doesn't click
  useEffect(() => {
    if (phase !== "gate" || reduced) return;

    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / AUTO_ENTER_MS);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        enter();
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [phase, reduced, enter]);

  if (phase === "done") return null;

  return (
    <motion.div
      data-testid="intro-overlay"
      className="fixed inset-0 z-[100] overflow-hidden bg-[#060402]"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 0.85, ease: EASE }}
    >
      {/* Ambient glow always present */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(217,164,65,0.1) 0%, transparent 62%)",
        }}
      />

      <AnimatePresence mode="wait">
        {phase === "gate" && (
          <motion.div
            key="gate"
            className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            <motion.div
              className="absolute h-[48vmax] w-[48vmax] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(217,164,65,0.16) 0%, transparent 60%)",
              }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
              className="relative mb-10 flex flex-col items-center"
            >
              <DiyaSvg className="h-[4.5rem] w-[5.5rem] drop-shadow-[0_0_22px_rgba(217,164,65,0.65)]" />
              <p
                className="text-gold mt-5 text-lg tracking-wide sm:text-xl"
                style={{
                  fontFamily:
                    '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
                }}
              >
                નવા વર્ષના રામ રામ
              </p>
              <p className="mt-2 font-display text-sm tracking-[0.28em] text-[#C99A45]/7 uppercase">
                Happy New Year 2027
              </p>
            </motion.div>

            <motion.button
              data-testid="enter-celebration-btn"
              type="button"
              onClick={enter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="gold-glow group relative overflow-hidden rounded-full border border-[#C99A45]/65 px-10 py-4 text-sm tracking-[0.35em] text-[#F5E6C8] uppercase transition-colors duration-500 hover:text-[#100D0A] md:text-base"
            >
              <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-[#C99A45] to-[#D9A441] transition-transform duration-500 group-hover:translate-y-0" />
              <span className="relative flex items-center gap-3">
                Enter Celebration
                <Volume2 className="h-4 w-4 opacity-70" />
              </span>
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex flex-col items-center gap-3"
            >
              <p className="text-[11px] tracking-[0.32em] text-[#C99A45]/55 uppercase">
                Best experienced with sound
              </p>

              {/* 4s auto-enter progress */}
              <div className="mt-1 h-[2px] w-40 overflow-hidden rounded-full bg-[#C99A45]/15">
                <motion.div
                  className="h-full origin-left rounded-full bg-gradient-to-r from-[#C99A45] to-[#D9A441]"
                  style={{ scaleX: progress }}
                />
              </div>
              <p className="text-[10px] tracking-[0.28em] text-[#F5E6C8]/35 uppercase">
                Continues automatically
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {(phase === "ritual" || phase === "doors" || phase === "exit") && (
        <RitualContent visible={phase === "ritual"} />
      )}

      {(phase === "ritual" || phase === "doors" || phase === "exit") && (
        <>
          <DoorPanel side="left" open={phase === "doors" || phase === "exit"} />
          <DoorPanel side="right" open={phase === "doors" || phase === "exit"} />
        </>
      )}

      {(phase === "doors" || phase === "exit") && (
        <>
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 z-20 h-[30vmax] w-[30vmax] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(245,230,200,0.75) 0%, rgba(217,164,65,0.4) 30%, transparent 65%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2.6, 3.4], opacity: [0, 1, 0] }}
            transition={{ duration: 2.1, delay: 0.25, ease: EASE }}
          />
          <FallingPetals />
        </>
      )}
    </motion.div>
  );
}
