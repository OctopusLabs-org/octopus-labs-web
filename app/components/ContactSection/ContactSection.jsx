import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={[styles.formWrapper, styles.container].join(" ")}>
      <h2>Contact Us</h2>
    </div>
  );
};

export default ContactSection;
