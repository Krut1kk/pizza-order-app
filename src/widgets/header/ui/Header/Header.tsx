// react
import { FC } from "react";
// styles
import styles from "./Header.module.scss";
import { Link } from "@/shared/ui/Link";
import {
  getCartRoute,
  getHomeRoute,
  getOrdersRoute,
} from "@/shared/libs/constants/routes";

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.Header}>
      <Link text="Головна" to={getHomeRoute()} />
      <Link text="Корзина" to={getCartRoute()} />
      <Link text="Мої замовлення" to={getOrdersRoute()} />
    </div>
  );
};
