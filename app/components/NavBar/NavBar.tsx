import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navWrapper}>
      <span className={styles.navTitle}>Octopus Labs</span>
    </nav>
  );
};

export default NavBar;
