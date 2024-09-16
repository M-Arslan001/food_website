/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ title, description, price, imageUrl, isNew }) => {
  return (
    <div className="w-[300px] rounded-xl overflow-hidden shadow-lg border border-gray-300 transition-all hover:border-red-500">
      <div className="relative bg-[#F8F6F4] rounded-lg">
        <img className="w-full" src={imageUrl} alt={title} />
        {isNew && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-black mb-2">{title}</div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Card;
