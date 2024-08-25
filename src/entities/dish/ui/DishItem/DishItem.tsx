"use client";
// react
import { FC, useState } from "react";
// redux
import { useDispatch } from "react-redux";
// widgets
import { ConfirmOrderModal } from "@/widgets/confirmOrderModal";
// entities
import { userActions } from "@/entities/user";
// ui
import { Button } from "@/shared/ui/Button";
// types
import type { IDish } from "../../model/types/dishTypes";
// styles
import styles from "./DishItem.module.scss";
import { useRouter } from "next/navigation";
import { getCartRoute } from "@/shared/libs/constants/routes";

interface DishItemProps extends IDish {}

export const DishItem: FC<DishItemProps> = ({
  description,
  img,
  price,
  id,
  size,
  title,
}) => {
  const dispatch = useDispatch();

  const { push } = useRouter();

  const [isHovered, setIsHovered] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnterAndLeave = () => {
    setIsHovered(!isHovered);
  };

  const onAddToCartClick = () => {
    setIsModalOpen(true);
    dispatch(userActions.addItemToCart({ id, img, price, title }));
  };

  const onConfirmClick = () => {
    console.log("onConfirmClick");
    setIsModalOpen(false);
    push(getCartRoute());
  };

  return (
    <>
      <ConfirmOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={onConfirmClick}
      />
      <div
        className={styles.DishItemWrapper}
        onMouseEnter={handleMouseEnterAndLeave}
        onMouseLeave={handleMouseEnterAndLeave}
      >
        <div className={styles.ImageWrapper}>
          <img src={img} alt={title} className={styles.image} />

          {isHovered && (
            <div className={styles.ButtonWrapper}>
              <Button
                onClick={onAddToCartClick}
                disabled={false}
                backgroundColor="black"
                size="small"
              >
                Додати в корзину
              </Button>
            </div>
          )}
        </div>

        <p className={styles.ProductName}>{title}</p>
        <p className={styles.ProductDescription}>{description}</p>
        <div className={styles.BottomContainer}>
          <p className={styles.ProductSize}>{size}</p>
          <p className={styles.ProductPrice}>{price} грн</p>
        </div>
      </div>
    </>
  );
};
