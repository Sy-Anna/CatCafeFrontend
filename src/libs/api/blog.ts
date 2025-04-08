import { api } from "../api";
import { ApiError, Post } from '../types';

export class BlogApi {
    /**
     * Define path for easier use
     */
    private static apiPath = "/blog/posts";

    /**
     * Endpoint for create new posts
     * @warning Limited to Worker Role only
     * 
     * @param title Title of the post
     * @param content Content of the post
     * 
     * @returns 201 - Post created successfully
     * @returns 400 - Bad Request
     * @returns 401 - Unauthorized
     * @returns 403 - Forbidden
     * @returns 409 - Conflict
     */
    static async create(title: string, content: string) {
        try {
            const response = await api.post(BlogApi.apiPath, {
                title,
                content,
            });

            return [null, response.data] as [null, Post];
        } catch (error: any) {
            return [error.response.data, null] as [ApiError, null];
        }
    }

    /**
     * Endpoint for getting all posts
     * 
     * @returns 200 - Post retrieved successfully
     */
    static async getAll() {
        try {
            const response = await api.get(BlogApi.apiPath);

            return [null, response.data] as [null, Array<Post>]
        } catch (error: any) {
            return [error, null] as [unknown, null] 
        }
    }

    /**
     * Endpoint for getting post by id
     * 
     * @param id ID of the post
     * 
     * @returns 200 - Post retrieved successfully
     * @returns 404 - Post not Found
     */
    static async get(id: number) {
        try {
            const response = await api.get(BlogApi.apiPath + '/' + id);

            return [null, response.data] as [null, Post]
        } catch (error: any) {
            return [error.response.data, null] as [ApiError, null] 
        }
    }

    /**
     * Endpoint for updating posts
     * @warning Limited to Worker Role only
     * 
     * @param id ID of the post
     * @param title Title of the post
     * @param content Content of the post
     * 
     * @returns 200 - Post updated successfully
     * @returns 400 - Bad Request
     * @returns 401 - Unauthorized
     * @returns 404 - Post not found
     * @returns 409 - Conflict
     */
    
    static async update(id: number, data: { title?: string, content?: string }) {
        try {
            const response = await api.patch(BlogApi.apiPath + '/' + id, data)

            return [null, response.data] as [null, Post]
        } catch (error: any) {
            return [error.response.data, null] as [ApiError, null] 
        }
    }

    /**
     * Endpoint for deleteting a post
     * @warning Limited to Worker Role only
     * 
     * @param id ID of the post
     * @returns 200 - Post deleted successfully
     * @returns 401 - Unauthorized
     * @returns 403 - Forbidden
     * @returns 404 - Post not found
     */

    static async delete(id: number) {
        try {
            const response = await api.delete(BlogApi.apiPath + '/' + id)

            return [null, response.data] as [null, string]
        } catch (error: any) {
            return [error.response.data, null] as [ApiError, null] 
        }
    }
}
