import { useMemo } from "react";

interface CalculatbleItem {
  price: number;
  count?: number | undefined;
  [key: string]: any;
}

export const calculateSubtotalPrice = (items: CalculatbleItem[]) => {
  return items.reduce((acc, item) => {
    return acc + item.price * (item?.count || 1);
  }, 0);
};
