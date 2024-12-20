import Achivments from "../components/Achivments/Achivments";
import UiverseButton from "../components/buttons/Button";
import styles from "./ThirdScreen.module.css";

const ThirdScreen = () => {
  return (
    <>
      <div className={styles.title} id="הישגים"> הישגים</div>
      <div className={styles.row}>
        <Achivments achivment="הסמכה ב... " itemScope itemType="https://schema.org/Achievement"/>
        <Achivments achivment="הסמכה ב... " itemScope itemType="https://schema.org/Achievement"/>
        <Achivments achivment="הסמכה ב... " itemScope itemType="https://schema.org/Achievement"/>
      </div>
      {/* <div className={styles.row}>
        <Achivments achivment="ריפוי גידול סרטני על ידי אנרגיה" itemScope itemType="https://schema.org/Achievement"/>
        <Achivments achivment="הצלחה בכניסה להריון אחרי שנים ללא הצלחה" itemScope itemType="https://schema.org/Achievement"/>
        <Achivments achivment="ריפוי וסליחה עמוקה בנושא בגידה- הצלחה בחזרת הקשר" itemScope itemType="https://schema.org/Achievement"/>
      </div>
      <div className={styles.row}>
        <Achivments achivment="ריפוי פנימי שהוביל לזוגיות רצינית עם גבר שהיה נוכח בחיי האישה שנים ללא הגדרה" itemScope itemType="https://schema.org/Achievement"/>
        <Achivments achivment="צמיחה כלכלית משגשגת" itemScope itemType="https://schema.org/Achievement"/>
        <Achivments achivment="מעבר בין שכירה לעצמאית תוך הגשמת חלום" itemScope itemType="https://schema.org/Achievement"/>
      </div> */}
      <UiverseButton />
    </>
  );
};

export default ThirdScreen;
