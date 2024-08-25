"use client";
// react
import { ReactNode, FC, ChangeEvent, HTMLInputTypeAttribute } from "react";
// libs
import { clsx } from "clsx";
// styles
import styles from "./Input.module.scss";

interface InputProps {
  icon?: ReactNode;
  placeholder?: string;
  borderStyle: "bottom" | "all" | "none";
  borderColor?: "black" | "gray" | "white";
  backgroundColor?: "none" | "gray";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: HTMLInputTypeAttribute;
  inputWrapperHeight?: "s" | "m" | "xl";
}

export const Input: FC<InputProps> = ({
  icon,
  placeholder,
  borderStyle = "all",
  borderColor = "gray",
  backgroundColor = "gray",
  onChange,
  value,
  type,
  inputWrapperHeight,
}) => {
  return (
    <div
      className={clsx(styles.InputWrapper, {
        [styles.borderBottom]: borderStyle === "bottom",
        [styles.borderAll]: borderStyle === "all",
        [styles.noBorder]: borderStyle === "none",
        [styles.sInputHightInput]: inputWrapperHeight === "s",
        [styles.mInputHeight]: inputWrapperHeight === "m",
        [styles.xlInputHeight]: inputWrapperHeight === "xl",
        [styles.blackBorderColor]: borderColor === "black",
        [styles.grayBorderColor]: borderColor === "gray",
        [styles.whiteBorderColor]: borderColor === "white",
        [styles.noneBackgroundColor]: backgroundColor === "none",
        [styles.grayBackgroundColor]: backgroundColor === "gray",
      })}
    >
      <input
        placeholder={placeholder}
        className={styles.Input}
        type={type}
        onChange={onChange}
        value={value}
      />
      {icon && <div className={styles.Icon}>{icon}</div>}
    </div>
  );
};
