import Footer from "../components/footer";
import Header from "../components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER (MISSING BEFORE) */}
      <Header />

      {/* HERO SECTION */}
      <section className="bg-slate-900 py-24 px-6 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Private Hire Service Across the UK
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Airport transfers, long-distance travel, and professional chauffeur services with comfort, safety, and reliability.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg font-semibold">
          Get a Quote
        </button>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-600 transition">
            <h3 className="text-xl font-semibold mb-2">Airport Transfer</h3>
            <p className="text-gray-400">
              Reliable airport pickup and drop-off services across all major UK airports.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-600 transition">
            <h3 className="text-xl font-semibold mb-2">Long Distance Travel</h3>
            <p className="text-gray-400">
              Comfortable private journeys between cities with professional drivers.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-600 transition">
            <h3 className="text-xl font-semibold mb-2">Day Tours</h3>
            <p className="text-gray-400">
              Flexible custom tours tailored to your schedule and destinations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}