import { UserLogin, UserCreate, UserApiCallModel } from "../models/userModels";
import admin from "firebase-admin";
import { UserNotFoundError } from "../errors/errors";
import { Auth, UserRecord } from "node_modules/firebase-admin/lib/auth";

/**
 * Logs in a user
 * @param userEmail - the email used for logging in
 * @param userPassword - the password used for logging in
 * @returns the email and idToken of the logged in user
 */
export const userLogin = async (
    userEmail: string,
    userPassword: string,
    apiKey: string
): Promise<UserLogin> => {
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
};

/**
 * Creates a new user
 * @param userEmail - the email used to create the account
 * @param userPassword - the password for the created account
 * @returns The created users email and password
 */
export const userCreate = async (
    userEmail: string,
    userPassword: string,
): Promise<UserCreate> => {
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
};

/**
 * Returns "Has Auth"
 * @returns string containing "Has Auth"
 */
export const hasDMAuth = (): string => {
    return "Has Auth" as string;
};