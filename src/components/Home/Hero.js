import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <div className="cool-bg" id="hero">
        <motion.section
          class="overlay hero hero-shadow  text-gray-600 body-font px-16 py-1"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div
            class="container mx-auto flex   md:flex-row flex-col items-center"
            style={{ height: "100%" }}
          >
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Meto
              </h1>
              <p class="mb-8 leading-relaxed">
                Meto, a heart monitoring t-shirt, is not only limited to ECG
                Signal detection, but also includes tracking of RR intervals,
                HRV analysis and QRS detection. It keeps a track of Heart Rate,
                Oxygen Saturation, Respiratory Rate, Blood Pressure, Body
                Temperature, Nutrition, Activity and Sleep
              </p>
              <div class="flex justify-center">
                <Link to="/features">
                  <button class="inline-flex text-white bg-first border-0 py-2 px-6 focus:outline-none hover:bg-fourth rounded text-lg">
                    Watch the Video
                  </button>
                </Link>
              </div>
            </div>
            <motion.div class="banner lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></motion.div>
          </div>
          <div id="product"></div>
        </motion.section>
      </div>
    </>
  );
}

export default Hero;
