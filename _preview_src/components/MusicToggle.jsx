import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
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
            className="fixed bottom-5 right-5 z-[80] w-12 h-12 rounded-full border border-[#C99A45]/50 bg-[#100D0A]/70 backdrop-blur-md flex items-center justify-center hover:border-[#D9A441] transition-colors duration-300 gold-glow cursor-pointer"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
        >
            {on ? (
                <span className="flex items-end gap-[3px] h-4">
                    {[0, 1, 2, 3].map((i) => (
                        <span
                            key={i}
                            className="eq-bar w-[3px] h-4 rounded-full bg-[#D9A441]"
                            style={{ animationDelay: `${i * 0.16}s` }}
                        />
                    ))}
                </span>
            ) : (
                <VolumeX className="w-4.5 h-4.5 w-5 h-5 text-[#C99A45]" />
            )}
        </motion.button>
    );
}
