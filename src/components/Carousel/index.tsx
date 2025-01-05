"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "@/components/Carousel/styles.module.scss";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide function
  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
  }, [nextSlide]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [images, startAutoSlide]);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    startAutoSlide();
  };

  return (
    <>
      <div
        className={styles.carousel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.carouselSlide}>
              <Image
                src={`/assets/images/${image}`}
                alt={`Slide ${index}`}
                className={styles.carouselImage}
                width={800}
                height={300}
              />
            </div>
          ))}
        </div>

        <button className={styles.prevButton} onClick={prevSlide}>
          &#9664;
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          &#9654;
        </button>
      </div>
    </>
  );
};

export default Carousel;
