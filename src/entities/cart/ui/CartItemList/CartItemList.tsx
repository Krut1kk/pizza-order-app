// react
import { FC } from "react";
// ui
import { CartItem } from "../CartItem/CartItem";
// types
import type { ICart } from "../../model/types/cartTypes";
// styles
import styles from "./CartItemList.module.scss";

interface CartItemListProps {
  items: ICart[];
  readonly?: boolean;
}

export const CartItemList: FC<CartItemListProps> = ({ items, readonly }) => {
  return (
    <div className={styles.CartItemList}>
      {items.map(({ id, img, price, title, count }) => (
        <CartItem
          key={id}
          readonly={readonly}
          id={id}
          img={img}
          price={price}
          title={title}
          count={count}
        />
      ))}
    </div>
  );
};
