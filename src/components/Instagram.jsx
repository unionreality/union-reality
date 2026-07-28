import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
];

export default function Instagram() {
  return (
    <section className="relative bg-[#07192f] py-24 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-16 px-6">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Follow On Instagram
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Social Media
          <span className="text-[#d4a437]"> Gallery</span>

        </h1>

      </div>

      {/* IMAGE STRIP */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-6 lg:px-10">

        {images.map((image, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[25px] h-[280px] cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 duration-500"></div>

            {/* ICON */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">

              <div className="w-20 h-20 rounded-full bg-[#d4a437] text-black text-3xl flex items-center justify-center">

                <FaInstagram />

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}