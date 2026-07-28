import { motion } from "framer-motion";

const services = [
  {
    title: "Luxury Villa Construction",

    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title: "Modern Apartment Projects",

    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
  },

  {
    title: "Commercial Spaces",

    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP */}
      <div className="flex items-center justify-between flex-wrap gap-6 mb-16">

        <div>

          <div className="flex items-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Our Services
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

            Premium Real Estate
            <span className="text-[#d4a437]"> Solutions</span>

          </h1>

        </div>

        <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-[#d4a437] hover:text-black duration-300">

          VIEW ALL SERVICES

        </button>

      </div>

      {/* SERVICES GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {services.map((service, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group relative rounded-[35px] overflow-hidden h-[550px] cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={service.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-10">

              <h2 className="text-white text-[35px] font-bold leading-tight">

                {service.title}

              </h2>

              <button className="mt-6 text-[#d4a437] text-lg font-medium">

                Explore Project →

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}