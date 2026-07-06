import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              UKYUWIN
            </h2>

            <p className="text-gray-300">
              Professional private hire, airport transfers and long-distance
              chauffeur services across the UK.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>

              {/* ✅ ADDED HERE */}
              <li>
                <Link to="/airport-transfer" className="hover:text-blue-400">
                  Airport Transfers
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Our Services
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li>Airport Transfers</li>
              <li>Long Distance Travel</li>
              <li>Day Tours</li>
              <li>Private Hire</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-300 mt-2">
              WeChat: UKYUWIN
            </p>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <p>
            © 2026 UKYUWIN. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>

            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}