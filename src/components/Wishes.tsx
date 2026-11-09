"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Heart, Smile, Users, Trophy, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHead, FadeUp } from "./Reveal";

const WISHES: {
  icon: LucideIcon;
  title: string;
  sub: string;
  text: string;
}[] = [
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

function TiltCard({
  wish,
  index,
}: {
  wish: (typeof WISHES)[number];
  index: number;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
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
      className="group gold-hairline relative h-full rounded-[4px] bg-[#181008]/80 p-5 backdrop-blur-sm transition-shadow duration-500 hover:gold-glow sm:p-8 md:p-10"
    >
      {CORNERS.map((c, i) => (
        <span
          key={i}
          className={`absolute h-3 w-3 border-[#C99A45]/60 transition-colors duration-500 group-hover:border-[#D9A441] sm:h-3.5 sm:w-3.5 ${c}`}
        />
      ))}
      <div className="flex flex-col items-center gap-3.5 text-center sm:gap-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C99A45]/50 text-[#D9A441] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D9A441] sm:h-14 sm:w-14">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </span>
        <div>
          <h3
            className="text-gold text-xl font-semibold sm:text-2xl md:text-[1.7rem]"
            style={{
              fontFamily:
                '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
            }}
          >
            {wish.title}
          </h3>
          <p className="mt-1 text-[10px] tracking-[0.35em] text-[#F5E6C8]/50 uppercase sm:mt-1.5 sm:text-[11px]">
            {wish.sub}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-[#F5E6C8]/75 italic sm:text-base md:text-[1.05rem]">
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
      className="relative overflow-hidden py-12 sm:py-16 md:py-24"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 30%, rgba(217,164,65,0.08), transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Wishes For Everyone"
          title="આ નવા વર્ષે દરેકને મળે..."
        />
        <div className="mt-6 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {WISHES.map((w, i) => (
            <FadeUp
              key={i}
              delay={(i % 3) * 0.12}
              className={`h-full ${i === 4 ? "lg:col-start-2" : ""}`}
            >
              <TiltCard wish={w} index={i} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
