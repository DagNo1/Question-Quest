import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import x_icon from "../assets/icons/x.svg";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import sun from "../assets/icons/sun.svg"
import twitter from "../assets/icons/twitter.svg"
import github from "../assets/icons/github.svg"

const NavigationBar = ({seeThrough}) => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setMenuOpen] = useState(false);


  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Navigation links data
  const navigationLinks = [
    { textKey: "Home", link: "" },
    { textKey: "Services", link: "" },
    { textKey: "Pricings", link: "" },
    { textKey: "Contact", link: "" },
  ];

  // State to track whether the user has scrolled down. Used to change 
  // the bg of the nav bar 
  const [isScrolled, setIsScrolled] = useState(false);

   // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  // Attach scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky w-full z-20 top-0 left-0  ${isScrolled || !seeThrough? "bg-netural" : "bg-transparent"}`}>
      <div className={`flex items-center justify-between  ${isScrolled || !seeThrough ? "bgGradient" : ""}
       mx-auto p-4 px-1 md:px-4 lg:px-8 xl:px-16`}>


        <img src={logo} className="h-14 mr-3" alt="Logo" />


        {/* The button and icons near the hamburger */}
        <div className="flex lg:order-2">
          <ul className="flex items-center justify-center space-x-4 md:space-x-7">
            {/* This list item(button) wont show up untill the screen is lg */}
            <li className="hidden justify-center items-center lg:flex">
              <MainButton text="Try for free" />
            </li>

            <li>
              <Link
                href="#"
                className="block motion-safe:hover:scale-105 "
              >
                <img src={github} className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block motion-safe:hover:scale-105 "
              >
                <img src={twitter} className="w-6 h-6 " />
              </Link>
            </li>

            {/* here is the theme toggle */}
            <li>
              <button
                className="inline-flex items-center justify-center motion-safe:hover:scale-105"
              >
                <img src={sun} className="w-6 h-6" />
              </button>
            </li>
          </ul>

          {/* This is the hamburger button that only appears when the screen is smaller than lg and the menu is closed*/}
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center justify-center 
            p-2 ml-2 w-10 h-10 md:mx-4 lg:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <img src={hamburger} className={`${isMenuOpen ? `hidden` : `inline-flex`} h-10`} />
          </button>
        </div>


        {/* The navbar/navmenu */}
        <div
          className={`${isMenuOpen ? "absolute top-[1.7rem] right-0 md:right-7 bg-netural/80 lg:bg-transparent" : "hidden"} items-center justify-between 
          w-fill lg:flex lg:w-auto lg:order-1 lg:text-sm`}
          id="navbar-sticky"
        >
          <ul className={`flex flex-col font-medium ${isMenuOpen ? `bgGradient` : ``}
          py-8 lg:p-0 lg:bg-transparent lg:flex-row lg:space-x-1 `}>

            {/* This is the x_icon button that only appears when the screen is smaller than lg and the menu is open*/}
            <li>
              <button
                onClick={toggleMenu}
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="absolute top-3 right-4 lg:hidden"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <img src={x_icon} className="h-4 " />
              </button>
            </li>

            {/* All the links go here */}
            {navigationLinks.map((link, index) => (
              <li>
                <Link
                  href="#"
                  className="block text-white text-center motion-safe:hover:scale-110 
                  py-5 px-24 w-80 lg:w-full lg:px-4 "
                >
                  {link.textKey}
                </Link>

              </li>
            ))}

            {/* This list item(button) will be gone once the screen is lg */}
            <li className="flex justify-center
             py-4 lg:hidden">
              <MainButton text="Try for free" />
            </li>

          </ul>
        </div>



      </div>
    </nav>
  );
};

export default NavigationBar;
