import { useEffect, useState } from "react";

export default function AirportTransfer() {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRoutes() {
      try {
        const res = await fetch("https://uk-yuwin-2026.onrender.com/routes/airport/all");
        const data = await res.json();
        setRoutes(data);
      } catch (err) {
        console.error("Error loading routes:", err);
      } finally {
        setLoading(false);
      }
    }

    loadRoutes();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <section className="py-16 text-center border-b border-slate-800">
        <h1 className="text-4xl font-bold">Airport Transfers</h1>
        <p className="text-gray-400 mt-2">
          All UK airport routes and pricing
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : routes.length === 0 ? (
          <p className="text-gray-400">No airport routes found.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">

            {routes.map((r) => (
              <div
                key={r.Route_ID}
                className="bg-slate-900 border border-slate-800 p-6 rounded-xl"
              >

                <h2 className="text-xl font-semibold mb-1">
                  {r.Start_Point} → {r.Destination}
                </h2>

                <p className="text-sm text-gray-400 mb-4">
                  Category ID: {r.Category_ID}
                </p>

                <div className="space-y-1 text-sm">

                  <div className="flex justify-between">
                    <span>1 Passenger</span>
                    <span>£{r.Price_1_Passenger}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>2 Passengers</span>
                    <span>£{r.Price_2_Passengers}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>3 Passengers</span>
                    <span>£{r.Price_3_Passengers}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>4 Passengers</span>
                    <span>£{r.Price_4_Passengers}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>5 Passengers</span>
                    <span>£{r.Price_5_Passengers}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>6 Passengers</span>
                    <span>£{r.Price_6_Passengers}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>7 Passengers</span>
                    <span>£{r.Price_7_Passengers}</span>
                  </div>

                  <div className="flex justify-between font-semibold">
                    <span>8 Passengers</span>
                    <span>£{r.Price_8_Passengers}</span>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>
    </div>
  );
}