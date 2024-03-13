"use client";
// import swiper react components

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const serviceData = [
  {
    icon: <RxCrop />,
    title: "Portfolio Website",
    description: "I can build exciting portfolio websites for you.",
  },
  {
    icon: <RxPencil2 />,
    title: "Fullstack Apps",
    description: "From figma template to deployment.",
  },
  {
    icon: <RxDesktop />,
    title: "Head to Figma ",
    description: "You got an idea in your head? Need it designed?",
  },
  {
    icon: <RxReader />,
    title: "GPTs",
    description: "Can buid and integerate GPT solutions.",
  },
  {
    icon: <RxRocket />,
    title: "Ecommerce",
    description: "Full stack Ecommerce website with admin panal.",
  },
];

export default function Slider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
          >
            <div className="bg-[rgba(237,102,255,0.15)] hover:shadow-inner h-[170px] sm:h-[204px] md:h-[235px] hover:shadow-purple-500 rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.35)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-red-500 mb-4 hidden md:flex">{item.icon}</div>
              {/* title and description */}
              <div className="mb-8 tracking-wider">
                <div className="text-lg mb-2 text-white">{item.title}</div>
                <p className="max-w-[350px] leading-normal text-sm text-white">{item.description}</p>
              </div>
              {/* arror */}
              <div className="text-3xl text-white">
                <RxArrowTopRight className='text-white group-hover:rotate-45 group-hover:text-red-500 transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
