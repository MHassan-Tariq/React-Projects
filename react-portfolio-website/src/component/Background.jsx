import React from "react";

const Background = () => {
  return (
    <div className="overflow-x-hidden font-Outfit leading-8 bg-white dark:bg-darktheme text-gray-900 dark:text-white">
      <div className="absolute -top-[80px] left-[500px] dark:hidden -z-50 w-80">
        <img src="assets/header-bg-color.png" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Background;
