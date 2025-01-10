import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";
import styles from "./ContactSection.module.css";
import sendlIcon from "../../assets/svg/send.svg";
import starIcon from "../../assets/images/star.webp";
import callIcon from "../../assets/svg/call.svg";
import emailIcon from "../../assets/svg/email.svg";

function ContactSection() {
  const [state, handleSubmit] = useForm("xqaknvgn");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Side effect: handle success
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [state.succeeded]); // Run this effect only when `state.succeeded` changes

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
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* Email Field */}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Phone Number Field */}
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          {/* Message Field */}
          <textarea
            id="message"
            name="message"
            placeholder="Enter your requirements here..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          {/* Submit Button */}
          <button type="submit" disabled={state.submitting}>
            Submit <img src={sendlIcon} alt="" />
          </button>
        </form>
      </div>
      <div className={styles.contactS2}>
        <h2>24 Years Of Experience.</h2>
        <p>Customer Ratings</p>
        <div className={styles.starDiv}>
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
        </div>
        <h1>4.9 / 5.0</h1>
        <p>By 150+ Satisfied Customers</p>
        <div className={styles.contactDet}>
          <img src={callIcon} alt="" />
          <p>
            +91 9482055649 <br /> +91 9482326649
          </p>
        </div>
        <div className={styles.contactDet}>
          <img src={emailIcon} alt="" />
          <p>roycooltechcoorg@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
