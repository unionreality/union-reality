import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const portfolio = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <section className="relative bg-[#03142b] pt-[150px] py-24 px-6 lg:px-20 overflow-hidden">

        <div className="text-center max-w-[900px] mx-auto mb-20">
          <div className="flex items-center justify-center gap-5 mb-5">
            <div className="w-16 h-[2px] bg-[#d4a437]"></div>
            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Project Portfolio
            </span>
          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">
            Crafted With
            <span className="text-[#d4a437]"> Excellence</span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <Link to="/project" key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[35px] h-[450px] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="Portfolio project"
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
                  <div className="w-24 h-24 rounded-full border border-white/30 backdrop-blur-lg flex items-center justify-center text-white text-4xl">
                    +
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </section>
    </Layout>
  );
}
