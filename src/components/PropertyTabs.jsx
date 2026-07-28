import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Luxury Villas",
  "Apartments",
  "Commercial",
];

const properties = {
  "Luxury Villas": [
    {
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",

      title: "Royal Palm Villa",

      location: "Bangalore",

      price: "₹3.5 Cr",
    },

    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",

      title: "Skyline Mansion",

      location: "Bangalore",

      price: "₹4.2 Cr",
    },
  ],

  Apartments: [
    {
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1974&auto=format&fit=crop",

      title: "Urban Heights",

      location: "Bangalore",

      price: "₹1.4 Cr",
    },

    {
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",

      title: "Elite Residency",

      location: "Bangalore",

      price: "₹1.1 Cr",
    },
  ],

  Commercial: [
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",

      title: "Business Tower",

      location: "Bangalore",

      price: "₹8 Cr",
    },

    {
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",

      title: "Corporate Hub",

      location: "Bangalore",

      price: "₹6.5 Cr",
    },
  ],
};

export default function PropertyTabs() {
  const [active, setActive] = useState("Luxury Villas");

  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-16">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Explore Properties
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] leading-[1] font-bold">

          Find Your
          <span className="text-[#d4a437]"> Dream Property</span>

        </h1>

      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-5 mb-16">

        {categories.map((category, index) => (

          <button
            key={index}
            onClick={() => setActive(category)}
            className={`px-8 py-4 rounded-full text-lg font-medium duration-300 border ${
              active === category
                ? "bg-[#d4a437] text-black border-[#d4a437]"
                : "border-white/10 text-white hover:bg-white hover:text-black"
            }`}
          >

            {category}

          </button>

        ))}

      </div>

      {/* CONTENT */}
      <AnimatePresence mode="wait">

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8"
        >

          {properties[active].map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5"
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

                <p className="text-[#d4a437] uppercase tracking-[2px] text-sm">

                  {item.location}

                </p>

                <h2 className="text-white text-[35px] font-bold mt-4">

                  {item.title}

                </h2>

                <div className="flex items-center justify-between mt-8">

                  <h3 className="text-[#d4a437] text-3xl font-bold">

                    {item.price}

                  </h3>

                  <button className="bg-[#d4a437] hover:bg-[#bc902d] duration-300 text-black px-6 py-3 rounded-full font-semibold">

                    View →

                  </button>

                </div>

              </div>

            </div>

          ))}

        </motion.div>

      </AnimatePresence>

    </section>
  );
}