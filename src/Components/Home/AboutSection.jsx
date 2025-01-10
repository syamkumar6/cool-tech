import { Link } from 'react-router-dom'
import styles from './About.module.css'
import frameImg from "../../assets/images/frame.webP"

function AboutSection() {
  return ( 
    <div className={styles.aboutSection}>
        <h2 className={styles.aboutH2}>About us </h2>
        <div className={styles.Container}>
            <div className={styles.TextContent}>
            <p>Founded in 2000 amidst the scenic beauty of Coorg, Karnataka, we have been a steadfast provider of high-quality aluminum services for over two decades. Driven by a commitment to precision, craftsmanship, and innovation, we’ve earned a reputation as a trusted partner for clients seeking durable, custom-built aluminum solutions... </p><Link to={"/about"} className={styles.readMoreBtn}>Read more</Link>
            </div>
            <div className={styles.ImageContent}>
                <img src={frameImg} alt="" loading="lazy"/>
            </div>
        </div>
    </div>
  )
}

export default AboutSection