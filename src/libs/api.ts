import axios from 'axios';

function constructApiDomainDocker() {
	const protocol = window.location.protocol;
	const host = window.location.hostname;

	return `${protocol}//${host}:5543/`;
}

function getApiUrl() {
	const apiUrl = import.meta.env.VITE_API_URL;
	if (apiUrl) {
		return apiUrl;
	}

	switch (import.meta.env.MODE) {
		case 'local':
			return 'http://localhost:3000/';
		case 'docker':
			return constructApiDomainDocker();
		default:
			return 'https://api.cat-cafe.hu/';
	}
}

function getAuthorizationHeader() {
	const token = localStorage.getItem('token');
	if (token) {
		return { Authorization: `Bearer ${token}` };
	}

	return {};
}

export const api = axios.create({
	baseURL: getApiUrl(),
	headers: {
		'Content-Type': 'application/json',
		...getAuthorizationHeader(),
	},
});
