import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Campaign } from "../models/campaignModel";
import * as campaignServices from "../services/campaignServices"
import { successResponse } from "../models/responseModel";

/**
 * Handles createCampaign request and calls the createCamp service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const createCampaign = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { campName, email } = req.body;
        const char = { campName, email };

        const newCampaign: Campaign = await campaignServices.createCamp(char);
        res.status(HTTP_STATUS.CREATED).json(
            successResponse(newCampaign, "Campaign created successfully")
        );
    } catch (error) {
        next(error);
    };
};