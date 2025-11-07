import Spline from "@splinetool/react-spline";

export default function Hero({ theme }) {
  const isFire = theme === "fire";

  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0">
        <Spline
          scene={
            isFire
              ? "https://prod.spline.design/nvA3l2Qqg4itB5yq/scene.splinecode"
              : "https://prod.spline.design/SQq2p3E0s9b3z0bQ/scene.splinecode"
          }
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full items-end p-8 sm:p-12">
        <div className="max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/80">
            {isFire ? "Blazing Dominion" : "Frozen Expanse"}
          </p>
          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl">
            {isFire ? "Awaken the Flame Dragon" : "Summon the Ice Wyrm"}
          </h2>
          <p className="mt-4 max-w-xl text-white/80">
            {isFire
              ? "Harness molten power and soar through ember-lit skies."
              : "Command glacial winds and rule the crystalline tundra."}
          </p>
        </div>
      </div>
    </section>
  );
}
