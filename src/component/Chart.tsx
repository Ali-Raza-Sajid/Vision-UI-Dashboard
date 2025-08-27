"use client";
import { FaRocket } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { TiSpanner } from "react-icons/ti";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import ProgressBar from "./shared/ProgressBar";
import Graph from "./BarChart";
// Define interface for data structure
interface ChartData {
  name: string;
  sales: number;
  profit: number;
  tax: number;
}
// Define interface for CustomTooltip props
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: ValueType;
    color?: string;
  }>;
  label?: NameType;
}
const data: ChartData[] = [
  { name: "Jan", sales: 400, profit: 200, tax: 250 },
  { name: "Feb", sales: 300, profit: 300, tax: 300 },
  { name: "Mar", sales: 250, profit: 450, tax: 200 },
  { name: "Apr", sales: 450, profit: 250, tax: 350 },
  { name: "May", sales: 350, profit: 350, tax: 350 },
  { name: "Jun", sales: 200, profit: 400, tax: 150 },
  { name: "Jul", sales: 400, profit: 250, tax: 300 },
  { name: "Aug", sales: 300, profit: 300, tax: 300 },
  { name: "Sep", sales: 450, profit: 200, tax: 250 },
  { name: "Oct", sales: 250, profit: 400, tax: 150 },
  { name: "Nov", sales: 400, profit: 300, tax: 350 },
  { name: "Dec", sales: 300, profit: 450, tax: 200 },
];
const stats = [
  { icon: IoWallet, label: "Users", value: "32,984", progress: 80 },
  { icon: FaRocket, label: "Clicks", value: "2,42m", progress: 65 },
  { icon: FaCartShopping, label: "Sales", value: "2,400$", progress: 50 },
  { icon: TiSpanner, label: "Items", value: "320", progress: 90 },
];
const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-[150px] h-[120px] bg-[#4a4f8172] rounded-sm border-none  flex flex-col justify-center md:p-[.75vw] p-2">
        <div className="text-center font-bold md:mb-[.75vw] mb-2">{label}</div>
        <div className="text-left">
          {payload.map((entry, index) => (
            <div key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};
const Chart: React.FC = () => {
  return (
    <section className="grid grid-cols-7 lg:h-[22vw] md:mb-[1.25vw] mb-3 w-full md:gap-[.75vw] gap-2">
      <div className="md:col-span-4 col-span-7 h-full w-full  rounded-2xl bg-brand md:p-[1.5vw] p-4 shadow-xl ">
        <h2 className=" font-semibold md:text-[1.1vw] text-sm ">
          Sales overview
        </h2>
        <p className="text-green-400 md:text-[1vw] text-xs md:mb-[1.5vw] mb-4">
          (+10%) more in 2025
        </p>

        <ResponsiveContainer
          width="100%"
          height="%"
          className="lg:h-[85%] h-36"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#00f" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ff" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#0ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTax" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8891E3" stopOpacity={0.7} />
                <stop offset="95%" stopColor="#8891E3" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" stroke="#ccc" fontSize={12} />
            <YAxis stroke="#ccc" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#0066ff"
              fill="url(#colorSales)"
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#00ffff"
              fill="url(#colorProfit)"
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="tax"
              stroke="#8891E3"
              fill="url(#colorTax)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="md:col-span-3 col-span-7 bg-cover rounded-2xl bg-brand  md:p-[1.5vw] p-4 shadow-xl">
        <div className="w-full md:h-[8vw] h-[150px]">
          <Graph />
        </div>

        <h2 className=" font-semibold md:text-[1.1vw] text-sm ">
          Active Users
        </h2>
        <p className="text-green-400 md:text-[1vw] text-xs md:mb-[1.5vw] mb-4">
          (+15%) more in 2025
        </p>

        <div className="grid grid-cols-4 md:gap-[.75vw] gap-2">
          {stats.map(({ icon: Icon, label, value, progress }, index) => (
            <div
              key={index}
              className="bg-hover md:p-[.75vw] p-2 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_2px_rgba(0,117,255,0.6)]"
            >
              <div className="flex items-center md:gap-x-[.75vw] gap-x-2">
                <Icon className="md:p-[.75vw] p-2 bg-primary md:text-[2.5vw] text-3xl rounded-md " />
                <p className="text-secondary md:text-[1vw] text-xs ">{label}</p>
              </div>
              <h2 className=" font-semibold md:text-[1.1vw] text-sm md:mt-[.4vw] mt-1">
                {value}
              </h2>
              <ProgressBar width={progress} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chart;
