// next
import type { Metadata } from "next";
// ui
import { CartConfirmOrderButton } from "./ui/CartConfirmOrderButton/CartConfirmOrderButton";
import { CartPageItems } from "./ui/CartPageItems/CartPageItems";
import { CartSubtotal } from "./ui/CartSubtotal/CartSubtotal";
// styles
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "",
};

interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <div className={styles.Page}>
      <CartPageItems />

      <div className={styles.bottomContent}>
        <CartSubtotal />
        <CartConfirmOrderButton />
      </div>
    </div>
  );
}
