"use client";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper modules
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { MdArrowRightAlt, MdOutlineArrowOutward } from "react-icons/md";
import { services } from "@/config/services";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          {/* headline */}
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            Custom <span className="text-accent">Web Solutions</span> to Boost Your
            Business
          </h2>
          {/* btn */}
          <button type="button" className="btn btn-lg btn-accent flex gap-2">
            All services <MdArrowRightAlt className="text-2xl" />
          </button>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-[320px]"
        >
          {services.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-secondary/90 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-12">
                  <Image src={item.icon} alt="service" width={48} height={48} />
                  <Link
                    href={item.href}
                    className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all"
                  >
                    <MdOutlineArrowOutward />
                  </Link>
                </div>
                <h5 className="text-[1.4rem] font-medium max-w-[240px]">{item.title}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Services;
