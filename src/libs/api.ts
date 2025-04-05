import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.cat-cafe.hu/',
    headers: {
        'Content-Type': 'application/json'
    }
})

