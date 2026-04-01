/**
 * Interface representing a standard API response
 * @template T - The type of the data property
 */
export interface ApiResponse<T> {
    status?: string; // "success" or "error"
    data?: T; // Optional data returned in case of success
    count?: number; // Optional date if listing all events
    message?: string; // Informational message about the result
    error?: { message: string; code?: string }; // Error message in case of failure
    code?: string; // Optional error code for debugging
    timestamp?: string;
}

/**
 * Creates a success response object
 * @template T - The type of the data property
 * @param data - The data to include in the response
 * @param message - A message providing additional information about the response
 * @returns The success response object
 */
export const successResponse = <T>(
    data?: T,
    message?: string,
    count?: number
): ApiResponse<T> => ({
    message,
    data
});

/**
 * Creates a standardized error response object.
 * This ensures all API errors follow the same format for consistent client handling.
 *
 * @param {string} message - The error message to display to the client.
 * @param {string} code - The error code for programmatic handling.
 * @returns {object} A formatted error response object.
 */
export const errorResponse = (
    message: string,
    code?: string
): ApiResponse<null> => ({
    error: {
        message,
        code
    },
    timestamp: new Date().toISOString()
});