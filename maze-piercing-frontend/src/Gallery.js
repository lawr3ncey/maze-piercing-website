import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Ear Piercings</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/main.jpg" alt="Piercing 1" /></SwiperSlide>
        <SwiperSlide><img src="/images/main.jpg" alt="Piercing 2" /></SwiperSlide>
        <SwiperSlide><img src="/images/main.jpg" alt="Piercing 3" /></SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </section>
  );
};

export default Gallery;
