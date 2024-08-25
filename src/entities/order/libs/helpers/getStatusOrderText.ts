import { IOrder } from "../../model/types/orderTypes";

export const getStatusOrderText = (status: IOrder["status"]) => {
  switch (status) {
    case "received": {
      return "ЗАМОВЛЕННЯ ОПЛАЧЕНО";
    }
    case "pending": {
      return "В ОЧІКУВАННІ";
    }
    case "rejected": {
      return "ВІДХИЛЕНО";
    }
  }
};
