import * as campaignService from "../src/api/v1/services/campaignServices";
import * as firestoreRepository from "../src/api/v1/repositories/firestoreRepository";
import { Campaign } from "../src/api/v1/models/campaignModel";
import { Player } from "../src/api/v1/models/playerModel";

jest.mock("../src/api/v1/repositories/firestoreRepository");

describe("Campaign Services", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("createCamp", () => {
        it("should create a new campaign successfully", async () => {
            // Arrange
            const mockInputData = {
                campName: "test",
                email: "test@test.com"
            };
            
            const mockResultData: Campaign = {
                campName: "test",
                notes: "",
                players: [],
                dm: "test@test.com"
            };

            (firestoreRepository.createDocument as jest.Mock).mockResolvedValue(
                "Test"
            );

            // Act
            const actual: Campaign = await campaignService.createCamp(mockInputData);

            // Assert
            expect(firestoreRepository.createDocument).toHaveBeenCalledWith(
            "campaigns",
            mockResultData,
            "test"
            );
            expect(actual.campName).toBe("test");
            expect(actual.dm).toBe("test@test.com")
        });
    });

    describe("getCampaigns", () => {
        it("should return all camps", async () => {
            // Arrange
            const mockArray = [
                {campName: "test1", notes: "", players: [], dm: "test"},
                {campName: "test2", notes: "", players: [], dm: "test"},
                {campName: "test3", notes: "", players: [], dm: "test"}
            ];

            jest.spyOn(campaignService, "getCampaigns").mockResolvedValue(mockArray);

            (firestoreRepository.getDocuments as jest.Mock).mockResolvedValue(undefined);

            // Act
            const actual: Campaign[] = await campaignService.getCampaigns();

            // Assert
            expect(actual).toStrictEqual([
                {campName: "test1", notes: "", players: [], dm: "test"},
                {campName: "test2", notes: "", players: [], dm: "test"},
                {campName: "test3", notes: "", players: [], dm: "test"}
            ]);
        });
    });
    
    describe("getCampaignById", () => {
        it("should return the campaign with the supplied campName", async () => {
            // Arrange
            const mockId = "test"
            const mockResultData: Campaign = {
                campName: "test",
                notes: "",
                players: [],
                dm: "test"
            }

            jest.spyOn(campaignService, "getCampaignById").mockResolvedValue(mockResultData);

            (firestoreRepository.getDocumentById as jest.Mock).mockResolvedValue(mockResultData);

            // Act
            const actual: Campaign = await campaignService.getCampaignById(mockId);

            // Assert
            expect(actual).toStrictEqual(mockResultData);
        });
    });

    describe("updateChar", () => {
        it("should update the campaign with the supplied campName", async () => {
            // Arrange
            const mockId = "test"
            const updateData: Campaign = {
                campName: "test",
                notes: "This is a test",
                players: [],
                dm: "test"
            };

            jest.spyOn(campaignService, "updateCampaign").mockResolvedValue(updateData);

            (firestoreRepository.updateDocument as jest.Mock).mockResolvedValue({
                campName: "test",
                notes: "This is a test",
                players: [],
                dm: "test"
            });

            // Act
            const actual: Campaign = await campaignService.updateCampaign(mockId, updateData);

            // Assert
            expect(actual).toStrictEqual({
                campName: "test",
                notes: "This is a test",
                players: [],
                dm: "test"
            });
        });
    });

    describe("addPlayerToCampaign", () => {
        it("should add a player to the campaign with the supplied campName and email", async () => {
            // Arrange
            const mockId = "test"
            const mockData: Campaign = {
                campName: "test",
                notes: "This is a test",
                players: [{
                    charName: "test",
                    email: "test@test.com"
                }],
                dm: "test"
            };
            const updateData = {
                charName: "test",
                email: "test@test.com"
            };

            jest.spyOn(campaignService, "addPlayerToCampaign").mockResolvedValue(mockData);

            (firestoreRepository.addPlayer as jest.Mock).mockResolvedValue({
                campName: "test",
                notes: "This is a test",
                players: [{
                    charName: "test",
                    email: "test@test.com"
                }],
                dm: "test"
            });

            // Act
            const actual: Campaign = await campaignService.addPlayerToCampaign(mockId, updateData);

            // Assert
            expect(actual).toStrictEqual({
                campName: "test",
                notes: "This is a test",
                players: [{
                    charName: "test",
                    email: "test@test.com"
                }],
                dm: "test"
            });
        });
    });

    describe("deleteChar", () => {
        it("should delete the char with the supplied campName", async () => {
            // Arrange
            const mockId = "test"
            const mockData: Campaign = {
                campName: "test",
                notes: "This is a test",
                players: [{
                    charName: "test",
                    email: "test@test.com"
                }],
                dm: "test"
            };

            jest.spyOn(campaignService, "getCampaignById").mockResolvedValue(mockData);
            jest.spyOn(campaignService, "deleteCampaign").mockResolvedValue(undefined);

            (firestoreRepository.deleteDocument as jest.Mock).mockResolvedValue(undefined);

            // Act
            const actualGet: Campaign = await campaignService.getCampaignById(mockId);
            await campaignService.deleteCampaign(mockId);

            // Assert
            expect(actualGet).toStrictEqual(mockData);
            expect(campaignService.deleteCampaign).toHaveBeenCalledWith(mockId);
        });
    });

    describe("removePlayerFromCampaign", () => {
        it("should remove a player from the campaign with the supplied campName and email", async () => {
            // Arrange
            const mockId = "test"
            const mockData: Campaign = {
                campName: "test",
                notes: "This is a test",
                players: [],
                dm: "test"
            };
            const updateData = {
                charName: "test",
                email: "test@test.com"
            };

            jest.spyOn(campaignService, "removePlayerFromCampaign").mockResolvedValue(mockData);

            (firestoreRepository.removePlayer as jest.Mock).mockResolvedValue({
                campName: "test",
                notes: "This is a test",
                players: [],
                dm: "test"
            });

            // Act
            const actual: Campaign = await campaignService.removePlayerFromCampaign(mockId, updateData);

            // Assert
            expect(actual).toStrictEqual({
                campName: "test",
                notes: "This is a test",
                players: [],
                dm: "test"
            });
        });
    });

    describe("getDmCampaigns", () => {
        it("should return all campaigns with the supplied email", async () => {
            // Arrange
            const mockEmail = "test@test.com"
            const mockArray = {
                docs: [
                    {data: () => ({ campName: "test1", dm: "test@test.com" })},
                    {data: () => ({ campName: "test2", dm: "tests@test.com" })},
                    {data: () => ({ campName: "test3", dm: "test@test.com" })}
                ]
            };

            jest.spyOn(campaignService, 'getDmCampaigns').mockResolvedValue([
                {campName: "test1", dm: "test@test.com"},
                {campName: "test3", dm: "test@test.com"}
            ]);

            (firestoreRepository.getDocuments as jest.Mock).mockResolvedValue(mockArray);

            // Act
            const actual: Campaign[] = await campaignService.getDmCampaigns(mockEmail);

            // Assert
            expect(actual).toStrictEqual([
                {campName: "test1", dm: "test@test.com"},
                {campName: "test3", dm: "test@test.com"}
            ]);
        });
    });

    describe("getCampaignPlayers", () => {
        it("should return the players from the campaign with the supplied campName", async () => {
            // Arrange
            const mockId = "test"
            const mockResultData: Player[] = [{
                charName: "Player1",
                email: "test1@test.com"
            },
            {
                charName: "Player2",
                email: "test2@test.com"
            }]

            jest.spyOn(campaignService, "getCampaignPlayers").mockResolvedValue(mockResultData);

            (firestoreRepository.getDocumentById as jest.Mock).mockResolvedValue(mockResultData);

            // Act
            const actual: Player[] = await campaignService.getCampaignPlayers(mockId);

            // Assert
            expect(actual).toStrictEqual(mockResultData);
        });
    });
});