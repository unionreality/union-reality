import { motion } from "framer-motion";

export default function LuxuryBanner() {
  return (
    <section className="relative bg-[#07192f] py-24 overflow-hidden">

      {/* MOVING TEXT */}
      <div className="rotate-[-3deg]">

        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >

          <h1 className="text-[90px] lg:text-[140px] font-extrabold text-white/5 uppercase px-10">

            Luxury Villas • Premium Apartments • Commercial Spaces • Interior Design •

          </h1>

          <h1 className="text-[90px] lg:text-[140px] font-extrabold text-white/5 uppercase px-10">

            Luxury Villas • Premium Apartments • Commercial Spaces • Interior Design •

          </h1>

        </motion.div>

      </div>

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center px-6">

          <h1 className="text-white text-[45px] lg:text-[90px] font-bold leading-[1]">

            Building Luxury
            <span className="text-[#d4a437]"> Experiences</span>

          </h1>

          <p className="text-gray-400 text-lg leading-9 mt-8 max-w-[850px] mx-auto">

            Union Reality & Construction creates timeless landmarks with luxury architecture and world-class developments.

          </p>

        </div>

      </div>

    </section>
  );
}