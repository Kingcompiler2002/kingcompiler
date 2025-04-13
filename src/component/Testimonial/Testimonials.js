import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css"; // Import CSS file

const testimonials = [
  { id: 1, image: "https://i.postimg.cc/D07Qm96z/img-1.png" },
  { id: 2, image: "https://i.postimg.cc/gjcRGvcX/2.png" },
  { id: 3, image: "https://i.postimg.cc/5tcCXcNM/3.png" },
  { id: 4, image: "https://i.postimg.cc/MGyjRsvf/4.png" },
  { id: 5, image: "https://i.postimg.cc/PxypVPbt/5.png" },
  { id: 5, image: "https://i.postimg.cc/Wp9qMqb8/6.png" },
  { id: 1, image: "https://i.postimg.cc/wBVjgn12/7.png" },
  { id: 2, image: "https://i.postimg.cc/W31b3Srv/8.png" },
  { id: 3, image: "https://i.postimg.cc/prg2sHSW/9.png" },
  { id: 4, image: "https://i.postimg.cc/FHb9VwVv/10.png" },
];

const TestimonialCarousel = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Our Achievers</h2>
      <h2 className="testimonial-subheading">
        Trusted by 5,000+ students across 10+ countries.
      </h2>
      <div className="testimonial-wrapper">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 }, // Mobile: Minimum gap
            1024: { slidesPerView: 2, spaceBetween: 5 }, // Desktop: Minimum gap
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <img
                src={testimonial.image}
                alt="Testimonial"
                className="testimonial-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
