import React, { useEffect, useState } from "react";
import { CgSmileMouthOpen } from "react-icons/cg";

interface SatisfactionProps {
  percentage: number;
  title?: string;
  subtitle?: string;
  description?: string;
}

const Satisfaction: React.FC<SatisfactionProps> = ({
  percentage,
  title = "Satisfaction Rate",
  subtitle = "From all projects",
  description = "Based on likes",
}) => {
  const [progress, setProgress] = useState<number>(0);

  // Smooth animation
  useEffect(() => {
    let frameId: number;
    let current = 0;

    const animate = () => {
      if (current < percentage) {
        current += 1;
        setProgress(current);
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [percentage]);

  // SVG arc calculations
  const radius = 50;
  const circumference = Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <section
      className="relative h-auto lg:col-span-1 col-span-2 rounded-2xl md:p-[.75vw] p-2 bg-brand"
      aria-label={`${title}: ${progress}%`}
    >
      {/* Header */}
      <header>
        <h3 className="md:text-[1vw] text-xs font-semibold">
          {title}
        </h3>
        <p className="md:text-[1vw] text-xs text-secondary">{subtitle}</p>
      </header>

      {/* Progress Arc */}
      <figure className="relative flex justify-center items-center">
        <svg
          className="w-full lg:h-[9vw] h-26"
          viewBox="0 0 144 80"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="50%" x2="100%" y2="50%">
              {/* <stop offset="0%" stopColor="hsl(208 85% 0%)" /> */}
              <stop offset="0%" stopColor="hsl(220 90% 25%)" />
              <stop offset="30%" stopColor="hsl(210 95% 35%)" />
              <stop offset="100%" stopColor="hsl(195 100% 50%)" />
            </linearGradient>
          </defs>

          {/* Background Arc */}
          <path
            d="M 12 72 A 0 0 1 132 72"
            stroke="hsl(var(--progress-bg))"
            strokeWidth="8"
            fill="none"
            className="opacity-70"
          />

          {/* Progress Arcs */}
          <g
            style={{
              filter: "drop-shadow(0 0 8px hsl(var(--progress-fill) / 0.5))",
            }}
          >
            {[8, 7, 6, 5, 4, 3, 2].map((width, i) => (
              <path
                key={width}
                d={`M 12 72 A ${radius} ${radius} 0 0 1 132 72`}
                stroke="url(#progressGradient)"
                strokeWidth={width}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                opacity={(i + 1) / 3}
              />
            ))}
          </g>
        </svg>

        {/* Center Icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center md:mt-[3vw] mt-6">
          <div className="lg:w-[4vw] w-8 lg:h-[4vw] h-8 bg-[#0075FF] rounded-full flex items-center justify-center shadow-lg">
            <span className="md:text-[1.5vw] text-xl">
              <CgSmileMouthOpen aria-hidden />
            </span>
          </div>
        </div>

        <figcaption className="sr-only">
          {progress}% {description}
        </figcaption>
      </figure>

      {/* Footer / Progress Info */}
      <footer className="md:mx-[.75vw] md:py-[.75vw] py-1 md:px-[1vw] px-1 md:rounded-2xl rounded bg-[#060b27c4]">
        <div className="flex justify-between">
          <span className="md:text-[1vw] text-xs text-secondary">0%</span>
          <div className="text-center">
            <div className="md:text-[1.25vw] text-base font-semibold">
              {Math.round(progress)}%
            </div>
          </div>
          <span className="md:text-[1vw] text-xs text-secondary">100%</span>
        </div>
        <p className="md:text-[1vw] text-xs text-center text-secondary">
          {description}
        </p>
      </footer>
    </section>
  );
};

export default Satisfaction;
