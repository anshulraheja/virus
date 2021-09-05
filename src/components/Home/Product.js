import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Banner from "./../../assets/Heart-Monitoring-T-Shirt.jpg";

function Product() {
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
    <div ref={ref}>
      <motion.section
        animate={animation}
        class="product  text-gray-600 body-font"
      >
        <div id="Product" class="flex justify-center align-middle">
          <h1 class="text-3xl md:text-5xl font-medium mb-2 text-center text-black saksham-white bg-third inline-block rounded-lg mx-auto py-4 px-4">
            Product
          </h1>
        </div>

        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src={Banner}
            />
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-first text-second mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Cost effective
                </h2>
                <p class="leading-relaxed text-base">
                  Reduces health care cost and is available for a reasonable
                  price.
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
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full  bg-first text-second mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Analysis of Data
                </h2>
                <p class="leading-relaxed text-base">
                  Rapid response to developing clinical situations and Fast data
                  analysis leads to Right treatment at the right time. This also
                  Reduces workload of medical assistants.
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
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full  bg-first text-second mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  Supports different Devices
                </h2>
                <p class="leading-relaxed text-base">
                  You can connect the t shirt to Mobile Phones, Smart Watches,
                  Tablets as well as Earpods/Headphones for voice response to
                  developing clinical situations.
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
        </div>
      </motion.section>
    </div>
  );
}

export default Product;
