import styles from "./MainSection.module.css";
import Button from "../Button";

const MainSection = () => {
  return (
    <div className={[styles.gridContainer, styles.container].join(" ")}>
      <div className={styles.gridItem}>
        <h1 className={styles.mainHeading}>We&apos;re Octopus Labs</h1>
        <span className={styles.mainTitle}>
          &quot;Creative Solutions, Tailored for Your Needs&quot;
        </span>
        <p className={styles.mainDescription}>
          Empowering small to medium businesses and individuals with innovative
          graphic design and web development services. Whether you need stunning
          visuals or robust web applications, our dedicated team delivers
          solutions that align perfectly with your goals. Let&apos;s bring your
          ideas to life with creativity and precision!
        </p>

        <div className={styles.btnGroup}>
          <Button>Contact Us</Button>
          <Button skin="outline">About Us</Button>
        </div>
      </div>

      <div className={styles.gridItem}>Octopus Logo</div>
    </div>
  );
};

export default MainSection;
