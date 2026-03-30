import { UserCreate, UserLogin } from "../src/api/v1/models/userModels";
import * as userService from "../src/api/v1/services/userService";
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
            const mockApiKey: string = "testKey";
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
        const mockAuth = admin.auth() as jest.Mocked<ReturnType<typeof admin.auth>>;
        it("shout successfully create a user with valid credentials", async () => {
            // Arrange
            const mockEmail: string = "test@test.com";
            const mockPassword: string = "Password1";
            const mockCreateResponse: UserCreate = {
                email: "test@test.com",
                password: "Password1"
            }
            mockAuth.createUser.mockResolvedValue({
                uid: "1234",
                email: "test@example.com"
            } as any);

            mockAuth.setCustomUserClaims.mockResolvedValue(undefined);

            const actual = await userService.userCreate(mockEmail, mockPassword);

            expect(mockAuth.createUser).toHaveBeenCalledWith(mockCreateResponse);

            expect(mockAuth.setCustomUserClaims).toHaveBeenCalledWith("1234", {
                role: "player"
            });

            expect(actual).toEqual(mockCreateResponse);
        });
    });
});