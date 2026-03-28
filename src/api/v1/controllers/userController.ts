import { Request, Response, NextFunction } from "express";
import { apiKey } from "../../../../apiKey";
import { userLogin, userCreate } from "../services/userService";
import { HTTP_STATUS } from "src/constants/httpConstants";
import { UserLogin, UserCreate } from "../models/userModels";

const APIKEY: string = apiKey;

export const newLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { email, password } = req.body;
        const sendLogin: UserLogin = await userLogin(email, password, APIKEY);
        res.status(HTTP_STATUS.OK).json(sendLogin);
    } catch (error) {
        next(error);
    };
}