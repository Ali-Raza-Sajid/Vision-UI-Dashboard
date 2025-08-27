import { IoCard, IoLogoCss3 } from "react-icons/io5";
import {
  FaBell,
  FaBuysellads,
  FaLinkedin,
  FaSpotify,
  FaWolfPackBattalion,
} from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import Tables from "./shared/Tables";
import ImageStack from "./shared/ImageStack";
import { SiAdobexd } from "react-icons/si";
import { GiFlowerTwirl } from "react-icons/gi";
import { BiSolidHeartSquare } from "react-icons/bi";
import { FaCartShopping, FaGoogleWallet } from "react-icons/fa6";
import ProgressBar from "./shared/ProgressBar";

// table headings
const titles = ["COMPANIES", "MEMBERS", "BUDGET", "COMPLETION"];

// project configs
const projects = [
  {
    icon: <SiAdobexd className="text-[#FF61F6] md:text-[1.4vw] text-lg" />,
    title: "Chakra Soft UI Version",
    members: [3, 2, 1, 5],
    budget: "$14,000",
    completion: 60,
  },
  {
    icon: <FaBuysellads className="text-[#2684FF] md:text-[1.4vw] text-lg" />,
    title: "Add Progress Track",
    members: [5, 1],
    budget: "$3,000",
    completion: 100,
  },
  {
    icon: <GiFlowerTwirl className="text-[#ECB22E] md:text-[1.4vw] text-lg" />,
    title: "Fix Platform Errors",
    members: [5, 1, 2],
    budget: "Not set",
    completion: 35,
  },
  {
    icon: <FaSpotify className="text-[#2EBD59] md:text-[1.4vw] text-lg" />,
    title: "Launch our Mobile App",
    members: [3, 5, 4, 2, 1],
    budget: "$32,000",
    completion: 85,
  },
  {
    icon: (
      <BiSolidHeartSquare className="text-[#0052cc] md:text-[1.4vw] text-lg" />
    ),
    title: "Add the New Pricing Page",
    members: [3, 2, 5, 4],
    budget: "$400",
    completion: 70,
  },
  {
    icon: <FaLinkedin className="text-[#DC395F] md:text-[1.4vw] text-lg" />,
    title: "Redesign New Shop",
    members: [4, 2, 1],
    budget: "$7,600",
    completion: 50,
  },
  {
    icon: <FaGoogleWallet className="text-[#0cb4bd] md:text-[1.4vw] text-lg" />,
    title: "Redesign New Shop",
    members: [4, 2, 1],
    budget: "$7,600",
    completion: 30,
  },
];

// rows for table
const data = projects.map(({ icon, title, members, budget, completion }) => [
  <span className="flex items-center md:gap-[.75vw] gap-2">
    {icon}
    {title}
  </span>,
  <ImageStack indexes={members} />,
  budget,
  <span className="w-[90%] block">
    {completion}% <ProgressBar width={completion} />
  </span>,
]);

// orders list
const orders = [
  {
    title: "$2400, Design Changes",
    desc: "22 December 7:20 PM",
    icon: <FaBell className="text-[#0075FF]" />,
  },
  {
    title: "New Order #45467644",
    desc: "11 November 9:12 AM",
    icon: <IoLogoCss3 className="text-[#E31A1A]" />,
  },
  {
    title: "New Card added for order #45646788",
    desc: "18 September 2:40 AM",
    icon: <FaCartShopping className="text-[#58b4ff]" />,
  },
  {
    title: "Unlock Packages for Development",
    desc: "27 March 3:56 AM",
    icon: <IoCard className="text-[#F6AD55]" />,
  },
  {
    title: "Server Payments for April",
    desc: "02 July 5:27 PM",
    icon: <FaWolfPackBattalion className="text-[#4f924f]" />,
  },
  {
    title: "New Order #45467644",
    desc: "12 October 9:35 PM",
    icon: <SiAdobexd className="text-[#FF61F6]" />,
  },
];

const OrdersOverview = (): React.ReactElement => {
  return (
    <main className="grid grid-cols-8 md:gap-[.75vw] gap-2 md:mb-[1.25vw] mb-4 w-full">
      {/* Left Table Section */}
      <section className="lg:col-span-5 col-span-8 h-full w-full bg-cover rounded-2xl bg-brand md:p-[1.5vw] p-4">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="md:text-[1vw] text-xs font-semibold">
              Project
            </h2>
            <p className="flex items-center md:gap-[.75vw] gap-2">
              <RiVerifiedBadgeFill className="text-green-600 md:text-[1.25vw] text-base" />
              <span className="font-medium md:text-[1vw] text-xs text-secondary">
                30 done this month
              </span>
            </p>
          </div>
          <button
            type="button"
            aria-label="More options"
            className="md:p-[.75vw] p-2 md:text-[1.25vw] text-base rounded-lg bg-hover"
          >
            <BsThreeDotsVertical />
          </button>
        </header>

        <div className="md:mt-[.75vw] mt-2">
          <Tables titles={titles} data={data} />
        </div>
      </section>

      {/* Right Orders List Section */}
      <aside className="lg:col-span-3 col-span-8 bg-cover rounded-2xl bg-brand md:p-[1.5vw] p-4">
        <header className="md:mt-[.4vw] mt-1">
          <h2 className="md:text-[1vw] text-xs font-semibold">
            Orders Overview
          </h2>
          <p className="flex items-center md:gap-[.75vw] gap-2">
            <RiVerifiedBadgeFill className="text-green-600 md:text-[1.25vw] text-base" />
            <span className="font-medium md:text-[1vw] text-xs text-secondary">
              +30% this month
            </span>
          </p>
        </header>

        <ul className="grid md:grid-cols-1 grid-cols-2 md:mt-[.75vw] mt-2 md:gap-[.75vw] gap-2">
          {orders.map((item, index) => (
            <li
              key={index}
              className="flex md:gap-[1.25vw] gap-4 items-center md:bg-transparent hover:bg-hover bg-hover md:p-[.4vw] p-1 rounded-md"
            >
              <span className="md:p-[.4vw] p-1 md:text-[1.5vw] text-xl rounded-xl bg-hover">
                {item.icon}
              </span>
              <div>
                <h3 className="md:text-[1vw] text-xs font-thin">
                  {item.title}
                </h3>
                <time className="md:text-[1vw] text-xs text-secondary">
                  {item.desc}
                </time>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
};

export default OrdersOverview;
