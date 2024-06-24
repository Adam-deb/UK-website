"use client"

import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonials.length);
  };

  return (
    <section className={styles.customerTestimonials}>
      <div className={styles.carouselContainer}>
        <div className={styles.testimonialCarousel}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${styles.testimonialItem} ${
                index === currentSlide ? styles.active : ""
              }`}
            >
              <img src={testimonial.image} alt={`Testimonial ${index + 1}`} />
              <div className={styles.testimonialContent}>
                <p>"{testimonial.text}"</p>
                <h4>{testimonial.author}</h4>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`${styles.prev} ${styles.carouselButtons}`}
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className={`${styles.next} ${styles.carouselButtons}`}
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Carousel;