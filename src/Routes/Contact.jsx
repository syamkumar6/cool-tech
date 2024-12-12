import styles from "./Contact.module.css";
import CallIcon from "../assets/svg/callIcon.svg";
import gmailIcon from "../assets/svg/email2.svg";
import addressIcon from "../assets/svg/address.svg";
import ContactSection from "../Components/Home/ContactSection";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>Contact Us</h2>
      </div>
      <div className={styles.cntContainer}>
      <div className={styles.container}>
        <h1>We’re Here to Help</h1>
        <div className={styles.row1}>
          <h3> <img src={addressIcon} alt="" />  Address</h3>
          <span>
            M.D. Complex, Opp. Jayappa Complex, Ponnampet Road,
            <br /> Gonikoppal, karnataka 571213, India 
          </span>
          <h3> <img src={gmailIcon} alt="gmailIcon" /> Email</h3>
          <span>
             roycooltechcoorg@gmail.com
          </span>
          <h3> <img src={CallIcon} alt="CallIcon" /> Call</h3>
          <span>
             +91 9482055649,<br /> +91 9482326649
          </span>
        </div>

        
      </div>
        <div className={styles.imgContainer}>
          <img src="" alt="" />
        </div>
      </div>
      
      
      <div className={styles.mapSection}>
          <div className={styles.responsiveMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15600.189343119016!2d75.9327344!3d12.1771806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5bb81a2e760b3%3A0xb5bd617e35c44b0!2sCOOL%20TECH%20Fabrication%20%7C%20Aluminium%20Interior%20And%20Exterior%20Design!5e0!3m2!1sen!2sin!4v1732430046561!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        
      </div>
      <div>
        <ContactSection/>
      </div>
    </div>
  );
}

export default Contact;
