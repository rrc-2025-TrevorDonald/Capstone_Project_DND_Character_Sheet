import { UserLogin, UserCreate, UserApiCallModel } from "../models/userModels";

export const userLogin = async (
    userEmail: string,
    userPassword: string,
    apiKey: string
): Promise<UserLogin> => {
    try {
        const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        const loginInfo: Partial<UserApiCallModel> = {
            email: userEmail,
            password:userPassword,
            returnSecureToken: true
        };

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(loginInfo)
        })

        const userInfo = await response.json();

        return {
            email: userInfo.email,
            idToken: userInfo.idToken
        } as UserLogin;
    } catch (error: unknown) {
        throw error;
    }
};