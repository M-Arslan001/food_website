/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import leftsideImage from "../../assets/images/asset 77.jpeg";
import Button from "../shared/Button";

const PromoCard = ({
  className,
  offer,
  title,
  description,
  price,
  actualPrice,
  image,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center mt-4 ${className}`}
    >
      {/* text */}
      <div className="w-10/12 md:w-1/3 lg:w-1/3">
        <div
          className="order-1 rounded-lg"
          style={{
            backgroundImage: `url(${leftsideImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-4">
            <div className="border border-secondary text-center rounded-lg">
              <h2 className="font-custom text-4xl text-secondary">{offer}</h2>
              <h3 className="md:text-2xl font-bold mb-4">{title}</h3>
              <p className="text-gray-500 mb-4 max-w-[90%] md:max-w-[70%] mx-auto">
                {description}
              </p>
              <h3 className="text-secondary font-custom font-bold mb-2">
                {price}
                <span className="line-through text-gray-400 px-2">
                  {actualPrice}
                </span>
              </h3>
              <div className="mb-2">
                <Button
                  text={"Explore More"}
                  bgColor={"bg-secondary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-4 lg-h-0"></div>

      {/* image */}
      <div className="w-10/12 md:w-1/3 lg:w-1/3 order-2 ">
        <div className="text-white rounded-lg h-full">
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full h-full object-cover" // Use object-cover to maintain aspect ratio
          />
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
