import { motion } from "framer-motion";

const comparison = [
  {
    title: "Gated Community Plots",

    benefits: [
      "Ready For Registration",
      "Black Top Roads",
      "Underground Electricity",
      "Water Connection",
      "24/7 Security",
    ],
  },

  {
    title: "Farm Lands",

    benefits: [
      "Natural Green Environment",
      "Investment Growth",
      "Weekend Lifestyle",
      "Agriculture Opportunity",
      "Peaceful Living",
    ],
  },
];

export default function PropertyComparison() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Investment Options
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

          Choose Your
          <span className="text-[#d4a437]"> Perfect Investment</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-8">

        {comparison.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative bg-white/5 border border-white/10 rounded-[40px] p-10 overflow-hidden"
          >

            {/* BG GLOW */}
            <div className="absolute top-[-80px] right-[-80px] w-[200px] h-[200px] rounded-full bg-[#d4a437]/10 blur-[80px]"></div>

            {/* TITLE */}
            <h2 className="relative z-10 text-white text-[42px] font-bold">

              {item.title}

            </h2>

            {/* LIST */}
            <div className="relative z-10 mt-10 space-y-5">

              {item.benefits.map((benefit, i) => (

                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-full px-6 py-4"
                >

                  <div className="w-4 h-4 rounded-full bg-[#d4a437]"></div>

                  <p className="text-white text-lg">

                    {benefit}

                  </p>

                </div>

              ))}

            </div>

            {/* BUTTON */}
            <button className="relative z-10 mt-10 bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black font-semibold px-8 py-4 rounded-full">

              Explore Now →

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}