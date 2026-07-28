import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Choose Property",

    desc:
      "Select your preferred gated plot or farm land investment.",
  },

  {
    step: "02",
    title: "Schedule Visit",

    desc:
      "Visit the project location with our property consultants.",
  },

  {
    step: "03",
    title: "Verify Documents",

    desc:
      "Check approvals, legal documents, and property details.",
  },

  {
    step: "04",
    title: "Book Your Plot",

    desc:
      "Complete registration and secure your investment property.",
  },
];

export default function InvestmentSteps() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Easy Investment Process
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

          Buy Property In
          <span className="text-[#d4a437]"> 4 Simple Steps</span>

        </h1>

      </div>

      {/* STEPS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {steps.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group relative bg-white/5 border border-white/10 rounded-[35px] p-10 hover:-translate-y-3 duration-500"
          >

            {/* STEP */}
            <h1 className="text-[80px] font-extrabold text-[#d4a437]/20">

              {item.step}

            </h1>

            {/* TITLE */}
            <h2 className="text-white text-[32px] font-bold mt-2">

              {item.title}

            </h2>

            {/* DESC */}
            <p className="text-gray-400 leading-8 mt-6">

              {item.desc}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}