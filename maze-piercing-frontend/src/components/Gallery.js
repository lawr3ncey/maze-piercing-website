import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../styles/Gallery.css';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Grow from '@mui/material/Grow';
import { useSpring, animated } from '@react-spring/web';

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) onEnter(null, true);
    },
    onRest: () => {
      if (!open && onExited) onExited(null, true);
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

const gothicStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: '#111',
  color: '#eee',
  border: '2px solid #6f4e7c',
  borderRadius: '12px',
  boxShadow: '0 0 25px #6f4e7c',
  p: 4,
  fontFamily: '"Cinzel", serif',
};

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('ear');
    const [checked, setChecked] = useState(true);
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const swiperRef = useRef(null); // 🧠 This stores Swiper instance

    const handleOpenModal = (image) => {
      setSelectedImage(image);
      setOpen(true);
    };

    const handleCloseModal = () => {
      setOpen(false);
      setSelectedImage(null);
    };

  const galleries = {
    ear: [
      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },
      
      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Ear Piercing',
        title: 'Helix Style',
        description: 'Inframe: Maze Deetz.',
      },

      {
        src: '/images/main.jpg',
        alt: 'Ear Piercing',
        title: 'Helix Style',
        description: 'Inframe: Maze Deetz.',
      },
    ],

    facial: [
      {
        src: '/images/dodong.jpg',
        alt: 'Nose Piercing',
        title: 'Nose Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Eyebrow Piercing',
        title: 'Eyebrow Piercing',
        description: 'Inframe: Maze Deetz.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Eyebrow Piercing',
        title: 'Eyebrow Piercing',
        description: 'Inframe: Maze Deetz.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Nose Piercing',
        title: 'Nose Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Eyebrow Piercing',
        title: 'Eyebrow Piercing',
        description: 'Inframe: Maze Deetz.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Nose Piercing',
        title: 'Nose Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Eyebrow Piercing',
        title: 'Eyebrow Piercing',
        description: 'Inframe: Maze Deetz.',
      },
    ],

    oral: [
      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },
      
      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Ear Piercing',
        title: 'Ear Piercing',
        description: 'inframe: Maze Deetz.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Ear Piercing',
        title: 'Helix Style',
        description: 'Inframe: Maze Deetz.',
      },

      {
        src: '/images/main.jpg',
        alt: 'Ear Piercing',
        title: 'Helix Style',
        description: 'Inframe: Maze Deetz.',
      },
    ],

    other: [
      {
        src: '/images/dodong.jpg',
        alt: 'Septum Piercing',
        title: 'Septum Piercing',
        description: 'Classic bold style.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Ear Piercing',
        title: 'Multi Piercings',
        description: 'Stylish and versatile.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Ear Piercing',
        title: 'Multi Piercings',
        description: 'Stylish and versatile.',
      },

      {
        src: '/images/dodong.jpg',
        alt: 'Septum Piercing',
        title: 'Septum Piercing',
        description: 'Classic bold style.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Ear Piercing',
        title: 'Multi Piercings',
        description: 'Stylish and versatile.',
      },

      {
        src: '/images/ear-piercing.jpg',
        alt: 'Ear Piercing',
        title: 'Multi Piercings',
        description: 'Stylish and versatile.',
      },
    ],
  };

  return (
    <section className="gallery">
      <h2>Collection</h2>
      <div className="gallery-tabs">
        {['ear', 'facial', 'oral', 'other'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setChecked(false); // start fade out
              setTimeout(() => {
                setActiveTab(tab); // switch tab
                setChecked(true); // start fade in
              }, 100); // short delay for smooth effect
            }}
            className={activeTab === tab ? 'active' : ''}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Piercing
          </button>
        ))}

      </div>

      <Grow in={checked} timeout={500} key={activeTab}>
        <div>
          <Swiper
            key={activeTab} // <== this forces Swiper to re-mount
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation
            modules={[Navigation, EffectCoverflow]}
            className="gallery-swiper"
          >
            {galleries[activeTab].map((slide, index) => (
              <SwiperSlide
                key={index}
                className="gallery-slide"
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideToLoop(index);
                  }
                  handleOpenModal(slide);
                }}
              >
                <img src={slide.src} alt={slide.alt} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Grow>

      <Modal
        open={open}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={gothicStyle}>
            {selectedImage && (
              <>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  style={{
                    width: '100%',
                    maxWidth: '100%',
                    maxHeight: '75vh', // limits height to 70% of viewport
                    height: 'auto',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    objectFit: 'contain',
                  }}
                />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#c0a3e5', fontFamily: 'Cinzel, serif', textAlign: 'center',}}>
                    {selectedImage.title}
                  </Typography>

                  <Typography sx={{ mt: 1, fontSize: '.8rem', color: '#aaa', fontFamily: 'Cinzel, serif', marginLeft: 'auto', }}>
                    {selectedImage.description}
                  </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </section>
  );
};

export default Gallery;
