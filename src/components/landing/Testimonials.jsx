const testimonials = [
  {
    name: "Rafif",
    review: "Dashboard sangat modern dan mudah digunakan.",
  },
  {
    name: "Pedro",
    review: "Booking Playstation jadi lebih cepat.",
  },
  {
    name: "David",
    review: "Analytics sangat membantu bisnis saya.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black">
            Testimonials
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <p className="text-slate-300 leading-relaxed">
                "{item.review}"
              </p>

              <h3 className="font-bold mt-6">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}