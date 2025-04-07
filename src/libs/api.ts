import axios from 'axios';

function constructApiDomain() {
	const protocol = window.location.protocol;
	const host = window.location.hostname;

	return `${protocol}//${host}:5543/`;
}

export const api = axios.create({
	baseURL: import.meta.env.DEV ? 'https://api.cat-cafe.hu/' : constructApiDomain(),
	headers: {
		'Content-Type': 'application/json',
	},
});
