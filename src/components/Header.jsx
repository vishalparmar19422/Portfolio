import "boxicons/css/boxicons.min.css";
import { useState } from "react";

const Header = () => {
  const [openMenue, setOpenMenue] = useState(false);
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 
      data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
      className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
        Vishal
      </h1>
      <nav className="hidden md:flex  items-center gap-12">
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href=""
        >
          RESUME
        </a>
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href=""
        >
          ABOUT
        </a>
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href=""
        >
          PROJECTS
        </a>
        <a
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href=""
        >
          EXPERIENCE
        </a>
      </nav>
      <button className="hidden md:block bg-[#a7a7a7] text-base py-3 px-8 rounded-full border-none font-medium  transition-all duration-500 z-50 hover:bg-white text-black cursor-pointer">
        Hire Me
      </button>
      {/* Mobile Menu buttons   */}
      <button
        onClick={() => setOpenMenue((prev) => !prev)}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i className="bx bx-menu"> </i>
      </button>

      {/* Side Bar for Mobile */}
      <div
        className={`${
          openMenue ? "block" : "hidden"
        }  fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black opacity-80 backdrop-blur-md`}
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href=""
          >
            RESUME
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href=""
          >
            ABOUT
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href=""
          >
            PROJECTS
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href=""
          >
            EXPERIENCE
          </a>
          <button className=" bg-[#a7a7a7] text-base py-3 px-8 rounded-full border-none font-medium  transition-all duration-500 z-50 hover:bg-white text-black cursor-pointer">
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
