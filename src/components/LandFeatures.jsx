import { motion } from "framer-motion";
import {
  FaTree,
  FaRoad,
  FaShieldAlt,
  FaWater,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Gated Community",

    desc:
      "24/7 security with premium gated layouts and modern infrastructure.",
  },

  {
    icon: <FaRoad />,
    title: "Wide Roads",

    desc:
      "Well-planned internal roads with street lighting and drainage systems.",
  },

  {
    icon: <FaTree />,
    title: "Green Environment",

    desc:
      "Nature-friendly farm lands surrounded by greenery and fresh air.",
  },

  {
    icon: <FaWater />,
    title: "Water & Electricity",

    desc:
      "Essential utilities ready for construction and farming activities.",
  },
];

export default function LandFeatures() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Plot Amenities
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Premium Features For
          <span className="text-[#d4a437]"> Smart Investment</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {features.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-[35px] p-10 hover:-translate-y-3 duration-500"
          >

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-[#d4a437] text-black text-3xl flex items-center justify-center mb-8">

              {item.icon}

            </div>

            {/* TITLE */}
            <h2 className="text-white text-3xl font-bold">

              {item.title}

            </h2>

            {/* DESC */}
            <p className="text-gray-400 leading-8 mt-5">

              {item.desc}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}