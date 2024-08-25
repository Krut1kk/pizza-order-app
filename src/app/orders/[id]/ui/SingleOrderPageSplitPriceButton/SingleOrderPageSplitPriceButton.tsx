"use client";
// react
import { FC, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// widgets
import { AddPeopleForPriceSliceModal } from "@/widgets/addPeopleForPriceSlice";
// entities
import { getOrderById, IOrder, orderActions } from "@/entities/order";
// ui
import { Button } from "@/shared/ui/Button";

interface SingleOrderPageSplitPriceButtonProps {
  id: IOrder["orderId"];
}

export const SingleOrderPageSplitPriceButton: FC<
  SingleOrderPageSplitPriceButtonProps
> = ({ id }) => {
  const order = useSelector(getOrderById(id));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const onSplitClick = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const isButtonDisabled =
    order?.status === "rejected" || order?.status === "received";

  return (
    <>
      <AddPeopleForPriceSliceModal
        onPeopleItemClick={(data) => {
          dispatch(
            orderActions.addPeopleForSplitPrice({
              orderId: id,
              peopleForSplitPrice: {
                id: data.id,
                name: data.name,
                splitedPrice: 0,
              },
            })
          );
        }}
        isOpen={isModalOpen}
        onClose={onClose}
      />
      <Button
        onClick={onSplitClick}
        backgroundColor="green"
        disabled={isButtonDisabled}
      >
        Розділити Рахунок
      </Button>
    </>
  );
};
