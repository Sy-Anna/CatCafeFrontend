import { api } from "../api";
import { ApiError, Reservation } from "../types";

export class ReservationsApi {
	/**
	 * Define path for easier use
	 */
	private static apiPath = "/reservations";

	/**
	 * Endpoint for creating a reservation
	 * @warning Limited to logged in users only
	 *
	 * @param date The date to the reservation to be set
	 *
	 * @returns 200 - Reservation created successfully
	 * @returns 400 - Bad request
	 * @returns 401 - Unauthorized
	 * @returns 409 - Conflict
	 */
	static async create(date: Date) {
		try {
			const response = await api.post(ReservationsApi.apiPath, {
				date,
			});

			return [null, response.data] as [null, Reservation];
		} catch (error: any) {
			return [error.response.data, null] as [ApiError, null];
		}
	}

	/**
	 * Endpoint for getting all reservations
	 * @warning Limited to logged in users only
	 *
	 * @returns 200 - List of reservations
	 * @returns 201 - Unauthorized
	 */
	static async getAll() {
		try {
			const response = await api.get(ReservationsApi.apiPath);

			return [null, response.data] as [null, Array<Reservation>];
		} catch (error: any) {
			return [error.response.data, null] as [unknown, null];
		}
	}

	/**
	 * Endpoint for getting reservation by ID
	 * @warning Limited to logged in users only
	 *
	 * @param id ID of the product
	 *
	 * @returns 200 - Reservation details
	 * @returns 401 - Unauthorized
	 * @returns 404 - Not found
	 */
	static async get(id: number) {
		try {
			const response = await api.get(ReservationsApi.apiPath + "/" + id);

			return [null, response.data] as [null, Reservation];
		} catch (error: any) {
			return [error.response.data, null] as [ApiError, null];
		}
	}

	/**
	 * Endpoint for updating a users reservation details
	 * @warning Limited to Worker Role only
	 *
	 * @param id Reservation id
	 * @param date New Date for the reservation
	 * @param active Active status for the reservation
	 *
	 * @returns 200 - Reservation updated successfully
	 * @returns 401 - Unauthorized
	 * @returns 403 - Forbidden
	 * @returns 404 - Not found
	 */
	static async update(id: number, data: { date?: Date; active?: boolean }) {
		try {
			const response = await api.patch(ReservationsApi.apiPath + "/" + id, data);

			return [null, response.data] as [null, Reservation];
		} catch (error: any) {
			return [error.response.data, null] as [ApiError, null];
		}
	}

	/**
	 * Endpoint for deleting a users reservation details
	 * @warning Limited to Worker Role only
	 *
	 * @param id Reservation id
	 *
	 * @returns 200 - Reservation deleted successfully
	 * @returns 401 - Unauthorized
	 * @returns 403 - Forbidden
	 * @returns 404 - Not found
	 */
	static async delete(id: number) {
		try {
			const response = await api.delete(ReservationsApi.apiPath + "/" + id);

			return [null, response.data] as [null, string];
		} catch (error: any) {
			return [error.response.data, null] as [ApiError, null];
		}
	}
}
