import { UserCreate, UserLogin } from "../src/api/v1/models/userModels";
import * as userService from "../src/api/v1/services/userService";
import { apiKey } from "../apiKey"
import { UserNotFoundError } from "../src/api/v1/errors/errors";
import admin from "firebase-admin";

jest.mock("../src/api/v1/repositories/firestoreRepository");

jest.mock("firebase-admin", () => {
    const authMock = {
        createUser: jest.fn(),
        setCustomUserClaims: jest.fn(),
    };

    return {
        initializeApp: jest.fn(),
        credential: {
        cert: jest.fn(),
        },
        auth: () => authMock,
    };
});

describe("User Service", () => {
    jest.useFakeTimers();
    beforeEach(() => {
        jest.clearAllMocks();
        global.fetch = jest.fn();
    });

    describe("userLogin", () => {
        it("should successfully login in user with valid credentials", async () => {
            // Arrange
            const mockEmail: string = "test@test.com";
            const mockPassword: string = "tests";
            const mockApiKey: string = apiKey;
            const mockLoginResponse: UserLogin = {
                email: "test@test.com",
                idToken: "testToken"
            };
            
            (global.fetch as jest.Mock).mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockLoginResponse)
            });

            // Act
            const actual = await userService.userLogin(mockEmail, mockPassword, mockApiKey);

            // Assert
            expect(global.fetch).toHaveBeenCalledWith(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${mockApiKey}`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: mockEmail,
                        password: mockPassword,
                        returnSecureToken: true
                    })
                }
            );
            expect(actual).toEqual({
                email: mockEmail,
                idToken: "testToken"
            });
        });

        it("should a error with invalid user login credentials", async () => {
            // Arrange
            const mockEmail: string = "invalid@test.com";
            const mockPassword: string = "invalidPassword";
            const mockApiKey: string = "invalidAPIKey";
            const firebaseError = {               
                    error: {
                        message: "USER_NOT_FOUND",
                    },
            } as const;

            // Act
            (global.fetch as jest.Mock).mockResolvedValue({
                json: jest.fn().mockResolvedValue(firebaseError)
            });

            // Assert
            await expect(
                userService.userLogin(mockEmail, mockPassword, mockApiKey)
            ).rejects.toThrow(UserNotFoundError);
        });
    });

    describe("userCreate", () => {
        it("shout successfully create a user with valid credentials", async () => {
            // Arrange
            const mockEmail: string = "test@test.com";
            const mockPassword: string = "Password1";
            const mockCreateResponse: UserCreate = {
                email: "test@test.com",
                password: "Password1",
            };
            const mockAuth = admin.auth() as any;

            // Act
            mockAuth.createUser.mockResolvedValue({ uid: "12345" });
            mockAuth.setCustomUserClaims.mockResolvedValue(undefined);
            const actual = await userService.userCreate(mockEmail, mockPassword);

            // Assert
            expect(admin.initializeApp).toHaveBeenCalled();
            expect(mockAuth.createUser).toHaveBeenCalledWith({
                email: "test@test.com",
                password: "Password1",
            });
            expect(mockAuth.setCustomUserClaims).toHaveBeenCalled();
            expect(actual).toEqual(mockCreateResponse);
        });
    });
});