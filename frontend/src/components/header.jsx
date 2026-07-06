import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu as MenuIcon,
  ChevronDown,
} from "lucide-react";

import { Dropdown, Avatar, Drawer, Button } from "antd";

export default function Header({
  userId,
  colorTheme,
  setTheme,
  userName = "User",
  profilePic,
}) {
  const [open, setOpen] = useState(false);
  const [routesDrawer, setRoutesDrawer] = useState(false);
  const [categories, setCategories] = useState([]);

  const userEmail = userId ? `${userId.slice(0, 10)}...` : "";

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch(
          "https://uk-yuwin-2026.onrender.com/categories"
        );

        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Category fetch error:", err);
      }
    }

    loadCategories();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const routesItems = categories.map((category) => ({
    key: category.Category_ID,
    label: (
      <Link
        to={
          category.Category_ID === 1
            ? "/airport-transfer"
            : `/routes/${category.Category_ID}`
        }
      >
        {category.Category_Name}
      </Link>
    ),
  }));

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <nav className="hidden md:flex bg-slate-900 text-white px-10 py-4 items-center justify-between border-b border-slate-800 sticky top-0 z-50">

        <div className="flex items-center gap-8">

          <Link to="/" className="text-xl font-bold">
            UKYUWIN
          </Link>

          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>

          {/* ROUTES */}
          <Dropdown menu={{ items: routesItems }} trigger={["hover"]}>
            <button className="flex items-center gap-1 hover:text-blue-400 transition">
              Routes <ChevronDown size={16} />
            </button>
          </Dropdown>

          <Link
            to="/book"
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full"
          >
            Book Now
          </Link>

        </div>

        <div className="flex items-center gap-4">

          <button
            onClick={() => setTheme(colorTheme)}
            className="p-2 rounded-full hover:bg-slate-800"
          >
            {colorTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Avatar
            onClick={() => setOpen(true)}
            src={profilePic}
            style={{ cursor: "pointer", background: "#1e293b" }}
          >
            {userName?.[0]}
          </Avatar>

        </div>
      </nav>

      {/* ================= MOBILE HEADER ================= */}
      <header className="md:hidden bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800 sticky top-0 z-50">

        <Link to="/" className="font-bold text-lg">
          UKYUWIN
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="p-2 rounded-full hover:bg-slate-800"
        >
          <MenuIcon size={22} />
        </button>

      </header>

      {/* ================= MAIN DRAWER ================= */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        styles={{
          body: {
            backgroundColor: "#0f172a",
            color: "white",
          },
        }}
      >
        <div className="flex flex-col gap-5 text-white">

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <button
            className="text-left"
            onClick={() => {
              setOpen(false);
              setRoutesDrawer(true);
            }}
          >
            Routes
          </button>

          <Link to="/book" onClick={() => setOpen(false)}>
            Book Now
          </Link>

          <hr className="border-slate-700" />

          <button onClick={handleLogout} className="text-left text-red-400">
            Logout
          </button>

        </div>
      </Drawer>

      {/* ================= ROUTES DRAWER (FIXED STYLE) ================= */}
      <Drawer
        title={<span className="text-white font-bold">Routes</span>}
        placement="right"
        open={routesDrawer}
        onClose={() => setRoutesDrawer(false)}
        styles={{
          header: {
            backgroundColor: "#0f172a",
            borderBottom: "1px solid #1e293b",
          },
          body: {
            backgroundColor: "#0f172a",
            color: "white",
          },
        }}
      >
        <div className="flex flex-col gap-3">

          {categories.map((category) => (
            <Link
              key={category.Category_ID}
              to={
                category.Category_ID === 1
                  ? "/airport-transfer"
                  : `/routes/${category.Category_ID}`
              }
              onClick={() => setRoutesDrawer(false)}
              className="
                p-4 rounded-lg 
                bg-slate-900 
                border border-slate-800 
                hover:border-blue-500 
                hover:bg-slate-800 
                transition
              "
            >
              {category.Category_Name}
            </Link>
          ))}

        </div>
      </Drawer>
    </>
  );
}