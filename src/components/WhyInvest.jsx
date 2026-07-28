import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "High Appreciation",

    desc:
      "Plots and farm lands located in fast-growing investment zones.",
  },

  {
    number: "02",
    title: "Clear Documentation",

    desc:
      "Legally approved layouts with secure documentation and registration.",
  },

  {
    number: "03",
    title: "Premium Amenities",

    desc:
      "Gated communities with roads, parks, electricity, and water supply.",
  },

  {
    number: "04",
    title: "Future Growth",

    desc:
      "Excellent returns through infrastructure and urban development.",
  },
];

export default function WhyInvest() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP */}
      <div className="max-w-[900px] mb-20">

        <div className="flex items-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Why Invest With Us
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Smart Investment
          <span className="text-[#d4a437]"> For Your Future</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {reasons.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-[35px] p-10 hover:border-[#d4a437]/50 duration-500"
          >

            {/* NUMBER */}
            <h1 className="text-[70px] font-extrabold text-[#d4a437]/20">

              {item.number}

            </h1>

            {/* TITLE */}
            <h2 className="text-white text-[35px] font-bold mt-2">

              {item.title}

            </h2>

            {/* DESC */}
            <p className="text-gray-400 text-lg leading-9 mt-6">

              {item.desc}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}