import React from "react";

interface Loader3DProps {
  label?: string;
}

const Loader3D: React.FC<Loader3DProps> = ({ label }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-default">
      <div className="loader-3d">
        <span />
        <span />
        <span />
      </div>
      {label ? (
        <span className="text-xs uppercase tracking-[0.35em] text-secondary">
          {label}
        </span>
      ) : null}
    </div>
  );
};

export default Loader3D;
