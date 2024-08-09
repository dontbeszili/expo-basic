import store from "@/src/store";
import { userSlice } from "../userSlice";

export const userLoggedIn = async (user: {
  uid: string;
  name: string;
  role: string;
}) => {
  try {
    const uid = user.uid;
    const userName = user.name;
    const role = user.role;

    store.dispatch(
      userSlice.actions.userLogIn({
        uid,
        name: userName,
        role,
      })
    );
  } catch (e) {
    console.error("Auth user info error: ", e);
  }
};
