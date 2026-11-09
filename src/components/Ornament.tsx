export function DiyaMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.5 14h17c0 3.8-3.8 6.2-8.5 6.2S3.5 17.8 3.5 14Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M12 3.2c2.3 2.8 2.3 5.3 0 7.2-2.3-1.9-2.3-4.4 0-7.2Z"
        fill="currentColor"
      />
      <circle cx="12" cy="8" r="1" fill="#F5E6C8" />
    </svg>
  );
}

export function DiyaSvg({ className = "w-16 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="dyFlame" cx="50%" cy="78%" r="65%">
          <stop offset="0%" stopColor="#FFFBE8" />
          <stop offset="38%" stopColor="#FFD97A" />
          <stop offset="100%" stopColor="#E8891C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dyBowl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EDCB84" />
          <stop offset="45%" stopColor="#C99A45" />
          <stop offset="100%" stopColor="#6d4e1e" />
        </linearGradient>
      </defs>
      <g
        className="flame-anim"
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      >
        <path
          d="M32 2 C39.5 11 40.5 18 32 25 C23.5 18 24.5 11 32 2 Z"
          fill="url(#dyFlame)"
        />
        <path
          d="M32 9.5 C35 13.5 35.4 16.5 32 19.5 C28.6 16.5 29 13.5 32 9.5 Z"
          fill="#FFFBE8"
          opacity="0.95"
        />
      </g>
      <rect x="30.4" y="23" width="3.2" height="4.5" rx="1.4" fill="#3a2210" />
      <path d="M9 30 C11 41 20 46 32 46 C44 46 53 41 55 30 Z" fill="url(#dyBowl)" />
      <path
        d="M9 30 C22 33.5 42 33.5 55 30 C53 27 44 25.5 32 25.5 C20 25.5 11 27 9 30 Z"
        fill="#A87B2F"
      />
      <path
        d="M11.5 31.5 C20 34 44 34 52.5 31.5"
        stroke="#F5E6C8"
        strokeWidth="1"
        opacity="0.4"
      />
      <ellipse cx="32" cy="48" rx="18" ry="2.5" fill="#D9A441" opacity="0.18" />
    </svg>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C99A45]/70 sm:w-14 md:w-24" />
      <DiyaMark className="h-4 w-4 text-[#D9A441] sm:h-5 sm:w-5" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C99A45]/70 sm:w-14 md:w-24" />
    </div>
  );
}
