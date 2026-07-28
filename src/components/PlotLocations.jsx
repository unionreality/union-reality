import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const locations = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",

    location: "North Bangalore",

    title: "Airport Highway Plots",

    desc:
      "Premium gated plots near upcoming infrastructure and tech parks.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2074&auto=format&fit=crop",

    location: "Devanahalli",

    title: "Farm Land Investment",

    desc:
      "Nature surrounded farm lands with excellent future appreciation.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",

    location: "Sarjapur Road",

    title: "Luxury Villa Plots",

    desc:
      "High-growth investment zone with modern gated communities.",
  },
];

export default function PlotLocations() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="flex items-end justify-between flex-wrap gap-8 mb-20">

        <div>

          <div className="flex items-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Prime Locations
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

            Best Locations For
            <span className="text-[#d4a437]"> Investment</span>

          </h1>

        </div>

        <button className="border border-white/20 hover:bg-[#d4a437] hover:text-black duration-300 text-white px-8 py-4 rounded-full">

          Explore Locations →

        </button>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {locations.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[35px] h-[650px]"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-8">

              {/* LOCATION */}
              <div className="flex items-center gap-3 text-[#d4a437] mb-5">

                <FaMapMarkerAlt />

                <span>{item.location}</span>

              </div>

              {/* TITLE */}
              <h2 className="text-white text-[38px] font-bold leading-tight">

                {item.title}

              </h2>

              {/* DESC */}
              <p className="text-gray-300 leading-8 mt-6">

                {item.desc}

              </p>

              {/* BUTTON */}
              <button className="mt-8 flex items-center gap-3 text-white group-hover:text-[#d4a437] duration-300 text-lg">

                View Details

                <FaArrowRight />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}