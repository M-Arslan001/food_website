/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Img from "../../assets/images/asset 75.png";
import Card from "../shared/Card"; // Assuming you have a Card component like before
import salad from "../../assets/images/asset 5.png";
const Title_Section = () => {
  const [selectedTab, setSelectedTab] = useState("salad");

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
      name: "deserts",
      link: "/deserts",
    },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case "salad":
        return (
          <div className="grid grid-cols-2  gap-4">
            <Card
              title="Caesar Salad"
              description="Fresh lettuce, Parmesan cheese, croutons, and Caesar dressing."
              price="12.00"
              imageUrl={salad}
            />
            <Card
              title="Greek Salad"
              description="Tomatoes, cucumbers, onions, feta cheese, and olives."
              price="10.00"
              imageUrl={salad}
            />
          </div>
        );
      case "burger":
        return (
          <div className="grid grid-cols-3 gap-4">
            <Card
              title="Classic Burger"
              description="Beef patty, lettuce, tomato, and cheese."
              price="15.00"
              imageUrl={salad}
            />
            <Card
              title="Veggie Burger"
              description="Grilled veggies and plant-based patty."
              price="13.00"
              imageUrl={salad}
              isNew="new"
            />
          </div>
        );
      case "deserts":
        return (
          <div className="grid grid-cols-3 gap-4 mb-9 py-5">
            <Card
              title="Chocolate Cake"
              description="Rich chocolate cake with a fudge frosting."
              price="8.00"
              imageUrl={salad}
            />
            <Card
              title="Ice Cream"
              description="Vanilla ice cream with chocolate syrup."
              price="6.00"
              imageUrl={salad}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="text-center text-primary font-custom py-6 font-semibold tracking-[1px]">
        <h3>Our Menu</h3>
        <h1 className="text-secondary font-custom text-3xl tracking-[1px]">
          Best Burger Menu
        </h1>
        <img src={Img} alt="Our Menu" className="mx-auto filter-primary py-2" />
      </div>
      {/* nav bar */}
      <div className="">
        <ul className="flex gap-4 lg:gap-12 justify-center items-center uppercase font font-custom">
          {navlinks.map((item) => (
            <li
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => setSelectedTab(item.name)}
            >
              <span className="hover:text-secondary">{item.name}</span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Render the selected content */}
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default Title_Section;
