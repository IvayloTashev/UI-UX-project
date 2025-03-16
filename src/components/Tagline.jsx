import React from "react";
import brackeds from "../assets/svg/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackeds("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackeds("right")}
    </div>
  );
};

export default Tagline;
