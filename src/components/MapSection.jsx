import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  {
    city: "Bangalore",
    projects: "45+ Projects",
  },

  {
    city: "Hyderabad",
    projects: "Upcoming",
  },

  {
    city: "Chennai",
    projects: "Upcoming",
  },

  {
    city: "Mumbai",
    projects: "Upcoming",
  },
];

export default function MapSection() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center max-w-[900px] mx-auto mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Locations We Serve
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Expanding Across
          <span className="text-[#d4a437]"> India</span>

        </h1>

      </div>

      {/* MAP AREA */}
      <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-20">

        {/* BG MAP */}
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1974&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />

        {/* GRID */}
        <div className="relative z-10 grid sm:grid-cols-2 xl:grid-cols-4 gap-8">

          {locations.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="group bg-[#0b223f]/70 border border-white/10 rounded-[30px] p-8 hover:-translate-y-3 duration-500"
            >

              {/* ICON */}
              <div className="w-20 h-20 rounded-full bg-[#d4a437] text-black text-3xl flex items-center justify-center mb-8">

                <FaMapMarkerAlt />

              </div>

              {/* CITY */}
              <h2 className="text-white text-3xl font-bold">

                {item.city}

              </h2>

              {/* PROJECTS */}
              <p className="text-gray-400 text-lg mt-4">

                {item.projects}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}