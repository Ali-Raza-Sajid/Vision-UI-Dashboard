import { NavLink } from "react-router-dom";
import { IoHome, IoStatsChart, IoWallet } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
import { FaFileImport, FaRocket, FaUser } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

const routes = [
  { title: "Dashboard", path: "/", icon: <IoHome /> },
  { title: "Table", path: "/table", icon: <IoStatsChart /> },
  { title: "Billing", path: "/billing", icon: <IoWallet /> },
  { title: "RTL", path: "/danish", icon: <TiSpanner /> },
  { title: "Profile", path: "/profile", icon: <FaUser /> },
  { title: "Sign Up", path: "/signup", icon: <FaFileImport /> },
  { title: "Login", path: "/login", icon: <FaRocket /> },
];
interface SidebarProps {
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <section>
      <NavLink to={"/"} className="md:block hidden  md:py-[.5vw] py-2  md:text-[1.9vw] text-2xl text-center">Vision UI</NavLink>
      <div className="md:hidden flex md:gap-[1.25vw] gap-4 py-2  items-center">
        <BsArrowLeft className="text-3xl" onClick={closeSidebar} />
        <h2 className="text-2xl ml-8">Main Menu</h2>
      </div>

      <div className="lg:h-[.15vw] h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />
     
      <div className="flex flex-col md:mt-[.5vw] mt-2">
        {routes.map((route) => (
          <div key={route.path}>
            {route.title === "Profile" && (
              <h3 className="md:text-[1vw] text-xs  uppercase text-[#67748E] md:px-[.75vw] px-2 md:my-[.35vw] my-1">
                Account Pages
              </h3>
            )}
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                `flex items-center  md:gap-[.75vw] gap-2 md:p-[.5vw] p-2 rounded-md transition ${
                  isActive ? "bg-[#1A1F37] " : "hover:bg-[#1a1f377e]"
                }`
              }
              onClick={closeSidebar}
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`md:p-[.35vw] p-1 md:text-[1.25vw] rounded-md transition ${
                      isActive
                        ? "bg-primary "
                        : "bg-[#1A1F37] text-primary hover:bg-[#0077ff6f] hover:text-[#ffffff89]"
                    }`}
                  >
                    {route.icon}
                  </div>
                  <div className="md:text-[1.1vw] text-sm font-medium">{route.title}</div>
                </>
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
