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
        className="relative bg-gradient-to-r from-[#d4a437] to-[#b98a25] rounded-[40px] overflow-hidden px-8 lg:px-20 py-20"
      >

        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-white/10"></div>
        <div className="absolute bottom-[-120px] left-[-120px] w-[350px] h-[350px] rounded-full bg-black/10"></div>

        <div className="relative z-10 flex flex-col xl:flex-row items-center justify-between gap-10">

          <div className="max-w-[700px]">
            <h1 className="text-black text-[40px] lg:text-[65px] leading-[1] font-bold">
              Subscribe For
              <br />
              Premium Updates
            </h1>

            <p className="text-black/80 text-lg leading-8 mt-8">
              Get latest real estate launches, luxury property updates, and exclusive offers from Union Reality & Construction.
            </p>
          </div>

          <SubscribeForm
            layout="banner"
            submitLabel="SUBSCRIBE →"
            inputPlaceholder="Enter your email"
          />

        </div>

      </motion.div>

    </section>
  );
}
