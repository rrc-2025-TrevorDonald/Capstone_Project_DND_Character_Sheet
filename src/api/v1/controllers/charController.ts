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
        const { charName, email, playerName, level, race, playerClass, alignment } = req.body;
        const char = { charName, email, playerName, level, race, playerClass, alignment  };

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
        res.status(HTTP_STATUS.OK).json(
            successResponse(chars, "Chars successfully retrieved")
        );
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
        const { email } = req.body;
        const userEmail = { email };

        const chars: Pick<Char, "charName">[] = await charService.getUserChars(String(userEmail));
        res.status(HTTP_STATUS.OK).json(
            successResponse(chars, "Chars successfully retrieved")
        );
    } catch (error) {
        next(error);
    };
};