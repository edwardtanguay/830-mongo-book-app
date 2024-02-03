import { handleError } from "../../tools";
import { Book } from "../schemas/bookSchema";
import express from 'express';

export const getSingleBook = async (req: express.Request, res: express.Response) => {
	try {
		const book = await Book.create(req.body);
		res.status(201).json(book);
	}
	catch (error) {
		handleError(res, error);
	}
}

export const getAllBooks = async (_req: express.Request, res: express.Response) => {
	try {
		const books = await Book.find();
		res.json(books);
	}
	catch (error) {
		handleError(res, error);
	}
}

export const addSingleBook = async (req: express.Request, res: express.Response) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (e) {
    res.status(500).json(e);
  }
};