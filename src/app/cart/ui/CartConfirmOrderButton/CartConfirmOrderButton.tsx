"use client";
// next
import { useRouter } from "next/navigation";
// react
import { FC } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// libs
import { nanoid } from "nanoid";
// entities
import { orderActions } from "@/entities/order";
import { getUserState, userActions } from "@/entities/user";
// ui
import { Button } from "@/shared/ui/Button";
import { getSingleOrderRoute } from "@/shared/libs/constants/routes";

interface CartConfirmOrderButtonProps {}

export const CartConfirmOrderButton: FC<CartConfirmOrderButtonProps> = ({}) => {
  const { user } = useSelector(getUserState);

  const dispatch = useDispatch();

  const { push } = useRouter();

  const onConfirmOrderClick = () => {
    const orderId = nanoid(22);

    dispatch(
      orderActions.createOrder({
        id: orderId,
        items: user.cartItems,
      })
    );
    dispatch(userActions.removeAllItems());
    push(getSingleOrderRoute(orderId));
  };

  const isCartIsNotEmpty = user.cartItems.length;

  return isCartIsNotEmpty ? (
    <Button maxWidth={"300px"} onClick={onConfirmOrderClick}>
      Підтвердити замовлення
    </Button>
  ) : null;
};
