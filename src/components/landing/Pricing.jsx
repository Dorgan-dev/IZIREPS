export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-[#0f172a]">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            Pricing Plan
          </h2>

          <p className="text-slate-400 mt-6">
            Pilih paket terbaik.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {["Basic", "Pro", "Enterprise"].map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-10 border ${
                index === 1
                  ? "bg-blue-500 border-blue-500"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <h3 className="text-3xl font-bold">
                {plan}
              </h3>

              <h2 className="text-5xl font-black mt-8">
                Rp {index === 0 ? "99K" : index === 1 ? "199K" : "499K"}
              </h2>

              <button className="w-full mt-10 bg-white text-black py-4 rounded-2xl font-bold">
                Get Started
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}