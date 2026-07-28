import { motion } from "framer-motion";

const advantages = [
  {
    distance: "10 Min",

    title: "International Airport",
  },

  {
    distance: "5 Min",

    title: "Highway Connectivity",
  },

  {
    distance: "15 Min",

    title: "Tech Parks",
  },

  {
    distance: "8 Min",

    title: "Schools & Colleges",
  },

  {
    distance: "12 Min",

    title: "Hospitals",
  },

  {
    distance: "20 Min",

    title: "Metro Station",
  },
];

export default function LocationAdvantages() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP */}
      <div className="flex items-end justify-between flex-wrap gap-8 mb-20">

        <div>

          <div className="flex items-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Location Advantages
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

            Prime Connectivity
            <span className="text-[#d4a437]"> & Growth</span>

          </h1>

        </div>

        <button className="border border-white/20 hover:bg-[#d4a437] hover:text-black duration-300 text-white px-8 py-4 rounded-full">

          Explore Location →

        </button>

      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

        {advantages.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-[35px] p-10 hover:-translate-y-3 duration-500"
          >

            {/* BG */}
            <div className="absolute top-[-40px] right-[-40px] w-[150px] h-[150px] rounded-full bg-[#d4a437]/10 blur-[70px]"></div>

            {/* DISTANCE */}
            <h1 className="relative z-10 text-[#d4a437] text-[60px] font-extrabold">

              {item.distance}

            </h1>

            {/* TITLE */}
            <h2 className="relative z-10 text-white text-[32px] font-bold leading-tight mt-4">

              {item.title}

            </h2>

          </motion.div>

        ))}

      </div>

    </section>
  );
}