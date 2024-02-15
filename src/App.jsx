import React from "react";
import DesktopImg from "/image-header-desktop.jpg";
import MobileImg from "/image-header-mobile.jpg";

const App = () => {
  return (
    <div className="w-full h-auto md:h-screen p-10 md:p-5 bg-veryDarkBlue flex justify-center items-center">
      <div className="md:w-[900px] w-[400px]  bg-darkStaturatedBlue  rounded-md overflow-hidden">
        <div className="md:flex justify-between items-center gap-2">
          {/* left side */}
          <div className="p-5 md:w-1/2 order-2 md:order-2">
            <div className="flex flex-col gap-4 items-center justify-center text-center md:text-left">
              <h1 className="text-3xl text-white font-bold font-primaryFont">
                Get <span className="text-softViolet">insites</span> that help
                your business grow.
              </h1>

              <p className="text-xs tracking-widest leading-5 font-normal font-secondayFont my-4 text-slightlyTransparentMain">
                Discover the benefitd of data analytics and make better
                decisions regarding reveneu,custome experience and overall
                efficiency
              </p>

              <div className="my-5 md:grid grid-cols-3 justify-between items-center space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-white text-2xl font-bold font-primaryFont">
                    10k+
                  </h2>
                  <p className="text-xs text-slightlyTransparentStats">
                    COMPANIES
                  </p>
                </div>

                <div>
                  <h2 className="text-white text-2xl font-bold font-primaryFont">
                    314
                  </h2>
                  <p className="text-xs text-slightlyTransparentStats">
                    TEMPLATES
                  </p>
                </div>

                <div>
                  <h2 className="text-white text-2xl font-bold font-primaryFont">
                    12M+
                  </h2>
                  <p className="text-xs text-slightlyTransparentStats">
                    QUERIES
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="md:order-2  order-1">
            <img
              className="hidden md:block bg-softViolet bg-blend-multiply overflow-hidden h-auto"
              src={DesktopImg}
              alt=""
            />

            <img
              className="md:hidden bg-softViolet bg-blend-multiply overflow-hidden h-auto"
              src={MobileImg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
