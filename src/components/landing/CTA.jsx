import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 bg-[#0f172a]">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-[40px] p-14 text-center">

          <h2 className="text-5xl font-black leading-tight">
            Ready To Grow
            <br />
            Your Business?
          </h2>

          <p className="text-blue-100 text-lg mt-8">
            Gunakan dashboard IZIREPS sekarang juga.
          </p>

          <Link
            to="/register"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-2xl font-bold"
          >
            Get Started
          </Link>

        </div>
      </div>
    </section>
  );
}