import { motion } from "framer-motion";

export default function ScrollingText() {
  return (
    <section className="relative bg-[#03142b] py-10 overflow-hidden border-y border-white/10">

      <motion.div
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="flex whitespace-nowrap"
      >

        <h1 className="text-[60px] lg:text-[110px] font-extrabold uppercase text-white px-10">

          UNION REALITY & CONSTRUCTION ✦ LUXURY REAL ESTATE ✦ MODERN ARCHITECTURE ✦

        </h1>

        <h1 className="text-[60px] lg:text-[110px] font-extrabold uppercase text-white px-10">

          UNION REALITY & CONSTRUCTION ✦ LUXURY REAL ESTATE ✦ MODERN ARCHITECTURE ✦

        </h1>

      </motion.div>

    </section>
  );
}