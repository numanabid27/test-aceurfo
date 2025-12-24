"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './success.module.css';
// Array of video objects
const videoSlides = [
  {
    id: 1,
    videoId: '0-0H11A0oBk',
    title: 'Umair Aziz, Owner & Editor of Connect South Asia TV',
    description: 'Umair Aziz Bihari, Connect South Asia TV, recommends AccureCFO for expert bookkeeping, accounting support, and outstanding client service.'
  },
  {
    id: 2,
    videoId: 'XeD8Y-bVnEY',
    title: 'Rafay Mohammad Founder of RK Media Group LLC',
    description: 'Rafay, founder of RK Media, highlights AccureCFO’s professionalism, consistency, and ability to deliver accurate bookkeeping and data support every time.'
  },
  {
    id: 3,
    videoId: 'xWKfkn1ryGs',
    title: 'Karim Hashmi, Owner of Karim Group LLC',
    description: 'Karim Hashmi, a real estate investor in North Carolina, shares his 2.5+ years of experience with AccureCFO, praising their accuracy, reliability, and efficient financial management.'
  },
  {
    id: 4,
    videoId: 'dqT4xgBcBJM',
    title: 'Mubarak Alesmail, owner of Al Masar Consultancy, Kuwait',
    description: 'Mubarak Alesmail, Al Masar Consultancy, Kuwait), shares his 3+ years of experience with AccureCFO, highlighting reliable backend bookkeeping support, strong analysis, and excellent communication.'
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
