import store from "@/src/store";
import { userSlice } from "../userSlice";

export const userLoggedOut = () => {
  try {
    store.dispatch(userSlice.actions.userLogOut());
  } catch (e) {
    console.error("Auth user info error: ", e);
  }
};
