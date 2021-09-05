import React from "react";

function Story() {
  return (
    <div>
      <section class="s-hero text-gray-600 body-font px-16 py-1 ">
        <div
          class="container mx-auto flex  md:flex-row flex-col items-center"
          style={{ height: "100%" }}
        >
          <div class="about-banner lg:max-w-lg lg:w-full md:w-1/2 w-5/6 "></div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Our Story
            </h1>
            <p class="mb-8 leading-relaxed">
              We saw that it was the need of the hour to develop a product that
              would caution the users about developing clinical situations so
              that further diagnostic and therapeutic measures can be taken and
              the Right treatment can be provided at the right time
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-first border-0 py-2 px-6 focus:outline-none hover:bg-fourth rounded text-lg">
                <a href="#team">Meet our Team</a>
              </button>
            </div>
          </div>
        </div>
        <div id="team"></div>
      </section>
    </div>
  );
}

export default Story;
