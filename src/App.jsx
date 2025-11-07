import { useState, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import ThemeShowcase from "./components/ThemeShowcase";

export default function App() {
  const [theme, setTheme] = useState("fire");
  const isFire = theme === "fire";

  const bgGradient = useMemo(
    () =>
      isFire
        ? "from-gray-900 via-[#1b0b07] to-black"
        : "from-gray-900 via-[#07121b] to-black",
    [isFire]
  );

  return (
    <div className={`min-h-screen bg-gradient-to-b ${bgGradient} text-white`}>
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-6">
        <Header theme={theme} onToggle={() => setTheme(isFire ? "ice" : "fire")} />

        <Hero theme={theme} />

        <FeatureGrid theme={theme} />

        <ThemeShowcase theme={theme} />

        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          Crafted in the realms of {isFire ? "ember and ash" : "snow and starlight"}. Switch themes to feel the world shift.
        </footer>
      </div>
    </div>
  );
}
