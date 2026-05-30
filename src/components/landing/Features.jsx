import {
  FaGamepad,
  FaChartLine,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

const features = [
  {
    title: "Realtime Booking",
    desc: "Booking otomatis dan realtime.",
    icon: <FaGamepad />,
  },
  {
    title: "Analytics",
    desc: "Statistik lengkap dan modern.",
    icon: <FaChartLine />,
  },
  {
    title: "Payment",
    desc: "Kelola pembayaran lebih mudah.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Customers",
    desc: "Data customer tersimpan rapi.",
    icon: <FaUsers />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            Powerful Features
          </h2>

          <p className="text-slate-400 mt-6">
            Semua kebutuhan rental Playstation modern.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}