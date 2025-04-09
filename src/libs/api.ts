import axios from "axios";

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
        case "local":
            return "http://localhost:3000/";
        case "docker":
            return constructApiDomainDocker();
        default:
            return "https://api.cat-cafe.hu/";
    }
}

export function setAuthorizationHeader() {
    const token = localStorage.getItem("token");
    if (token) {
        const headerValue = `Bearer ${token.slice(1, -1)}`;
        api.defaults.headers.common.Authorization = headerValue;
    }
}

export const API_URL = getApiUrl();

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

setAuthorizationHeader();
