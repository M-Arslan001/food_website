/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import parralexImg from "../../assets/burger-images/kfc-bg.png";
import Img from "../../assets/images/asset 75.png";
import PromoCard from "../../components/PromoCard/PromoCard";
import { useData } from "../../context_api/MenuData";
import Overlay from "../Overlay-bg/Overlay-bg";

const BurgerSlider = () => {
  //   const { PromocardData } = useData();
  //   const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    "BURGER🥯",
    "CHICKEN BURGER 🍔",
    "SPECIAL BURGER 🥯",
    "CHEESY BURGER 🧀",
    "CHICKEN BURGER 🥪",
    "CHEESY BURGER🧀",
  ];
  const getColorClass = (index) => {
    const groupIndex = index % 5;
    switch (groupIndex) {
      case 0:
        return "outline-gray";

      case 1:
        return "outline-red";
      case 2:
        return "outline-gray";
      case 3:
        return "outline-red";
      case 4:
        return "outline-gray";
      case 5:
        return "outline-red";
      default:
        return "outline-gray";
    }
  };

  return (
    <>
      <div className="mt-28 bg-[#f7f4ed] overflow-hidden">
        <motion.div
          className=""
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          <div className="flex items-center py-4  whitespace-nowrap">
            {/* First set */}
            {items.concat(items).map((item, index) => (
              <div key={index} className="flex items-center space-x-2 mx-4">
                <span
                  className={` text-xl md:text-5xl font-bold tracking-wide ${getColorClass(
                    index
                  )}`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Parallax effect */}
      <div
        className="w-full h-screen bg-cover bg-fixed bg-center bg-no-repeat shadow-lg overflow-hidden mb-5 mt-0"
        style={{
          backgroundImage: `url(${parralexImg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white font-light font-custom text-lg mt-6">
            Offer Of The Day
          </h1>
          <h1 className="text-2xl uppercase font-custom text-white mt-1 font-bold">
            our discounted dishes
          </h1>
          <img src={Img} alt="Promo Image" />
        </div>
      </div>

      {/* Footer or next section */}
      <div className="relative">
        <Overlay height="90px" />
      </div>
    </>
  );
};

export default BurgerSlider;
