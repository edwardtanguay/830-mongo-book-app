import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageBooks = () => {
	const { books } = useContext(AppContext);
	return (
		<p>There are {books.length} books:</p>
		
	)
}
