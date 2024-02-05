import express from 'express';
import { addSingleBook, deleteAllBooks, deleteSingleBook, getAllBooks, getSingleBook, updateSingleBook } from '../controllers/bookController';

export const booksRouter = express.Router();

booksRouter
	.route('/')
	.post(addSingleBook)
	.get(getAllBooks)
	.delete(deleteAllBooks);
booksRouter
	.route('/:id')
	.get(getSingleBook)
	.delete(deleteSingleBook)
	.patch(updateSingleBook);