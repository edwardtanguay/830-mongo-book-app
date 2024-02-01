import dotenv from 'dotenv';

dotenv.config();

export const getPort = () : number => {
	return 4889;
}

export const getDbUrl = () : string => {
	const dbUrl = process.env.DB_URL;
	if (typeof (dbUrl) === 'string') {
		return dbUrl;
	} else {
		return '';
	}
}