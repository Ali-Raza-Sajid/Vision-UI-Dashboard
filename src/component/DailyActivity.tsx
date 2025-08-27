import type React from "react";
import { FaFileAlt, FaGlobe } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";

type ActivityItem = {
  title: string;
  rating: string;
  performance: string;
  icon: "wallet" | "globe" | "file" | "cart"; // strict union type
};

const activityData: ActivityItem[] = [
  { title: "Today’s Money", rating: "$53,000", performance: "+55%", icon: "wallet" },
  { title: "Today’s Users", rating: "2,300", performance: "+5%", icon: "globe" },
  { title: "New Clients", rating: "+3,052", performance: "-14%", icon: "file" },
  { title: "Total Sales", rating: "$173,000", performance: "+8%", icon: "cart" },
];

const iconMap: Record<ActivityItem["icon"], React.ReactNode> = {
  wallet: <IoWallet />,
  globe: <FaGlobe />,
  file: <FaFileAlt />,
  cart: <FaCartShopping />,
};

const DailyActivity: React.FC = () => {
  return (
    <section>
      <div className="md:mb-[1.25vw] mb-4 w-full grid md:grid-cols-4 grid-cols-2 md:gap-[.75vw] gap-2">
        {activityData.map((item) => (
          <div
            key={item.title}
            className="lg:h-[3.75vw] h-12 rounded-lg flex items-center justify-between md:p-[.75vw] p-2 
              bg-brand"
          >
            <div>
              <h3 className="font-medium md:text-[1vw] text-xs text-secondary">
                {item.title}
              </h3>
              <h2 className="font-semibold md:text-[1.4vw] text-lg">
                {item.rating}
                <span
                  className={`md:text-[1vw] text-xs md:px-[.75vw] px-2 ${
                    item.performance.startsWith("-")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {item.performance}
                </span>
              </h2>
            </div>

            <div
              className="md:p-[.75vw] p-2 bg-primary md:text-[1.25vw] text-base rounded-lg"
              aria-label={item.title}
            >
              {iconMap[item.icon]}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DailyActivity;
