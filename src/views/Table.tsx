import { BsThreeDotsVertical } from "react-icons/bs";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SiAdobexd } from "react-icons/si";
import { FaBuysellads, FaSpotify, FaLinkedin, FaGoogleWallet } from "react-icons/fa";
import { GiFlowerTwirl } from "react-icons/gi";
import { BiSolidHeartSquare } from "react-icons/bi";
import Tables from "../component/shared/Tables";
import ProgressBar from "../component/shared/ProgressBar";

// ✅ reusable status button
const StatusButton = ({ status }: { status: "Online" | "Offline" }) => (
  <button
    className={`${
      status === "Online"
        ? "bg-green-600 hover:bg-green-700 "
        : "bg-transparent border border-secondary hover:bg-[#ffffff43] text-secondary"
    } md:px-[.75vw] px-2 md:py-[.4vw] py-1 rounded-md`}
  >
    {status}
  </button>
);

/* ----------------------------- FIRST TABLE ----------------------------- */
type Employee = {
  name: string;
  email: string;
  role: string;
  department: string;
  avatar: string;
  status: "Online" | "Offline";
  date: string;
};

// Check if the screen is mobile (below md breakpoint)
const isMobile = () => !window.matchMedia("(min-width: 768px)").matches;

const employeeTitles = isMobile()
  ? ["AUTHOR",  "FUNCTION", "STATUS", "EMPLOYED"]
  : ["AUTHOR",  "FUNCTION", "STATUS", "EMPLOYED", "UPDATE"];

const employees: Employee[] = [
  {
    name: "Esthera Jackson",
    email: "esthera@simmmple.com",
    role: "Project Manager",
    department: "Operations",
    avatar: "/Avatar1.webp",
    status: "Online",
    date: "03/01/25",
  },
  {
    name: "Alexa Liras",
    email: "alexa@simmmple.com",
    role: "Software Engineer",
    department: "Backend Development",
    avatar: "/Avatar2.webp",
    status: "Offline",
    date: "12/02/25",
  },
  {
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    role: "Product Owner",
    department: "Project Management",
    avatar: "/Avatar3.webp",
    status: "Online",
    date: "28/03/25",
  },
  {
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    role: "Team Lead",
    department: "Engineering",
    avatar: "/Avatar4.webp",
    status: "Offline",
    date: "10/04/25",
  },
  {
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    role: "Frontend Developer",
    department: "Web Development",
    avatar: "/Avatar5.webp",
    status: "Online",
    date: "19/05/25",
  },
  {
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    role: "UI/UX Designer",
    department: "Design Department",
    avatar: "/Avatar2.webp",
    status: "Offline",
    date: "07/06/25",
  },
];

const employeeData = employees.map(
  ({ name, email, avatar, role, department, status, date }) => {
    const row = [
      // AUTHOR
      <div className="flex md:gap-[1.25vw] gap-4 items-center rounded-md" key={name}>
        <img
          src={avatar}
          alt={name}
          className="w-8 h-8 md:w-[2.5vw] md:h-[2.5vw] rounded-full object-cover"
        />
        <aside>
          <h2 className="md:text-[1vw] text-xs font-medium">{name}</h2>
          <h3 className="md:block hidden md:text-[1vw] text-xs text-secondary">{email}</h3>
        </aside>
      </div>,

      // FUNCTION
      <div key={role}>
        <h2 className="md:text-[1vw] text-xs font-medium">{role}</h2>
        <h3 className="md:block hidden md:text-[1vw] text-xs text-secondary">{department}</h3>
      </div>,

      // STATUS
      <StatusButton key={status + name} status={status} />,

      // EMPLOYED
      date,
    ];

    // Only include EDIT button if not on mobile
    if (!isMobile()) {
      row.push(
        <button key={"edit-" + name} className="hidden md:inline-block">
          Edit
        </button>
      );
    }

    return row;
  }
);

