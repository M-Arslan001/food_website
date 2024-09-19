/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Img from "../../assets/images/asset 75.png";
import Card from "../shared/Card";
import { useData } from "../../context_api/MenuData";
import Button from "../shared/Button";
const Title_Section = () => {
  const { selectedMenu, setselectedMenu, MenuData } = useData();

  const handleMenuClick = (menuName) => {
    setselectedMenu(menuName);
  };

  const navlinks = [
    {
      id: 1,
      name: "salad",
      link: "/salad",
    },
    {
      id: 2,
      name: "burger",
      link: "/burger",
    },
    {
      id: 3,
      name: "desserts",
      link: "/desserts",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-center text-primary font-custom py-6 font-semibold tracking-[1px]">
          <h3>Our Menu</h3>
          <h1 className="text-secondary font-custom text-3xl tracking-[1px]">
            Best Burger Menu
          </h1>
          <img
            src={Img}
            alt="Our Menu"
            className="mx-auto filter-primary py-2"
          />
        </div>
        {/* nav bar */}
        <div className="">
          <ul className="flex gap-4 lg:gap-12 justify-center items-center uppercase font font-custom">
            {navlinks.map((item) => (
              <li
                key={item.id}
                onClick={() => handleMenuClick(item.name)}
                className="relative group cursor-pointer"
              >
                <span className="hover:text-secondary">{item.name}</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center mt-6 mb-6">
        {MenuData[selectedMenu] &&
          MenuData[selectedMenu].map((item, index) => (
            <Card key={index} {...item} />
          ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Button
          text="View Full Menu"
          bgColor="bg-secondary"
          textColor={"text-white"}
        />
      </div>
    </>
  );
};

export default Title_Section;
