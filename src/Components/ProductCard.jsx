import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import arrowIcon from "./../assets/svg/arrow2.svg";
import styles from "./Home/ProductSection.module.css";
import cardData from './CardData';


function ProductCard() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderWrapper}>
      <Slider {...settings}>
        {cardData.map((data) => (
          <Link to={`/service/${data.id}`} key={data.id} className={styles.prodCard}>
            <img className={styles.cardImg} src={data.img} alt={data.title} />
            <h5>{data.title}</h5>
            <span>
              View Details <img className={styles.arrow} src={arrowIcon} alt="arrow" />
            </span>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCard;
