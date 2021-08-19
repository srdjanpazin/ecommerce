import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shop from './shop.js';

const ItemsFeed = () => {
	const [ items, setItems ] = useState([]);

	const itemList = items.map(item => {
		return (
			<li key={item._id} className="item-card">
				<Link to={`/itm/${item._id}`}>
					<img src={item.mainImg} className="search-item-img"
						alt={item.name} />
				</Link>
				<div className="item-card-right">
					<h3 className="item-title">
						<Link to={`/itm/${item._id}`} className="no-link-style">
							{item.name}
						</Link>
					</h3>
					<div className="item-price">
						${item.price}
					</div>
				</div>
			</li>
		);
	})

	useEffect(() => {
		async function fetchData() {
			const itemsArr = await Shop.getItemsList();
			setItems(itemsArr);
		}
		fetchData();
	}, []);  // Empty array passed to execute effect only on mount

	return (
		<div id="feed">
			<ul id="search-results">
				{itemList}
			</ul>
		</div>
	);
}

export { ItemsFeed as default };