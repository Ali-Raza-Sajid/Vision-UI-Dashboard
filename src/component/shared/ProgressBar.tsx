import React from "react";

interface ProgressBarProps {
  width: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ width }) => {
  return (
    <section className="relative w-full md:h-[.35vw] h-1 md:mt-[.35vw] mt-1 bg-secondary rounded-full">
      <div
        className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300"
        style={{ width: `${width}%` }}
      ></div>
    </section>
  );
};

export default ProgressBar;
