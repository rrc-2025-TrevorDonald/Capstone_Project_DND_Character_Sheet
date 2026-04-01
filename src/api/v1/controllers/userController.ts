import { Request, Response, NextFunction } from "express";
import { apiKey } from "../../../../apiKey";
import { userLogin, userCreate } from "../services/userService";
import { UserLogin, UserCreate } from "../models/userModels";

const APIKEY: string = apiKey;
const OK: number = 200;
const CREATED: number = 201;

export const newLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { email, password } = req.body;
        const login = { email, password }
        const sendLogin: UserLogin = await userLogin(login.email, login.password, APIKEY);
        res.status(OK).json(sendLogin);
    } catch (error) {
        next(error);
    };
};

export const newUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { email, password } = req.body;
        const sendUser: UserCreate = await userCreate(email, password);
        res.status(CREATED).json(sendUser);
    } catch (error) {
        next(error);
    };
};

export const hasDMAuth = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try{
        res.status(OK).json("Has Auth");
    } catch (error) {
        next(error);
    };
}