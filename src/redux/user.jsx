import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		isLoggedIn: false,
		user: null
	},
	reducers: {
		addUser: (state,{ payload }) => {
			return {...state, isLoggedIn: true ,user: payload }
		},
		createUser: (state,{ payload }) => {},
	}
});

export const { addUser, createUser } = userSlice.actions;
export default userSlice;