import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const sidemenu = useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  function openmenu() {
    console.log("clicked");
    sidemenu.style.transform = "translateX(-16rem)";
  }

  function closemenu() {
    sidemenu.style.transform = "translateX(16rem)";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    // Force default to dark mode if not set
    if (!localStorage.theme) {
      localStorage.theme = 'dark';
    }
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  const toggletheme = () => {
    document.documentElement.classList.toggle('dark');
    // Optionally update localStorage for persistence
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };


  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center  justify-between z-50 ${
        isScrolled
          ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darktheme dark:shadow-white/20"
          : ""
      }`}
    >
      <img
        src="assets/logo.png"
        alt="logo"
        className="w-28 cursor-pointer mr-14 dark:hidden"
      />
      <img
        src="assets/logo_dark.png"
        alt="logo"
        className="w-28 cursor-pointer mr-14 hidden dark:block"
      />
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/50 dark:bg-transparent ${
          isScrolled
            ? ""
            : "bg-white shadow-sm bg-opacity-50 dark:border-white/50 dark:bg-transparent"
        }`}
      >
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <button onClick={toggletheme} >
          <img src="assets/moon_icon.png" alt="" className="w-6 dark:hidden" />
          <img
            src="assets/sun_icon.png"
            alt=""
            className="w-6 hidden dark:block"
          />
        </button>

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
        >
          Contact
          <img src="assets/arrow-icon.png" alt="" className="w-3 dark:hidden" />
          <img
            src="assets/arrow-icon-dark.png"
            alt=""
            className="w-3 hidden dark:block"
          />
        </a>
        <button className="block md:hidden ml-3" onClick={openmenu}>
          <img src="assets/menu-black.png" alt="" className="w-6 dark:hidden" />
          <img
            src="assets/menu-white.png"
            alt=""
            className="w-6 hidden dark:block"
          />
        </button>
      </div>

      <ul
        ref={sidemenu}
        className="flex md:hidden flex-col py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen gap-4 bg-rose-50 transition duration-500 font-Ovo dark:bg-darkhover dark:text-white"
      >
        <div className="absolute right-6 top-6" onClick={closemenu}>
          <img
            src="assets/close-black.png"
            alt=""
            className="w-5 cursor-pointer dark:hidden "
          />

          <img
            src="assets/close-white.png"
            alt=""
            className="w-5 cursor-pointer hidden dark:block"
          />
        </div>
        <li>
          <a href="#home" onClick={closemenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closemenu}>
            About me
          </a>
        </li>
        <li>
          <a href="#services" onClick={closemenu}>
            Services
          </a>
        </li>
        <li>
          <a href="#work" onClick={closemenu}>
            My Work
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closemenu}>
            Contact me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
