import { motion } from "framer-motion";

const properties = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",

    type: "Luxury Villa",

    title: "Skyline Garden Villa",

    price: "₹2.5 Cr",
  },

  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",

    type: "Apartment",

    title: "Urban Heights Residence",

    price: "₹1.2 Cr",
  },

  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",

    type: "Commercial",

    title: "Business Square Hub",

    price: "₹4.8 Cr",
  },
];

export default function PropertyShowcase() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP */}
      <div className="flex items-center justify-between flex-wrap gap-8 mb-20">

        <div>

          <div className="flex items-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Featured Properties
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

            Luxury Living
            <span className="text-[#d4a437]"> Spaces</span>

          </h1>

        </div>

        <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-[#d4a437] hover:text-black duration-300">

          VIEW ALL →

        </button>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

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
            className="group relative overflow-hidden rounded-[35px] bg-white/5 border border-white/10"
          >

            {/* IMAGE */}
            <div className="overflow-hidden h-[450px]">

              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <span className="text-[#d4a437] uppercase tracking-[2px] text-sm">

                {item.type}

              </span>

              <h2 className="text-white text-[32px] font-bold mt-4 leading-tight">

                {item.title}

              </h2>

              <div className="flex items-center justify-between mt-8">

                <h3 className="text-[#d4a437] text-3xl font-bold">

                  {item.price}

                </h3>

                <button className="bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black px-6 py-3 rounded-full font-semibold">

                  Details →

                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}