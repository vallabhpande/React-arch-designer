import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    image: "/images/modern-office.jpg",
    title: "Modern Office Spaces",
    subtitle: "Designs that inspire productivity",
    description: "Explore cutting-edge office designs built to boost productivity and collaboration."
  },
  {
    id: 2,
    image: "/images/luxury-villa.jpg",
    title: "Luxury Villa Designs",
    subtitle: "Elegant and timeless architecture",
    description: "Luxury villas designed with elegance and top-notch architecture to suit your lifestyle."
  },
  {
    id: 3,
    image: "/images/commercial-building.jpg",
    title: "Commercial Buildings",
    subtitle: "Smart structures for smart businesses",
    description: "Modern commercial spaces tailored for business growth and professionalism."
  },
  {
    id: 4,
    image: "/images/interior-design.jpg",
    title: "Interior Design Concepts",
    subtitle: "Transforming interiors with creativity",
    description: "Stunning interior designs to bring personality and function to every corner."
  },
  {
    id: 5,
    image: "/images/renovation.jpg",
    title: "Home Renovations",
    subtitle: "Blending the old with the new",
    description: "Creative renovation ideas to give your old home a refreshing new life."
  },
];

const HeroSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(null);

  const openModal = (slide) => {
    setSelectedSlide(slide);
  };

  const closeModal = () => {
    setSelectedSlide(null);
  };

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-swiper"
        breakpoints={{
          0: {
            navigation: false,
          },
          768: {
            navigation: true,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-container">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-overlay">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <button className="slide-button" onClick={() => openModal(slide)}>
                  View Portfolio
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedSlide && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedSlide.title}</h2>
            <p>{selectedSlide.description}</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSlider;
