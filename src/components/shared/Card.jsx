/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ imageUrl, title, description, price, isNew }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl hover:border-secondary transition-shadow duration-300 mb-16">
      <div className="relative">
        {isNew && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold text-white px-2 py-1 rounded">
            NEW
          </span>
        )}
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="text-red-500 font-semibold text-xl">${price}</div>
      </div>
    </div>
  );
};

export default Card;
