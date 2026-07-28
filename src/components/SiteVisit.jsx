import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function SiteVisit() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[40px] border border-white/10"
      >

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-[#03142b]/85"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 p-10 lg:p-20">

          <div>
            <div className="flex items-center gap-5 mb-5">
              <div className="w-16 h-[2px] bg-[#d4a437]"></div>
              <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
                Book Site Visit
              </span>
            </div>

            <h1 className="text-white text-[45px] lg:text-[80px] leading-[1] font-bold">
              Schedule Your
              <span className="text-[#d4a437]"> Property Visit</span>
            </h1>

            <p className="text-gray-300 text-lg leading-9 mt-10">
              Visit our premium gated community plots and farm lands with expert guidance from Union Reality & Construction.
            </p>

            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#d4a437] text-black flex items-center justify-center text-2xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-gray-400">Call Us</p>
                  <h3 className="text-white text-2xl font-semibold">+91 99010 79241</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-gray-400">WhatsApp</p>
                  <h3 className="text-white text-2xl font-semibold">+91 99010 79241</h3>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#d4a437] text-black flex items-center justify-center text-2xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <h3 className="text-white text-2xl font-semibold">Bangalore, Karnataka</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 lg:p-10">
            <h2 className="text-white text-4xl font-bold mb-10">Request A Callback</h2>
            <ContactForm submitLabel="Book Free Site Visit →" />
          </div>

        </div>

      </motion.div>

    </section>
  );
}
