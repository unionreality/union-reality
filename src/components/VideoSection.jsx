import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden bg-[#07192f]">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative h-[700px] rounded-[40px] overflow-hidden"
      >

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

          <div className="flex items-center gap-5 mb-6">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Watch Company Story
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[85px] leading-[1] font-bold max-w-[1000px]">

            Building The Future
            <span className="text-[#d4a437]"> With Innovation</span>

          </h1>

          {/* PLAY BUTTON */}
          <button className="mt-12 w-28 h-28 rounded-full bg-[#d4a437] text-black text-3xl flex items-center justify-center hover:scale-110 duration-300 shadow-2xl">

            <FaPlay className="ml-2" />

          </button>

        </div>

      </motion.div>

    </section>
  );
}