import { Shield, Zap, Snowflake, Flame } from "lucide-react";

const features = [
  {
    id: "breath",
    icon: Flame,
    title: "Dragonfire Breath",
    body:
      "Unleash torrents of blazing inferno with precision. Perfect for forging and foes alike.",
    theme: "fire",
  },
  {
    id: "frost",
    icon: Snowflake,
    title: "Permafrost Aura",
    body:
      "Envelop realms in a serene chill, slowing time and crystallizing the battlefield.",
    theme: "ice",
  },
  {
    id: "ward",
    icon: Shield,
    title: "Ancient Ward",
    body:
      "Eons-old scales form an impenetrable barrier against both heat and cold.",
    theme: "all",
  },
  {
    id: "surge",
    icon: Zap,
    title: "Skyward Surge",
    body:
      "Ride thermal currents or glacial drafts to strike from the heavens.",
    theme: "all",
  },
];

export default function FeatureGrid({ theme }) {
  const isFire = theme === "fire";
  return (
    <section className="mt-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features
          .filter((f) => f.theme === "all" || f.theme === theme)
          .map(({ id, icon: Icon, title, body, theme: t }) => (
            <div
              key={id}
              className={`relative overflow-hidden rounded-2xl p-5 shadow-lg ring-1 ring-white/10 transition-transform hover:-translate-y-1 ${
                isFire
                  ? "bg-gradient-to-br from-orange-500/20 to-red-600/20"
                  : "bg-gradient-to-br from-cyan-500/20 to-blue-700/20"
              }`}
            >
              <div
                className={`mb-4 inline-flex rounded-xl p-2 ring-1 ring-white/10 ${
                  t === "fire"
                    ? "bg-orange-500/30"
                    : t === "ice"
                    ? "bg-cyan-500/30"
                    : isFire
                    ? "bg-orange-500/20"
                    : "bg-cyan-500/20"
                }`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{body}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
