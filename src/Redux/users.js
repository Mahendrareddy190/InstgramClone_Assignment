import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users_data: [],
};

export const usersSlice = createSlice({
  name: "userDatabase",
  initialState,
  reducers: {
    Adduser: (state, action) => {
      const user = {
        id: nanoid,
        email: action.payload.email,
        fullname: action.payload.fullname,
        username: action.payload.username,
        password: action.payload.password,
      };
      state.users_data.push(user);
      if (localStorage["user_data"]) {
        const newuser = [
          ...JSON.parse(localStorage.getItem("user_data")),
          user,
        ];
        localStorage.setItem("user_data", JSON.stringify(newuser));
      } else {
        localStorage.setItem("user_data", JSON.stringify(state.users_data));
      }
    },
  },
});

export const { Adduser } = usersSlice.actions;

export default usersSlice.reducer;
