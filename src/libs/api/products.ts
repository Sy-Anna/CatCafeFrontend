import type { AxiosError } from "axios";

import { api } from "@/libs/api";
import { ApiError, Product } from "@/libs/types";

export class ProductsApi {
    /**
     * Define path for easier use
     */
    private static apiPath = "/products";

    /**
     * Endpoint for adding new products
     * @warning Limited to Worker Role only
     *
     * @param name Product name
     * @param description Product description
     * @param price Product price
     * @param quantity product quantity
     * @param image Product image
     *
     * @returns 201 - Product created successfully
     * @returns 400 - Bad request
     * @returns 403 - Forbidden
     * @returns 409 - Conflict
     */
    static async create(
        name: string,
        description: string,
        price: number,
        quantity: string,
        image: File,
    ) {
        try {
            const response = await api.post(
                ProductsApi.apiPath,
                {
                    name,
                    description,
                    price,
                    quantity,
                    image,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );

            return [null, response.data] as [null, Product];
        } catch (error: unknown) {
            return [(error as AxiosError).response!.data, null] as [
                ApiError,
                null,
            ];
        }
    }

    /**
     * Endpoint for getting all products
     *
     * @returns 200 - List of products
     */
    static async getAll(
        query: {
            search?: string;
            order: "name" | "price";
            direction: "asc" | "desc";
        } = {
            search: "",
            order: "name",
            direction: "asc",
        },
    ) {
        try {
            const response = await api.get(
                ProductsApi.apiPath +
                    "?" +
                    new URLSearchParams(query).toString(),
            );

            return [null, response.data] as [null, Array<Product>];
        } catch (error: unknown) {
            return [(error as AxiosError).response!.data, null] as [
                unknown,
                null,
            ];
        }
    }

    /**
     * Endpoint for getting product by id
     *
     * @param id ID of the product
     *
     * @returns 200 - Product details
     * @returns 404 - Product not found
     */
    static async get(id: number) {
        try {
            const response = await api.get(ProductsApi.apiPath + "/" + id);

            return [null, response.data] as [null, Product];
        } catch (error: unknown) {
            return [(error as AxiosError).response!.data, null] as [
                ApiError,
                null,
            ];
        }
    }

    /**
     * Endpoint for updating a product
     * @warning Limited to Worker Role only
     *
     * @param id ID of the product
     * @param name Product name
     * @param description Product description
     * @param price Product price
     * @param quantity product quantity
     * @param image Product image
     *
     * @returns 200 - Product updated successfully
     * @returns 400 - Bad request
     * @returns 401 - Unauthorized
     * @returns 403 - Forbidden
     * @returns 404 - Not found
     */
    static async update(
        id: number,
        data: {
            name?: string;
            description?: string;
            price?: number;
            quantity?: string;
            image?: File;
        },
    ) {
        try {
            const response = await api.patch(
                ProductsApi.apiPath + "/" + id,
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                },
            );

            return [null, response.data] as [null, Product];
        } catch (error: unknown) {
            return [(error as AxiosError).response!.data, null] as [
                ApiError,
                null,
            ];
        }
    }

    /**
     * Endpoint for deleting a product
     * @warning Limited to Worker Role only
     *
     * @param id ID of the product
     *
     * @returns 200 - Product deleted successfully
     * @returns 401 - Unauthorized
     * @returns 403 - Forbidden
     * @returns 404 - Not found
     */
    static async delete(id: number) {
        try {
            const response = await api.delete(ProductsApi.apiPath + "/" + id);

            return [null, response.data] as [null, string];
        } catch (error: unknown) {
            return [(error as AxiosError).response!.data, null] as [
                ApiError,
                null,
            ];
        }
    }

    /**
     * Endpoint for updating a product
     * @warning Limited to logged in users only
     *
     * @param id ID of the product
     * @param quantity The quantity to be bought
     *
     * @returns 200 - Products bought successfully
     * @returns 400 - Bad request
     * @returns 401 - Unauthorized
     * @returns 403 - Forbidden
     * @returns 404 - Not found
     */
    static async buy(products: Array<{ id: number; quantity: number }>) {
        try {
            const response = await api.patch(ProductsApi.apiPath, {
                products,
            });

            return [null, response.data] as [null, string];
        } catch (error: unknown) {
            return [(error as AxiosError).response!.data, null] as [
                ApiError,
                null,
            ];
        }
    }
}
