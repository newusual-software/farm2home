import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null
	},
	reducers: {
		addUser: (state,{ payload }) => {
			return {...state, user: payload }
		},
		createUser: (state,{ payload }) => {},
	}
});

export const { addUser, createUser } = userSlice.actions;
export default userSlice;