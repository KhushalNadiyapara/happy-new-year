import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Divider } from "./Ornament";

export function MaskedLine({ children, delay = 0, className = "", active = true }) {
    return (
        <span className={`block overflow-hidden ${className}`}>
            <motion.span
                className="block will-change-transform"
                initial={{ y: "115%" }}
                animate={active ? { y: "0%" } : { y: "115%" }}
                transition={{ duration: 1.1, ease: EASE, delay }}
            >
                {children}
            </motion.span>
        </span>
    );
}

export function FadeUp({ children, delay = 0, className = "", y = 28 }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: EASE, delay }}
        >
            {children}
        </motion.div>
    );
}

export function SectionHead({ eyebrow, title }) {
    return (
        <div className="text-center">
            <FadeUp>
                <p className="text-[11px] md:text-xs tracking-[0.45em] uppercase text-[#C99A45]/85 font-semibold mb-5">
                    {eyebrow}
                </p>
            </FadeUp>
            <MaskedLine>
                <h2
                    className="text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] font-semibold"
                    style={{ fontFamily: '"Noto Serif Gujarati", serif' }}
                >
                    {title}
                </h2>
            </MaskedLine>
            <Divider className="mt-8" />
        </div>
    );
}
