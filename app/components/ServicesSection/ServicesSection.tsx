import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <div className={[styles.serviceWrapper, styles.container].join(" ")}>
      <h2>Our Services</h2>

      <div className={styles.serviceGrid}>
        <div className={styles.gridItem}>
          <h3 className={styles.heading}>Graphic Designing</h3>

          <img src="images/graphic-design.svg" alt="Graphic Designing" />
        </div>

        <div className={styles.gridItem}>
          <h3 className={styles.heading}>Web Development</h3>
          <img src="images/web-development.svg" alt="Graphic Designing" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
