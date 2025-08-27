import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface TrackingProps {
  score: number;
  title: React.ReactNode;
  desc: string;
}

const Tracking: React.FC<TrackingProps> = ({ score, desc, title }) => {
  const data = [
    { value: score, fill: "url(#gradient)" },
    { value: 100 - score, fill: "transparent" },
  ];

  return (
    <article className="w-full h-full md:w-[15vw] md:h-[15vw]">
      <aside className="flex items-center mx-auto justify-center w-full h-full relative">
        {/* Responsive container ensures the chart fills parent */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <linearGradient id="gradient" x1="100%" y1="0%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="hsl(208 85% 0%)" />
                <stop offset="10%" stopColor="hsl(220 90% 25%)" />
                <stop offset="50%" stopColor="hsl(210 95% 35%)" />
                <stop offset="100%" stopColor="hsl(195 100% 50%)" />
              </linearGradient>
            </defs>

            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="70%"
              startAngle={90}
              endAngle={-270}
              cornerRadius={10}
              isAnimationActive={true}
              animationDuration={1000}
              stroke="none"
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-center font-medium md:text-[1vw] text-[8px] text-secondary">
            {title}
          </p>
          <p className="text-center font-bold md:text-[1.9vw] text-xl">
            {score}
          </p>
          <p className="text-center font-medium md:text-[1vw] text-[8px] text-secondary">
            {desc}
          </p>
        </div>
      </aside>
    </article>
  );
};

export default Tracking;
