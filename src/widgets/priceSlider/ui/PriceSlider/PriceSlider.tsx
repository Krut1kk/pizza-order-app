"use client";
import React, { FC, useState } from "react";
// styles
import styles from "./PriceSlider.module.scss";

interface PriceSliderProps {
  price: number;
  setPrice: (value: number) => void;
  minValue?: number;
  maxValue: number;
  disabled: boolean;
}

export const PriceSlider: FC<PriceSliderProps> = ({
  price,
  setPrice,
  minValue = 0,
  maxValue,
  disabled,
}) => {
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= minValue && value <= maxValue) {
      setPrice(value);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <input
        type="number"
        value={price}
        disabled={disabled}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <div className={styles.sliderWrapper}>
        <input
          type="range"
          disabled={disabled}
          min={minValue}
          max={maxValue}
          value={price}
          onChange={handleSliderChange}
          className={styles.slider}
        />
      </div>
    </div>
  );
};
