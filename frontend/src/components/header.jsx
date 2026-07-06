import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import {
  Dropdown,
  Menu,
  Avatar,
  Drawer,
  Button,
} from "antd";
import {
  UserOutlined,
  SettingOutlined,
  DashboardOutlined,
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { handleSignOut } from "../services/AuthService.mjs";

export default function Header({
  userId,
  colorTheme,
  setTheme,
  userName,
  profilePic,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const displayName = userName || "User";
  const displayInitial = displayName.charAt(0).toUpperCase();

  const toggleTheme = () => {
    setTheme(colorTheme === "dark" ? "light" : "dark");
  };

  const logout = async () => {
    await handleSignOut();
    localStorage.clear();
    navigate("/");
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link to={`/profile/${userId}`}>Profile</Link>,
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: <Link to="/settings">Settings</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: logout,
      danger: true,
    },
  ];

  const userMenu = {
    items: menuItems,
  };

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <nav className="hidden md:flex items-center justify-between px-10 py-4 bg-white dark:bg-[#1a1a1a] shadow-sm sticky top-0 z-50">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-[#ff6b6b] dark:text-[#ff8080]"
        >
          Prepify
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-10 relative">
          <SearchOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search recipes..."
            className="w-full pl-12 pr-4 py-3 rounded-full border dark:border-gray-700 dark:bg-[#2a2a2a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]/30"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
          >
            {colorTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Create button */}
          <Link to="/createRecipe">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              style={{
                background: "#ff6b6b",
                borderColor: "#ff6b6b",
                borderRadius: 20,
              }}
            >
              Create
            </Button>
          </Link>

          {/* User menu */}
          {userId ? (
            <Dropdown menu={userMenu} trigger={["click"]}>
              <Avatar
                src={profilePic}
                style={{
                  cursor: "pointer",
                  background: "#667eea",
                }}
              >
                {displayInitial}
              </Avatar>
            </Dropdown>
          ) : (
            <Link to="/Auth">
              <Button style={{ borderColor: "#ff6b6b", color: "#ff6b6b" }}>
                Login
              </Button>
            </Link>
          )}
        </div>
      </nav>

            {/* ================= MOBILE HEADER ================= */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1a1a1a] shadow-sm sticky top-0 z-50">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-[#ff6b6b] dark:text-[#ff8080]"
        >
          Prepify
        </Link>

        {/* Search */}
        <div className="flex-1 mx-3 relative">
          <SearchOutlined className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full pl-9 pr-3 py-2 rounded-full bg-gray-100 dark:bg-[#2a2a2a] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]/30"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
          >
            {colorTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Menu button */}
          {userId ? (
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
            >
              <MenuOutlined style={{ fontSize: 20 }} />
            </button>
          ) : (
            <Link to="/Auth">
              <Button
                size="small"
                style={{
                  borderColor: "#ff6b6b",
                  color: "#ff6b6b",
                  borderRadius: 20,
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        placement="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        width={300}
        styles={{ body: { padding: 0 } }}
      >
        {/* User header */}
        <div
          style={{
            padding: 20,
            background: "linear-gradient(135deg,#667eea,#764ba2)",
            color: "white",
          }}
        >
          <Avatar
            src={profilePic}
            size={64}
            style={{ background: "rgba(255,255,255,0.3)", marginBottom: 10 }}
          >
            {displayInitial}
          </Avatar>

          <div style={{ fontSize: 18, fontWeight: 600 }}>
            {displayName}
          </div>
        </div>

        {/* Menu */}
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={() => setMobileOpen(false)}
          style={{ border: "none" }}
        />
      </Drawer>

      {/* ================= FLOATING ACTION BUTTON ================= */}
      <Link to="/createRecipe">
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          className="md:hidden"
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 56,
            height: 56,
            background: "#ff6b6b",
            borderColor: "#ff6b6b",
            boxShadow: "0 4px 12px rgba(255,107,107,0.4)",
            zIndex: 50,
          }}
        />
      </Link>
    </>
  );
}