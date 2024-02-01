import express from 'express';
import * as config from '../config';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
	res.send('<h1>Book Site API</h1>');
});

app.listen(config.getPort(), () => {
	console.log(`server is running at http://localhost:${config.getPort()}`);
});