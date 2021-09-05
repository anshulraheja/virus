import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Statistics() {
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
      <div className="cool-bg2">
        <motion.section
          animate={animation}
          class="features text-gray-600 body-font"
        >
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div class="w-full sm:p-4 px-4 mb-6">
                <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
                  Many people have entrusted us with the task of monitoring
                  their health.
                </h1>
                <div class="leading-relaxed">
                  In just two months, we had a fantastic response from our
                  consumers.
                </div>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p class="leading-relaxed">Customers</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  1.8K
                </h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  35
                </h2>
                <p class="leading-relaxed">Partners</p>
              </div>
              <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
                <p class="leading-relaxed">Countries</p>
              </div>
            </div>
            <div class="stats-banner lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"></div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Statistics;
