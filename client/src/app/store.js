import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/items/cartSlice';

export default configureStore({
	reducer: {
		cart: cartReducer
	}
});