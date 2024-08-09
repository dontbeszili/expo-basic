import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "./slices/appState/applicationSlice";
import userReducer from "./slices/user/userSlice";

const store = configureStore({
  reducer: {
    application: applicationReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
