import products from "../data/products.json";
import customers from "../data/customer.json";

import {
  FaPlaystation,
  FaGamepad,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

export default function Guest() {
  return (
    <div className="bg-[#020617] text-white overflow-hidden">

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center border-b border-white/5"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>

            <span className="bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
              #1 Playstation Rental Platform
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mt-6">
              Main PS Lebih
              <span className="text-cyan-400">
                {" "}Seru{" "}
              </span>
              Bersama IZIREPS
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mt-6 max-w-2xl">
              Tempat rental PlayStation modern dengan room nyaman,
              console terbaru, snack lengkap, dan booking online cepat.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-cyan-500 hover:bg-cyan-600 transition px-7 py-4 rounded-2xl font-semibold">
                Booking Sekarang
              </button>

              <button className="border border-white/10 hover:bg-white/5 transition px-7 py-4 rounded-2xl font-semibold">
                Explore Room
              </button>

            </div>

            {/* STATS */}
            <div className="flex gap-8 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  500+
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Active Customer
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  24/7
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Open Everyday
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  4.9
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Rating
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1400&auto=format&fit=crop"
              alt="gaming"
              className="rounded-[30px] w-full h-[650px] object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-[#0f172a] border border-white/10 p-5 rounded-3xl backdrop-blur-xl">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl">
                  <FaPlaystation />
                </div>

                <div>
                  <h3 className="font-bold">
                    PS5 VIP Room
                  </h3>

                  <p className="text-slate-400 text-sm">
                    Starting Rp 25K/hour
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 border-b border-white/5"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black">
              Kenapa Pilih
              <span className="text-cyan-400">
                {" "}IZIREPS
              </span>
            </h2>

            <p className="text-slate-400 mt-5 text-lg">
              Tempat rental PlayStation modern dengan fasilitas premium.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              {
                icon: <FaGamepad />,
                title: "Console Terbaru",
                desc: "Menggunakan PS4 & PS5 terbaru."
              },
              {
                icon: <FaHeadset />,
                title: "Gaming Nyaman",
                desc: "Ruangan dingin dan headset premium."
              },
              {
                icon: <FaStar />,
                title: "Rating Tinggi",
                desc: "Dipercaya ratusan gamer aktif."
              },
              {
                icon: <FaPlaystation />,
                title: "VIP Room",
                desc: "Private room eksklusif gaming."
              },
            ].map((item, i) => (

              <div
                key={i}
                className="bg-[#0f172a] border border-white/5 p-7 rounded-3xl hover:border-cyan-500/30 transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="produk"
        className="py-24"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">

          <div className="flex items-end justify-between mb-14">

            <div>
              <h2 className="text-5xl font-black">
                Room
                <span className="text-cyan-400">
                  {" "}Gaming
                </span>
              </h2>

              <p className="text-slate-400 mt-4">
                Pilihan room gaming terbaik untuk kamu.
              </p>
            </div>

          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-[#0f172a] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-cyan-400 font-semibold mt-3">
                    {product.price}
                  </p>

                  <button className="mt-5 w-full bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-2xl font-semibold">
                    Booking Now
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* TESTIMONI */}
      <section
        id="testimoni"
        className="py-24 border-t border-white/5"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-black">
              Apa Kata
              <span className="text-cyan-400">
                {" "}Mereka
              </span>
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {customers.map((item) => (

              <div
                key={item.id}
                className="bg-[#0f172a] border border-white/5 rounded-3xl p-7"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p className="text-cyan-400 text-sm">
                      Gamer
                    </p>
                  </div>

                </div>

                <p className="text-slate-400 leading-relaxed mt-6">
                  “{item.review}”
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">

        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row justify-between gap-10">

          <div>
            <h2 className="text-3xl font-black text-cyan-400">
              IZIREPS
            </h2>

            <p className="text-slate-400 mt-4 max-w-md">
              Tempat rental PlayStation modern terbaik untuk gamer.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Contact
            </h3>

            <div className="space-y-2 text-slate-400">
              <p>+62 812 3456 7890</p>
              <p>izireps@gmail.com</p>
              <p>Pekanbaru, Indonesia</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Social Media
            </h3>

            <div className="space-y-2 text-slate-400">
              <p>Instagram</p>
              <p>TikTok</p>
              <p>YouTube</p>
            </div>
          </div>

        </div>

      </footer>

    </div>
  );
}