import Header from "../components/header";
import Footer from "../components/footer";

export default function Day() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Header />

      {/* HERO */}
      <section className="py-16 text-center border-b border-slate-800">
        <h1 className="text-4xl font-bold">Day Tours</h1>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Day tour private hire: 5-seater from £300, 8–9 seater from £350.
          All trips are based on a 10-hour hire package.
          Final pricing depends on the route. Feel free to contact us for details.
        </p>
      </section>

      {/* DESTINATIONS */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold mb-6">Popular Day Trips</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Bath",
            "Windsor Castle",
            "Birling Gap",
            "Stonehenge",
            "Oxford",
            "Bicester Village"
          ].map((place) => (
            <div
              key={place}
              className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-600 transition"
            >
              <h3 className="text-xl font-semibold">{place}</h3>
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}