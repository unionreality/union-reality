import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    title: "Years Experience",
  },

  {
    number: "250+",
    title: "Projects Completed",
  },

  {
    number: "120+",
    title: "Luxury Villas",
  },

  {
    number: "98%",
    title: "Happy Clients",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP TITLE */}
      <div className="flex items-center gap-5 justify-center mb-16">

        <div className="w-16 h-[2px] bg-[#d4a437]"></div>

        <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
          Company Achievements
        </span>

      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="relative group border border-white/10 bg-white/5 backdrop-blur-xl rounded-[35px] p-10 overflow-hidden hover:-translate-y-3 duration-500"
          >

            {/* GLOW EFFECT */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-[#d4a437]/20 to-transparent"></div>

            {/* NUMBER */}
            <h1 className="relative z-10 text-[70px] lg:text-[90px] font-bold text-[#d4a437] leading-none">

              {item.number}

            </h1>

            {/* TITLE */}
            <p className="relative z-10 text-white text-xl mt-5">

              {item.title}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}