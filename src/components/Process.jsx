import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Consultation",
    desc:
      "Understanding client vision, requirements, and investment goals.",
  },

  {
    number: "02",
    title: "Planning & Design",
    desc:
      "Creating premium architectural concepts and luxury layouts.",
  },

  {
    number: "03",
    title: "Construction",
    desc:
      "Executing projects with advanced engineering and quality control.",
  },

  {
    number: "04",
    title: "Project Delivery",
    desc:
      "Delivering exceptional spaces with modern finishing and elegance.",
  },
];

export default function Process() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center max-w-[900px] mx-auto mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Work Process
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          How We
          <span className="text-[#d4a437]"> Build Excellence</span>

        </h1>

      </div>

      {/* PROCESS GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {process.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="relative group bg-white/5 border border-white/10 rounded-[35px] p-10 overflow-hidden hover:-translate-y-3 duration-500"
          >

            {/* NUMBER */}
            <h1 className="text-[90px] font-bold text-[#d4a437]/20 absolute top-5 right-6">

              {item.number}

            </h1>

            {/* TITLE */}
            <h2 className="relative z-10 text-white text-3xl font-bold">

              {item.title}

            </h2>

            {/* DESC */}
            <p className="relative z-10 text-gray-400 leading-8 mt-6">

              {item.desc}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}