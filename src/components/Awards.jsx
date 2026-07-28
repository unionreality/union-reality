import { motion } from "framer-motion";
import {
  FaAward,
  FaMedal,
  FaTrophy,
  FaStar,
} from "react-icons/fa";

const awards = [
  {
    icon: <FaAward />,
    title: "Best Luxury Developer",
  },

  {
    icon: <FaTrophy />,
    title: "Top Construction Company",
  
  },

  {
    icon: <FaMedal />,
    title: "Innovation In Design",
  },

  {
    icon: <FaStar />,
    title: "Customer Excellence Award",
  },
];

export default function Awards() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center max-w-[900px] mx-auto mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Company Achievements
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Awards &
          <span className="text-[#d4a437]"> Recognition</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {awards.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl hover:-translate-y-3 duration-500 overflow-hidden"
          >

            {/* ICON */}
            <div className="w-24 h-24 rounded-full bg-[#d4a437] text-black text-4xl flex items-center justify-center mb-10">

              {item.icon}

            </div>

            {/* TITLE */}
            <h2 className="text-white text-3xl font-bold leading-tight">

              {item.title}

            </h2>

            {/* YEAR */}
            <p className="text-[#d4a437] text-xl mt-5">

              {item.year}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}