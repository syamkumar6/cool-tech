import styles from "./Products.module.css";
import arrowIcon from "../assets/svg/arrow2.svg";
import cardData from "../Components/CardData";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function ProductsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Our Products & Services | Cool Tech Interior</title>
        <meta
          name="description"
          content="Explore a wide range of products and services offered by Cool Tech Interior. From aluminum partitions to modern kitchen cabinets, we provide durable and aesthetic solutions for your spaces."
        />
        <meta
          name="keywords"
          content="aluminum fabrication, glass partitions, kitchen cabinets, mosquito net doors, pleated mesh, wardrobes, wall paneling, Cool Tech Interior, Coorg"
        />
        <meta name="author" content="Cool Tech Interior" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://cooltechinterior.com/products" />
      </Helmet>
      <div className={styles.pageHeader}>
        <h1>PRODUCTS & SERVICES</h1>
      </div>
      <div>
        <ul className={styles.cardContainer}>
          {cardData.map((data, index) => {
            const truncatedTitle =
              data.title.length > 25
                ? `${data.title.slice(0, 25)}...`
                : data.title;

            return (
              <li key={index}>
                <Link  to={"/service/"+ data.id} className={styles.cardBody}>
                <img
                  className={styles.cardImg}
                  src={data.img}
                  alt={`Product Image ${index}`}
                />
                <h5 className={styles.title}>{truncatedTitle}</h5>
                <span>
                  View Details{" "}
                  <img className={styles.arrow} src={arrowIcon} alt="" />
                </span>
              </Link>
              </li>
              
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductsPage;
