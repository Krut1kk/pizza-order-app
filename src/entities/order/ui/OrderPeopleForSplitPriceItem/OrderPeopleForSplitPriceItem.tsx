// react
import { FC } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// selectors
import {
  getOrderById,
  getOrderRemainingPrice,
} from "../../model/selectors/orderSelectors";
// actions
import { orderActions } from "../../model/slice/orderSlice";
// ui
import { PriceSlider } from "@/widgets/priceSlider";
// types
import { IOrder, IOrderPeopleForSpitPrice } from "../../model/types/orderTypes";
// styles
import styles from "./OrderPeopleForSplitPriceItem.module.scss";

interface OrderPeopleForSplitPriceItemProps extends IOrderPeopleForSpitPrice {
  orderId: IOrder["orderId"];
}

export const OrderPeopleForSplitPriceItem: FC<
  OrderPeopleForSplitPriceItemProps
> = ({ id, name, splitedPrice, orderId }) => {
  const dispatch = useDispatch();

  const order = useSelector(getOrderById(orderId));
  const remainingPrice = useSelector(getOrderRemainingPrice(orderId));

  const handleSliderChange = (value: number) => {
    const validValue = Math.min(value, remainingPrice + splitedPrice);

    dispatch(
      orderActions.changePeopleSplitedPrice({
        orderId: orderId,
        peopleForSplitPriceId: id,
        newPrice: validValue,
      })
    );
  };

  const isSliderDisabled =
    order?.status === "rejected" || order?.status === "received";

  return (
    <div className={styles.OrderPeopleForSplitPriceItem}>
      <div className={styles.name}>{name}</div>
      <PriceSlider
        price={splitedPrice}
        setPrice={handleSliderChange}
        disabled={isSliderDisabled}
        minValue={0}
        maxValue={Math.min(
          order?.totalPrice || 0,
          remainingPrice + splitedPrice
        )}
      />
    </div>
  );
};
