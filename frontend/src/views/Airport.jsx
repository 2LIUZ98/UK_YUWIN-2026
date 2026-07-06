import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function AirportTransfer() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/airports");
      const data = await res.json();
      setRoutes(data);
    } catch (err) {
      console.error("Failed to load airport routes:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Header />

      {/* HERO */}
      <section className="bg-slate-900 py-16 px-6 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Airport Transfers
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          View all available airport routes and pricing based on passenger count.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        {loading ? (
          <p className="text-center text-gray-400">Loading routes...</p>
        ) : routes.length === 0 ? (
          <p className="text-center text-gray-400">
            No airport routes available.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">

            {routes.map((route) => (
              <div
                key={route.id}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-600 transition"
              >

                <h2 className="text-xl font-semibold mb-2">
                  {route.airport} → {route.destination}
                </h2>

                <p className="text-gray-400 mb-4">
                  Professional airport transfer service
                </p>

                {/* PRICES */}
                <div className="space-y-2 text-sm">

                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>1–4 Passengers</span>
                    <span className="text-blue-400 font-semibold">
                      £{route.price_1_4}
                    </span>
                  </div>

                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span>5–8 Passengers</span>
                    <span className="text-blue-400 font-semibold">
                      £{route.price_5_8}
                    </span>
                  </div>

                </div>

                <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold">
                  Book This Route
                </button>

              </div>
            ))}

          </div>
        )}

      </section>

      <Footer />
    </div>
  );
}