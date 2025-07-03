import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 ">
      <img
        src="assets/profile-img.png"
        alt=""
        className="rounded-full w-32 mt-40"
      />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi I'm Hassan Tariq{" "}
        <img src="assets/hand-icon.png" alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        fontend web developer based in Pakistan.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a frontend developer from Lahore, PK with 5 year of experience in
        multiple companies like Microsoft,Tesla and Apple.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820eb] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          Contact me{" "}
          <img src="assets/right-arrow-white.png" alt="" className="w-4" />
        </a>

        <a
          href="images/logo.png"
          download
          className="px-10 py-3 border rounded-full border bg-gray-500 flex bg-white items-center gap-2 bg-white dark:text-black"
        >
          my resume <img src="assets/download-icon.png" alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
