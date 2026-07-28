import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services does Union Reality provide?",

    answer:
      "We provide luxury villa construction, apartment developments, commercial spaces, architecture, and interior design services.",
  },

  {
    question: "Do you offer customized home designs?",

    answer:
      "Yes, we create customized luxury homes based on client requirements, lifestyle, and modern architectural trends.",
  },

  {
    question: "Which cities do you operate in?",

    answer:
      "Currently we operate across Bangalore, Hyderabad, Chennai, Mumbai, and expanding into more premium locations.",
  },

  {
    question: "How can I schedule a consultation?",

    answer:
      "You can contact us through the website form or request a callback directly from our support team.",
  },
];

export default function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center max-w-[900px] mx-auto mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Frequently Asked Questions
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Questions About
          <span className="text-[#d4a437]"> Our Services</span>

        </h1>

      </div>

      {/* FAQ */}
      <div className="max-w-[1000px] mx-auto space-y-6">

        {faqs.map((faq, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="border border-white/10 rounded-[30px] bg-white/5 backdrop-blur-xl overflow-hidden"
          >

            {/* QUESTION */}
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="w-full flex items-center justify-between text-left px-8 py-7"
            >

              <h2 className="text-white text-xl lg:text-2xl font-semibold">

                {faq.question}

              </h2>

              <div className="text-[#d4a437] text-3xl">

                {active === index ? <FiMinus /> : <FiPlus />}

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
                  className="overflow-hidden"
                >

                  <p className="text-gray-400 leading-8 px-8 pb-8 text-lg">

                    {faq.answer}

                  </p>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

        ))}

      </div>

    </section>
  );
}