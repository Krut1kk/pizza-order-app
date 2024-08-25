// next
import type { Metadata } from "next";
// entities
import { DishItemList, dishItems } from "@/entities/dish";
// styles
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Home",
  description: "Choose your dish",
};

interface PageProps {}
export default function Page({}: PageProps) {
  return (
    <div className={styles.Page}>
      <DishItemList items={dishItems} />
    </div>
  );
}
