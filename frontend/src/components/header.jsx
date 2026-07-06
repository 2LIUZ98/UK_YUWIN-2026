import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu as MenuIcon,
  User,
  LogOut,
  LayoutDashboard,
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

  const userEmail = userId ? `${userId.slice(0, 10)}...` : "";

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  const menu = (
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

  return (
    <>
      {/* DESKTOP HEADER */}
      <nav className="hidden md:flex bg-slate-900 text-white px-10 py-4 items-center justify-between border-b border-slate-800 sticky top-0 z-50">

        {/* LEFT NAV */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold">
            UKYUWIN
          </Link>

          <Link className="hover:text-blue-400" to="/">
            Home
          </Link>

          <Link className="hover:text-blue-400" to="/routes">
            Routes
          </Link>

          <Link
            to="/book"
            className="bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(colorTheme)}
            className="p-2 rounded-full hover:bg-slate-800"
          >
            {colorTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {userId ? (
            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar style={{ cursor: "pointer" }} src={profilePic}>
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

            {/* MOBILE HEADER */}
      <header className="md:hidden bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800 sticky top-0 z-50">

        <Link to="/" className="font-bold text-lg">
          UKYUWIN
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(colorTheme)}
            className="p-2 rounded-full hover:bg-slate-800"
          >
            {colorTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {userId ? (
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded-full hover:bg-slate-800"
            >
              <MenuIcon size={20} />
            </button>
          ) : (
            <Link to="/auth">
              <Button size="small" style={{ borderColor: "#2563eb", color: "#2563eb" }}>
                Login
              </Button>
            </Link>
          )}
        </div>
      </header>

            <Drawer open={open} onClose={() => setOpen(false)} placement="right">
        <div className="bg-slate-900 text-white p-6 h-full">

          <div className="flex flex-col gap-4 text-lg">
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>

            <Link onClick={() => setOpen(false)} to="/routes">
              Routes
            </Link>

            <Link
              onClick={() => setOpen(false)}
              to="/book"
              className="text-blue-400 font-semibold"
            >
              Book Now
            </Link>

            <hr className="border-slate-700" />

            <Link onClick={() => setOpen(false)} to="/dashboard">
              Dashboard
            </Link>

            <Link onClick={() => setOpen(false)} to={`/profile/${userId}`}>
              Profile
            </Link>

            <button onClick={handleLogout} className="text-red-400 text-left">
              Logout
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
}