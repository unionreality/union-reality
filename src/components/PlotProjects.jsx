import { motion } from "framer-motion";

const plots = [
  {
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",

    type: "Gated Community Plot",

    title: "Green Valley Plots",

    size: "1200 - 2400 Sq.ft",

    price: "₹45 Lakhs",
  },

  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",

    type: "Farm Land",

    title: "Nature Farm Estate",

    size: "1 - 5 Acres",

    price: "₹32 Lakhs",
  },

  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2074&auto=format&fit=crop",

    type: "Premium Plots",

    title: "Royal County Layout",

    size: "1500 - 3000 Sq.ft",

    price: "₹55 Lakhs",
  },
];

export default function PlotProjects() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP */}
      <div className="flex items-center justify-between flex-wrap gap-8 mb-20">

        <div>

          <div className="flex items-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Gated Plots & Farm Land
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

            Invest In
            <span className="text-[#d4a437]"> Premium Land</span>

          </h1>

        </div>

        <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-[#d4a437] hover:text-black duration-300">

          VIEW ALL PROJECTS →

        </button>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {plots.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group relative rounded-[35px] overflow-hidden border border-white/10 bg-white/5"
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

              <h2 className="text-white text-[34px] font-bold leading-tight mt-4">

                {item.title}

              </h2>

              <div className="flex items-center justify-between mt-6 text-gray-400">

                <p>{item.size}</p>

                <p>{item.price}</p>

              </div>

              <button className="mt-8 w-full bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black font-semibold py-4 rounded-full">

                Explore Property →

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}