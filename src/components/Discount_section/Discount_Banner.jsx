/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parralexImg from "../../assets/images/asset 74.png";
import Img from "../../assets/images/asset 75.png";
import PromoCard from "../../components/PromoCard/PromoCard";
import { useData } from "../../context_api/MenuData";

gsap.registerPlugin(ScrollTrigger);

const BurgerSlider = () => {
  const { PromocardData } = useData();
  const sliderRef = useRef(null);
  const parallaxRef = useRef(null);

  const items = [
    "BURGER",
    "CHICKEN BURGER",
    "SPECIAL BURGER",
    "CHEESY BURGER",
    "CHICKEN BURGER",
    "CHEESY BURGER",
  ];

  useEffect(() => {
    // GSAP animation for slider
    gsap.fromTo(
      sliderRef.current,
      { x: 0 },
      {
        x: -1000,
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          repeat: -1,
          repeatDelay: 1,
        },
      }
    );

    // GSAP parallax effect
    gsap.to(parallaxRef.current, {
      backgroundPosition: "center bottom",
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <>
      {/* Slider Section */}
      <div
        className="relative w-full overflow-hidden bg-secondary h-10 py-4 transform -skew-y-1 mt-8"
        style={{ zIndex: 10 }}
        ref={sliderRef}
      >
        <div className="flex whitespace-nowrap absolute top-0 left-0 right-0 bottom-0">
          {items.concat(items).map((item, index) => (
            <div
              key={index}
              className="inline-block tracking-[1px] items-center px-8 py-1 text-2xl font-bold text-white transform skew-y-1"
            >
              {item}
              <span className="mx-4">*</span>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax effect */}
      <div
        className="w-full h-screen bg-cover bg-fixed bg-center bg-no-repeat shadow-lg overflow-hidden -mt-1 mb-5"
        style={{
          backgroundImage: `url(${parralexImg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
        ref={parallaxRef}
      >
        {/* text here */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white font-light font-custom text-lg mt-6">
            Offer Of The Day
          </h1>
          <h1 className="text-2xl uppercase font-custom text-white mt-1 font-bold">
            Our Discounted Dishes
          </h1>
          <img src={Img} alt="" />
        </div>

        {/* text & img */}
        <div>
          {PromocardData.map((item, index) => (
            <PromoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BurgerSlider;
