import { motion } from "framer-motion";

const cards = [
  {
    title: "Luxury Lifestyle",
    desc:
      "Premium living spaces designed with elegance and world-class comfort.",
  },

  {
    title: "Modern Architecture",
    desc:
      "Innovative designs with futuristic construction and aesthetics.",
  },

  {
    title: "Trusted Investment",
    desc:
      "High-value real estate developments with strong growth potential.",
  },
];

export default function GradientCards() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      <div className="grid lg:grid-cols-3 gap-8">

        {cards.map((card, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="relative rounded-[35px] overflow-hidden p-[1px]"
          >

            {/* BORDER */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4a437] via-[#ffffff30] to-[#d4a437]"></div>

            {/* CONTENT */}
            <div className="relative bg-[#07192f] rounded-[35px] p-10 h-full">

              <h2 className="text-white text-[35px] font-bold leading-tight">

                {card.title}

              </h2>

              <p className="text-gray-400 leading-9 mt-6 text-lg">

                {card.desc}

              </p>

              <button className="mt-10 border border-white/10 text-white px-7 py-3 rounded-full hover:bg-[#d4a437] hover:text-black duration-300">

                Learn More →

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}