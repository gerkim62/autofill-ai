
import React from "react";

type  LogoProps = {
  className?: string;
};
const Logo = ({className}:LogoProps) => {
  return (
    <div className={" font-extrabold text-purple-700 p-1 pr-0 border-2 bordert-pink-600 rounded-lg text-center overflow-hidden "+className}>
      <span className=" text-xs text-pink-600">by</span>{" "}
      <span className=" font-semibold text-gray-900 font-mono mb-2">
        <span className=" border-l-2 pl-1 border-pink-200">the Autofill </span>
        <span className="rounded-full  border-r-2 pr-2 border-pink-500">
          Team
        </span>
      </span>
    </div>
  );
};

export default Logo;
