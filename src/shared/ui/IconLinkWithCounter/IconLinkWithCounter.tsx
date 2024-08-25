// react
import { FC } from "react";
import Link from "next/link";
// styles
import styles from "./IconLinkWithCounter.module.scss";

interface IconLinkWithCounterProps {
  count: number;
  to: string;
  icon: React.ReactNode;
}

export const IconLinkWithCounter: FC<IconLinkWithCounterProps> = ({
  count,
  icon,
  to,
}) => {
  return (
    <Link href={to} className={styles.IconLinkWithCounter}>
      {icon}
      {count > 0 && <div className={styles.counter}>{count} </div>}
    </Link>
  );
};
