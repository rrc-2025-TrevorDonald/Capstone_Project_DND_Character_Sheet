import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../src/constants/httpConstants";
import * as userController from "../src/api/v1/controllers/userController";
import * as userService from "../src/api/v1/services/userService";
import { UserCreate, UserLogin } from "../src/api/v1/models/userModels";

jest.mock("../src/api/v1/services/userService");

describe("User Controller", () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction;

    // reusable mocks for any controller tests
    beforeEach(() => {
        jest.clearAllMocks();
        mockReq = { params: {}, body: {} };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
    });

    describe("newLogin", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            mockReq.body = {
                email: "test@test.com",
                password: "tests"
            };
            const resolvedData: UserLogin = {
                email: "test@test.com",
                idToken: "mockedToken"
            };


            (userService.userLogin as jest.Mock).mockReturnValue(resolvedData);
            
            await userController.newLogin(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalledWith(resolvedData);
        });
    });

    describe("newUser", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            mockReq.body = {
                email: "test@test.com",
                password: "tests"
            };
            const resolvedData: UserCreate = {
                email: "test@test.com",
                password: "tests"
            };


            (userService.userCreate as jest.Mock).mockReturnValue(resolvedData);
            
            await userController.newUser(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.CREATED);
            expect(mockRes.json).toHaveBeenCalledWith(resolvedData);
        });
    });

    describe("hasAuth", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            const resolvedData = {"data": "Has Auth", "message": "Has Auth"};            
            userController.hasDMAuth(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );

            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalledWith(resolvedData);
        });
    });
});