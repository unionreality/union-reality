import { motion } from "framer-motion";
import SubscribeForm from "./SubscribeForm";

export default function Newsletter() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto text-center"
      >

        <div className="flex items-center justify-center gap-5 mb-5">
          <div className="w-16 h-[2px] bg-[#d4a437]"></div>
          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Stay Updated
          </span>
        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">
          Subscribe For
          <span className="text-[#d4a437]"> New Launch Updates</span>
        </h1>

        <p className="text-gray-400 text-lg leading-9 mt-10 max-w-[850px] mx-auto">
          Get updates about premium gated community plots, farm lands, luxury projects, offers, and investment opportunities.
        </p>

        <SubscribeForm
          layout="inline"
          submitLabel="Subscribe Now →"
          inputPlaceholder="Enter Your Email Address"
        />

      </motion.div>

    </section>
  );
}
