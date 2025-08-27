
import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { Profit: 40 },
  { Profit: 30 },
  { Profit: 15 },
  { Profit: 5 },
  { Profit: 35 },
  { Profit: 50 },
  { Profit: 30 },
  { Profit: 20 },
  { Profit: 10 },
  { Profit: 55 },
  { Profit: 40 },
  { Profit: 25 },
  { Profit: 22 },
];

const Graph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      
      <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barSize={8}  className="bg-brand rounded-2xl md:p-[.4vw]">
       <defs>
            <linearGradient id="gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            
              <stop offset="0%" stopColor="hsl(208 85% 0%)" />
              <stop offset="10%" stopColor="hsl(220 90% 25%)" />
              <stop offset="50%" stopColor="hsl(210 95% 35%)" />
              <stop offset="100%" stopColor="hsl(195 100% 50%)" />
            </linearGradient>
          </defs>  <YAxis stroke="#ccc"  fontSize={12} />
        <Tooltip
          contentStyle={{
            background:"#ffffff7f",
            border: "none",
            borderRadius: "8px",
            padding: "4px",
          }}
          labelStyle={{ display: "none" }}
          itemStyle={{ color: "#063F8E"}}
        />
        <Bar dataKey="Profit" fill="url(#gradient)" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Graph;


