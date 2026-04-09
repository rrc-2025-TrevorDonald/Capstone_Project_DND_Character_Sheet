import { Request, Response, NextFunction } from "express";
import request from "supertest";
import app from "../src/app";
import * as campaignController from "../src/api/v1/controllers/campaignController";
import { HTTP_STATUS } from "../src/constants/httpConstants";

jest.mock("../src/api/v1/controllers/campaignController", () => ({
    createCampaign: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.CREATED).send()
    ),
    getCampaigns: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    ),
    getCampaignById: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    ),
    getDmCampaigns: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    ),
    updateCampaign: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    ),
    deleteCampaign: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    ),
    addPlayerToCampaign: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    ),
    removePlayerFromCampaign: jest.fn((_req: Request, res: Response) =>
        res.status(HTTP_STATUS.OK).send()
    ),
    getCampaignPlayers: jest.fn((_req: Request, res: Response) =>
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



describe("Campaign Routes", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("POST /api/v1/campaigns/", () => {
        it("should call createChar with valid data", async () => {
            // Arrange & Act
            const mockItem = {
                campName: "test",
                email: "test@test.com"
            };
            await request(app)
                .post("/api/v1/campaigns")
                .set("Authorization", "Bearer mockedToken")
                .send(mockItem);

            // Assert
            expect(campaignController.createCampaign).toHaveBeenCalled();
        });
    });

    describe("GET /api/v1/campaigns/campaign/:campName", () => {
        it("should call getCampaignById with valid data", async () => {
            // Arrange & Act
            await request(app)
                .get("/api/v1/campaigns/campaign/test")
                .set("Authorization", "Bearer mockedToken");

            // Assert
            expect(campaignController.getCampaignById).toHaveBeenCalled();
        });
    });

    describe("GET /api/v1/campaigns/:email", () => {
        it("should call getDmCampaigns with valid data", async () => {
            // Arrange & Act
            await request(app)
                .get("/api/v1/campaigns/test@test.com")
                .set("Authorization", "Bearer mockedToken");

            // Assert
            expect(campaignController.getDmCampaigns).toHaveBeenCalled();
        });
    });

    describe("GET /api/v1/campaigns/all", () => {
        it("should call getCampaigns", async () => {
            // Arrange & Act
            await request(app)
                .get("/api/v1/campaigns/all")
                .set("Authorization", "Bearer mockedToken");

            // Assert
            expect(campaignController.getCampaigns).toHaveBeenCalled();
        });
    });

    describe("PUT /api/v1/campaigns/campaign/:campName", () => {
        it("should call updateCampaign with valid data", async () => {
            // Arrange & Act
            const mockCamp = {
                campName: "test",
                notes: "",
                players: [],
                dm: "test@test.com"
            };
            await request(app)
                .put("/api/v1/campaigns/campaign/test@test.com")
                .set("Authorization", "Bearer mockedToken")
                .send(mockCamp);

            // Assert
            expect(campaignController.updateCampaign).toHaveBeenCalled();
        });
    });

    describe("PUT /api/v1/campaigns/campaign/player/add/:campName", () => {
        it("should call updateCampaign with valid data", async () => {
            // Arrange & Act
            const mockCamp = {
                charName: "test",
                email: "test@test.com"
            };
            await request(app)
                .put("/api/v1/campaigns/campaign/player/add/test@test.com")
                .set("Authorization", "Bearer mockedToken")
                .send(mockCamp);

            // Assert
            expect(campaignController.addPlayerToCampaign).toHaveBeenCalled();
        });
    });

    describe("PUT /api/v1/campaigns/campaign/player/remove/:campName", () => {
        it("should call updateCampaign with valid data", async () => {
            // Arrange & Act
            const mockCamp = {
                charName: "test",
                email: "test@test.com"
            };
            await request(app)
                .put("/api/v1/campaigns/campaign/player/remove/test@test.com")
                .set("Authorization", "Bearer mockedToken")
                .send(mockCamp);

            // Assert
            expect(campaignController.removePlayerFromCampaign).toHaveBeenCalled();
        });
    });

    describe("DELETE /api/v1/campaigns/campaign/:campName", () => {
        it("should call deleteChar with valid data", async () => {
            // Arrange & Act
            await request(app)
                .delete("/api/v1/campaigns/campaign/test")
                .set("Authorization", "Bearer mockedToken");

            // Assert
            expect(campaignController.deleteCampaign).toHaveBeenCalled();
        });
    });

    describe("GET /api/v1/campaigns/campaign/players/:campName", () => {
        it("should call getCampaignById with valid data", async () => {
            // Arrange & Act
            await request(app)
                .get("/api/v1/campaigns/campaign/players/test")
                .set("Authorization", "Bearer mockedToken");

            // Assert
            expect(campaignController.getCampaignPlayers).toHaveBeenCalled();
        });
    });
});