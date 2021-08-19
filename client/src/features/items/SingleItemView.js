import React, { useState, useEffect } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import ItemInfoPage from './ItemInfoPage';
import EditItemPage from './EditItemPage';
import Shop from './shop';

const SingleItemView = () => {
	const { itemId } = useParams();
	const [ name, setName ] = useState('');
	const [ category, setCategory ] = useState(0);
	const [ price, setPrice ] = useState(0);
	const [ description, setDescription ] = useState('');
	const [ mainImg, setMainImg ] = useState('');

	useEffect(() => {
		async function fetchItem(id) {
			const item = await Shop.getItem(id);
			if (item === undefined) {
				console.error("Error: item not found");
				return;
			}

			setName(item.name);
			setCategory(item.category);
			setPrice(item.price);
			setDescription(item.description);
			setMainImg(item.mainImg);
		}
		fetchItem(itemId);
	}, [itemId]);

	return (
		<Switch>
			<Route exact path="/itm/:itemId">
				<ItemInfoPage
					itemId={itemId}
					name={name}
					price={price}
					description={description}
					mainImg={mainImg}
				/>
			</Route>
			<Route exact path="/edit/:itemId">
				<EditItemPage
					itemId={itemId}
					name={name}
					category={category}
					price={price}
					description={description}
					onNameChange={setName}
					onPriceChange={setPrice}
					onDescriptionChange={setDescription}
					onCategoryChange={setCategory}
				/>
			</Route>
		</Switch>
	);
}

export { SingleItemView as default };