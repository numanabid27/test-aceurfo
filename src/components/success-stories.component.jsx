"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './success.module.css';
// Array of video objects
const videoSlides = [
  {
    id: 1,
    videoId: '0-0H11A0oBk',
    title: 'Client Success Story 1',
    description: 'Finance Operations'
  },
  {
    id: 2,
    videoId: 'XeD8Y-bVnEY',
    title: 'Client Success Story 2',
    description: 'Marketing Agency Owner'
  },
  {
    id: 3,
    videoId: 'xWKfkn1ryGs',
    title: 'Client Success Story 3',
    description: 'Real Estate Investor'
  },
  {
    id: 4,
    videoId: 'dqT4xgBcBJM',
    title: 'Client Success Story 4',
    description: 'Gulf Client'
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videosPerView, setVideosPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideosPerView(1);
      } else if (window.innerWidth <= 1024) {
        setVideosPerView(2);
      } else {
        setVideosPerView(3);
      }
      // Reset to first slide when viewport changes
      setCurrentIndex(0);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, videoSlides.length - videosPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const totalDots = maxIndex + 1;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Success Stories From Our Clients
      </h2>
      <div className={styles.sliderWrapper}>
        <button
          className={styles.navButton}
          onClick={prevSlide}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className={styles.sliderContainer}>
          <div
            className={styles.slidesTrack}
            style={{ transform: `translateX(-${currentIndex * (100 / videosPerView)}%)` }}
          >
            {videoSlides.map((slide) => (
              <div key={slide.id} className={styles.videoCard}>
                <div className={styles.videoWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/${slide.videoId}`}
                    title={slide.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.video}
                  />
                </div>
                <div className={styles.slideInfo}>
                  <h3 className={styles.slideTitle}>{slide.title}</h3>
                  <p className={styles.slideDescription}>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.navButton}
          onClick={nextSlide}
          disabled={currentIndex >= maxIndex}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {totalDots > 1 && (
        <div className={styles.dotsContainer}>
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
