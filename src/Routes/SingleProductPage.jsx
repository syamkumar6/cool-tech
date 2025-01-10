import styles from "./SingleProduct.module.css";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import ContactSection from "../Components/Home/ContactSection";
import cardData from "../Components/CardData";
import whatsIcon from "../assets/svg/whatsappLogo.svg";
import callIcon from "../assets/svg/callIcon.svg";

function SingleProductPage() {
  const whatsappNumber = "+919482055649";
  const callNumber = "+919482055649"; 

  const handleWhatsAppClick = () => {
    const message = "Hello! I would like to know more about your services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = `tel:${callNumber}`;
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const { id } = useParams();

  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };

  console.log(id);
  const data = cardData.find((card) => card.id === Number(id));
  if (!data) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <div
        className={styles.pageHeader}
        style={{
          backgroundImage: `url(${data.bg})`,
        }}
      >
        <h1>{data.title}</h1>
      </div>

      <div className={styles.pageContainer}>
        <div className={styles.sliderContainer}>
          {data.gImg && data.gImg.length > 0 ? (
            <Slider {...settings}>
              {data.gImg.map((image, index) => (
                <li key={index} className={styles.prodCard}>
                  {console.log(image)}
                  <img
                    className={styles.productImg}
                    src={image}
                    alt={`Product ${index + 1}`}
                  />
                </li>
              ))}
            </Slider>
          ) : (
            <img className={styles.productImg} src={data.img} alt="Product" />
          )}
        </div>
        <div className={styles.productDet}>
          {data.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
          {data.bNote && data.bNote.length > 0 && (
            <ul className={styles.cardPo}>
              {data.bNote.map((b, index) => (
                <li key={index}>{b}</li>
              ))}
            </ul>
          )}
          <div className={styles.cntSection}>
            <h3 className={styles.cHead}>Connect Us</h3>
            <div className={styles.cntContainer}>
              <button
                onClick={handleWhatsAppClick}
                className={styles.whatsappButton}
              >
                <img src={whatsIcon} alt="WhatsApp Logo" /> Message
              </button>
              <button onClick={handleCallClick} className={styles.callButton}>
                <img src={callIcon} alt="Call Icon" /> Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <h2 className={styles.subHead}>Related Services</h2>
        <ProductCard />
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
}

export default SingleProductPage;
