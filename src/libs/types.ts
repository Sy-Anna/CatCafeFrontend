export interface ApiError {
    message: string | Array<string>;
    error: string;
    statusCode: number
}

export interface Post {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;   
}

export interface User {
    name: string;
    email: string;
    role: 'USER' | 'WORKER';
}

export interface Reservation {
    id: number;
    date: Date;
    active: boolean;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}