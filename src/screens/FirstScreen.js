import styles from "./FirstScreen.module.css";
import logo from "../images/logo.jpeg";

const FirstScreen = (props) => {
  return (
    <>
      <div itemScope itemType="https://schema.org/Person">
      
        <div className={!props.scrolled ? styles.center : styles.centerFixed}><img className={styles.image} src={logo} alt="אורית אבן חן " itemProp="image" /></div>
        <h1 className={styles.title} itemProp="name">אורית אבן חן </h1>
        <h2 id="job" className={styles.job} itemProp="jobTitle">•ריפוי דרך תת המודע • שחרור • NLP </h2>
        <div className={styles.quate} itemProp="description">"להיות אדם מואר"</div>
      </div>
    </>
  );
}

export default FirstScreen;
