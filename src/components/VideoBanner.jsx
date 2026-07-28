import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function VideoBanner() {
  return (
    <section className="relative h-[850px] overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-aerial-view-of-luxury-houses-1560921938408?download=1080p"
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[1200px]"
        >

          <div className="flex items-center justify-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Luxury Real Estate
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[100px] font-bold leading-[1]">

            Discover Premium
            <span className="text-[#d4a437]"> Investment Opportunities</span>

          </h1>

          <p className="text-gray-300 text-lg leading-9 mt-10 max-w-[850px] mx-auto">

            Experience world-class gated community plots, farm lands, and luxury developments with Union Reality & Construction.

          </p>

          {/* PLAY BUTTON */}
          <button className="mt-14 w-24 h-24 rounded-full bg-[#d4a437] hover:scale-110 duration-300 text-black text-3xl flex items-center justify-center mx-auto">

            <FaPlay />

          </button>

        </motion.div>

      </div>

    </section>
  );
}