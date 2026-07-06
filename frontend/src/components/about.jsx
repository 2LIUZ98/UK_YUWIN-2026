import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="bg-slate-900 py-20 px-6 text-center border-b border-slate-800">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About UKYUWIN
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Reliable private hire, airport transfers, and long-distance travel services across the United Kingdom.
        </p>

      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>

            <h2 className="text-2xl font-bold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              UKYUWIN provides professional private hire services across the UK, specializing in airport transfers,
              long-distance journeys, and tailored travel solutions. Our goal is to deliver safe, comfortable,
              and reliable transport for every journey.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether you're travelling for business or leisure, we ensure a smooth experience from pickup to drop-off
              with experienced drivers and well-maintained vehicles.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">

            <h3 className="text-xl font-semibold mb-4">
              Why Choose Us
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>✔ 24/7 Airport Transfers</li>
              <li>✔ Fixed Transparent Pricing</li>
              <li>✔ Professional Drivers</li>
              <li>✔ Clean & Comfortable Vehicles</li>
              <li>✔ UK-Wide Coverage</li>

            </ul>

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="bg-slate-900 border-t border-slate-800 py-16">

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-3xl font-bold text-blue-400">100%</h3>
            <p className="text-gray-400 mt-2">Reliable Service</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
            <p className="text-gray-400 mt-2">Availability</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">UK</h3>
            <p className="text-gray-400 mt-2">Wide Coverage</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">5★</h3>
            <p className="text-gray-400 mt-2">Customer Focus</p>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}