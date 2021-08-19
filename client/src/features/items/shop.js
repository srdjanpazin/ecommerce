class Shop {

	/*
	 * Gets all items from the server.
	 *
	 * @return array: an array of items, if any found, else an empty array
	 */
	static async getItemsList() {
		try {
			let res = await fetch('api/get-items');
			if (!res.ok) {
				console.error('Error fetching items: ' + res.status);
				return [];
			}

			return await res.json();

		} catch(err) {
			console.log('fetch error: ' + err);
			return [];
		}
	}

	/*
	 * Fetches the item with id 'itemId' from the server.
	 *
	 * @param itemId: id of the item
	 *
	 * @return item object if the item is found, else an empty object
	 */
	static async getItem(itemId) {
		try {
			const res = await fetch(`/itm/${itemId}`);
			if (!res.ok) {
				console.error('Error fetching item: ' + res.status);
				return {};
			}

			return await res.json();

		} catch(err) {
			console.log('fetch error: ' + err);
			return {};
		}
	}

	/*
	 * Sends a newly created item to the server to be inserted into database.
	 */
	static async addItem() {
		const formData = new FormData(document.forms[0]);
		try {
			const res = await fetch('/api/add-item', {
				method: 'post',
				body: formData
			});

			if (!res.ok) {
				console.error(res.status + ': ' + res.statusText);
				return;
			}

			const insertResult = await res.json();
			if (insertResult.acknowledged) {
				this.notifyUser('New item added.', 'success');
			} else {
				this.notifyUser('Failed to add item.', 'failure');
			}
		
		} catch(err) {
			console.log('Error: ' + err);
		}
	}

	/*
	 * Displays a notification message to the user.
	 *
	 * @param string msg: message to display
	 * @param string mode: either 'success' or 'failure' string, specifying the
	 *   mode of the notification
	 */
	static notifyUser(msg, mode) {
		const el = document.createElement('div');
		el.className = 'notification';
		el.innerText = msg;

		switch (mode) {
			case 'success':
				el.className += ' success';
				break;
			case 'failure':
				el.className += ' failure';
				break;
			default:
				break;
		}

		document.body.append(el);
		setTimeout(function () {
			el.remove();
		}, 6000);
	}
}

export { Shop as default };