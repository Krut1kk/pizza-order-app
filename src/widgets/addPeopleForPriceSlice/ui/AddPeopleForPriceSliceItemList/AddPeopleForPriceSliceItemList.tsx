"use client";
// react
import { FC } from "react";
// redux
import { useSelector } from "react-redux";
// ui
import { AddPeopleForPriceSliceItem } from "../AddPeopleForPriceSliceItem/AddPeopleForPriceSliceItem";
// types
import { getUserState, IPeopleForSplitPrice } from "@/entities/user";
// styles
import styles from "./AddPeopleForPriceSliceItemList.module.scss";

interface AddPeopleForPriceSliceItemListProps {
  onPeopleItemClick: (person: IPeopleForSplitPrice) => void;
}

export const AddPeopleForPriceSliceItemList: FC<
  AddPeopleForPriceSliceItemListProps
> = ({ onPeopleItemClick }) => {
  const { user } = useSelector(getUserState);

  const isNoPeople = !user.peoplesForSplitPrice?.length;

  return !isNoPeople ? (
    <div className={styles.AddPeopleForPriceSliceItemList}>
      {user.peoplesForSplitPrice?.map(({ id, name }) => (
        <AddPeopleForPriceSliceItem
          onPeopleItemClick={onPeopleItemClick}
          key={id}
          id={id}
          name={name}
        />
      ))}
    </div>
  ) : (
    <div className={styles.text}>Поки нікого немає ,додайте людину</div>
  );
};
