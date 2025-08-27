import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { IoSearchOutline, IoSettingsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BiSolidBell } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import Background from "./component/Background";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";

const routes = [
  { path: "/", title: "Dashboard" },
  { path: "/table", title: "Table" },
  { path: "/billing", title: "Billing" },
  { path: "/danish", title: "RTL" },
  { path: "/profile", title: "Profile" },
  { path: "/signup", title: "Sign Up" },
  { path: "/login", title: "Login" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentRoute = routes.find((r) => r.path === location.pathname);
  const currentTitle = currentRoute?.title || "Unknown";

  return (
    <main className="w-screen h-screen relative">
      <Background />

      <section className="h-full w-full mx-auto md:flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 right-0 md:w-[15vw] w-[70vw] h-full 
            bg-custom-gradient md:px-[1.25vw] px-4 z-20 transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
        >
          <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="md:w-[85vw] w-full max-h-screen overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-[#060b27f3] md:px-[1.25vw] px-4 md:h-[5vw] h-[10vh] flex items-center justify-between">
            {/* Mobile Logo */}
            <div className="md:hidden block">
              <h2 className="py-2 text-2xl text-center">Vision UI</h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-trafrom-transparent" />
            </div>

            {/* Hamburger */}
            <MdMenu
              className="md:hidden block text-3xl cursor-pointer"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open sidebar"
            />

            {/* Page Title */}
            <div className="md:flex hidden flex-col font-semibold ">
              <h3 className="md:text-[1.1vw] text-sm font-semibold">
                <span className="font-medium text-secondary">Pages </span>/ {currentTitle}
              </h3>
              <h3 className="md:text-[1.25vw] text-base">{currentTitle}</h3>
            </div>

            {/* Actions */}
            <div className="md:flex hidden items-center gap-[1.25vw]">
              {/* Search */}
              <div className="flex items-center w-[20vw] gap-[.75vw] rounded-xl border border-gray-700 bg-gray-900 px-[1.25vw] text-[1.1vw] text-gray-300">
                <IoSearchOutline className="text-secondary text-[1.5vw]" />
                <input
                  type="text"
                  placeholder="Type here to search..."
                  className="h-[2.5vw] w-[15vw] focus:outline-none bg-transparent"
                  aria-label="Search"
                />
              </div>

              {/* Sign in */}
              <Link
                to="/login"
                className="flex items-center gap-[.4vw] text-secondary"
              >
                <FaUser className="text-[1.4vw]" />
                <span className="text-[1.1vw]">Sign in</span>
              </Link>

              {/* Settings */}
              <Link to="/profile">
                <IoSettingsSharp className="text-[1.4vw] text-secondary" />
              </Link>

              {/* Notifications */}
              <Link to="/table">
                <BiSolidBell className="text-[1.4vw] text-secondary" />
              </Link>
            </div>
          </header>

          {/* Page Content */}
          <div className="md:px-[1.5vw] px-4 md:pt-[1.5vw] pt-4">{children}</div>

          {/* Footer */}
          <Footer />
        </main>
      </section>
    </main>
  );
};

export default Layout;
