// react
import { FC, ReactNode } from "react";
// styles
import styles from "./Form.module.scss";

interface FormProps {
  children: ReactNode;
}

export const Form: FC<FormProps> = ({ children }) => {
  return <div className={styles.Form}>{children}</div>;
};
