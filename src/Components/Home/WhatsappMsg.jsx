import styles from "./Whatsapp.module.css";
import whatsIcon from "../../assets/svg/whatsappLogo.svg";
import callIcon from "../../assets/svg/callIcon.svg";

function WhatsappMsg() {
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

  return (
    <div className={styles.mainContainer}>
      <button onClick={handleWhatsAppClick} className={styles.whatsappButton}>
        <img src={whatsIcon} alt="WhatsApp Logo" /> Whatsapp
      </button>
      <button onClick={handleCallClick} className={styles.callButton}>
        <img src={callIcon} alt="Call Icon" /> Call
      </button>
    </div>
  );
}

export default WhatsappMsg;

