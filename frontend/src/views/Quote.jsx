import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function GetQuote() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    Route_ID: null,

    Origin: "",
    Destination: "",

    Travel_Date: "",
    Travel_Time: "",

    Passenger_Count: 1,

    Checked_Luggage: 0,
    Hand_Luggage: 0,

    Preferred_Vehicle: "",

    Contact_Name: "",
    Contact_Phone: "",
    Contact_Email: "",
    Contact_Wechat: "",

    Remark: "",

    Status: "Pending",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        [
          "Passenger_Count",
          "Checked_Luggage",
          "Hand_Luggage",
        ].includes(name)
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://uk-yuwin-2026.onrender.com/inquiries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      alert("Quote request submitted successfully!");

      setForm({
        Route_ID: null,

        Origin: "",
        Destination: "",

        Travel_Date: "",
        Travel_Time: "",

        Passenger_Count: 1,

        Checked_Luggage: 0,
        Hand_Luggage: 0,

        Preferred_Vehicle: "",

        Contact_Name: "",
        Contact_Phone: "",
        Contact_Email: "",
        Contact_Wechat: "",

        Remark: "",

        Status: "Pending",
      });
    } catch (err) {
      console.error(err);
      alert("Unable to submit your enquiry.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Header />

      {/* Hero */}

      <section className="bg-slate-900 border-b border-slate-800 py-16 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Get a Quote
        </h1>

        <p className="text-gray-400 mt-4">
          Complete the form below and we'll contact you shortly.
        </p>

      </section>

      {/* Form */}

      <section className="max-w-5xl mx-auto px-6 py-16">

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-xl p-8 space-y-8"
        >

          <h2 className="text-2xl font-semibold">
            Journey Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2">Start Point</label>

              <input
                type="text"
                name="Origin"
                value={form.Origin}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Destination</label>

              <input
                type="text"
                name="Destination"
                value={form.Destination}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Travel Date</label>

              <input
                type="date"
                name="Travel_Date"
                value={form.Travel_Date}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Travel Time</label>

              <input
                type="time"
                name="Travel_Time"
                value={form.Travel_Time}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

          </div>

          <h2 className="text-2xl font-semibold">
            Passengers & Luggage
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <label className="block mb-2">Passengers</label>

              <input
                type="number"
                min="1"
                max="9"
                name="Passenger_Count"
                value={form.Passenger_Count}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Checked Luggage</label>

              <input
                type="number"
                min="0"
                name="Checked_Luggage"
                value={form.Checked_Luggage}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Hand Luggage</label>

              <input
                type="number"
                min="0"
                name="Hand_Luggage"
                value={form.Hand_Luggage}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

          </div>

          <div>

            <label className="block mb-2">
              Preferred Vehicle
            </label>

            <select
              name="Preferred_Vehicle"
              value={form.Preferred_Vehicle}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
            >
              <option value="">No Preference</option>
              <option value="5 Seater">5 Seater</option>
              <option value="8 Seater">8 Seater</option>
              <option value="9 Seater">9 Seater</option>
            </select>

          </div>

          <h2 className="text-2xl font-semibold">
            Contact Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2">Full Name</label>

              <input
                type="text"
                name="Contact_Name"
                value={form.Contact_Name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Phone Number</label>

              <input
                type="text"
                name="Contact_Phone"
                value={form.Contact_Phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">Email</label>

              <input
                type="email"
                name="Contact_Email"
                value={form.Contact_Email}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2">WeChat ID</label>

              <input
                type="text"
                name="Contact_Wechat"
                value={form.Contact_Wechat}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

          </div>

          <div>

            <label className="block mb-2">
              Additional Remarks
            </label>

            <textarea
              rows={5}
              name="Remark"
              value={form.Remark}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 py-4 font-semibold transition"
          >
            {loading ? "Submitting..." : "Submit Quote Request"}
          </button>

        </form>

      </section>

      <Footer />

    </div>
  );
}