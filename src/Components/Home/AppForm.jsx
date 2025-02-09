import { useForm, ValidationError } from "@formspree/react";
import styles from "./AppForm.module.css";
import {  useState } from "react";

function AppForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [state, handleSubmit] = useForm("xqaknvgn");
 
  if (state.succeeded) {
    return <p>Thanks for getting in touch!</p>;
  }
 
  return isVisible && (
    <div className={styles.overlay}>
      <div className={styles.formCnt}>
        <h2>Schedule a Virtual Appointment</h2>
        <button onClick={() => setIsVisible(false)}>close</button>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Name Field */}
          <input id="name" type="text" name="name" placeholder="Name"/>
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* Email Field */}
          <input id="email" type="email" name="email" placeholder="Email Address"/>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* Phone Number Field */}
          <input id="phone" type="tel" name="phone" placeholder="Phone Number"/>
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          {/* Message Field */}
          <textarea id="message" name="message" placeholder="Message"/>
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
  );
}

export default AppForm;
