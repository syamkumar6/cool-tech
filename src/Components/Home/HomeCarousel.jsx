import { useState, useEffect } from "react";
import styles from "./HomeCarousel.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import CrlImg1 from "../../assets/images/carouselImg1.webp";
import CrlImg4 from "../../assets/images/carouselImg4.webp";
import CrlImg5 from "../../assets/images/carouselImg5.webp";
import CrlImg6 from "../../assets/images/carouselImg6.webp";
import CrlImg2 from "../../assets/images/carouselImg2.webp";
import CrlImg3 from "../../assets/images/carouselImg3.webp";
import { Link } from "react-router-dom";

function HomeCarousel() {
  const autoplayOptions = Autoplay({ delay: 4000, stopOnInteraction: false }); // Adjust delay as needed
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayOptions]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Set initial state
    handleResize();

    // Add listener for resize
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  // Define content for desktop and mobile slides
  const desktopSlides = [
    {
      src: CrlImg1,
      alt: "Slide 1",
      heading: "Crafting Excellence in Aluminum",
      subHeading: "Since 2000",
      description:
        "Based in the serene landscapes of Coorg, we take pride in delivering solutions that match the highest standards of excellence.",
      buttonText: "View Details",
      link: "/about",
    },
    {
      src: CrlImg2,
      alt: "Slide 2",
      heading: "Customized Aluminum Fabrication",
      subHeading: "For Every Requirement",
      description: null,
      buttonText: "Products & Services",
      link: "/products",
    },
    {
      src: CrlImg3,
      alt: "Slide 3",
      heading: "Need Expert Advice on Aluminum Fabrication?",
      subHeading: null,
      description:
        "Drop us a line or give us a call! We’re here to discuss your ideas and provide the best solutions.",
      buttonText: "Connect With Us",
      link: "/contact",
    },
  ];

  const mobileSlides = [
    {
      src: CrlImg4,
      alt: "Slide 4",
      heading: "Crafting Excellence in Aluminum",
      subHeading: "Since 2000",
      description:
        "Based in the serene landscapes of Coorg, we take pride in delivering solutions that match the highest standards of excellence.",
      buttonText: "View Details",
      link: "/about",
    },
    {
      src: CrlImg5,
      alt: "Slide 5",
      heading: "Customized Aluminum Fabrication",
      subHeading: "For Every Requirement",
      description: null,
      buttonText: "Products & Services",
      link: "/products",
    },
    {
      src: CrlImg6,
      alt: "Slide 6",
      heading: "Need Expert Advice on ?",
      subHeading: "Aluminum Fabrication",
      description:
        "Drop us a line or give us a call! We’re here to discuss your ideas and provide the best solutions.",
      buttonText: "Connect With Us",
      link: "/contact",
    },
  ];

  const slides = isMobile ? mobileSlides : desktopSlides;

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={`embla__container ${styles.embalaMain}`}>
        {slides.map((slide, index) => (
          <div key={index} className={`embla__slide ${styles.imgContainer}`}>
            <img
              className={styles.carouselImg}
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
            />
            <div className={styles.imgOverlay}></div>
            <div className={styles.cntDiv}>
              <h1>
                {slide.heading}{" "}
                {slide.subHeading && (
                  <span className={styles.headSpan}>{slide.subHeading}</span>
                )}
              </h1>
              {slide.description && (
                <p className={styles.cntDivP}>{slide.description}</p>
              )}
              <Link className={styles.crlBtn2} to={slide.link}>
                {slide.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCarousel;

