import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../src/constants/httpConstants";
import * as campaignController from "../src/api/v1/controllers/campaignController";
import * as campaignServices from "../src/api/v1/services/campaignServices";
import { Campaign } from "../src/api/v1/models/campaignModel";

jest.mock("../src/api/v1/services/campaignServices");

describe("Campaign Controller", () => {
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

    describe("createCampaign", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            const mockResultData: Campaign = {
                campName: "test",
                notes: "",
                players: [],
                dm: "test@test.com"
            }
            mockReq.body = {
                campName:"test",
                email: "test@test.com"
            };

            (campaignServices.createCamp as jest.Mock).mockReturnValue(mockResultData);

            await campaignController.createCampaign(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.CREATED);
            expect(mockRes.json).toHaveBeenCalledWith({
                message: "Campaign created successfully",
                data: mockResultData,
            });
        });
    });

    describe("getCampaigns", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            const mockResultData: Campaign[] = [
                {campName: "test1", dm: "test1@test.com"},
                {campName: "test2", dm: "test2@test.com"},
                {campName: "test3", dm: "test3@test.com"}
            ];

            (campaignServices.getCampaigns as jest.Mock).mockReturnValue(mockResultData);

            await campaignController.getCampaigns(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalledWith(mockResultData);
        });
    });

    describe("getDmCampaigns", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            mockReq.params = {email: "test@test.com"};
            const mockResultData: Campaign[] = [
                {campName: "test1", dm: "test@test.com"},
                {campName: "test3", dm: "test@test.com"}
            ];

            (campaignServices.getDmCampaigns as jest.Mock).mockReturnValue(mockResultData);

            await campaignController.getDmCampaigns(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalledWith(mockResultData);
        });
    });

    describe("getCampaignById", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            mockReq.params = {campName: "test"};
            const mockResultData: Campaign[] = [
                {campName: "test", dm: "test@test.com"}
            ];

            (campaignServices.getCampaignById as jest.Mock).mockReturnValue(mockResultData);

            await campaignController.getCampaignById(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalledWith(mockResultData);
        });
    });

    describe("updateCampaign", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            const mockResultData: Campaign = {
                campName: "test",
                notes: "tests",
                players: [],
                dm: "test@test.com"
            };
            mockReq.params = { campName: "test"};
            mockReq.body = {
                campName: "test",
                notes: "tests",
                players: [],
                dm: "test@test.com"
            };

            (campaignServices.updateCampaign as jest.Mock).mockReturnValue(mockResultData);

            await campaignController.updateCampaign(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalledWith({
                message: "Campaign updated successfully",
                data: mockResultData,
            });
        });
    });

    describe("addPlayerToCampaign", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            const mockResultData: Campaign = {
                campName: "test",
                notes: "This is a test",
                players: [{
                    charName: "test",
                    email: "test2@test.com"
                }],
                dm: "test"
            };
            mockReq.params = { campName: "test"};
            mockReq.body = {
                charName: "test",
                email: "test2@test.com"
            };

            (campaignServices.addPlayerToCampaign as jest.Mock).mockReturnValue(mockResultData);

            await campaignController.addPlayerToCampaign(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalledWith({
                message: "Player added successfully",
                data: mockResultData,
            });
        });
    });

    describe("deleteChar", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            mockReq.params = { campName: "test" };

            (campaignServices.deleteCampaign as jest.Mock).mockReturnValue(undefined);

            await campaignController.deleteCampaign(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalled();
        });
    });

    describe("removePlayerFromCampaign", () => {
        it("should handle successful operation with valid data", async () => {
            // Arrange & Act
            const mockResultData: Campaign = {
                campName: "test",
                notes: "This is a test",
                players: [],
                dm: "test"
            };
            mockReq.params = { campName: "test"};
            mockReq.body = {
                charName: "test",
                email: "test2@test.com"
            };

            (campaignServices.removePlayerFromCampaign as jest.Mock).mockReturnValue(mockResultData);

            await campaignController.removePlayerFromCampaign(
                mockReq as Request,
                mockRes as Response,
                mockNext
            );
            
            // Assert
            expect(mockRes.status).toHaveBeenCalledWith(HTTP_STATUS.OK);
            expect(mockRes.json).toHaveBeenCalledWith({
                message: "Player removed successfully",
                data: mockResultData,
            });
        });
    });
});