"use client";
// react
import { FC } from "react";
// redux
import { useDispatch } from "react-redux";
// types
import { IPeopleForSplitPrice, userActions } from "@/entities/user";
// styles
import styles from "./AddPeopleForPriceSliceItem.module.scss";

interface AddPeopleForPriceSliceItemProps extends IPeopleForSplitPrice {
  onPeopleItemClick: (person: IPeopleForSplitPrice) => void;
}

export const AddPeopleForPriceSliceItem: FC<
  AddPeopleForPriceSliceItemProps
> = ({ id, name, onPeopleItemClick }) => {
  const dispatch = useDispatch();

  const onNameClick = () => {
    onPeopleItemClick({ id, name });
  };

  const onDeleteClick = () => {
    dispatch(userActions.removePeopleForSplitPrice(id));
  };

  return (
    <div className={styles.AddPeopleForPriceSliceItem}>
      <div className={styles.name} onClick={onNameClick}>
        {name}
      </div>
      <div onClick={onDeleteClick} className={styles.deleteIcon}>
        ❌
      </div>
    </div>
  );
};
