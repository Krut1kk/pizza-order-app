"use client";
// react
import { ReactNode, FC, CSSProperties } from "react";
// libs
import { clsx } from "clsx";
// styles
import styles from "./Button.module.scss";

interface ButtonProps {
  icon?: ReactNode;
  onClick: () => void;
  children?: ReactNode;
  disabled?: boolean;
  backgroundColor?: "rose" | "green" | "black";
  size?: "small" | "medium" | "large";
  maxWidth?: CSSProperties["maxWidth"];
}

export const Button: FC<ButtonProps> = ({
  icon,
  children,
  onClick,
  disabled,
  maxWidth,
  backgroundColor = "rose",
  size = "medium",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.Button, {
        [styles.roseBG]: backgroundColor === "rose",
        [styles.greenBG]: backgroundColor === "green",
        [styles.blackBG]: backgroundColor === "black",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      style={{ maxWidth: maxWidth }}
    >
      {icon && <div className={styles.Icon}>{icon}</div>}
      {children}
    </button>
  );
};
