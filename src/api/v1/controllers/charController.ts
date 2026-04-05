import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Char } from "../models/charModel";
import * as charService from "../services/charServices";
import { successResponse } from "../models/responseModel";

/**
 * Handles createChar request and calls the createChar service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
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

/**
 * Handles getChars request and calls the getChars service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
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

/**
 * Handles getUserChars request and calls the getUserChars service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
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

/**
 * Handles getChar request and calls the getCharById service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const getChar = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id } = req.params;
        const char: Char = await charService.getCharById(String(id));
        res.status(HTTP_STATUS.OK).json(char);
    } catch (error) {
        next(error);
    };
};

/**
 * Handles updateChar request and calls the updateChar service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const updateChar = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { id } = req.params;
        const { ...rest } = req.body;
        const updateData = { ...rest };

        const charUpdate: Char = await charService.updateChar(String(id), updateData);
        res.status(HTTP_STATUS.OK).json(
            successResponse(charUpdate, "Character updated successfully")
        );         
    } catch (error) {
        next(error)
    };
};

/**
 * Handles deleteChar request and calls the deleteChar service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
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
    };
};