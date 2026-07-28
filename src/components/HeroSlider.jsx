import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,

    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",

    subtitle: "PREMIUM REAL ESTATE",

    title1: "Building",

    title2: "Modern",

    title3: "Luxury",

    desc:
      "Union Reality & Construction creates world-class residential and commercial spaces with modern architecture and premium amenities.",
  },

  {
    id: 2,

    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",

    subtitle: "DREAM HOME PROJECTS",

    title1: "Inspired",

    title2: "Living",

    title3: "Spaces",

    desc:
      "Experience elevated lifestyles with iconic villa developments and luxury gated communities.",
  },

  {
    id: 3,

    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",

    subtitle: "UNION CONSTRUCTION",

    title1: "Future",

    title2: "Starts",

    title3: "Here",

    desc:
      "Delivering landmark projects crafted with innovation, elegance, and engineering excellence.",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative w-full h-full">

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        speed={1400}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-full heroSwiper"
      >

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>

            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>

              {/* INNER BORDER */}
              <div className="absolute inset-[25px] lg:inset-[10px] border border-white/20 rounded-[25px] z-10"></div>

              {/* CONTENT */}
              <div className="relative z-20 h-full flex items-center px-8 lg:px-24">

                <div className="max-w-[3000px]">

                  {/* TOP SUBTITLE */}
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-5 mb-7"
                  >

                    <div className="w-16 h-[2px] bg-[#d4a437]"></div>

                    <span className="text-[#d4a437] tracking-[3px] uppercase text-sm lg:text-base">
                      {slide.subtitle}
                    </span>

                  </motion.div>

                  {/* TITLE */}
                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-[10px] md:text-[40px] xl:text-[80px] font-extrabold leading-[0.9]"
                  >

                    {slide.title1}

                    <br />

                    {slide.title2}{" "}

                    <span className="text-[#d4a437]">
                      {slide.title3}
                    </span>

                  </motion.h1>

                  {/* DESCRIPTION */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-gray-300 text-base lg:text-xl leading-9 max-w-[700px] mt-8"
                  >
                    {slide.desc}
                  </motion.p>

                  {/* BUTTONS */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6 }}
                    className="flex flex-wrap gap-5 mt-10"
                  >

                    <div className="flex flex-wrap gap-4">
  
  <Link
    to="/project"
    className="bg-[#d4a437] hover:bg-[#bb8f2d] duration-300 text-black font-semibold px-10 py-5 rounded-full shadow-2xl inline-flex items-center"
  >
    VIEW PROJECTS →
  </Link>

  <Link
    to="/about"
    className="border border-white/30 hover:bg-white hover:text-black duration-300 text-white px-10 py-5 rounded-full font-medium inline-flex items-center"
  >
    EXPLORE MORE
  </Link>

</div>

                  </motion.div>

                </div>

              </div>

              {/* SLIDE COUNT */}
              <div className="absolute bottom-12 right-10 lg:right-20 z-30">

                <h2 className="text-white/20 text-[90px] lg:text-[140px] font-bold">
                  0{slide.id}
                </h2>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM SWIPER STYLE */}
      <style>{`

        .heroSwiper .swiper-pagination{
          bottom:40px !important;
        }

        .heroSwiper .swiper-pagination-bullet{
          width:14px;
          height:14px;
          background:white;
          opacity:1;
          transition:0.4s;
        }

        .heroSwiper .swiper-pagination-bullet-active{
          width:45px;
          border-radius:20px;
          background:#d4a437;
        }

        .heroSwiper .swiper-button-next,
        .heroSwiper .swiper-button-prev{
          color:white;
          width:55px;
          height:55px;
          border:1px solid rgba(255,255,255,0.25);
          border-radius:50%;
          backdrop-filter:blur(10px);
          transition:0.3s;
        }

        .heroSwiper .swiper-button-next:hover,
        .heroSwiper .swiper-button-prev:hover{
          background:#d4a437;
          border-color:#d4a437;
        }

        .heroSwiper .swiper-button-next::after,
        .heroSwiper .swiper-button-prev::after{
          font-size:18px;
          font-weight:bold;
        }

        @media(max-width:768px){

          .heroSwiper .swiper-button-next,
          .heroSwiper .swiper-button-prev{
            display:none;
          }

        }

      `}</style>

    </section>
  );
}