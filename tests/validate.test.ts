import { Request, Response, NextFunction } from "express";
import { validateRequest } from "../src/api/v1/middleware/validate";
import { signinSchemas } from "../src/api/v1/validation/signinValidation";

describe("Validation Middleware", () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(() => {
        mockReq = {
            body: {},
            params: {},
            query: {},
        };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
    });

    describe("Signin Validation", () => {
        describe("create Schema", () => {
            it("should pass validation for valid signin event", () => {
                // Arrange
                mockReq.body = {
                    email: "Test@test.com",
                    password: "tests"
                };
                const middleware = validateRequest(signinSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).toHaveBeenCalled();
                expect(mockRes.status).not.toHaveBeenCalled();
            });

            it("should fail validation for invalid signin with missing email", () => {
                // Arrange
                mockReq.body = {
                    password: "tests"
                };
                const middleware = validateRequest(signinSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"email\" is required"
                })
            });

            it("should fail validation for invalid signin when an invalid email format is entered", () => {
                // Arrange
                mockReq.body = {
                    email: "invalid",
                    password: "tests"
                };
                const middleware = validateRequest(signinSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"email\" must be a valid email format"
                })
            });

            it("should fail validation for invalid signin with missing password", () => {
                // Arrange
                mockReq.body = {
                    email: "test@test.com"
                };
                const middleware = validateRequest(signinSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"password\" is required"
                })
            });

            it("should fail validation for invalid signin when a password with less than 5 characters is entered", () => {
                // Arrange
                mockReq.body = {
                    email: "test@test.com",
                    password: "test"
                };
                const middleware = validateRequest(signinSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"password\" must be at least 5 characters long"
                })
            });
        });
    });
});