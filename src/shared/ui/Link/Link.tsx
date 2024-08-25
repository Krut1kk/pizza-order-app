// react
import { FC } from "react";
import NextLink from "next/link";
// styles
import styles from "./Link.module.scss";

interface LinkProps {
  text: string;
  to: string;
}

export const Link: FC<LinkProps> = ({ text, to }) => {
  return (
    <NextLink className={styles.Link} href={to}>
      {text}
    </NextLink>
  );
};
