// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper required modules
// import { Autoplay } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";
import { testimonials } from "@/config/testimonials";

const Testimonial = () => {
  return (
    <Swiper
      // modules={[Autoplay]}
      loop={false}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex px-8 py-6 gap-8">
            <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
            <div className="space-y-2">
              <p>{item.message}</p>
              <p className="text-right text-accent font-semibold">{item.name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;
