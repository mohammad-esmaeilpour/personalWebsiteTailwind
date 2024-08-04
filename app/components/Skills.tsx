"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { homeData } from "@/public/data/home";

const Skills = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      breakpoints={{
        320: {
          slidesPerView: 4,
        },
        480: {
          slidesPerView: 5,
        },
        994: {
          slidesPerView: 7,
        },
      }}
      autoplay={{ delay: 1000 }}
      className="max-w-[300px] sm:max-w-md lg:max-w-xl mx-auto"
    >
      {homeData.skills.map((item) => (
        <SwiperSlide key={item.title}>{item.icon}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Skills;
