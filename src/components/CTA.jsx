import { motion } from "framer-motion";
import ContactButton from "./ContactButton";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="relative rounded-[40px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 py-28 px-8 lg:px-20 text-center"
        >

          <h1 className="text-white text-[45px] lg:text-[80px] leading-[1] font-bold max-w-[1000px] mx-auto">

            Ready To Build Your
            <span className="text-[#d4a437]"> Dream Property?</span>

          </h1>

          <p className="text-gray-300 text-lg leading-9 max-w-[850px] mx-auto mt-10">

            Union Reality & Construction creates luxury spaces with modern design, superior quality, and world-class living experiences.

          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">

            <ContactButton className="bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black font-semibold px-10 py-5 rounded-full">

              GET STARTED →

            </ContactButton>

            <ContactButton className="border border-white/20 text-white hover:bg-white hover:text-black duration-300 px-10 py-5 rounded-full">

              CONTACT US

            </ContactButton>

          </div>

        </motion.div>

      </div>

    </section>
  );
}