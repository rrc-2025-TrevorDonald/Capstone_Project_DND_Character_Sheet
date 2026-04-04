import { Request, Response, NextFunction } from "express";
import { apiKey } from "../../../../apiKey";
import { userLogin, userCreate } from "../services/userService";
import { UserLogin, UserCreate } from "../models/userModels";

const APIKEY: string = apiKey;
const OK: number = 200;
const CREATED: number = 201;

/**
 * Handles newLogin requests and calls the userLogin service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
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

/**
 * Handles newUser request and calls the userCreate service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
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

/**
 * Responds json str if a user has dm or admin authorization.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
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