import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu as MenuIcon,
  User,
  LogOut,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";

import { Dropdown, Menu, Avatar, Drawer, Button } from "antd";

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
        console.error(err);
      }
    }

    loadCategories();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  // ================= USER MENU =================
  const userMenu = (
    <Menu style={{ width: 240 }}>
      <Menu.Item disabled>
        <div className="flex items-center gap-3">
          <Avatar src={profilePic}>{userName?.[0]}</Avatar>

          <div>
            <div className="font-semibold">{userName}</div>
            <div className="text-xs text-gray-400">{userEmail}</div>
          </div>
        </div>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item icon={<LayoutDashboard size={16} />}>
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>

      <Menu.Item icon={<User size={16} />}>
        <Link to={`/profile/${userId}`}>Profile</Link>
      </Menu.Item>

      <Menu.Divider />

      <Menu.Item icon={<LogOut size={16} />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  // ================= ROUTES MENU =================
  const routesMenu = (
    <Menu>
      {categories.map((category) => (
        <Menu.Item key={category.Category_ID}>
          <Link
            to={
              category.Category_ID === 1
                ? "/airport-transfer"
                : `/routes/${category.Category_ID}`
            }
          >
            {category.Category_Name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      {/* ================= DESKTOP ================= */}

      <nav className="hidden md:flex bg-slate-900 text-white px-10 py-4 items-center justify-between border-b border-slate-800 sticky top-0 z-50">

        <div className="flex items-center gap-8">

          <Link to="/" className="text-xl font-bold">
            UKYUWIN
          </Link>

          <Link
            to="/"
            className="hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Dropdown
            overlay={routesMenu}
            trigger={["hover", "click"]}
            placement="bottomLeft"
          >
            <button className="flex items-center gap-1 hover:text-blue-400 transition">

              Routes

              <ChevronDown size={16} />

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
            {colorTheme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {userId ? (
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <Avatar
                src={profilePic}
                style={{ cursor: "pointer" }}
              >
                {userName?.[0]}
              </Avatar>
            </Dropdown>
          ) : (
            <Link to="/auth">
              <Button
                style={{
                  borderColor: "#2563eb",
                  color: "#2563eb",
                  borderRadius: 20,
                }}
              >
                Login
              </Button>
            </Link>
          )}

        </div>

      </nav>

      {/* ================= MOBILE ================= */}

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

      {/* ================= MAIN MOBILE DRAWER ================= */}

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
      >
        <div className="flex flex-col gap-5">

          <Link
            to="/"
            onClick={() => setOpen(false)}
          >
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

          <Link
            to="/book"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>

          <hr />

          <Link
            to="/dashboard"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>

          <Link
            to={`/profile/${userId}`}
            onClick={() => setOpen(false)}
          >
            Profile
          </Link>

          <button
            onClick={handleLogout}
            className="text-left text-red-500"
          >
            Logout
          </button>

        </div>
      </Drawer>

      {/* ================= ROUTES DRAWER ================= */}

      <Drawer
        title="Routes"
        placement="right"
        open={routesDrawer}
        onClose={() => setRoutesDrawer(false)}
      >

        <div className="flex flex-col gap-4">

          {categories.map((category) => (

            <Link
              key={category.Category_ID}
              to={
                category.Category_ID === 1
                  ? "/airport-transfer"
                  : `/routes/${category.Category_ID}`
              }
              onClick={() => setRoutesDrawer(false)}
              className="border rounded-lg p-3 hover:bg-slate-100"
            >
              {category.Category_Name}
            </Link>

          ))}

        </div>

      </Drawer>

    </>
  );
}