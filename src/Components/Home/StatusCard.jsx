import WorkersIcon from "../../assets/svg/workers.svg";
import HappyIcon from "../../assets/svg/trophy.svg";
import OngoingIcon from "../../assets/svg/ongoing.svg";
import CompletedIcon from "../../assets/svg/completed.svg";

import { useEffect, useRef, useState } from "react";
import styles from "./StatusCard.module.css";

function StatusCard() {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className={styles.cardContainer} ref={sectionRef}>
        <div className={styles.cardBody}>
          <img src={CompletedIcon} alt="Completed Projects" />
          <span>{startCount && <Counter endValue={100} />}+</span>
          <p>Projects complete</p>
        </div>
        <div className={styles.cardBody}>
          <img src={OngoingIcon} alt="Ongoing Projects" />
          <span>{startCount && <Counter endValue={10} />}+</span>
          <p>Ongoing</p>
        </div>
        <div className={styles.cardBody}>
          <img src={WorkersIcon} alt="Workers" />
          <span>{startCount && <Counter endValue={10} />}+</span>
          <p>Workers</p>
        </div>
        <div className={styles.cardBody}>
          <img src={HappyIcon} alt="Happy Clients" />
          <span>{startCount && <Counter endValue={100} />}+</span>
          <p>Happy Clients</p>
        </div>
      </section>

      
    </>
  );
}

function Counter({ endValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / endValue));

    const timer = setInterval(() => {
      start += 1;
      if (start <= endValue) {
        setCount(start);
      } else {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [endValue]);

  return <>{count}</>;
}

export default StatusCard;
