import React from 'react';

const EditItemPage = (props) => {

	const handleNameChange = (e) => {
		props.onNameChange(e.target.value);
	}
	const handlePriceChange = (e) => {
		props.onPriceChange(e.target.value);
	}
	const handleDescriptionChange = (e) => {
		props.onDescriptionChange(e.target.value);
	}
	function handleCategoryChange(e) {
		props.onCategoryChange(e.target.value);
	}

	return (
		<form id="product-form" action="/api/edit-item" method="post">
			<div>
				<input
					type="hidden"
					name="itemId"
					value={props.itemId}
				/>
				<label htmlFor="name">Product Name:</label>
				<br />
				<input
					type="text"
					id="name"
					name="name"
					value={props.name}
					onChange={handleNameChange}
				/>
			</div>
			<div>
				<label htmlFor="category">Category:</label>
				<select
					id="category"
					name="category"
					value={props.category}
					onChange={handleCategoryChange}
				>
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
					value={props.price}
					onChange={handlePriceChange}
				/>
			</div>
			<div>
				<label htmlFor="desc">Description:</label>
				<br />
				<textarea
					id="desc"
					name="description"
					value={props.description}
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

export { EditItemPage as default };