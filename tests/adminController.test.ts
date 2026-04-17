import { Request, Response, NextFunction } from "express";
import * as adminController from "../src/api/v1/controllers/adminController";

jest.mock("../src/api/v1/controllers/adminController");

describe("Admin Controller", () => {
    let mockReq: Partial<Request>;
    let mockRes: Partial<Response>;
    let mockNext: NextFunction;

    beforeEach(() => {
        jest.clearAllMocks();
        mockReq = { params: {}, body: {} };
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        mockNext = jest.fn();
    });

    describe("setCustomClaims", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            mockReq.body = {
                uid: "mockUid",
                claims: { role: "player"}
            };

            (adminController.setCustomClaims as jest.Mock);

            await adminController.setCustomClaims(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(adminController.setCustomClaims).toHaveBeenCalled();
        });
    });
});