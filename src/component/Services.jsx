import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        i am a frontend developer from pakistan,Lahore with 5 year of experience
        in multiple companies like Microsoft,Tesla and Apple.
      </p>
      <div className="grid grid-cols-auto gap-6 my-10">
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black
         cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 
         dark:hover:bg-darkhover dark:hovr:shadow-white">
          <img src="assets/web-icon.png" alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">Web design</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Web developement is the process of building, programing...
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5 ">
            Read more <img src="assets/right-arrow.png" alt="" className="w-4" />
          </a>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black
         cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 
         dark:hover:bg-darkhover dark:hovr:shadow-white">
          <img src="assets/mobile-icon.png" alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">Mobile App</h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            App developement is the process of building, apps...
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5 ">
            Read more <img src="assets/right-arrow.png" alt="" className="w-4" />
          </a>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer
         hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover
          dark:hovr:shadow-white">
          <img src="assets/ui-icon.png" alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            UI/UX design
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            UI/UX Design is the process of building, interfaces...
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5 ">
            Read more <img src="assets/right-arrow.png" alt="" className="w-4" />
          </a>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black 
        cursor-pointer hover:bg-lighthover hover:-translate-y-1 duration-500 dark:hover:bg-darkhover 
        dark:hovr:shadow-white">
          <img src="assets/graphics-icon.png" alt="" className="w-10" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Graphic design
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
            Graphic Design is the process of building, graphic...
          </p>
          <a href="" className="flex items-center gap-2 text-sm mt-5 ">
            Read more <img src="assets/right-arrow.png" alt="" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
