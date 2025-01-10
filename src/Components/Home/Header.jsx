import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import closeIcon from "../../assets/svg/close.svg";
import toast from "react-hot-toast";
import menuIcon from "../../assets/svg/menu.svg";
import closeIcon2 from "../../assets/svg/close2.svg";
import whatsIcon from "../../assets/svg/whatsappLogo.svg";
import callIcon from "../../assets/svg/callIcon.svg";
import logo from "../../assets/images/logo2.webp"

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [state, handleSubmit] = useForm("xqaknvgn");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "+919482055649";
  const callNumber = "+919482055649"; 

  const handleWhatsAppClick = () => {
    const message = "Hello! I would like to know more about your services.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = `tel:${callNumber}`;
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false); // Close menu
  };

  useEffect(() => {
    if (state.succeeded) {
      setIsVisible(false); // Hide the form
      toast.success("Form submitted successfully!"); // Show success message
    }
  }, [state.succeeded]);

  return (
    <>
      <header className={styles.Header}>
        <div className={styles.logoDiv}>
          <img src={logo} alt="logo" />
        </div>
        <nav className={styles.nav}>
          <Link to={"/"} className={styles.Link}>
            HOME
          </Link>
          <Link to={"/about"} className={styles.Link}>
            ABOUT
          </Link>
          <div className={styles.dropdown}>
            <Link className={styles.Link}>PRODUCTS & SERVICES</Link>
            <div className={styles.dropdownContent}>
              <Link to={"/service/" + 3}> Kitchen Cabinets</Link>
              <Link to={"/service/" +14}>Wardrobes</Link>
              <Link to={"/service/" + 5}>Doors and Windows</Link>
              <Link to={"/service/" + 2}>Partitions</Link>
              <Link to={"/service/" + 1}>Glass Partition</Link>
              <Link to={"/service/" + 4}>Showcase</Link>
              <Link to={"/products"}>View All</Link>
            </div>
          </div>
          <Link to={"contact"} className={styles.Link}>
            CONTACT
          </Link>
          <Link
            to={"#"}
            className={styles.Link}
            onClick={() => setIsVisible(true)}
          >
            REQUEST A QUOTE
          </Link>
        </nav>
        {isVisible && (
          <div className={styles.overlay}>
            <div className={styles.formCnt}>
              <h2>Schedule a Virtual Appointment</h2>
              <button
                onClick={() => setIsVisible(false)}
                className={styles.closeBtn}
              >
                {" "}
                <img src={closeIcon} alt="closeIcon" />{" "}
              </button>
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name Field */}
                <input id="name" type="text" name="name" placeholder="Name" />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />

                {/* Email Field */}
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                {/* Phone Number Field */}
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />

                {/* Message Field */}
                <textarea id="message" name="message" placeholder="Message" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                {/* Submit Button */}
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
        <button onClick={handleMenuToggle} className={styles.menuBtn}>
          <img src={menuIcon} alt="menuIcon" />
        </button>
      </header>

      <div
        className={`${styles.sideSection} ${
          isMenuOpen ? styles.sideSectionOpen : ""
        }`}
      >
        <button onClick={handleCloseMenu} className={styles.closeBtn}>
          <img src={closeIcon2} alt="" />
        </button>
        <nav className={styles.nav2}>
          <Link to={"/"} onClick={handleCloseMenu} className={styles.Link}>
            HOME
          </Link>
          <Link to={"/about"} onClick={handleCloseMenu} className={styles.Link}>
            ABOUT
          </Link>
          <div className={styles.dropdown}>
            <Link className={styles.Link}>PRODUCTS & SERVICES</Link>
            <div className={styles.dropdownContent}>
              <Link to={"/service/" + 3} onClick={handleCloseMenu}> Kitchen Cabinets</Link>
              <Link to={"/service/" + 14} onClick={handleCloseMenu}>Wardrobes</Link>
              <Link to={"/service/" + 5} onClick={handleCloseMenu}>Doors and Windows</Link>
              <Link to={"/service/" + 2} onClick={handleCloseMenu}>Partitions</Link>
              <Link to={"/service/" + 1} onClick={handleCloseMenu}>Glass Partition</Link>
              <Link to={"/service/" + 4} onClick={handleCloseMenu}>Showcase</Link>
              <Link to={"/products"} onClick={handleCloseMenu}>View All</Link>
            </div>
          </div>
          <Link to={"contact"} className={styles.Link} onClick={handleCloseMenu}>
            CONTACT
          </Link>
          <Link
            to={"#"}
            className={styles.Link}
            onClick={() => setIsVisible(true)}
          >
            REQUEST A QUOTE
          </Link>
          <button onClick={handleWhatsAppClick} className={styles.button}>
        <img src={whatsIcon} alt="WhatsApp Logo" /> Whatsapp
      </button>
      <button onClick={handleCallClick} className={styles.button}>
        <img src={callIcon} alt="Call Icon" /> Call
      </button>
        </nav>
        {isVisible && (
          <div className={styles.overlay}>
            <div className={styles.formCnt}>
              <h2>Schedule a Virtual Appointment</h2>
              <button
                onClick={() => setIsVisible(false)}
                className={styles.closeBtn}
              >
                {" "}
                <img src={closeIcon} alt="closeIcon" />{" "}
              </button>
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name Field */}
                <input id="name" type="text" name="name" placeholder="Name" />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />

                {/* Email Field */}
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                {/* Phone Number Field */}
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />

                {/* Message Field */}
                <textarea id="message" name="message" placeholder="Message" />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                {/* Submit Button */}
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
