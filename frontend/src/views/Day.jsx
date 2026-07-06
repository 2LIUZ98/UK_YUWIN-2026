import Header from "../components/header";
import Footer from "../components/footer";

export default function DayTours() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <Header />

      {/* HERO */}
      <section className="bg-slate-900 py-20 px-6 text-center border-b border-slate-800">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Day Tours
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore UK destinations with private chauffeur day trips
        </p>

      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Chinese description */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-10">

          <p className="text-gray-300 leading-relaxed text-lg">
            “Private day tour car hire: starting from £300 for a 5-seater vehicle, and £350 for an 8–9 seater vehicle. All packages include a 10-hour private hire service. Final prices depend on the route. Please feel free to enquire for details.
          </p>

        </div>

        {/* Destinations */}
        <h2 className="text-2xl font-bold mb-6">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Bath",
            "Windsor Castle",
            "Birling Gap",
            "Stonehenge",
            "Oxford",
            "Bicester Village",
          ].map((place) => (
            <div
              key={place}
              className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-blue-500 transition"
            >
              <h3 className="text-lg font-semibold">{place}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Private day trip available with professional driver
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}