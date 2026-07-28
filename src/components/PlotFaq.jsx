import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "Are the plots BMRDA approved?",

    answer:
      "Yes, all our gated community plots are legally approved with proper documentation.",
  },

  {
    question: "Is bank loan facility available?",

    answer:
      "Yes, leading banks provide loan facilities for eligible projects and buyers.",
  },

  {
    question: "Do you provide A-Khata and E-Khata properties?",

    answer:
      "Yes, our projects include A-Khata and E-Khata ready properties.",
  },

  {
    question: "Are amenities already developed?",

    answer:
      "Yes, roads, electricity, water connection, parks, and security are developed.",
  },
];

export default function PlotFaq() {
  const [active, setActive] = useState(0);

  const toggleFaq = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Frequently Asked Questions
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

          Questions About
          <span className="text-[#d4a437]"> Our Properties</span>

        </h1>

      </div>

      {/* FAQ */}
      <div className="max-w-[1000px] mx-auto space-y-6">

        {faqData.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-[30px] overflow-hidden"
          >

            {/* QUESTION */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between text-left p-8"
            >

              <h2 className="text-white text-2xl font-semibold pr-5">

                {item.question}

              </h2>

              <div className="text-[#d4a437] text-xl">

                {active === index ? <FaMinus /> : <FaPlus />}

              </div>

            </button>

            {/* ANSWER */}
            <AnimatePresence>

              {active === index && (

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >

                  <div className="px-8 pb-8">

                    <p className="text-gray-400 leading-8 text-lg">

                      {item.answer}

                    </p>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </section>
  );
}