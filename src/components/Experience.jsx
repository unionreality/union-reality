import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="overflow-hidden rounded-[40px] h-[750px]">

            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover"
            />

          </div>

          {/* EXPERIENCE CARD */}
          <div className="absolute bottom-10 right-[-30px] bg-[#d4a437] text-black rounded-[30px] px-10 py-8 shadow-2xl">

            <h1 className="text-6xl font-extrabold">

              15+

            </h1>

            <p className="text-lg font-semibold mt-2">

              Years Experience

            </p>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="flex items-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Company Experience
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

            Creating Landmarks
            <span className="text-[#d4a437]"> Since 2010</span>

          </h1>

          <p className="text-gray-400 text-lg leading-9 mt-10">

            Union Reality & Construction has transformed premium real estate with luxury architecture, high-quality construction, and innovative developments across India.

          </p>

          {/* FEATURES */}
          <div className="mt-12 space-y-6">

            <div className="flex items-start gap-5">

              <div className="w-6 h-6 rounded-full bg-[#d4a437] mt-2"></div>

              <div>

                <h3 className="text-white text-2xl font-semibold">

                  Modern Luxury Design

                </h3>

                <p className="text-gray-400 mt-2 leading-8">

                  Elegant architecture blended with world-class comfort.

                </p>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-6 h-6 rounded-full bg-[#d4a437] mt-2"></div>

              <div>

                <h3 className="text-white text-2xl font-semibold">

                  Premium Construction Quality

                </h3>

                <p className="text-gray-400 mt-2 leading-8">

                  Advanced engineering with trusted construction methods.

                </p>

              </div>

            </div>

          </div>

          {/* BUTTON */}
          <button className="mt-12 bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black font-semibold px-10 py-5 rounded-full">

            KNOW MORE →

          </button>

        </motion.div>

      </div>

    </section>
  );
}