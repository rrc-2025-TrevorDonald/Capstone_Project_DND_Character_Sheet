import { UserLogin, UserCreate, UserApiCallModel } from "../models/userModels";
import admin from "firebase-admin";
import { UserNotFoundError } from "../errors/errors";
import { Auth, UserRecord } from "node_modules/firebase-admin/lib/auth";

export const userLogin = async (
    userEmail: string,
    userPassword: string,
    apiKey: string
): Promise<UserLogin> => {
    try {
        const url: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        const loginInfo: UserApiCallModel = {
            email: userEmail,
            password:userPassword,
            returnSecureToken: true
        };

        const response: Response  = await fetch(url, {
            method: "POST",
            body: JSON.stringify(loginInfo)
        });

        if (!response.ok) {
            throw new UserNotFoundError("USER_NOT_FOUND");
        };

        const userInfo: UserLogin = await response.json();

        return {
            email: userInfo.email,
            idToken: userInfo.idToken
        } as UserLogin;
    } catch (error: unknown) {
        throw error;
    };
};

export const userCreate = async (
    userEmail: string,
    userPassword: string,
): Promise<UserCreate> => {
    try {
        const auth: Auth = admin.auth();

        const createdUser: UserRecord = await auth.createUser({
            email: userEmail,
            password: userPassword
        });

        await auth.setCustomUserClaims(createdUser.uid, { role: "player" })
        
        return {
            email: userEmail,
            password: userPassword
        } as UserCreate;

    } catch (error: unknown) {
        throw error;
    };
};