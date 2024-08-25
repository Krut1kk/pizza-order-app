// entities
import { OrderPeopleForSplitPriceItemList } from "@/entities/order";
// ui
import { SingleOrderPageItem } from "./ui/SingleOrderPageItem/SingleOrderPageItem";
import { SingleOrderPayNowButton } from "./ui/SingleOrderPayNowButton/SingleOrderPayNowButton";
import { SingleOrderPageSubtotal } from "./ui/SingleOrderPageSubtotal/SingleOrderPageSubtotal";
import { SingleOrderPageCancelButton } from "./ui/SingleOrderPageCancelButton/SingleOrderPageCancelButton";
import { SingleOrderPageSplitPriceButton } from "./ui/SingleOrderPageSplitPriceButton/SingleOrderPageSplitPriceButton";
// styles
import styles from "./page.module.scss";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: "Order № " + params.id,
  };
}

interface PageProps {
  params: { id: string };
}
export default function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <div className={styles.Page}>
      <SingleOrderPageItem id={id} />
      <OrderPeopleForSplitPriceItemList orderId={id} />

      <div className={styles.bottomContent}>
        <div className={styles.leftSideContainer}>
          <SingleOrderPayNowButton id={id} />
          <SingleOrderPageSubtotal id={id} />
        </div>
        <div className={styles.rightSideContainer}>
          <SingleOrderPageSplitPriceButton id={id} />
          <SingleOrderPageCancelButton id={id} />
        </div>
      </div>
    </div>
  );
}
