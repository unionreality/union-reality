import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import PropertyTypes from "./PropertyTypes";
import PropertyTabs from "./PropertyTabs";
import Process from "./Process";
export default function Footer() {

  const steps = [
    {
      title: "Planning & Design",
      desc: "We create modern architectural plans and premium layout designs.",
    },
    {
      title: "Approval Process",
      desc: "All required approvals and legal documentation are completed.",
    },
    {
      title: "Construction Phase",
      desc: "Quality construction begins with premium materials & safety.",
    },
    {
      title: "Project Delivery",
      desc: "Timely handover with modern infrastructure and amenities.",
    },
  ];

  const packages = [
    {
      name: "Basic",
      price: "₹1,699/sq.ft",
      features: [
        "Standard Materials",
        "2D Floor Plan",
        "Basic Interiors",
        "Quality Finishing",
      ],
    },

    {
      name: "Premium",
      price: "₹1,999/sq.ft",
      highlight: true,
      features: [
        "Premium Materials",
        "3D Elevation",
        "Modular Kitchen",
        "Luxury Finishing",
      ],
    },

    {
      name: "Luxury",
      price: "₹2,499/sq.ft",
      features: [
        "Imported Materials",
        "Smart Home Features",
        "False Ceiling",
        "Premium Interiors",
      ],
    },

    {
      name: "Ultra Luxury",
      price: "₹3,199/sq.ft",
      features: [
        "Villa Style Design",
        "Automation System",
        "Designer Interiors",
        "Premium Landscape",
      ],
    },
  ];

  return (
    <>
<Layout>
      {/* ================= TIMELINE SECTION ================= */}
      <section className="relative py-28 px-6 md:px-20 bg-[#0A1F44] overflow-hidden">
<Projects/>
<Process/>

<PropertyTypes/>

<PropertyTabs/>

        {/* TITLE */}
        <h2 className="text-center text-3xl md:text-5xl font-bold text-[#C9A646] mb-20">
          Construction Timeline
        </h2>

        <div className="relative max-w-5xl mx-auto">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-[#C9A646] to-transparent"></div>

          {/* STEPS */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >

              {/* CARD */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="w-full md:w-[45%] bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl"
              >

                <h3 className="text-[#C9A646] text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {step.desc}
                </p>

              </motion.div>

              {/* DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#C9A646] rounded-full border-4 border-[#0A1F44] shadow-lg"></div>

            </motion.div>
          ))}
        </div>
      </section>
      {/* ================= PACKAGES SECTION ================= */}
      <section className="py-24 px-6 md:px-20 bg-[#081731] text-white">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-bold text-[#C9A646] mb-16"
        >
          Construction Packages
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 backdrop-blur-md border transition-all duration-300 ${
                pkg.highlight
                  ? "bg-[#C9A646] text-black scale-105 shadow-2xl"
                  : "bg-white/10 border-white/20"
              }`}
            >

              {/* MOST POPULAR */}
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-4 py-1 rounded-full tracking-wide">
                  MOST POPULAR
                </div>
              )}

              {/* NAME */}
              <h3 className="text-2xl font-semibold tracking-wide">
                {pkg.name}
              </h3>

              {/* PRICE */}
              <p className="text-3xl font-bold mt-4">
                {pkg.price}
              </p>

              {/* FEATURES */}
              <ul className="mt-8 space-y-4 text-sm">

                {pkg.features.map((feature, idx) => (
                  <li key={idx}>
                    ✔ {feature}
                  </li>
                ))}

              </ul>

              {/* BUTTON */}
              <button
                className={`mt-10 w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-black text-white hover:opacity-90"
                    : "bg-[#C9A646] text-black hover:bg-[#b8953a]"
                }`}
              >
                Get Quote
              </button>

            </motion.div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-16 text-center text-gray-300 text-sm">
          Compare features and choose the perfect package for your dream home.
        </div>

      </section>
      </Layout>
    </>
  );
}