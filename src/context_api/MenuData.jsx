/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import saladimg1 from "../assets/menu_titlesection/asset 5.png";
import saladimg2 from "../assets/menu_titlesection/asset 6.png";
import saladimg3 from "../assets/menu_titlesection/asset 7.png";
import saladimg4 from "../assets/menu_titlesection/asset 8.png";
import saladimg5 from "../assets/menu_titlesection/asset 9.png";
import saladimg6 from "../assets/menu_titlesection/asset 5.png";
import burgerimg1 from "../assets/menu_titlesection/asset 10.png";
import burgerimg2 from "../assets/menu_titlesection/asset 11.png";
import burgerimg3 from "../assets/menu_titlesection/asset 12.png";
import burgerimg4 from "../assets/menu_titlesection/asset 13.png";
import burgerimg5 from "../assets/menu_titlesection/asset 14.png";
import burgerimg6 from "../assets/menu_titlesection/asset 15.png";
import dessertsimg1 from "../assets/menu_titlesection/asset 22.png";
import dessertsimg2 from "../assets/menu_titlesection/asset 23.png";
import dessertsimg3 from "../assets/menu_titlesection/asset 24.png";
import dessertsimg4 from "../assets/menu_titlesection/asset 25.png";
import dessertsimg5 from "../assets/menu_titlesection/asset 26.png";
import dessertsimg6 from "../assets/menu_titlesection/asset 22.png";
import promocardImg1 from "../assets/promocardimg/asset 27.png";
import promocardImg2 from "../assets/promocardimg/asset 28.png";
import promocardImg3 from "../assets/promocardimg/asset 29.png";
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selectedMenu, setselectedMenu] = useState("salad");

  const MenuData = {
    salad: [
      {
        title: "FRESH SALAD",
        description: "Fresh greens with various toppings.",
        price: 12.0,
        imageUrl: saladimg1,
        isNew: true,
      },
      {
        title: "CAESAR SALAD",
        description:
          "Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
        price: 10.5,
        imageUrl: saladimg2,
        isNew: false,
      },
      {
        title: "GREEK SALAD",
        description:
          "Fresh cucumbers, tomatoes, olives, feta cheese, and olive oil.",
        price: 11.0,
        imageUrl: saladimg3,
        isNew: true,
      },
      {
        title: "COBB SALAD",
        description:
          "Chopped greens with bacon, chicken, avocado, egg, and blue cheese.",
        price: 14.0,
        imageUrl: saladimg4,
        isNew: false,
      },
      {
        title: "SPINACH SALAD",
        description:
          "Baby spinach with strawberries, almonds, and a light vinaigrette.",
        price: 12.5,
        imageUrl: saladimg5,
        isNew: true,
      },
      {
        title: "ARUGULA SALAD",
        description: "Peppery arugula, shaved parmesan, and lemon vinaigrette.",
        price: 9.0,
        imageUrl: saladimg6,
        isNew: false,
      },
    ],
    burger: [
      {
        title: "CHEESEY CHICKEN",
        description: "Chicken, Eggs, bacon, chorizo, mushrooms & spinach.",
        price: 16.0,
        imageUrl: burgerimg1,
        isNew: true,
      },
      {
        title: "BBQ BACON BURGER",
        description:
          "Grilled beef patty, crispy bacon, cheddar cheese, and BBQ sauce.",
        price: 15.0,
        imageUrl: burgerimg2,
        isNew: true,
      },
      {
        title: "MUSHROOM SWISS BURGER",
        description:
          "Juicy beef patty, sautéed mushrooms, Swiss cheese, and garlic aioli.",
        price: 14.5,
        imageUrl: burgerimg3,
        isNew: false,
      },
      {
        title: "SPICY CHICKEN BURGER",
        description:
          "Crispy chicken breast, jalapeños, pepper jack cheese, and spicy mayo.",
        price: 13.0,
        imageUrl: burgerimg4,
        isNew: true,
      },
      {
        title: "BACON AVOCADO BURGER",
        description:
          "Beef patty, bacon, fresh avocado slices, lettuce, and chipotle mayo.",
        price: 15.5,
        imageUrl: burgerimg5,
        isNew: false,
      },
      {
        title: "DOUBLE CHEESEBURGER",
        description:
          "Two beef patties, American cheese, lettuce, tomato, and pickles.",
        price: 18.0,
        imageUrl: burgerimg6,
        isNew: true,
      },
    ],
    desserts: [
      {
        title: "CHOCOLATE CAKE",
        description: "Rich chocolate cake with layers of frosting.",
        price: 10.0,
        imageUrl: dessertsimg1,
        isNew: true,
      },
      {
        title: "RED VELVET CAKE",
        description: "Moist red velvet cake with cream cheese frosting.",
        price: 9.5,
        imageUrl: dessertsimg2,
        isNew: true,
      },
      {
        title: "CHEESECAKE",
        description:
          "Classic New York-style cheesecake with a graham cracker crust.",
        price: 11.0,
        imageUrl: dessertsimg3,
        isNew: false,
      },
      {
        title: "TIRAMISU",
        description:
          "Italian dessert with layers of coffee-soaked ladyfingers and mascarpone.",
        price: 12.0,
        imageUrl: dessertsimg4,
        isNew: true,
      },
      {
        title: "STRAWBERRY SHORTCAKE",
        description:
          "Fresh strawberries and whipped cream between layers of sponge cake.",
        price: 8.5,
        imageUrl: dessertsimg5,
        isNew: false,
      },
      {
        title: "LEMON TART",
        description:
          "Tangy lemon filling in a buttery crust, topped with powdered sugar.",
        price: 9.0,
        imageUrl: dessertsimg6,
        isNew: true,
      },
    ],
  };
  const PromocardData = [
    {
      data: 1,
      image: promocardImg1,
      offer: "50% Off",
      title: "CHICHA MORADA",
      description:
        "Bacon, chorizo, roasted roma tomatoes, mushrooms & spinach. Beef, eggs, poached, fried.",
      price: "$30",
      actualPrice: "$40",
    },
    {
      data: 2,
      image: promocardImg2,
      offer: "25% Off",
      title: "CLASSIC BURGER",
      description:
        "Juicy beef patty with cheddar cheese, lettuce, tomato, pickles, and special sauce.",
      price: "$15",
      actualPrice: "$20",
    },
    {
      data: 3,
      image: promocardImg3,
      offer: "10% Off",
      title: "VEGAN BOWL",
      description:
        "Quinoa, avocado, kale, chickpeas, roasted sweet potatoes, and tahini dressing.",
      price: "$18",
      actualPrice: "$20",
    },
  ];

  return (
    <MenuContext.Provider
      value={{ selectedMenu, setselectedMenu, MenuData, PromocardData }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useData = () => useContext(MenuContext);
