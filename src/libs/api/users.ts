import type { AxiosError } from "axios";

import { api } from "@/libs/api";
import { ApiError, User } from "@/libs/types";

export class UsersApi {
	/**
	 * Define path for easier use
	 */
	private static apiPath = "/users";

	/**
	 * Endpoint for register new users
	 *
	 * @param name Users profile name
	 * @param email Users email
	 * @param password Users password
	 *
	 * @returns 201 - User created
	 * @returns 409 - User already exists
	 */
	static async register(name: string, email: string, password: string) {
		try {
			const response = await api.post(UsersApi.apiPath + "/register", {
				name,
				email,
				password,
			});

			return [null, response.data] as [null, string];
		} catch (error: unknown) {
			return [(error as AxiosError).response!.data, null] as [ApiError, null];
		}
	}

	/**
	 * Endpoint for logging in
	 *
	 * @param email Users email
	 * @param password Users password
	 *
	 * @returns 200 - Login successful
	 * @returns 400 - Invalid credentials
	 */
	static async login(email: string, password: string) {
		try {
			const response = await api.post(UsersApi.apiPath + "/login", {
				email,
				password,
			});

			return [null, response.data] as [null, { token: string }];
		} catch (error: unknown) {
			return [(error as AxiosError).response!.data, null] as [ApiError, null];
		}
	}

	/**
	 * Endpoint for logging out
	 * @warning Limited to logged in users
	 *
	 * @param token User session token
	 *
	 * @returns 200 - Logout successful
	 * @returns 401 - Unauthorized
	 */
	static async logout(token: string) {
		try {
			const response = await api.delete(UsersApi.apiPath + "/logout", {
				data: {
					token,
				},
			});

			return [null, response.data] as [null, string];
		} catch (error: unknown) {
			return [(error as AxiosError).response!.data, null] as [ApiError, null];
		}
	}

	/**
	 * Endpoint for getting the users info
	 * @warning Limited to logged in users
	 *
	 * @returns 200 - Users information
	 * @returns 401 - Unauthorized
	 */
	static async me() {
		try {
			const response = await api.get(UsersApi.apiPath + "/me");

			return [null, response.data] as [null, User];
		} catch (error: unknown) {
			return [(error as AxiosError).response!.data, null] as [ApiError, null];
		}
	}
}
