import styles from "./SecondScreen.module.css"
import What from "../components/What/What"
import headNlp from "../images/head-nlp.png"
const SecondScreen=()=>{


    return     <>
    <div className={styles.title} id="השירותים שלי">
      השירותים שלי
    </div>
    <div className={styles.row}>
      <What
        title="טיפול NLP"
        description="טיפול של 60 דק "
        src={headNlp}
        itemScope
        message="היי אורית, ראית את האתר שלך ואשמח לשמוע פרטים נוספים  "
        itemType="https://schema.org/Service"
      />
     
    </div>
  </>
}
export default SecondScreen