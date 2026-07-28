import { motion } from "framer-motion";

const blogs = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",

    title: "Top Luxury Villa Trends In 2026",

    date: "12 Jan 2026",
  },

  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",

    title: "Modern Architecture Design Inspiration",

    date: "20 Feb 2026",
  },

  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",

    title: "Why Luxury Homes Are Growing Fast",

    date: "15 March 2026",
  },
];

export default function Blog() {
  return (
    <section className="relative bg-[#03142b] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TOP */}
      <div className="flex items-center justify-between flex-wrap gap-6 mb-20">

        <div>

          <div className="flex items-center gap-5 mb-5">

            <div className="w-16 h-[2px] bg-[#d4a437]"></div>

            <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
              Latest News
            </span>

          </div>

          <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

            Real Estate
            <span className="text-[#d4a437]"> Insights</span>

          </h1>

        </div>

        <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-[#d4a437] hover:text-black duration-300">

          VIEW ALL BLOGS

        </button>

      </div>

      {/* BLOG GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {blogs.map((blog, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-[35px] overflow-hidden"
          >

            {/* IMAGE */}
            <div className="overflow-hidden h-[320px]">

              <img
                src={blog.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 duration-700"
              />

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <p className="text-[#d4a437] uppercase tracking-[2px] text-sm">

                {blog.date}

              </p>

              <h2 className="text-white text-[30px] font-bold leading-tight mt-5">

                {blog.title}

              </h2>

              <button className="mt-8 text-[#d4a437] text-lg font-medium">

                Read More →

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}