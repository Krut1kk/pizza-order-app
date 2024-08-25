// react
import { FC } from "react";
import Link from "next/link";
// constants
import { getHomeRoute } from "@/shared/libs/constants/routes";
// assets
import Icon from "../../libs/assets/images/svg/a-bow-tie.svg";
// styles
import styles from "./Logo.module.scss";

interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link className={styles.Logo} href={getHomeRoute()}>
      <h1 className={styles.LogoText}>Elegance Boutique</h1>
      <Icon />
    </Link>
  );
};
