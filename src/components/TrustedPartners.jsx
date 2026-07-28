import { motion } from "framer-motion";

const partners = [
  "BMRDA Approved",
  "A-Khata Projects",
  "Ready Registration",
  "Bank Loan Available",
  "100% Legal Documents",
  "Premium Amenities",
];

export default function TrustedPartners() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Why Customers Trust Us
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

          Trusted Real Estate
          <span className="text-[#d4a437]"> Investment Partner</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {partners.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-10 hover:-translate-y-3 duration-500"
          >

            {/* GLOW */}
            <div className="absolute top-[-50px] right-[-50px] w-[140px] h-[140px] rounded-full bg-[#d4a437]/10 blur-[70px]"></div>

            {/* NUMBER */}
            <h1 className="text-[70px] font-extrabold text-[#d4a437]/20">

              0{index + 1}

            </h1>

            {/* TEXT */}
            <h2 className="relative z-10 text-white text-[34px] font-bold leading-tight mt-2">

              {item}

            </h2>

          </motion.div>

        ))}

      </div>

    </section>
  );
}