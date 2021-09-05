import React, { useState } from "react";
import Plus from "./../assets/plus.svg";
import Minus from "./../assets/minus.svg";

function FAQ() {
  const [question, setquestion] = useState(0);
  return (
    <div className="cool-bg2">
      <div className="pt-16 features">
        <div className="container mx-auto pt-16 ">
          <div className="text-center pb-3 md:pb-10 xl:pb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 py-2">
              Frequently Asked Questions
            </h1>
            <div class="w-16 h-1 rounded-full bg-first inline-flex mb-5"></div>
          </div>
          <div className="w-10/12 mx-auto">
            <ul>
              <li className="mb-3 bg-second px-10 py-6  border-solid  border-first border-2 rounded-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                    Why should I buy the product ?
                  </h3>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      question === 0 ? setquestion(null) : setquestion(0)
                    }
                  >
                    {question === 0 ? (
                      <img src={Minus} alt="" />
                    ) : (
                      <img src={Plus} alt="" />
                    )}
                  </div>
                </div>
                {question === 0 && (
                  <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800  text-sm md:text-base  xl:text-lg rounded-b-lg">
                    Cautions you about diseases including, but not limited to
                    Ischemia, Arrhythmia, Apnea and Pulmonary edema by Detection
                    of transient phenomena so that further diagnostic and
                    therapeutic measures can be taken
                  </p>
                )}
              </li>
              <li className="mb-3 bg-second px-10 py-6  border-solid  border-first border-2 rounded-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                    How to connect the t-shirt to a device ?
                  </h3>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      question === 1 ? setquestion(null) : setquestion(1)
                    }
                  >
                    {question === 1 ? (
                      <img src={Minus} alt="" />
                    ) : (
                      <img src={Plus} alt="" />
                    )}
                  </div>
                </div>
                {question === 1 && (
                  <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                    Open bluetooth settings in the device you want to connect.
                    The t-shirt will be discoverable as the Product id mentioned
                    on the payment receipt. Once your device discovers the
                    t-shirt in the bluetooth range, you will be able to pair
                    them.
                  </p>
                )}
              </li>
              <li className="mb-3 bg-second px-10 py-6  border-solid  border-first border-2 rounded-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                    Which devices can I connect ?
                  </h3>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      question === 2 ? setquestion(null) : setquestion(2)
                    }
                  >
                    {question === 2 ? (
                      <img src={Minus} alt="" />
                    ) : (
                      <img src={Plus} alt="" />
                    )}
                  </div>
                </div>
                {question === 2 && (
                  <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                    You can connect nearly any device ranging from mobile
                    phones, smart watches, tablets, to earpods/headphones and
                    desktops
                  </p>
                )}
              </li>
              <li className="mb-3 bg-second px-10 py-6  border-solid  border-first border-2 rounded-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-800 text-base  md:text-xl  xl:text-2xl w-10/12">
                    How long does the battery last ?
                  </h3>
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      question === 3 ? setquestion(null) : setquestion(3)
                    }
                  >
                    {question === 3 ? (
                      <img src={Minus} alt="" />
                    ) : (
                      <img src={Plus} alt="" />
                    )}
                  </div>
                </div>
                {question === 3 && (
                  <p className="pt-2 md:pt-3  lg:pt-5 text-gray-800 bg-gray-100 text-sm md:text-base  xl:text-lg rounded-b-lg">
                    The battery lasts atleast 48 hours. Charge it once and the
                    battery will last at least 2 days before you need to charge
                    it again.
                  </p>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
