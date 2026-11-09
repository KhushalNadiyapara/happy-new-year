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
            className="relative py-5 border-y border-[#C99A45]/20 overflow-hidden bg-[#140f09]"
        >
            <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
                {[0, 1].map((half) => (
                    <div key={half} className="flex items-center">
                        {ITEMS.map((t, i) => (
                            <span key={i} className="flex items-center">
                                <span
                                    className="px-8 text-xl md:text-2xl text-[#C99A45]/90"
                                    style={{
                                        fontFamily: '"Noto Serif Gujarati", serif',
                                    }}
                                >
                                    {t}
                                </span>
                                <DiyaMark className="w-4 h-4 text-[#D9A441]/70" />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
