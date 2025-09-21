import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    // THE ONLY CHANGE IS HERE: flex-col is now flex-col-reverse
    <main className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between min-h-[calc(90vh-6rem)] gap-12 lg:gap-4 px-12">
      {/* This text block will now appear AFTER the model on mobile */}
      <div className="max-w-xl text-center lg:text-left z-10 w-full">
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,00.4)] rounded-full mx-auto lg:mx-0">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-4">
            <i className="bx bx-diamond"></i>
            Full Stack Dev
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          Building Modern Web Applications
        </h1>
        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-lg mx-auto lg:mx-0">
          Specializing in React.js and Node.js, with expertise in leveraging AI
          and building real-time web solutions.
        </p>
        <div className="flex gap-4 mt-12 justify-center lg:justify-start">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href=""
          >
            About Me <i className="bx bx-link-external"> </i>
          </a>
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href=""
          >
            Contact Me <i className="bx bx-link-external"> </i>
          </a>
        </div>
      </div>

      {/* This model will now appear BEFORE the text on mobile */}
      <div className="w-full md:w-3/4 lg:w-1/2 h-[400px] lg:h-full">
        <Spline scene="https://prod.spline.design/Zb3zEGQR8WLGIBSs/scene.splinecode" />
      </div>
    </main>
  );
};

export default Hero;