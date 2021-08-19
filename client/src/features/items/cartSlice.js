import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: []
	},
	reducers: {
		itemAdded: (state, action) => {
			state.items.push(action.payload);
		}
	}
});

export const { itemAdded } = cartSlice.actions;
export default cartSlice.reducer;