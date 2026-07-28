import { motion } from "framer-motion";

const gallery = [
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",

      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
];

export default function PlotGallery() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Project Gallery
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

          Explore Our
          <span className="text-[#d4a437]"> Premium Projects</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {gallery.map((image, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[35px] h-[400px]"
          >

            {/* IMAGE */}
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 duration-500"></div>

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 p-8">

              <h2 className="text-white text-3xl font-bold">

                Union Reality Project

              </h2>

              <p className="text-gray-300 mt-3">

                Premium gated plots & farm land

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}