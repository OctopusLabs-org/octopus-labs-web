import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  skin?: string;
  children: string | ReactNode;
}

const Button = ({ skin = "primary", children }: Props) => {
  return (
    <button className={[styles.btn, styles[`btn-${skin}`]].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
