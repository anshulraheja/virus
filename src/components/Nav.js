import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "./../assets/short-sleeve-t-shirt.png";

function Nav() {
  return (
    <>
      <header class="nav text-gray-600 body-font bg-second">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img src={icon} className="w-12 h-12 p-2" />
              <span class="ml-3 text-xl">Meto</span>
            </a>
          </Link>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/">
              <motion.a
                whileHover={{ zoom: 1.2 }}
                class="mr-5 text-black  hover:text-first "
              >
                Home
              </motion.a>
            </Link>
            <motion.a
              href="/#product"
              whileHover={{ zoom: 1.2 }}
              class="mr-5 text-black  hover:text-first "
            >
              Product
            </motion.a>

            <Link to="/about">
              <motion.a
                class="mr-5 text-black  hover:text-first "
                whileHover={{ zoom: 1.2 }}
              >
                About
              </motion.a>
            </Link>

            <Link to="/features">
              <motion.a
                whileHover={{ zoom: 1.2 }}
                class="mr-5 text-black  hover:text-first  "
              >
                Features
              </motion.a>
            </Link>
            <Link to="/video">
              <motion.a
                whileHover={{ zoom: 1.2 }}
                class="mr-5 text-black  hover:text-first "
              >
                Demonstration
              </motion.a>
            </Link>
            <Link to="/pricing">
              <motion.a
                whileHover={{ zoom: 1.2 }}
                class="mr-5 text-black nav-pricing  hover:bg-third"
              >
                Pricing
              </motion.a>
            </Link>
          </nav>
          <Link to="/business">
            <button class="inline-flex items-center bg-first border-0 py-2 px-6 focus:outline-none hover:bg-third rounded text-white text-base mt-4 md:mt-0 ">
              For Businesses
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Nav;
