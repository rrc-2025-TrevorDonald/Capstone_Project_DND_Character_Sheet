import { HTTP_STATUS } from "../../../constants/httpConstants";

/**
 * Base error class for application errors.
 * Extends the built-in Error class to include an error code and status code.
 *
 * This abstract class provides:
 * - Consistent error structure across the application
 * - HTTP status codes for proper REST API responses
 * - Error codes for programmatic error handling
 * - Proper prototype chain setup for instanceof checks
 */
export class AppError extends Error {
    /**
     * Creates a new AppError instance.
     * @param {string} message - The error message.
     * @param {string} code - The error code.
     * @param {number} statusCode - The http response code.
     */
    constructor(
        public message: string,
        public code: string,
        public statusCode: number
    ) {
        super(message);
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, new.target.prototype);
        Error.captureStackTrace(this, this.constructor);
    };
};

/**
 * Class representing an authentication error.
 * Extends AppError to include token verification and user identity errors.
 * Used for invalid tokens, expired tokens, and missing authentication.
 */
export class AuthenticationError extends AppError {
    constructor(
        message: string,
        code: string = "AUTHENTICATION_ERROR",
        statusCode: number = HTTP_STATUS.UNAUTHORIZED
    ) {
        super(message, code, statusCode);
    };
};

/**
 * Class representing an authorization error.
 * Extends AppError to include role-based access control errors.
 * Used for insufficient permissions and role validation failures.
 */
export class AuthorizationError extends AppError {
    constructor(
        message: string,
        code: string = "AUTHORIZATION_ERROR",
        statusCode: number = HTTP_STATUS.FORBIDDEN
    ) {
        super(message, code, statusCode);
    };
};

/**
 * Class representing an not found error.
 */
export class UserNotFoundError extends AppError {
    constructor(
        message: string,
        code: string = "USER_NOT_FOUND",
        statusCode: number = HTTP_STATUS.NOT_FOUND
    ) {
        super(message, code, statusCode);
    }
};

/**
 * Class representing an campaign not found error.
 */
export class CampNotFoundError extends AppError {
    constructor(
        message: string,
        code: string = "CHARACTER_NOT_FOUND",
        statusCode: number = HTTP_STATUS.NOT_FOUND
    ) {
        super(message, code, statusCode);
    }
};

/**
 * Class representing an campaign data not found error.
 */
export class CampDataNotFoundError extends AppError {
    constructor(
        message: string,
        code: string = "CHARACTER_NOT_FOUND",
        statusCode: number = HTTP_STATUS.NOT_FOUND
    ) {
        super(message, code, statusCode);
    }
};

/**
 * Class representing an character not found error.
 */
export class CharNotFoundError extends AppError {
    constructor(
        message: string,
        code: string = "CHARACTER_NOT_FOUND",
        statusCode: number = HTTP_STATUS.NOT_FOUND
    ) {
        super(message, code, statusCode);
    }
};

/**
 * Class representing an character data not found error.
 */
export class CharDataNotFoundError extends AppError {
    constructor(
        message: string,
        code: string = "CHARACTER_NOT_FOUND",
        statusCode: number = HTTP_STATUS.NOT_FOUND
    ) {
        super(message, code, statusCode);
    }
};