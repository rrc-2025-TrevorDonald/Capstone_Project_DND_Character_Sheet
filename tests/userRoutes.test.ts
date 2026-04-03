import { Request, Response, NextFunction } from "express";
import request from "supertest";
import app from "../src/app";
import * as userController from "../src/api/v1/controllers/userController";
import { HTTP_STATUS } from "../src/constants/httpConstants";

jest.mock("../src/api/v1/controllers/userController", () => ({
    newLogin: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    ),
    newUser: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.CREATED).send()
    ),
    hasDMAuth: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    )
}));

// Mocking authentication, essentially bypassing the actual authentication process by calling next()
jest.mock("../src/api/v1/middleware/authenticate", () => {
    return jest.fn((_req: Request, _res: Response, next: NextFunction) =>
        next()
    );
});

// Mocking authorization, essentially bypassing the actual authentication process by calling next() and passing empty _options
jest.mock("../src/api/v1/middleware/authorize", () => {
    return jest.fn(
        (_mockOptions) => (_req: Request, _res: Response, next: NextFunction) =>
            next()
    );
});

describe("User Routes", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });


    describe("POST /api/v1/users/", () => {
        it("should call newLogin with valid data", async () => {
            // Arrange & Act
            await request(app)
                .post("/api/v1/users/")
                .send({
                    email: "test@test.com",
                    password: "password123"
                });

            // Assert
            expect(userController.newLogin).toHaveBeenCalled();
        });
    });

    describe("POST /api/v1/users/new", () => {
        it("should call newUser with valid data", async () => {
            // Arrange & Act
            await request(app)
                .post("/api/v1/users/new")
                .send({
                    email: "test@test.com",
                    password: "password123"
                });

            // Assert
            expect(userController.newUser).toHaveBeenCalled();
        });
    });

    describe("GET /api/v1/users/new", () => {
        it("should call hasDMAuth with valid data", async () => {
            // Arrange & Act
            await request(app).get("/api/v1/users/dm");

            // Assert
            expect(userController.hasDMAuth).toHaveBeenCalled();
        });
    });
});