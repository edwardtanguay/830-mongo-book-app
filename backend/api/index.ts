import express from 'express';
import * as config from '../config';
import cors from 'cors';
import mongoose from 'mongoose';
import * as tools from '../tools';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => {
	res.send('<h1>Book Site API</h1>');
});

(async () => {
	try {
		await mongoose.connect(config.dbUrl());
		app.listen(config.backendPort(), () => {
			tools.clearConsole();
			console.log(`---`);
			console.log(`FRONTEND SITE is running at: http://localhost:${config.frontendPort()}`)
			console.log(`BACKEND API is running at: http://localhost:${config.backendPort()}`)
		});
	}
	catch (error) {
		console.log(`SERVER IS NOT RUNNING BECAUSE: ${error.message}`);
	}
})();