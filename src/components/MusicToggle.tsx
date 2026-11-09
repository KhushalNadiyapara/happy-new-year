"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VolumeX } from "lucide-react";
import { startMusic, stopMusic } from "@/lib/music";

export default function MusicToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const h = () => {
      setOn(true);
      startMusic();
    };
    window.addEventListener("ny:start-music", h);
    return () => window.removeEventListener("ny:start-music", h);
  }, []);

  const toggle = () => {
    if (on) {
      stopMusic();
      setOn(false);
    } else {
      startMusic();
      setOn(true);
    }
  };

  return (
    <motion.button
      data-testid="music-toggle"
      onClick={toggle}
      aria-label={on ? "Turn music off" : "Turn music on"}
      title={on ? "Music on" : "Music off"}
      className="gold-glow fixed right-5 bottom-5 z-[80] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#C99A45]/50 bg-[#100D0A]/70 backdrop-blur-md transition-colors duration-300 hover:border-[#D9A441]"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      {on ? (
        <span className="flex h-4 items-end gap-[3px]">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="eq-bar h-4 w-[3px] rounded-full bg-[#D9A441]"
              style={{ animationDelay: `${i * 0.16}s` }}
            />
          ))}
        </span>
      ) : (
        <VolumeX className="h-5 w-5 text-[#C99A45]" />
      )}
    </motion.button>
  );
}
