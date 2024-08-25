"use client";
// react
import { FC } from "react";
// redux
import { useDispatch } from "react-redux";
// entities
import { userActions } from "@/entities/user";
// assets
import DeleteIcon from "../../libs/assets/svg/deleteIcon.svg";
// types
import type { ICart } from "../../model/types/cartTypes";
// styles
import styles from "./CartItem.module.scss";

interface CartItemProps extends ICart {
  readonly?: boolean;
}

export const CartItem: FC<CartItemProps> = ({
  id,
  img,
  price,
  title,
  count,
  readonly,
}) => {
  const dispatch = useDispatch();

  const onIncreaseClick = () => {
    dispatch(userActions.increaseItemCount(id));
  };

  const onDecreaseClick = () => {
    dispatch(userActions.decreaseItemCount(id));
  };

  const onDeleteClick = () => {
    dispatch(userActions.removeItemFromCart(id));
  };

  return (
    <div className={styles.CartItem}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <div className={styles.imageContainer}>
            <img src={img} />
          </div>
          <div className={styles.title}>{title}</div>
        </div>

        <div className={styles.price}>Ціна(1шт): {price} грн</div>
        <div className={styles.quantity}>
          Кількість:{" "}
          {!readonly && (
            <div onClick={onDecreaseClick} className={styles.icon}>
              -
            </div>
          )}
          {count}{" "}
          {!readonly && (
            <div onClick={onIncreaseClick} className={styles.icon}>
              +
            </div>
          )}
        </div>
        <div className={styles.subtotal}>Всього: {price * count!} грн</div>
        {!readonly && (
          <DeleteIcon className={styles.deleteIcon} onClick={onDeleteClick} />
        )}
      </div>
    </div>
  );
};
