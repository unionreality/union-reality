import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",

    role: "Villa Owner",

    text:
      "Union Reality delivered our dream villa with outstanding quality and modern design. The experience was seamless from start to finish.",
  },

  {
    name: "Priya Reddy",

    role: "Property Investor",

    text:
      "Professional team, luxury construction, and excellent customer support. Highly recommended for premium real estate projects.",
  },
];

export default function Testimonial() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center max-w-[900px] mx-auto mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Client Testimonials
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Trusted By
          <span className="text-[#d4a437]"> Happy Clients</span>

        </h1>

      </div>

      {/* TESTIMONIAL GRID */}
      <div className="grid lg:grid-cols-2 gap-8">

        {testimonials.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-[35px] p-10 overflow-hidden"
          >

            {/* QUOTE */}
            <h1 className="text-[#d4a437] text-[90px] leading-none absolute top-5 right-8 opacity-20">

              “

            </h1>

            {/* TEXT */}
            <p className="text-gray-300 text-lg leading-9 relative z-10">

              {item.text}

            </p>

            {/* USER */}
            <div className="flex items-center gap-5 mt-10">

              <div className="w-16 h-16 rounded-full bg-[#d4a437] flex items-center justify-center text-black font-bold text-xl">

                {item.name.charAt(0)}

              </div>

              <div>

                <h3 className="text-white text-xl font-semibold">

                  {item.name}

                </h3>

                <p className="text-gray-400">

                  {item.role}

                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}