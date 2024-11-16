import styles from "./Input.module.css";

interface Props {
  type: "text" | "email" | "textarea";
  label: string;
  name: string;
  id: string;
  children?: string;
  rows?: number;
}

const Input = ({ type, label, name, id, children, rows }: Props) => {
  return (
    <div>
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea name={name} id={id} className={styles.textarea} rows={rows}>
          {children}
        </textarea>
      ) : (
        <input type={type} name={name} id={id} className={styles.input} />
      )}
    </div>
  );
};

export default Input;
