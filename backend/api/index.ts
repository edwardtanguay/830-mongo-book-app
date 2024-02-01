import express from 'express';
import * as config from '../config';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
	res.send('<h1>Book Site API</h1>');
});

(async () => {
	try {
		await mongoose.connect(config.getDbUrl());
		app.listen(config.getPort(),() => console.log(`Server is running at: http://localhost:${config.getPort()}`));
	}
	catch (error) {
		console.log(`SERVER IS NOT RUNNING BECAUSE: ${error.message}`);
	}
})();