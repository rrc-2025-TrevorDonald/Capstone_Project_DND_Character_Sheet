import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Char } from "../models/charModel";
import * as charService from "../services/charServices";
import { successResponse } from "../models/responseModel";

export const createChar = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { charName, email } = req.body;
        const char = { charName, email };

        const newChar: Char = await charService.createChar(char);
        res.status(HTTP_STATUS.OK).json(
            successResponse(newChar, "Char created successfully")
        );
    } catch (error) {
        next(error);
    };
};

export const getChars = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const chars: Pick<Char, "charName">[] = await charService.getChars();
        res.status(HTTP_STATUS.OK).json(chars);
    } catch (error) {
        next(error);
    };
};

export const getUserChars = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { email } = req.params;

        const chars: Pick<Char, "charName">[] = await charService.getUserChars(String(email));
        res.status(HTTP_STATUS.OK).json(chars);
    } catch (error) {
        next(error);
    };
};