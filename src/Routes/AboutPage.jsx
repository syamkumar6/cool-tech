import { useEffect, useState } from "react";
import ContactSection from "../Components/Home/ContactSection";
import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import cardData from "../Components/CardData";
import logo from "./../assets/images/cntLogo.webp"; 

function AboutPage() {
  const [hoveredImage, setHoveredImage] = useState(logo); // Default image

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>About COOL TECH Interior | Aluminium Fabrication Experts</title>
        <meta
          name="description"
          content="Learn about COOL TECH Interior, your trusted partner in aluminum fabrication since 2000. Based in Coorg, Karnataka, we deliver quality and innovation."
        />
        <meta name="keywords" content="COOL TECH Interior, aluminum fabrication, Coorg, Karnataka" />
        <meta name="author" content="COOL TECH Interior" />
        <meta property="og:title" content="About COOL TECH Interior | Aluminium Fabrication Experts" />
        <meta property="og:description" content="Discover COOL TECH Interior's 24 years of excellence in aluminum fabrication and custom interiors in Coorg, Karnataka." />
        <meta property="og:image" content="./../assets/images/cntLogo.webp" />
        <meta property="og:url" content="https://cooltechinterior.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className={styles.pageHeader}>
        <h1>About Us</h1>
      </div>

      <div className={styles.contentDiv}>
        <p>
          Welcome to <strong>COOL TECH Interior</strong>, your trusted partner in aluminum fabrication <strong>since 2000.</strong> <br /> 
          With 24 years of dedicated experience, we have been transforming spaces in <strong>Coorg, Karnataka,</strong> and beyond. 
          Our journey has been built on a foundation of quality craftsmanship, innovative designs, and a commitment 
          to customer satisfaction. Over the years, we have successfully completed 100+ projects, earning the trust 
          and loyalty of countless clients.
        </p>

        <p>
          Our expertise spans a wide range of services, including the design and installation of <br />
          <div className={styles.ctSection}>
            <div className={styles.products}>
              {cardData.map((item, index) => (
                <Link
                  key={index}
                  className={styles.Link}
                  onMouseEnter={() => setHoveredImage(item.img)}
                  onMouseLeave={() => setHoveredImage(logo)} 
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className={styles.imageWrapper}>
              <img src={hoveredImage} alt="Hovered Preview" />
            </div>
          </div>
          Whether you are renovating your home, setting up a commercial space, or creating custom solutions for specific needs, 
          we bring precision and professionalism to every project.
        </p>

        <p>
          At <strong>COOL TECH</strong>, we believe in blending aesthetics with functionality. Our aluminum fabrication solutions are tailored 
          to enhance the beauty and usability of your spaces while maintaining durability and ease of maintenance. Based in the 
          serene landscapes of Coorg, we take pride in delivering solutions that match the highest standards of excellence.
        </p>

        <p>
          Join our growing family of satisfied clients and let us bring your vision to life. With a team of skilled professionals 
          and a commitment to innovation, we are here to make your spaces truly extraordinary.
        </p>
      </div>
      <div>
        <ContactSection />
      </div>
    </div>
  );
}

export default AboutPage;
