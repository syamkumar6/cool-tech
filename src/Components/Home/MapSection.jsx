import styles from "./Map.module.css"

function MapSection() {
    return (
      <div>
        <div className={styles.responsiveMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15600.189343119016!2d75.9327344!3d12.1771806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5bb81a2e760b3%3A0xb5bd617e35c44b0!2sCOOL%20TECH%20Fabrication%20%7C%20Aluminium%20Interior%20And%20Exterior%20Design!5e0!3m2!1sen!2sin!4v1732430046561!5m2!1sen!2sin" width="600" height="450"  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    );
  }
  
  export default MapSection;
  