import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",

    name: "Rahul Sharma",

    role: "Investor",

    review:
      "Union Reality helped us purchase a premium gated community plot with excellent amenities and documentation.",
  },

  {
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",

    name: "Priya Reddy",

    role: "Home Buyer",

    review:
      "Professional service, clear legal documents, and excellent future investment location.",
  },

  {
    image:
      "https://randomuser.me/api/portraits/men/52.jpg",

    name: "Arjun Kumar",

    role: "Business Owner",

    review:
      "The farm land investment project exceeded our expectations with strong appreciation value.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#07192f] py-24 px-6 lg:px-20 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-20">

        <div className="flex items-center justify-center gap-5 mb-5">

          <div className="w-16 h-[2px] bg-[#d4a437]"></div>

          <span className="text-[#d4a437] tracking-[3px] uppercase text-sm">
            Client Testimonials
          </span>

        </div>

        <h1 className="text-white text-[45px] lg:text-[75px] font-bold leading-[1]">

          What Our
          <span className="text-[#d4a437]"> Clients Say</span>

        </h1>

      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 rounded-[35px] p-10 hover:-translate-y-3 duration-500"
          >

            {/* STARS */}
            <div className="flex items-center gap-2 text-[#d4a437] text-xl mb-8">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

            {/* REVIEW */}
            <p className="text-gray-300 text-lg leading-9">

              "{item.review}"

            </p>

            {/* USER */}
            <div className="flex items-center gap-5 mt-10">

              <img
                src={item.image}
                alt=""
                className="w-20 h-20 rounded-full object-cover"
              />

              <div>

                <h3 className="text-white text-2xl font-semibold">

                  {item.name}

                </h3>

                <p className="text-[#d4a437] mt-1">

                  {item.role}

                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}