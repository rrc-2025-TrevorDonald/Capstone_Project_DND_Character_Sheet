import { Request, Response, NextFunction } from "express";
import { validateRequest } from "../src/api/v1/middleware/validate";
import { signinSchemas, charSchemas, campSchemas } from "../src/api/v1/validation/validation";

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

    describe("Login/Create user Validation", () => {
        describe("create Schema", () => {
            it("should pass validation for valid signin event", () => {
                // Arrange
                mockReq.body = {
                    email: "Test@test.com",
                    password: "tests"
                };
                const middleware = validateRequest(signinSchemas.loginOrCreate);

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
                const middleware = validateRequest(signinSchemas.loginOrCreate);

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
                const middleware = validateRequest(signinSchemas.loginOrCreate);

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
                const middleware = validateRequest(signinSchemas.loginOrCreate);

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
                const middleware = validateRequest(signinSchemas.loginOrCreate);

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

    describe("Character validation", () => {
        describe("create Schema", () => {
            it("should pass validation for valid create char event", () => {
                // Arrange
                mockReq.body = {
                    charName: "Test",
                    email: "Test@test.com"
                };
                const middleware = validateRequest(charSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).toHaveBeenCalled();
                expect(mockRes.status).not.toHaveBeenCalled();
            });
            it("should fail validation for invalid create char with missing email", () => {
                // Arrange
                mockReq.body = {
                    charName: "test"
                };
                const middleware = validateRequest(charSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"email\" is required"
                })
            });
            it("should fail validation for invalid create char with invalid email", () => {
                // Arrange
                mockReq.body = {
                    charName: "test",
                    email: "invalid"
                };
                const middleware = validateRequest(charSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"email\" must be a valid email format"
                })
            });
            it("should fail validation for invalid create char with missing charName", () => {
                // Arrange
                mockReq.body = {
                    email: "test@test.com"
                };
                const middleware = validateRequest(charSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"charName\" is required"
                })
            });
        });

        describe("getUserChars Schema", () => {
            it("should pass validation for valid getUserChars char event", () => {
                // Arrange
                mockReq.params = {
                    email: "Test@test.com"
                };
                const middleware = validateRequest(charSchemas.getUserChars);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).toHaveBeenCalled();
                expect(mockRes.status).not.toHaveBeenCalled();
            });
            it("should fail validation for invalid getUserChars with missing email", () => {
                // Arrange
                mockReq.params = {
                };
                const middleware = validateRequest(charSchemas.getUserChars);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Params: \"email\" is required"
                })
            });
            it("should fail validation for invalid getUserChars with invalid email", () => {
                // Arrange
                mockReq.params = {
                    email: "invalid"
                };
                const middleware = validateRequest(charSchemas.getUserChars);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Params: \"email\" must be a valid email format"
                })
            });
        });

        describe("delUpdateGet Schema", () => {
            it("should pass validation for valid delUpdateGet char event", () => {
                // Arrange
                mockReq.params = {
                    id: "Test"
                };
                const middleware = validateRequest(charSchemas.delUpdateGet);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).toHaveBeenCalled();
                expect(mockRes.status).not.toHaveBeenCalled();
            });
            it("should fail validation for invalid getUserChars with missing email", () => {
                // Arrange
                mockReq.body = {
                };
                const middleware = validateRequest(charSchemas.delUpdateGet);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Params: \"id\" is required"
                })
            });
        });
    });

    describe("Campaign validation", () => {
        describe("create Schema", () => {
            it("should pass validation for valid create camp event", () => {
                // Arrange
                mockReq.body = {
                    campName: "Test",
                    email: "Test@test.com"
                };
                const middleware = validateRequest(campSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).toHaveBeenCalled();
                expect(mockRes.status).not.toHaveBeenCalled();
            });

            it("should fail validation for invalid create char with missing email", () => {
                // Arrange
                mockReq.body = {
                    campName: "test"
                };
                const middleware = validateRequest(campSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"email\" is required"
                })
            });
            
            it("should fail validation for invalid create char with invalid email", () => {
                // Arrange
                mockReq.body = {
                    campName: "test",
                    email: "invalid"
                };
                const middleware = validateRequest(campSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"email\" must be a valid email format"
                })
            });
            it("should fail validation for invalid create char with missing charName", () => {
                // Arrange
                mockReq.body = {
                    email: "test@test.com"
                };
                const middleware = validateRequest(campSchemas.create);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"campName\" is required"
                })
            });
        });

        describe("delUpdateGet Schema", () => {
            it("should pass validation for valid delUpdateGet camp event", () => {
                // Arrange
                mockReq.params = {
                    campName: "Test"
                };
                const middleware = validateRequest(campSchemas.delUpdateGet);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).toHaveBeenCalled();
                expect(mockRes.status).not.toHaveBeenCalled();
            });
            it("should fail validation for invalid call with missing email", () => {
                // Arrange
                mockReq.body = {
                };
                const middleware = validateRequest(campSchemas.delUpdateGet);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Params: \"campName\" is required"
                })
            });
        });

        describe("addRemove Schema", () => {
            it("should pass validation for valid addRemove camp event", () => {
                // Arrange
                mockReq.params = {
                    campName: "Test"
                };
                mockReq.body = {
                    charName: "test",
                    email: "test@test.com"
                }
                const middleware = validateRequest(campSchemas.addRemove);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).toHaveBeenCalled();
                expect(mockRes.status).not.toHaveBeenCalled();
            });

            it("should fail validation for invalid addRemove camp event", () => {
                // Arrange
                mockReq.params = {
                };
                mockReq.body = {
                    charName: "test",
                    email: "test@test.com"
                }
                const middleware = validateRequest(campSchemas.addRemove);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Params: \"campName\" is required"
                });
            });

            it("should fail validation for invalid addRemove camp event", () => {
                // Arrange
                mockReq.params = {
                    campName: "Test"
                };
                mockReq.body = {
                    email: "test@test.com"
                }
                const middleware = validateRequest(campSchemas.addRemove);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"charName\" is required"
                });
            });

            it("should fail validation for invalid addRemove camp event", () => {
                // Arrange
                mockReq.params = {
                    campName: "Test"
                };
                mockReq.body = {
                    charName: "test"
                }
                const middleware = validateRequest(campSchemas.addRemove);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"email\" is required"
                });
            });

            it("should fail validation for invalid addRemove camp event", () => {
                // Arrange
                mockReq.params = {
                    campName: "Test"
                };
                mockReq.body = {
                    charName: "test",
                    email: "invalid"
                }
                const middleware = validateRequest(campSchemas.addRemove);

                // Act
                middleware(mockReq as Request, mockRes as Response, mockNext);

                // Assert
                expect(mockNext).not.toHaveBeenCalled();
                expect(mockRes.status).toHaveBeenCalledWith(400);
                expect(mockRes.json).toHaveBeenCalledWith({
                    "error": "Validation error: Body: \"email\" must be a valid email format"
                });
            });
        });
    });
});