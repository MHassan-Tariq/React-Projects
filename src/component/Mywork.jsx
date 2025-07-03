import React from "react";

const Mywork = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web developement Portfolio! Explore a collection of
        Projects showcasing my expertise in front-end developement
      </p>
      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        <div className="aspect-square bg-[url('assets/work-1.png')] bg-no-repeat
         bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3
           px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Frontend Project</h2>
              <p className="text-sm text-gray-700">Web Design</p>
            </div>
            <div
              className="border rounded-full border-black w-9
aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300
 transition"
            >
              <img src="assets/send-icon.png" alt="" className="w-5" />
            </div>
          </div>
        </div>
        {/* <!-- --------------- --> */}

        <div className="aspect-square bg-[url('assets/work-2.png')] bg-no-repeat bg-cover bg-center
         rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
          py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Geo Base App</h2>
              <p className="text-sm text-gray-700">Mobile App</p>
            </div>
            <div
              className="border rounded-full border-black w-9
                aspect-square flex items-center justify-center
                 shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
            >
              <img src="assets/send-icon.png" alt="" className="w-5" />
            </div>
          </div>
        </div>

        {/* <!-- --------------- -->
 <!-- --------------- --> */}

        <div className="aspect-square bg-[url('assets/work-3.png')] bg-no-repeat bg-cover 
        bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 
          left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 
          group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">Photography Site</h2>
              <p className="text-sm text-gray-700">Photo Maniupulation</p>
            </div>
            <div
              className="border rounded-full border-black w-9
                aspect-square flex items-center justify-center
                 shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
            >
              <img src="assets/send-icon.png" alt="" className="w-5" />
            </div>
          </div>
        </div>
        {/* 
<!-- --------------- -->
 <!-- --------------- --> */}

        <div className="aspect-square bg-[url('assets/work-4.png')] bg-no-repeat bg-cover 
        bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5
           left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 
           group-hover:bottom-7">
            <div>
              <h2 className="font-semibold">UI/UX Design</h2>
              <p className="text-sm text-gray-700">Figma Design</p>
            </div>
            <div
              className="border rounded-full border-black w-9
                aspect-square flex items-center justify-center shadow-[2px_2px_0_#000]
                 group-hover:bg-lime-300 transition"
            >
              <img src="assets/send-icon.png" alt="" className="w-5" />
            </div>
          </div>
        </div>

        {/* <!-- --------------- --> */}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700
         border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto
          my-20 hover:bg-lighthover duration-500 dark:text-white dark:border-white
           dark:hover:bg-darkhover"
      >
        Show more
        <img src="assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
        <img
          src="assets/right-arrow-bold-dark.png"
          alt=""
          className="w-4 hidden dark:block"
        />
      </a>
    </div>
  );
};

export default Mywork;
