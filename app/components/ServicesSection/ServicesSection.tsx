import styles from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <div className={[styles.serviceWrapper, styles.container].join(" ")}>
      <h2>Our Services</h2>

      <div className={styles.serviceGrid}>
        <div className={styles.gridItem}>
          <h3 className={styles.heading}>Graphic Designing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            commodi dolorem accusamus repudiandae tempore cupiditate impedit
            quidem ullam atque odit in pariatur recusandae ab odio deserunt
            repellendus quod aspernatur a qui? Officia aut veritatis, expedita
            placeat cupiditate in eaque perspiciatis maxime sequi nihil
            dignissimos asperiores amet vitae ea, debitis quis tempora modi!
            Numquam consequuntur sunt animi ducimus, incidunt cupiditate
            dolorem!
          </p>
        </div>
        <div className={styles.gridItem}>
          <h3 className={styles.heading}>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            commodi dolorem accusamus repudiandae tempore cupiditate impedit
            quidem ullam atque odit in pariatur recusandae ab odio deserunt
            repellendus quod aspernatur a qui? Officia aut veritatis, expedita
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
