import { handleError } from "../../tools";
import { Book } from "../schemas/bookSchema";
import express from 'express';

export const getAllBooks = async (_req: express.Request, res: express.Response) => {
	try {
		const books = await Book.find();
		res.json(books);
	}
	catch (error) {
		handleError(res, error);
	}
}