/* ----------------------------- SECOND TABLE ----------------------------- */
const projectTitles = ["COMPANIES", "BUDGET", "STATUS", "COMPLETION"];

const projects = [
  {
    icon: <SiAdobexd className="text-[#FF61F6] md:text-[1.4vw] text-lg" />,
    title: "Chakra Soft UI Version",
    status: "Working",
    budget: "$14,000",
    completion: Math.floor(Math.random() * 76) + 25, // 25–100
  },
  {
    icon: <FaBuysellads className="text-[#2684FF] md:text-[1.4vw] text-lg" />,
    title: "Add Progress Track",
    status: "Completed",
    budget: "$3,000",
    completion: Math.floor(Math.random() * 76) + 25,
  },
  {
    icon: <GiFlowerTwirl className="text-[#ECB22E] md:text-[1.4vw] text-lg" />,
    title: "Fix Platform Errors",
    status: "In Review",
    budget: "Not set",
    completion: Math.floor(Math.random() * 76) + 25,
  },
  {
    icon: <FaSpotify className="text-[#2EBD59] md:text-[1.4vw] text-lg" />,
    title: "Launch our Mobile App",
    status: "Ongoing",
    budget: "$32,000",
    completion: Math.floor(Math.random() * 76) + 25,
  },
  {
    icon: <BiSolidHeartSquare className="text-[#0052cc] md:text-[1.4vw] text-lg" />,
    title: "Add the New Pricing Page",
    status: "Pending",
    budget: "$400",
    completion: Math.floor(Math.random() * 76) + 25,
  },
  {
    icon: <FaLinkedin className="text-[#DC395F] md:text-[1.4vw] text-lg" />,
    title: "Redesign New Shop",
    status: "Delayed",
    budget: "$7,600",
    completion: Math.floor(Math.random() * 76) + 25,
  },
  {
    icon: <FaGoogleWallet className="text-[#0cb4bd] md:text-[1.4vw] text-lg" />,
    title: "Update Wallet Integration",
    status: "In Progress",
    budget: "$7,600",
    completion: Math.floor(Math.random() * 76) + 25,
  },
];


const projectData = projects.map(({ icon, title, status, budget, completion }) => [
  <div className="flex items-center md:gap-[.75vw] gap-2" key={title}>
    {icon}
    {title}
  </div>,
  budget,
  status,
  <div className="w-[90%]" key={"progress-" + title}>
    {completion}% <ProgressBar width={completion} />
  </div>,
]);

/* ----------------------------- COMPONENT ----------------------------- */
const Table = () => {
  return (
    <section>
      {/* First Table (Employees) */}
      <div className="h-full w-full bg-cover rounded-2xl bg-brand md:p-[1.5vw] p-4 md:mb-[1.5vw] mb-4">
        <header className="md:text-base md:text-[1vw] text-xs font-semibold">
          Orders Overview
        </header>
        <div className="md:mt-[.75vw] mt-2">
          <Tables titles={employeeTitles} data={employeeData} />
        </div>
      </div>

      {/* Second Table (Projects) */}
      <div className="h-full w-full bg-cover rounded-2xl bg-brand md:p-[1.5vw] p-4 md:mb-[1.5vw] mb-4">
        <header className="flex items-center justify-between">
          <aside>
            <h2 className="md:text-base md:text-[1vw] text-xs font-semibold">
              Project
            </h2>
            <div className="flex items-center md:gap-[.75vw] gap-2">
              <RiVerifiedBadgeFill className="text-green-600 md:text-[1.25vw] text-base" />
              <h3 className="font-medium md:text-[1vw] text-xs text-secondary">
                30 done this month
              </h3>
            </div>
          </aside>
          <BsThreeDotsVertical className="md:p-[.75vw] p-2 md:text-[2.5vw] text-3xl rounded-lg bg-hover" />
        </header>
        <div className="md:mt-[.75vw] mt-2">
          <Tables titles={projectTitles} data={projectData} />
        </div>
      </div>
    </section>
  );
};

export default Table;