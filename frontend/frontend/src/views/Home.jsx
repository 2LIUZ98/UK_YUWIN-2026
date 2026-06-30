export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Private Hire Service
        </h1>

        <p className="text-lg md:text-xl mb-8">
          Airport transfers and chauffeur services across the UK
        </p>

        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Get a Quote
        </button>
      </section>


      <section className="max-w-6xl mx-auto py-12 px-6">

        <h2 className="text-3xl font-bold text-center mb-8">
          Our Services
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              Airport Transfer
            </h3>

            <p className="text-gray-600">
              Reliable airport transfers.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              Long Distance
            </h3>

            <p className="text-gray-600">
              Comfortable private journeys.
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">
              Day Tour
            </h3>

            <p className="text-gray-600">
              Flexible private tours.
            </p>
          </div>

        </div>

      </section>


    </div>
  );
}