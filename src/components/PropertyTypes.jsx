import { motion } from "framer-motion";

const properties = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",

    title: "Luxury Villas",
  },

  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",

    title: "Modern Apartments",
  },

  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",

    title: "Commercial Spaces",
  },

  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",

    title: "Premium Interiors",
  },
];

export default function PropertyTypes() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Property Categories
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Discover Premium
          <span className="text-[#d4a437]"> Properties</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {properties.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[35px] h-[500px] cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-8">

              <h2 className="text-white text-[35px] font-bold leading-tight">

                {item.title}

              </h2>

              <button className="mt-6 border border-white/20 text-white px-7 py-3 rounded-full hover:bg-[#d4a437] hover:text-black duration-300">

                Explore →

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}