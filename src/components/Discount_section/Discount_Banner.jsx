/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import parralexImg from "../../assets/images/asset 74.png";
import Img from "../../assets/images/asset 75.png";
import PromoCard from "../../components/PromoCard/PromoCard";
import { useData } from "../../context_api/MenuData";
import Overlay from "../Overlay-bg/Overlay-bg";

const BurgerSlider = () => {
  const { PromocardData } = useData();
  const [currentSlide, setCurrentSlide] = useState(0);

  const items = [
    "BURGER",
    "CHICKEN BURGER",
    "SPECIAL BURGER",
    "CHEESY BURGER",
    "CHICKEN BURGER",
    "CHEESY BURGER",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % PromocardData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [PromocardData.length]);

  return (
    <>
      {/* Slider Section */}
      <div
        className="relative w-full overflow-hidden bg-secondary h-10 py-4 transform -skew-y-1 mt-8"
        style={{ zIndex: 10 }}
      >
        <motion.div
          className="flex whitespace-nowrap absolute top-0 left-0 right-0 bottom-0"
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
          {items.concat(items).map((item, index) => (
            <div
              key={index}
              className="inline-block tracking-[1px] items-center px-8 py-1 text-2xl font-bold text-white transform skew-y-1"
            >
              {item}
              <span className="mx-4">*</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Parallax effect */}
      <div
        className="w-full h-screen bg-cover bg-fixed bg-center bg-no-repeat shadow-lg overflow-hidden mb-5"
        style={{
          backgroundImage: `url(${parralexImg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
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

        {/* Promo Cards Section */}
        <div className="relative flex justify-center items-center place-content-center min-h-screen ">
          {PromocardData.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <PromoCard {...item} />
            </div>
          ))}
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
