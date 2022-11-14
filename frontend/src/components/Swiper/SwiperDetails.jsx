import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css"

// import required modules
import { Pagination } from "swiper";

export default function SwiperDetails({photos}) {

    const Slides = photos.map((elem) => { 
       return  <SwiperSlide><img src={elem.URL} alt={elem.id}/></SwiperSlide>
    })

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Slides}
      </Swiper>
    </>
  );
}
