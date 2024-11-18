import styles from "./When.module.css";
import { useEffect } from "react";
import UiverseButton from "../buttons/Button";
import ScrollReveal from "scrollreveal";

const When = (props) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.wrap}`, {
      duration: 1000,
      distance: "30px",
      origin: "top", // Start from the right side
      easing: "ease-out",
      reset: false,
      direction: "rtl",
      viewFactor: 0.2,
      interval: 300, // Delay between each element
      delay: 200, // Delay before the animation starts
      scale: 1, // Set scale to 1 or null
    });
  }, []);
  return (
    <>
      <div className={styles.header}>פסקאות קצרות</div>
      <div className={styles.wrapper}>
        <div
          className={styles.wrap}
          itemScope
          itemType="https://schema.org/Emotion"
        >
          <div className={styles.title}>כותרת</div>
          <div className={styles.description}>תיאור</div>
        </div>

        <div
          className={styles.wrap}
          itemScope
          itemType="https://schema.org/EnergyBalance"
        >
          <div className={styles.title}>כותרת</div>
          <div className={styles.description}>תיאור</div>
        </div>

        <div
          className={styles.wrap}
          itemScope
          itemType="https://schema.org/Event"
        >
          <div className={styles.title}>כותרת</div>
          <div className={styles.description}>תיאור</div>
        </div>
      </div>
      <div className={styles.explain}>עוד פסקה לכתוב </div>

      <UiverseButton />
    </>
  );
};

export default When;
