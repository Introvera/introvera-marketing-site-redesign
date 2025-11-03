// "use client";

// import { motion } from "framer-motion";

// const Hero: React.FC = () => {
//   return (
//     <section
//       id="hero"
//       className="relative -mt-[68px] flex flex-col min-h-[600px] sm:min-h-[700px] md:min-h-[720px] lg:min-h-screen overflow-hidden"
//       style={{
//         backgroundImage:
//           "url('/backgrounds/hero-bg.png'), radial-gradient(circle at top right, rgba(85, 33, 181, 0.15), rgba(0, 0, 0, 0.95))",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Text content */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 flex flex-col items-center justify-center gap-10 max-w-[1055px] mx-auto px-6 sm:pt-50 py-20 pt-40  text-center"
//       >
//         <div>
//           <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-3">
//             INNOVATING TOMORROW,
//             <br />
//             <span className="text-transparent bg-clip-text gradient-text-line">
//               ONE LINE OF CODE AT A TIME
//             </span>
//           </h1>

//           <p className="text-neutral-300 text-base sm:text-lg max-w-4xl mx-auto mt-3">
//             Every great innovation begins with a spark, and for us, that spark
//             is technology. We transform ideas into impactful digital experiences
//             that move the world forward, crafting solutions that are smart,
//             scalable, and full of purpose.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//           {/* Left Gradient Button */}
//           <a href="#contact" className="scroll-smooth">
//   <button className="w-[140px] sm:w-[174px] h-[50px] sm:h-[56px] rounded-full bg-gradient-to-r from-[#4C01AE] to-[#B38CFF] text-white font-semibold text-base sm:text-lg hover:opacity-90 transition cursor-pointer">
//     Get Started
//   </button>
// </a>

          
          

//           {/* Right Gradient Border Button */}
//           <a href="#projects" className="rounded-full bg-gradient-to-l from-[#4C01AE] to-[#B38CFF] p-[2px] w-[140px] sm:w-[174px] h-[50px] sm:h-[56px] ">
//   <button className="w-full h-full rounded-full border-2 border-transparent bg-black text-white font-semibold text-base sm:text-lg hover:bg-[#4C01AE]/20 transition cursor-pointer">
//     View Our Work
//   </button>
// </a>

//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;
"use client";

import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      // if your navbar is 68px tall, this keeps the hero perfectly centered below it on lg+
      className="
        relative
        flex 
        items-center
        justify-center
        min-h-screen
        overflow-hidden
      "
      style={{
        backgroundImage:
          "url('/backgrounds/hero-bg.png'), radial-gradient(circle at top right, rgba(85, 33, 181, 0.15), rgba(0, 0, 0, 0.95))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-[1055px] mx-auto px-6 text-center"
      >
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-3">
            INNOVATING TOMORROW,
            <br />
            <span className="text-transparent bg-clip-text gradient-text-line">
              ONE LINE OF CODE AT A TIME
            </span>
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg max-w-4xl mx-auto mt-3">
            Every great innovation begins with a spark, and for us, that spark
            is technology. We transform ideas into impactful digital experiences
            that move the world forward, crafting solutions that are smart,
            scalable, and full of purpose.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Left Gradient Button */}
          <a href="#contact" className="scroll-smooth">
            <button className="w-[140px] sm:w-[174px] h-[50px] sm:h-[56px] rounded-full bg-gradient-to-r from-[#4C01AE] to-[#B38CFF] text-white font-semibold text-base sm:text-lg hover:opacity-90 transition cursor-pointer">
              Get Started
            </button>
          </a>

          {/* Right Gradient Border Button */}
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-l from-[#4C01AE] to-[#B38CFF] p-[2px] w-[140px] sm:w-[174px] h-[50px] sm:h-[56px]"
          >
            <button className="w-full h-full rounded-full border-2 border-transparent bg-black text-white font-semibold text-base sm:text-lg hover:bg-[#4C01AE]/20 transition cursor-pointer">
              View Our Work
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;