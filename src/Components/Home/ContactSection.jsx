import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import styles from "./ContactSection.module.css";
import sendlIcon from "../../assets/svg/send.svg";
import starIcon from "../../assets/images/star.webp";
import callIcon from "../../assets/svg/call.svg";
import emailIcon from "../../assets/svg/email.svg";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f2h6n5m", // Replace with your EmailJS service ID
        "template_gqis1pd", // Replace with your EmailJS template ID
        formData, // Data from the form
        "D_bES6Cy1hgbX9-dk" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          toast.success("Form submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to submit form. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.formSection}>
        <p>Get a Free Quote Today!</p>
        <h2>
          Feel Free To Enquire About <br />
          Any Questions You Got
        </h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          {/* Name Field */}
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Email Field */}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Phone Number Field */}
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Message Field */}
          <textarea
            id="message"
            name="message"
            placeholder="Enter your requirements here..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <button type="submit">
            Submit <img src={sendlIcon} alt="" />
          </button>
        </form>
      </div>
      <div className={styles.contactS2}>
        <h2>24 Years Of Experience.</h2>
        <p>Customer Ratings</p>
        <div className={styles.starDiv}>
          <img src={starIcon} alt="star Icon" />
          <img src={starIcon} alt="star Icon" />
          <img src={starIcon} alt="star Icon" />
          <img src={starIcon} alt="star Icon" />
          <img src={starIcon} alt="star Icon" />
        </div>
        <h1>4.9 / 5.0</h1>
        <p>By 150+ Satisfied Customers</p>
        <div className={styles.contactDet}>
          <img src={callIcon} alt="call Icon" />
          <p>
            +91 9482055649 <br /> +91 9482326649
          </p>
        </div>
        <div className={styles.contactDet}>
          <img src={emailIcon} alt="email Icon" />
          <p>roycooltechcoorg@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
