import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",

    title: "Skyline Luxury Villa",

    location: "Bangalore, India",
  },

  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",

    title: "Urban Heights Residence",

    location: "Bangalore, India",
  },

  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",

    title: "Palm Valley Homes",

    location: "Bangalore, India",
  },

  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",

    title: "Elite Commercial Hub",

    location: "Bangalore, India",
  },
];

export default function Projects() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP */}
      <div className="flex items-center justify-between flex-wrap gap-8 mb-16">

        <div>

          <div className="flex items-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Latest Projects
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

            Our Premium
            <span className="text-[#d4a437]"> Developments</span>

          </h1>

        </div>

        <Link
          to="/project"
          className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-[#d4a437] hover:text-black duration-300"
        >
          VIEW ALL PROJECTS
        </Link>

      </div>

      {/* PROJECT GRID */}
      <div className="grid lg:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group relative h-[600px] overflow-hidden rounded-[35px] cursor-pointer"
          >

            {/* IMAGE */}
            <img
              src={project.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-10">

              <p className="text-[#d4a437] tracking-[2px] uppercase text-sm mb-3">

                {project.location}

              </p>

              <h2 className="text-white text-[38px] lg:text-[48px] font-bold leading-tight">

                {project.title}

              </h2>

            

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}