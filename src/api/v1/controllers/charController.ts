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
        res.status(HTTP_STATUS.CREATED).json(
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
            successResponse(chars, "Characters retrieved successfully")
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
        const { email } = req.params;

        const chars: Pick<Char, "charName">[] = await charService.getUserChars(String(email));
        res.status(HTTP_STATUS.OK).json(
            successResponse(chars, "Characters retrieved successfully")
        );
    } catch (error) {
        next(error);
    };
};

export const getChar = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { charName } = req.params;
        const char: Char = await charService.getCharById(String(charName));
        res.status(HTTP_STATUS.OK).json(
            successResponse(char, "Character retrieved successfully")
        );
    } catch (error) {
        next(error);
    };
};

export const updateChar = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { charName } = req.params;
        const { ...rest } = req.body;
        const updateData = { ...rest };

        const charUpdate: Char = await charService.updateChar(String(charName), updateData);
        res.status(HTTP_STATUS.OK).json(
            successResponse(charUpdate, "Character updated successfully")
        );         
    } catch (error) {
        next(error)
    };
};

export const deleteChar = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id } = req.params;

        await charService.deleteChar(String(id));
        res.status(HTTP_STATUS.OK).json(
            successResponse("Char successfully deleted")
        );
    } catch (error: unknown) {
        next(error);
    }
};