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
import crlBg1 from "../../assets/images/crlBg1.webp";
import crlBg2 from "../../assets/images/crlBg2.webp";
import crlBg3 from "../../assets/images/crlBg3.webp";
import { Link } from "react-router-dom";
import Loader from "../Loader";

function HomeCarousel() {
  const autoplayOptions = Autoplay({ delay: 4000, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayOptions]);

  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Set initial state
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

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
      bg: crlBg1,
      alt: "Slide 4",
      heading: "Crafting Excellence in Aluminum",
      subHeading: "Since 2000",
      description: null,
      buttonText: "View Details",
      link: "/about",
    },
    {
      src: CrlImg5,
      bg: crlBg2,
      alt: "Slide 5",
      heading: "Customized Aluminum Fabrication",
      subHeading: "For Every Requirement",
      description: null,
      buttonText: "Products & Services",
      link: "/products",
    },
    {
      src: CrlImg6,
      bg: crlBg3,
      alt: "Slide 6",
      heading: "Need Expert Advice on Aluminum Fabrication?",
      subHeading: "Aluminum Fabrication",
      description: null,
      buttonText: "Connect With Us",
      link: "/contact",
    },
  ];

  const slides = isMobile ? mobileSlides : desktopSlides;

  const handleImageLoad = () => {
    console.log("Image loaded");
    setLoadedImages((prev) => {
      const updatedCount = prev + 1;
      console.log(
        `Loaded Images: ${updatedCount} / Total Images: ${slides.length}`
      );
      return updatedCount;
    });
  };

  useEffect(() => {
    const images = slides.map((slide) => new Image());
    let loadedCount = 0;

    images.forEach((image, index) => {
      image.src = slides[index].src;
      image.onload = () => {
        loadedCount += 1;
        console.log(`Image ${index + 1} loaded`);
        if (loadedCount === slides.length) {
          setLoading(false);
        }
      };
      image.onerror = () => {
        console.log(`Error loading image: ${slides[index].src}`);
      };
    });
  }, [slides]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.embla} ref={emblaRef}>
          <div className={`embla__container ${styles.embalaMain}`}>
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
                    onLoad={handleImageLoad}
                    onError={() =>
                      console.log(`Error loading image: ${slide.src}`)
                    }
                    loading="lazy"
                  />
                )}
                <div className={styles.imgOverlay}></div>
                <div className={styles.cntDiv}>
                  <h1>
                    {slide.heading}{" "}
                    {slide.subHeading && (
                      <span className={styles.headSpan}>
                        {slide.subHeading}
                      </span>
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
      )}
    </>
  );
}

export default HomeCarousel;
