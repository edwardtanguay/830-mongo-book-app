import express from 'express';
import { addSingleBook, getAllBooks } from '../controllers/bookController';

export const booksRouter = express.Router();

booksRouter
	.route('/')
	.get(getAllBooks)
	.post(addSingleBook);