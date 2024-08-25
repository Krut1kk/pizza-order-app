// react
import { FC } from "react";
// ui
import { DishItem } from "../DishItem/DishItem";
// types
import type { IDish } from "../../model/types/dishTypes";
// styles
import styles from "./DishItemList.module.scss";

interface DishItemListProps {
  items: IDish[];
}

export const DishItemList: FC<DishItemListProps> = ({ items }) => {
  return (
    <div className={styles.DishItemList}>
      {items.map(({ description, id, img, price, size, title }) => (
        <DishItem
          key={title}
          id={id}
          img={img}
          title={title}
          description={description}
          price={price}
          size={size}
        />
      ))}
    </div>
  );
};
