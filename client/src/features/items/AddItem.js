import React, { useState } from 'react';
import Shop from './shop.js';

const AddItem = () => {
	const [ name, setName ] = useState('');
	const [ category, setCategory ] = useState(-1);
	const [ price, setPrice ] = useState(0);
	const [ description, setDescription ] = useState('');

	function handleNameChange(e) {
		setName(e.target.value);
	}
	function handleCategoryChange(e) {
		setCategory(e.target.value);
	}
	function handlePriceChange(e) {
		setPrice(e.target.value);
	}
	function handleDescriptionChange(e) {
		setDescription(e.target.value);
	}
	function submitForm(e) {
		e.preventDefault();
		Shop.addItem();
	}

	return (
		<form id="add-item-form" method="post" encType="multipart/form-data"
			onSubmit={submitForm}>
			<div>
				<label htmlFor="name">Product Name:</label>
				<br />
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={handleNameChange}
				/>
			</div>
			<div>
				<label htmlFor="category">Category:</label>
				<select id="category" name="category" value={category} onChange={handleCategoryChange}>
					<option value="-1">-- Chose One --</option>
					<option value="1">Clothing</option>
					<option value="2">Books</option>
					<option value="3">Mobile Phones</option>
					<option value="4">Laptops</option>
				</select>
			</div>
			<div>
				<label htmlFor="price">Price:</label>
				<br />
				<input
					type="number"
					id="price"
					name="price"
					value={price}
					onChange={handlePriceChange}
				/>
			</div>
			<div>
				<label htmlFor="desc">Description:</label>
				<br />
				<textarea
					id="desc"
					name="description"
					value={description}
					onChange={handleDescriptionChange}
					cols="60"
					rows="9"
				></textarea>
			</div>
			<div>
				<label htmlFor="images">Add Images</label>
				<br />
				<input type="file" id="images" name="images" multiple />
			</div>
			<div>
				<button type="submit" className="blue-btn">
					Save Changes
				</button>
			</div>
		</form>
	);
}

export { AddItem as default };