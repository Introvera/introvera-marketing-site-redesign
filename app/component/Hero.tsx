"use client";

import { motion } from "framer-motion";
import Navbar from "../component/Navbar";

const Hero: React.FC = () => {
  return (
   <section
  id="hero"
  className="relative -mt-[68px] flex flex-col min-h-[600px] sm:min-h-[700px] md:min-h-[720px] lg:min-h-screen overflow-hidden"
  style={{
    backgroundImage:
      "url('/backgrounds/hero-bg.png'), radial-gradient(circle at top right, rgba(85, 33, 181, 0.15), rgba(0, 0, 0, 0.95))",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 flex flex-col items-center justify-center gap-10 max-w-[1055px] h-[332px] mx-auto my-auto"
  style={{

    
    opacity: 1,
  }}
>
<div className="text-center px-4 sm:px-0">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-2">
    INNOVATING TOMORROW,
    <br />
    <span className="text-transparent bg-clip-text gradient-text-line">  
      ONE LINE OF CODE AT A TIME
    </span>
  </h1>

  <p className="text-neutral-300 text-base sm:text-lg max-w-4xl text-center mt-0">
    Every great innovation begins with a spark, and for us, that spark is
    technology. We transform ideas into impactful digital experiences that
    move the world forward, crafting solutions that are smart, scalable,
    and full of purpose.
  </p>
</div>



<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  {/* Left Gradient Button */}
  <button className="w-[140px] sm:w-[174px] h-[50px] sm:h-[56px] rounded-full bg-gradient-to-r from-[#4C01AE] to-[#B38CFF] text-white font-semibold text-base sm:text-lg hover:opacity-90 transition">
    Get Started
  </button>

  {/* Right Gradient Border Button */}
  <div className="rounded-full bg-gradient-to-l from-[#4C01AE] to-[#B38CFF] p-[2px] w-[140px] sm:w-[174px] h-[50px] sm:h-[56px]">
    <button className="w-full h-full rounded-full border-2 border-transparent bg-black text-white font-semibold text-base sm:text-lg hover:bg-[#4C01AE]/20 transition">
      View Our Work
    </button>
  </div>
</div>

      </motion.div>
    </section>
  );
};

export default Hero;
