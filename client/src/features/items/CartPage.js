import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
	const cartItems = useSelector(state => state.cart.items);

	const itemElements = cartItems.map(item => {
		return (
			<tr key={item._id}>
				<td>{item.name}</td>
				<td>{item.price}</td>
			</tr>
		);
	});

	return (
		<>
			<h2>Cart</h2>
			<div>
			{cartItems.length &&
				<table id="cart-table">
					<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{itemElements}
					</tbody>
				</table>
			}
			</div>
		</>
	);
}

export { CartPage as default };