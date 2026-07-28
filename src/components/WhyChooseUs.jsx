import { motion } from "framer-motion";
import {
  FaBuilding,
  FaAward,
  FaUsers,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBuilding />,
    title: "Modern Architecture",
    desc:
      "Innovative designs crafted with premium aesthetics and functionality.",
  },

  {
    icon: <FaAward />,
    title: "Premium Quality",
    desc:
      "Top-grade materials and engineering standards for lasting excellence.",
  },

  {
    icon: <FaUsers />,
    title: "Expert Team",
    desc:
      "Experienced architects, designers, and construction professionals.",
  },

  {
    icon: <FaHandshake />,
    title: "Trusted Service",
    desc:
      "Transparent process and customer-first approach in every project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center max-w-[900px] mx-auto mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Why Choose Us
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Excellence In Every
          <span className="text-[#d4a437]"> Detail</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">

        {features.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-[35px] p-10 overflow-hidden hover:-translate-y-3 duration-500"
          >

            {/* ICON */}
            <div className="w-20 h-20 rounded-full bg-[#d4a437] text-black flex items-center justify-center text-3xl mb-8">

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