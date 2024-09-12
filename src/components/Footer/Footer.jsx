/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="md:flex justify-between items-start">
          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold">
              Restaurant St, Delicious City,
              <br /> London 9578, UK
            </h3>
            <p>Booking: +88-123-123456</p>
            <a
              href="#"
              className="text-orange-600 hover:underline mt-2 inline-block"
            >
              GET DIRECTION →
            </a>
          </div>

          {/* Timing & Button Section */}
          <div className="mt-6 md:mt-0 text-right">
            <p>Monday - Friday: 8AM - 9PM</p>
            <p>Saturday - Sunday: 8AM - 11PM</p>
            <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-lg">
              BOOK A TABLE
            </button>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Newsletter & Socials Section */}
        <div className="md:flex justify-between items-center">
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold">GET NEWS & OFFERS</h3>
            <p className="text-sm">Subscribe us & Get 25% Off.</p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 p-2 text-white rounded-l-md focus:outline-none"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-r-md">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 md:mt-0 text-right">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-orange-600">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange-600">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange-600">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-orange-600">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
