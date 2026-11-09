import { useEffect, useState } from "react";
import "@/App.css";
import Lenis from "lenis";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import Blessings from "@/components/Blessings";
import Marquee from "@/components/Marquee";
import NewBeginning from "@/components/NewBeginning";
import Wishes from "@/components/Wishes";
import Heartfelt from "@/components/Heartfelt";
import Finale from "@/components/Finale";
import MusicToggle from "@/components/MusicToggle";
import ErrorBoundary from "@/components/ErrorBoundary";

function App() {
    const [introDone, setIntroDone] = useState(false);
    const [reduced] = useState(
        () =>
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    useEffect(() => {
        if (reduced) {
            setIntroDone(true);
            return;
        }
        const lenis = new Lenis({ duration: 1.25, smoothWheel: true });
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
        };
    }, [reduced]);

    useEffect(() => {
        document.body.style.overflow = introDone ? "" : "hidden";
    }, [introDone]);

    return (
        <ErrorBoundary>
            <div className="App relative bg-ink text-ivory font-display">
                {!introDone && (
                    <Intro onComplete={() => setIntroDone(true)} reduced={reduced} />
                )}
                <main>
                    <Hero active={introDone} />
                    <Blessings />
                    <Marquee />
                    <NewBeginning />
                    <Wishes />
                    <Heartfelt />
                    <Finale />
                </main>
                <MusicToggle />
            </div>
        </ErrorBoundary>
    );
}

export default App;
