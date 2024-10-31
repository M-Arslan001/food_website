/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const OfferCard = ({ title, subtitle, offerImg, bgImage }) => {
  return (
    <>
      <div className="relative py-5 ">
        <img src={bgImage} alt="" className="w-[350px] h-[250px] " />
        <div className="absolute inset-0 py-5 pl-8 ">
          <h2 className="font-bold font-custom text-sm text-red-700 py-4">
            {title}
          </h2>
          <h3 className="mb-2 mt-2 text-3xl text-white font-custom ">
            {subtitle}
          </h3>
          <div className="absolute bottom-0">
            <img src={offerImg} alt="" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCard;
