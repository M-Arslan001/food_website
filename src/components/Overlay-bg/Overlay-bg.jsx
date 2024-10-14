/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import overlyimg from "../../assets/images/asset 3.png";

const Overlay = ({ height = "auto" }) => {
  return (
    <>
      <div className="absolute w-full left-0 z-10 bottom-0" style={{ height }}>
        <img
          src={overlyimg}
          alt="overlay"
          className="w-full h-full object-cover 
          "
        />
      </div>
    </>
  );
};

export default Overlay;
