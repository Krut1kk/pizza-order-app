import { routeConfig } from "@/appRoot/config/route";

export const getHomeRoute = () => routeConfig.home;

export const getCartRoute = () => routeConfig.cart;

export const getOrdersRoute = () => routeConfig.orders;

export const getSingleOrderRoute = (id: string) =>
  routeConfig.singleOrder.replace(":id", id);
