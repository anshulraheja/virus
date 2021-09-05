import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Breif() {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div>
      <div className="cool-bg2" ref={ref}>
        <motion.section
          animate={animation}
          class=" features text-gray-600 body-font"
        >
          <div class="container px-5 pt-24 pb-12 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                What is Meto?
              </h1>
              <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Meto is an heart monitoring T-shirt.
              </p>
              <div class="flex mt-6 justify-center">
                <div class="w-16 h-1 rounded-full bg-first inline-flex"></div>
              </div>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div class="feature-box  p-4 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-first   text-second mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Improves time to diagnosis
                  </h2>
                  <p class="leading-relaxed text-base">
                    Cautions you about diseases including, but not limited to
                    Ischemia, Arrhythmia, Apnea and Pulmonary edema by Detection
                    of transient phenomena so that further diagnostic and
                    therapeutic measures can be taken
                  </p>
                  <a class="mt-3 text-first inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="feature-box p-4 flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-first text-second mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Battery life
                  </h2>
                  <p class="leading-relaxed text-base">
                    Upto 48 hours of battery life. Charge it once and the
                    battery will last at least 2 days before you need to charge
                    it again. Long-term continuous monitoring (upto 5 years) is
                    possible.
                  </p>
                  <a class="mt-3 text-first inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="feature-box p-4  flex flex-col text-center items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-first text-second  mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Multiple device connectivity
                  </h2>
                  <p class="leading-relaxed text-base">
                    The t-shirt can be connected wirelessly via bluetooth to as
                    many devices as you want. It can also be connected to the
                    medical personnel’s device to track the health conditions of
                    the patient.
                  </p>
                  <a class="mt-3 text-first inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <Link to="/pricing">
              <button class="flex mx-auto mt-16 text-white bg-first border-0 py-2 px-8 focus:outline-none hover:bg-fourth rounded text-lg">
                Buy Now
              </button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Breif;
