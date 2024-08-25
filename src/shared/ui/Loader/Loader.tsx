// react
import { FC } from "react";
// libs
import { clsx } from "clsx";
// styles
import styles from "./Loader.module.scss";

interface LoaderProps {
  additionalClassname?: string;
}

export const Loader: FC<LoaderProps> = ({ additionalClassname }) => (
  <div className={clsx(styles.Loader, additionalClassname)}>
    <div className={styles.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className={styles.text}>Завантаження</div>
  </div>
);
