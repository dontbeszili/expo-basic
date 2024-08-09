import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  uid?: string;
  name?: string;
  role?: string;
}

export interface UserLogInPayload {
  uid: string;
  name: string;
  role: string;
}

const initialState: UserState = {
  name: undefined,
  role: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogIn: (state, action: PayloadAction<UserLogInPayload>) => {
      state.uid = action.payload.uid;
      state.name = action.payload.name;
      state.role = action.payload.role;
    },
    userLogOut: (state) => {
      state.uid = undefined;
      state.name = undefined;
      state.role = undefined;
    },
  },
});

export const { userLogIn, userLogOut } = userSlice.actions;
export default userSlice.reducer;
