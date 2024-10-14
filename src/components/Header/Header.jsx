/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import Button from "../../components/shared/Button";
import Logo from "../../assets/images/logo.png";
import backgroundImage from "../../assets/images/asset 84.png";

const Header = () => {
  // for menu btn
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // for sticky Navbar
  const [isSticky, SetisSticky] = useState(false);

  // nav links
  const menuLinks = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Menu", link: "/menu" },
    { id: 3, name: "About Us", link: "/aboutus" },
    { id: 4, name: "Contact Us", link: "/contactus" },
    { id: 5, name: "Our Chefs", link: "/ourchefs" },
  ];

  // for menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // use Effect for Stickynavbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        SetisSticky(true);
      } else {
        SetisSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // css for sticky navbar
  const navbarStyle = isSticky
    ? {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }
    : {};

  const textColor = isSticky ? "text-white" : "text-white";

  return (
    <>
      <header
        className={`w-full z-50 ${isSticky ? "sticky top-0" : "absolute"}`}
        style={navbarStyle}
      >
        <nav className="px-4 py-4 sm:px-6 border-b lg:px-8 font-custom tracking-[1px] font-[400]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={Logo} alt="Logo" className="h-8 w-auto sm:h-16" />
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                className={`${textColor} hover:text-primary`}
                onClick={toggleMenu}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <ul
                className={`flex space-x-6 items-center ${textColor} uppercase text-xs tracking-[1px]`}
              >
                {menuLinks.map((item) => (
                  <li key={item.id} className="relative group">
                    <a href={item.link} className="hover:text-primary/95">
                      {item.name}
                    </a>
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>{" "}
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-4">
                <FaShoppingCart className={`${textColor} cursor-pointer`} />
                <div className="hidden lg:block border-l-2 border-gray-300 h-6"></div>
                <h4
                  className={`hidden lg:block text-xs font-custom tracking-[1px] ${textColor}`}
                >
                  Book A Table: +1 800 123 45 78
                </h4>
                <Button text="Order Now" />
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div
              className="lg:hidden mt-4 bg-white p-4 rounded-lg"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <ul className="flex flex-col space-y-4 text-white uppercase text-sm tracking-[1px]">
                {menuLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.link} className="hover:text-primary/95 block">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col space-y-4 text-white">
                <div className="flex items-center justify-between">
                  <FaShoppingCart className="text-white" />
                </div>
                <h4 className="text-xs font-normal tracking-[1px]">
                  Book A Table: +1 800 123 45 78
                </h4>
                <Button text="Order Now" />
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
