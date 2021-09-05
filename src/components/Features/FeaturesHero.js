import React from "react";

function FeaturesHero() {
  return (
    <div>
      <section class="s-hero text-gray-600 body-font px-16 py-1 ">
        <div
          class="container mx-auto flex  md:flex-row flex-col items-center"
          style={{ height: "100%" }}
        >
          <div class="features-banner lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            {/* class="object-cover object-center rounded" */}
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Features
            </h1>
            <p class="mb-8 leading-relaxed">
              The product is Direct to consumer, has a good battery life that
              lasts at least 48hours. It cautions you about diseases including
              Ischemia, Arrhythmia, Apnea and Pulmonary edema. Detection of
              transient phenomena, Rapid response to developing clinical
              situations and Fast data analysis leads to Right treatment at the
              right time as further diagnostic and therapeutic measures can be
              taken
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-first border-0 py-2 px-6 focus:outline-none hover:bg-fourth rounded text-lg">
                <a href="#stats">Stats</a>
              </button>
            </div>
          </div>
        </div>
        <div id="stats"></div>
      </section>
    </div>
  );
}

export default FeaturesHero;
