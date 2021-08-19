const express = require('express');
const path = require('path');
const { ObjectId, MongoClient } = require('mongodb');
const multer = require('multer');

const PORT = 3001;
const connectionStr = 'mongodb+srv://srdjan:<password>@cluster0.bgbro.mongodb.net/reactShop?retryWrites=true&w=majority';
const client = new MongoClient(connectionStr);

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './client/public/images/');
	},
	filename: function(req, file, cb) {
		cb(null, file.originalname);
	}
});
const upload = multer({ storage: storage });

const app = express();
app.use(express.static(path.join(__dirname, '../client/public')));
app.use('/api/edit-item', express.urlencoded({ extended: true }));

app.get('/api/get-items', async function(req, res) {
	try {
		await client.connect();
		const database = client.db();
		const inventory = database.collection('inventory');

		const cursor = await inventory.find();
		res.json(await cursor.toArray());

	} catch (err) {
		console.log('Error in server.js');
		console.log(err);
		res.status(500).end();

	} finally {
		await client.close();
	}
});

app.get('/itm/:itemId', async function (req, res) {
	try {
		await client.connect();
		const database = client.db('reactShop');
		const inventory = database.collection('inventory');

		const query = { _id: new ObjectId(req.params.itemId) };
		const item = await inventory.findOne(query);
		res.json(item);

	} catch(err) {
		console.log(err);
		res.status(500).end();

	} finally {
		await client.close();
	}
});

app.post('/api/edit-item', async function (req, res) {
	try {
		await client.connect();
		const database = client.db('reactShop');
		const inventory = database.collection('inventory');

		const body = req.body;
		body.itemId = new ObjectId(body.itemId);
		const filter = { _id: body.itemId };
		const updateDoc = { $set: {} };

		delete body.itemId;
		for (const prop in body) {
			if (body.hasOwnProperty(prop)) 
				updateDoc.$set[prop] = body[prop];
		}
		console.log(updateDoc);

		const result = await inventory.updateOne(filter, updateDoc);
		console.log(result);
		res.redirect('/');

					// CONTINUE WRITING

	} catch(err) {
		console.log(err);
		res.status(500).end();
	} finally {
		await client.close();
	}
});

app.post('/api/add-item', upload.array('images', 12), async function (req, res) {
	try {
		await client.connect();
		const database = client.db('reactShop');
		const inventory = database.collection('inventory');

		const body = req.body;
		let imgName = '';
		let imgPaths = [];
		if (req.files.length > 0) {
			imgName = req.files[0].originalname;
			for (let i = 1; i < req.files.length; i++) {
				imgPaths.push('/images/' + req.files[i].originalname);
			}
		}

		const result = await inventory.insertOne({
			name: body.name,
			category: body.category,
			price: body.price,
			description: body.description,
			mainImg: '/images/' + imgName,
			images: imgPaths
		});

		res.json({ acknowledged: result.acknowledged });

	} catch(err) {
		console.log(err);
		res.status(500).end();
	} finally {
		await client.close();
	}
	console.log(req.body);
});

app.listen(PORT, () => {
	console.log(`Server listening at port ${PORT}`);
});