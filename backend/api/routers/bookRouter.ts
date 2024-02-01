import express from 'express';
import { getAllBooks } from '../controllers/bookController';

export const booksRouter = express.Router();

booksRouter
	.route('/')
	.get(getAllBooks);