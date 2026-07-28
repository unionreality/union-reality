import { motion } from "framer-motion";
import {
  FaTree,
  FaRoad,
  FaBolt,
  FaWater,
  FaShieldAlt,
  FaChild,
} from "react-icons/fa";

const amenities = [
  {
    icon: <FaRoad />,
    title: "Black Top Roads",
  },

  {
    icon: <FaBolt />,
    title: "Underground Electricity",
  },

  {
    icon: <FaWater />,
    title: "Water Connection",
  },

  {
    icon: <FaShieldAlt />,
    title: "24/7 Security",
  },

  {
    icon: <FaTree />,
    title: "Landscape Gardens",
  },

  {
    icon: <FaChild />,
    title: "Children Play Area",
  },
];

export default function PlotAmenities() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Modern Amenities
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

          World Class
          <span className="text-[#d4a437]"> Plot Amenities</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {amenities.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-[35px] p-10 hover:bg-[#d4a437] duration-500"
          >

            {/* ICON */}
            <div className="w-24 h-24 rounded-full bg-[#d4a437] group-hover:bg-black duration-500 text-black group-hover:text-white text-4xl flex items-center justify-center mb-8">

              {item.icon}

            </div>

            {/* TITLE */}
            <h2 className="text-white group-hover:text-black duration-500 text-[32px] font-bold leading-tight">

              {item.title}

            </h2>

          </motion.div>

        ))}

      </div>

    </section>
  );
}