import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const galleryData = {
  ear: [
    { src: '/images/main.jpg', alt: 'Helix Piercing' },
    { src: '/images/main.jpg', alt: 'Lobe Piercing' },
  ],
  facial: [
    { src: '/images/main transparent.png', alt: 'Nose Piercing' },
    { src: '/images/main transparent.png', alt: 'Eyebrow Piercing' },
  ],
  oral: [
    { src: '/images/main white bg.png', alt: 'Lip Piercing' },
    { src: '/images/main white bg.png', alt: 'Tongue Piercing' },
  ],
  other: [
    { src: '/images/main.jpg', alt: 'Navel Piercing' },
    { src: '/images/main.jpg', alt: 'Industrial Piercing' },
  ],
};




const Gallery = () => {
  const [category, setCategory] = useState('ear');

  return (
    <section className="gallery">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Piercings</h2>
      
      {/* CATEGORY TABS */}
      <div className="gallery-tabs">
        <button onClick={() => setCategory('ear')}>Ear</button>
        <button onClick={() => setCategory('facial')}>Facial</button>
        <button onClick={() => setCategory('oral')}>Oral</button>
        <button onClick={() => setCategory('other')}>Others</button>
      </div>  
      
      {/* SWIPER CAROUSEL */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        className="mySwiper"
      >

        {galleryData[category].map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} style={{ width: '100%', height: 'auto' }} />
            <p style={{ textAlign: 'center' }}>{img.alt}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
