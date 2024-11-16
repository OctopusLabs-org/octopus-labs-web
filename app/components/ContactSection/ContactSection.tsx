import Input from "../Input";
import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <div className={[styles.contactSection, styles.container].join(" ")}>
      <h2 className={styles.sectionTitle}>Contact Us</h2>

      <div className={styles.formWrapper}>
        <Input label="Your Name" type="text" id="name" name="name" />
        <Input label="Email" type="email" id="email" name="email" />

        <Input
          label="Message"
          type="textarea"
          id="message"
          name="message"
          rows={5}
        />
      </div>
    </div>
  );
};

export default ContactSection;
