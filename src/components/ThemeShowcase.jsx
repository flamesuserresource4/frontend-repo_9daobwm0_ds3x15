import { motion } from "framer-motion";

export default function ThemeShowcase({ theme }) {
  const isFire = theme === "fire";
  const gradients = isFire
    ? "from-orange-500/50 via-red-500/40 to-amber-500/30"
    : "from-cyan-500/50 via-blue-600/40 to-sky-400/30";

  return (
    <section className="relative mt-12 overflow-hidden rounded-3xl p-8 ring-1 ring-white/10">
      <div className={`pointer-events-none absolute -inset-20 bg-gradient-to-br ${gradients} blur-3xl`} />

      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-white">
            {isFire ? "The Flame Path" : "The Frost Oath"}
          </h3>
          <p className="mt-3 max-w-prose text-white/80">
            {isFire
              ? "Channel volcanic energy and illuminate the night with roaring embers. Your dragon thrives in the heat of battle and the glow of lava flows."
              : "Master the stillness of winter. Your wyrm weaves snow and silence, shaping glaciers and reflecting moonlight on pristine ice."}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              className={`rounded-full px-5 py-2 text-sm font-medium text-white shadow-lg transition ${
                isFire
                  ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500"
                  : "bg-gradient-to-r from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-600"
              }`}
            >
              Begin Your Quest
            </button>
            <button className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.05 }}
                className={`aspect-square rounded-xl ring-1 ring-white/10 ${
                  isFire ? "bg-orange-500/20" : "bg-cyan-500/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
