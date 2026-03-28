import { UserLogin } from "../src/api/v1/models/userModels";
import * as userService from "../src/api/v1/services/userService";
// import * as firestoreRepositories from "../src/api/v1/repositories/firestoreRepository";
// import { UserLogin, UserCreate } from "../src/api/v1/models/userModels";
import { apiKey } from "../apiKey"
import { UserNotFoundError } from "../src/api/v1/errors/errors";

jest.mock("../src/api/v1/repositories/firestoreRepository");

describe("User Service", () => {
    jest.useFakeTimers();
    beforeEach(() => {
        jest.clearAllMocks();
        global.fetch = jest.fn();
    });

    describe("userLogin", () => {
        it("should successfully login in user with valid credentials", async () => {
            // Arrange
            const mockEmail = "admin@capstone.com";
            const mockPassword = "Password1";
            const mockApiKey = apiKey;
            const mockLoginResponse: UserLogin = {
                email: "admin@capstone.com",
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
            const mockEmail = "invalid@test.com";
            const mockPassword = "invalidPassword";
            const mockApiKey = "invalidAPIKey";
            const firebaseError = {               
                    error: {
                        message: "USER_NOT_FOUND",
                    },
            };

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
});