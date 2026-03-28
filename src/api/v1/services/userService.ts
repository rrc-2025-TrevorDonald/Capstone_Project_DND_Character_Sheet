import { UserLogin, UserCreate, UserApiCallModel } from "../models/userModels";
const admin = require("firebase-admin");
import { serviceAccount } from "../../../config/firebaseConfig";
import { auth } from "../../../config/firebaseConfig";
import type * as adminTypes from "firebase-admin";

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
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        })

        const createdUser: adminTypes.auth.UserRecord = admin.auth.createUser({
            email: userEmail,
            password: userPassword
        });

        const givePlayer = { "role": "admin" };
        await auth.setCustomUserClaims(createdUser.uid, givePlayer)
        return {
            email: userEmail,
            password: userPassword
        } as UserCreate;

    } catch (error: unknown) {
        throw error;
    };
};