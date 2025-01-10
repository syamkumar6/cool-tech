import styles from "./ProductSection.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/svg/arrow2.svg"
import cardData from "../CardData";


function ProductSection() {
  

  let settings = {
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
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className={styles.ProductSection}>
      <div className={styles.pHeadDiv}>
        <span>what we do</span>
        <h2>Our Services </h2>
      </div>
      <div className={styles.pHeadDiv2}>
      <p>With over two decades of expertise,<br /> we specialize in delivering top-quality aluminum fabrication solutions tailored to your needs. <br /> From custom designs to durable and precise structures, our craftsmanship ensures exceptional results <br /> for residential, commercial, and industrial projects</p>
      
      </div>
      
      <ul>
        <Slider {...settings}>
          {cardData.map((data, index) => (
            <Link to={"/service/"+data.id} key={index} className={styles.prodCard}>
              <img className={styles.cardImg} src={data.img} alt={data.title} loading="lazy"/>
              <h5>{data.title}</h5>
              <span>View Details <img className={styles.arrow} src={arrowIcon} alt="" /></span>
            </Link>
          ))}
        </Slider>
        
      </ul>
      <Link to={"/products"} className={styles.pLink}>View all</Link>
    </div>
  );
}

export default ProductSection;
