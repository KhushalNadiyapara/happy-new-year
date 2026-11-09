import { DiyaMark } from "./Ornament";

const ITEMS = [
  "નવા વર્ષના રામ રામ",
  "શુભ લાભ",
  "સમૃદ્ધિ",
  "શાંતિ",
  "અનંત આશીર્વાદ",
  "પ્રેમ અને પરિવાર",
  "Happy New Year ",
];

export default function Marquee() {
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[#C99A45]/20 bg-[#140f09] py-5"
    >
      <div className="animate-marquee flex w-max will-change-transform whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center">
            {ITEMS.map((t, i) => (
              <span key={i} className="flex items-center">
                <span
                  className="px-8 text-xl text-[#C99A45]/90 md:text-2xl"
                  style={{
                    fontFamily:
                      '"Noto Serif Gujarati", var(--font-noto-serif-gujarati), serif',
                  }}
                >
                  {t}
                </span>
                <DiyaMark className="h-4 w-4 text-[#D9A441]/70" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
