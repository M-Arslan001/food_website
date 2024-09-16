/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const Button = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-primary px-2 py-2 text-base font-custom text-black hover:text-white transition-all duration-300 ease-in-out  hover:shadow-gray-600/50 border border-white/20 ${bgColor}`}
    >
      <span
        className={`text-sm font-normal text-[12px] tracking-[1px] ${textColor} uppercase`}
      >
        {text}
      </span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-full bg-white/20"></div>
      </div>
    </button>
  );
};

export default Button;
