import { motion } from "framer-motion";
import ContactButton from "./ContactButton";

export default function CallToAction() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full bg-[#d4a437]/10 blur-[120px]"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-[#d4a437]/10 blur-[120px]"></div>

      {/* BOX */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 rounded-[45px] overflow-hidden border border-white/10"
      >

        {/* BG IMAGE */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#03142b]/90"></div>

        {/* CONTENT */}
        <div className="relative z-10 py-24 px-8 lg:px-20 text-center">

          <div className="flex items-center justify-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Start Your Investment
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[90px] font-bold leading-[1] max-w-[1200px] mx-auto">

            Own Premium
            <span className="text-[#d4a437]"> Gated Plots & Farm Lands</span>

          </h1>

          <p className="text-gray-300 text-lg leading-9 mt-10 max-w-[850px] mx-auto">

            Invest in legally approved gated community plots and premium farm lands with excellent appreciation potential and world-class amenities.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-6 mt-14">

            <ContactButton className="bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black font-semibold px-10 py-5 rounded-full">

              Book Site Visit →

            </ContactButton>

            <ContactButton className="border border-white/20 hover:bg-white hover:text-black duration-300 text-white px-10 py-5 rounded-full">

              Contact Sales Team

            </ContactButton>

          </div>

        </div>

      </motion.div>

    </section>
  );
}