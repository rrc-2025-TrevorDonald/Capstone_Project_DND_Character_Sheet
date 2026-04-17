import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstants";
import { Campaign } from "../models/campaignModel";
import { Player } from "../models/playerModel";
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

/**
 * Handles getCampaigns request and calls the getCampaigns service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const getCampaigns = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const campaigns: Pick<Campaign, "campName">[] = await campaignServices.getCampaigns();
        res.status(HTTP_STATUS.OK).json(campaigns);
    } catch (error) {
        next(error);
    };
};

/**
 * Handles getCampaignById request and calls the getCampaignById service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const getCampaignById = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { campName } = req.params;
        const campaign: Campaign = await campaignServices.getCampaignById(String(campName));
        res.status(HTTP_STATUS.OK).json(campaign);
    } catch (error) {
        next(error);
    };
};

/**
 * Handles getDmCampaigns request and calls the getDmCampaigns service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const getDmCampaigns = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { email } = req.params;

        const camps: Campaign[] = await campaignServices.getDmCampaigns(String(email));
        res.status(HTTP_STATUS.OK).json(camps);
    } catch (error) {
        next(error);
    };
};

/**
 * Handles updateCampaign request and calls the updateCampaign service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const updateCampaign = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { campName } = req.params;
        const { ...rest } = req.body;
        const updateData = { ...rest };

        const campUpdate: Campaign = await campaignServices.updateCampaign(String(campName), updateData);
        res.status(HTTP_STATUS.OK).json(
            successResponse(campUpdate, "Campaign updated successfully")
        );         
    } catch (error) {
        next(error)
    };
};

/**
 * Handles addPlayerToCampaign request and calls the addPlayerToCampaign service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const addPlayerToCampaign = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { campName } = req.params;
        const { charName, email } = req.body;
        const updateData = { charName, email };

        const campUpdate: Campaign = await campaignServices.addPlayerToCampaign(String(campName), updateData);
        res.status(HTTP_STATUS.OK).json(
            successResponse(campUpdate, "Player added successfully")
        );         
    } catch (error) {
        next(error)
    };
};

/**
 * Handles deleteCampaign request and calls the deleteCampaign service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const deleteCampaign = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { email } = req.params;

        await campaignServices.deleteCampaign(String(email));
        res.status(HTTP_STATUS.OK).json(
            successResponse("Campaign successfully deleted")
        );
    } catch (error: unknown) {
        next(error);
    };
};

/**
 * Handles addPlayerToCampaign request and calls the addPlayerToCampaign service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const removePlayerFromCampaign = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { campName } = req.params;
        const { charName, email } = req.body;
        const updateData = { charName, email };

        const campUpdate: Campaign = await campaignServices.removePlayerFromCampaign(String(campName), updateData);
        res.status(HTTP_STATUS.OK).json(
            successResponse(campUpdate, "Player removed successfully")
        );         
    } catch (error) {
        next(error)
    };
};

/**
 * Handles getCampaignPlayers request and calls the getCampaignPlayers service function.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next middleware function.
 * @returns {Promise<void>}
 */
export const getCampaignPlayers = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { campName } = req.params;
        const players: Player[] = await campaignServices.getCampaignPlayers(String(campName));
        res.status(HTTP_STATUS.OK).json(players);
    } catch (error) {
        next(error);
    };
};