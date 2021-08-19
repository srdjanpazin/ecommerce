import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { itemAdded } from './cartSlice';

const ItemInfoPage = (props) => {
	const dispatch = useDispatch();

	function handleCartAddition() {
		dispatch(itemAdded({
			_id: props.itemId,
			name: props.name,
			price: props.price,
			mainImg: props.mainImg
		}));
	}

	return (
		<div>
			<div id="item-view">
				<div id="img-container">
					<img src={props.mainImg} className="main-img" alt={props.name} />
				</div>
				<div id="item-info">
					<h2>{props.name}</h2>
					price: <span className="price">${props.price}</span>
					<p>{props.description}</p>
				</div>
				<div id="buying-action">
					<button
						onClick={handleCartAddition}
					>
						Add to cart
					</button>
				</div>
			</div>
			<Link to={`/edit/${props.itemId}`} className="blue-btn no-link-style">
				Edit Product
			</Link>
		</div>
	);
}

export { ItemInfoPage as default };