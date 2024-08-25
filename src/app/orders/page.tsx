// next
import type { Metadata } from "next";
// ui
import { OrderPageItems } from "./ui/OrderPageItems/OrderPageItems";
// styles
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Your Orders",
  description: "",
};

interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <div className={styles.Page}>
      <OrderPageItems />
    </div>
  );
}
