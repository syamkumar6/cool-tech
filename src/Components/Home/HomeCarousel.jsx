import { useState, useEffect } from "react";
import styles from "./HomeCarousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import Loader from "../Loader";

// Import images
import CrlImg1 from "../../assets/images/carouselImg1.webp";
import CrlImg2 from "../../assets/images/carouselImg2.webp";
import CrlImg3 from "../../assets/images/carouselImg3.webp";
import CrlImg4 from "../../assets/images/carouselImg4.webp";
import CrlImg5 from "../../assets/images/carouselImg5.webp";
import CrlImg6 from "../../assets/images/carouselImg6.webp";
import crlBg1 from "../../assets/images/crlBg1.webp";
import crlBg2 from "../../assets/images/crlBg2.webp";
import crlBg3 from "../../assets/images/crlBg3.webp";

function HomeCarousel() {
  const [autoplayEnabled, setAutoplayEnabled] = useState(false);
  const autoplayOptions = Autoplay({ delay: 4000, stopOnInteraction: false });

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    autoplayEnabled ? [autoplayOptions] : []
  );

  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  const desktopSlides = [
    { src: CrlImg1, alt: "Slide 1", heading: "Crafting Excellence in Aluminum", subHeading: "Since 2000", buttonText: "View Details", link: "/about" },
    { src: CrlImg2, alt: "Slide 2", heading: "Customized Aluminum Fabrication", subHeading: "For Every Requirement", buttonText: "Products & Services", link: "/products" },
    { src: CrlImg3, alt: "Slide 3", heading: "Need Expert Advice?", subHeading: null, buttonText: "Connect With Us", link: "/contact" }
  ];

  const mobileSlides = [
    { src: CrlImg4, bg: crlBg1, alt: "Slide 4", heading: "Crafting Excellence in Aluminum", subHeading: "Since 2000", buttonText: "View Details", link: "/about" },
    { src: CrlImg5, bg: crlBg2, alt: "Slide 5", heading: "Customized Aluminum Fabrication", subHeading: "For Every Requirement", buttonText: "Products & Services", link: "/products" },
    { src: CrlImg6, bg: crlBg3, alt: "Slide 6", heading: "Need Expert Advice?", subHeading: "Aluminum Fabrication", buttonText: "Connect With Us", link: "/contact" }
  ];

  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", () => setIsMobile(mediaQuery.matches));
    return () => mediaQuery.removeEventListener("change", () => setIsMobile(mediaQuery.matches));
  }, []);

  useEffect(() => {
    // Preload all images before hiding loader
    const imagePromises = slides.map(slide => 
      new Promise(resolve => {
        const img = new Image();
        img.src = slide.src;
        img.onload = resolve;
        img.onerror = resolve; // Resolve even if error occurs
      })
    );

    Promise.all(imagePromises).then(() => {
      setTimeout(() => setLoading(false), 500); // Smooth transition
    });
  }, [slides]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.embla} ref={emblaRef}>
          <div className={`embla__container ${styles.emblaMain}`}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`embla__slide ${styles.imgContainer}`}
                style={{
                  backgroundImage: isMobile ? `url(${slide.bg})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!isMobile && (
                  <img
                    className={styles.carouselImg}
                    src={slide.src}
                    alt={slide.alt}
                    loading="eager"
                  />
                )}
                <div className={styles.imgOverlay}></div>
                <div className={styles.cntDiv}>
                  <h1>
                    {slide.heading}{" "}
                    {slide.subHeading && <span className={styles.headSpan}>{slide.subHeading}</span>}
                  </h1>
                  <Link className={styles.crlBtn2} to={slide.link}>
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default HomeCarousel;
