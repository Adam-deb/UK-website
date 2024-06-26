"use client"

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000); // Change slide every 7 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

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
              <Image height="400" width="400" src={testimonial.image} alt={`Testimonial ${index + 1}`} />
              <div className={styles.testimonialContent}>
                <p>&quot;{testimonial.text}&quot;</p>
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
