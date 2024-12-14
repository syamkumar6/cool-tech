import styles from "./Products.module.css";
import arrowIcon from "../assets/svg/arrow2.svg";
import cardData from "../Components/CardData";

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
      <div className={styles.pageHeader}>
        <h2>PRODUCTS & SERVICES</h2>
      </div>
      <div>
        <ul className={styles.cardContainer}>
          {cardData.map((data, index) => {
            const truncatedTitle =
              data.title.length > 25
                ? `${data.title.slice(0, 25)}...`
                : data.title;

            return (
              <Link key={index} to={"/service/"+ data.id} className={styles.cardBody}>
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
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductsPage;
