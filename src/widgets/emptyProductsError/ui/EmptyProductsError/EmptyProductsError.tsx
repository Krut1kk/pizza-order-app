"use client";
// react
import { FC } from "react";
// styles
import styles from "./EmptyProductsError.module.scss";

interface EmptyProductsErrorProps {
  title?: string;
  description?: string;
  contentContainerClassName?: string;
}

export const EmptyProductsError: FC<EmptyProductsErrorProps> = ({
  description,
  title,
  contentContainerClassName,
}) => {
  return (
    <div className={contentContainerClassName}>
      <div className={styles.EmptyProductsError}>
        <div className={styles.title}>{title} 😕</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
