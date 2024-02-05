"use client";
import { createContext, useEffect, useState } from "react";
import { IBook } from "./interfaces";
import axios from "axios";

const backendUrl = 'http://localhost:4902';

interface IAppContext {
	books: IBook[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [books, setBooks] = useState<IBook[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/books`);
			const _books:IBook[] = response.data;
			setBooks(_books);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				books,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
