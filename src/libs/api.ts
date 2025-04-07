import axios from 'axios';

export const api = axios.create({
	baseURL: import.meta.env.DEV ? 'https://api.cat-cafe.hu/' : 'http://localhost:3000/',
	headers: {
		'Content-Type': 'application/json',
	},
});
