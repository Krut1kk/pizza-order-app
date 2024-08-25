export type {
  UserStateSchema,
  IPeopleForSplitPrice,
} from "./model/types/userTypes";

export { userActions, userReducer } from "./model/slice/userSlice";

export { getUserState } from "./model/selectors/userSelectors";
