import { Flame, Snowflake, Sparkles } from "lucide-react";

export default function Header({ theme, onToggle }) {
  const isFire = theme === "fire";
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div
            className={`grid h-10 w-10 place-items-center rounded-xl shadow-lg ring-1 ring-white/10 ${
              isFire
                ? "bg-gradient-to-br from-orange-500 to-red-600"
                : "bg-gradient-to-br from-cyan-500 to-blue-700"
            }`}
          >
            {isFire ? (
              <Flame className="h-6 w-6 text-white" />
            ) : (
              <Snowflake className="h-6 w-6 text-white" />
            )}
          </div>
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-widest text-white/70">Dragon Realms</p>
            <h1 className="text-lg font-semibold text-white">Fire & Ice</h1>
          </div>
        </div>

        <button
          onClick={onToggle}
          className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg transition ${
            isFire
              ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500"
              : "bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-600"
          }`}
          aria-label="Toggle theme"
        >
          <Sparkles className="h-4 w-4" />
          Switch to {isFire ? "Ice" : "Fire"}
        </button>
      </div>
    </header>
  );
}
