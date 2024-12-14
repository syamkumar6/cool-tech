import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import MapSection from "./MapSection";
import phoneIcon from "../../assets/svg/call.svg";
import emailIcon from "../../assets/svg/email.svg";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.firstSection}>
          <Link
            to={"/hospitals"}
            className={styles.innerBox}
            onClick={scrollToTop}
          >
            <img src="" alt="" />
            <div>
              <h4>Overview</h4>
              <span>Crafting Excellence Since 2000</span>
            </div>
          </Link>
          <Link className={styles.innerBox}>
            <img src="" alt="" />
            <div>
              <h4>Contact</h4>
              <span>We’re Here to Help</span>
            </div>
          </Link>
        </div>
        <div className={styles.secondSection}>
          <div className={styles.links}>
            <h3 className={styles.innerh2}>Quick Links</h3>
            <div className={styles.products}>
              <Link to={"/service/" + 3} className={styles.footerLink}>
                {" "}
                kitchen cabinets
              </Link>
              <Link to={""} className={styles.footerLink}>
                wardrobes
              </Link>
              <Link to={"/service/" + 5} className={styles.footerLink}>
                aluminum windows and doors
              </Link>
              <Link to={"/service/" + 2} className={styles.footerLink}>
                partitions
              </Link>
              <Link to={"/service/" + 1} className={styles.footerLink}>
                cubic glass work
              </Link>
              <Link to={""} className={styles.footerLink}>
                mosquito net windows and doors
              </Link>
              <Link to={""} className={styles.footerLink}>
                false ceilings
              </Link>
              <Link to={""} className={styles.footerLink}>
                prayer cabinets
              </Link>
              <Link to={"/service/" + 6} className={styles.footerLink}>
                Composite Panel System
              </Link>
              <Link to={"/service/" + 4} className={styles.footerLink}>
                Showcase
              </Link>
            </div>
          </div>

          <div className={styles.address}>
            <h3 className={styles.innerh2}>Address</h3>
            <span>
              M.D. Complex, Ponnampet Road,
              <br /> Gonikoppal, karnataka, India 571213
            </span>
            <div className={styles.mapSection}>
              <MapSection />
            </div>
          </div>

          <div className={styles.contactContainer}>
            <h3 className={styles.innerh2}>Contact Us</h3>
            <dvi className={styles.innerContainer}>
              <h5>Call Us</h5>
              <span>
                <img src={phoneIcon} alt="phoneIcon" />
                +91 9482055649
              </span>
              <span>
                <img src={phoneIcon} alt="phoneIcon" />
                +91 9482326649
              </span>
              <h5>Gmail</h5>
              <span>
                <img src={emailIcon} alt="emailIcon" />
                roycooltechcoorg@gmail.com
              </span>
            </dvi>
          </div>

          <div className={styles.address2}>
            <h3 className={styles.innerh2}>Address</h3>
            <span>
              M.D. Complex, Ponnampet Road,
              <br /> Gonikoppal, karnataka, India 571213
            </span>
            <div className={styles.mapSection}>
              <MapSection />
            </div>
          </div>
        </div>
        <div className={styles.lastSection}>
          <span>&copy; 2024 Cool Tech. All Rights Reserved</span>
          <a  className={styles.termsLink}>
            Terms - Privacy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
