/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import parralexImg from "../../assets/images/asset 74.png";
import leftsideImage from "../../assets/images/asset 77.jpeg";
import Img from "../../assets/images/asset 75.png";
const BurgerSlider = () => {
  const items = [
    "BURGER",
    "CHICKEN BURGER",
    "SPECIAL BURGER",
    "CHEESY BURGER",
    "CHICKEN BURGER",
    "CHEESY BURGER",
  ];

  return (
    <>
      {/* Slider Section */}
      <div
        className="relative w-full overflow-hidden bg-secondary h-10 py-4 transform -skew-y-1 mt-8"
        style={{ zIndex: 10 }}
      >
        <motion.div
          className="flex whitespace-nowrap absolute top-0 left-0 right-0 bottom-0"
          animate={{
            x: [0, -1000],
          }}
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
        className="w-full w h-screen bg-cover bg-fixed bg-center bg-no-repeat shadow-lg overflow-hidden -mt-1 mb-5 "
        style={{
          backgroundImage: `url(${parralexImg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      >
        {/* text here */}
        <div className="flex flex-col justify-center items-center  ">
          <h1 className=" text-white font-light font-custom text-lg mt-6">
            Offer Of The Day
          </h1>
          <h1 className="text-2xl uppercase font-custom text-white mt-1 font-bold">
            our discounted dishes
          </h1>
          <img src={Img} alt="" />
        </div>

        {/* text & img */}
        <div className="  flex justify-center mt-4">
          <div
            className=" w-1/3 border-b rounded h-72 bg-slate-500"
            style={{
              backgroundImage: `url(${leftsideImage})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" flex flex-col justify-center px-4">
              {" "}
              <div className="border-b border-b-secondary">
                <h1 className="items-center place-items-center font-custom text-secondary">
                  505 Off
                </h1>
                {/* <span className="absolute top-0 bottom-0 w-full h-[2px] bg-secondary"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerSlider;
