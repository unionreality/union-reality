import { motion } from "framer-motion";
import ContactButton from "./ContactButton";

export default function InvestmentBanner() {
  return (
    <section className="relative bg-[#03142b] py-24 overflow-hidden">

      {/* BG IMAGE */}
      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />

      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#03142b]/90"></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-[1200px] mx-auto text-center px-6"
      >

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Secure Investment
          </span>

        </div>

        <h1 className="text-white text-[50px] lg:text-[95px] leading-[1] font-bold">

          Own Your Future
          <span className="text-[#d4a437]"> With Premium Plots</span>

        </h1>

        <p className="text-gray-300 text-lg leading-9 mt-10 max-w-[900px] mx-auto">

          Invest in gated community plots and farm lands with excellent appreciation potential, modern amenities, and trusted legal documentation.

        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-6 mt-14">

          <ContactButton className="bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black font-semibold px-10 py-5 rounded-full">

            Book Site Visit →

          </ContactButton>

          <ContactButton className="border border-white/20 hover:bg-white hover:text-black duration-300 text-white px-10 py-5 rounded-full">

            Download Brochure

          </ContactButton>

        </div>

      </motion.div>

    </section>
  );
}