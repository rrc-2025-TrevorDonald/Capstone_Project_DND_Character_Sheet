import express, { Router } from "express";
import * as campaignController from "../controllers/campaignController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { validateRequest } from "../middleware/validate";
import { campSchemas } from "../validation/validation";

const router: Router = express.Router();

/**
 * @openapi
 * /campaigns:
 *   post:
 *     summary: Creates a new campaign
 *     tags: [Campaigns]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - campName
 *               - email
 *             properties:
 *               campName:
 *                 type: string
 *                 example: My First Campaign
 *               email:
 *                 type: string
 *                 format: email
 *                 example: example@gmail.com
 *     responses:
 *       '201':
 *         description: Campaign created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Campaign created successfully
 *               data: { Camp object: object }
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '400':
 *         description: Error creating campaign
 */
router.post(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.create),
    campaignController.createCampaign
);

/**
 * @openapi
 * /campaigns/all:
 *   get:
 *     summary: Retrieves a list of all campaigns
 *     tags: [Campaigns]
 *     responses:
 *       '200':
 *         description: Successfully retrieved campaigns
 *         content:
 *           application/json:
 *             example: [ { campName: My First Campaign}, { campName: My Second Campaign}, ... ]
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '400':
 *         description: Error getting campaigns
 */
router.get(
    "/all",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    campaignController.getCampaigns
);

/**
 * @openapi
 * /campaigns/:email:
 *   get:
 *     summary: Retrieves a list of all campaigns with that contain the given email
 *     tags: [Campaigns]
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: example@gmail.com
 *     responses:
 *       '200':
 *         description: Successfully retrieved users
 *         content:
 *           application/json:
 *             example: [ { campName: My First Campaign, notes: notes for the DM, players: [Player1, Player2], dm: example@gmail.com }, ... ]
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '400':
 *         description: Error getting campaigns
 */
router.get(
    "/:email",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.emailParams),
    campaignController.getDmCampaigns
);

/**
 * @openapi
 * /campaigns/campaign/:campName:
 *   get:
 *     summary: Retrieve the character with matching campName as given
 *     tags: [Campaigns]
 *     parameters:
 *       - name: charName
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: My First Campaign
 *     responses:
 *       '200':
 *         description: Successfully retrieved campaign
 *         content:
 *           application/json:
 *             example: { campName: My First Campaign, notes: notes for the DM, players: [Player1, Player2], dm: example@gmail.com }
 *       '404':
 *         description: Campaign not found
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '400':
 *         description: Error getting campaign
 */
router.get(
    "/campaign/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.getCampaignById
);

/**
 * @openapi
 * /campaigns/campaign/:campName:
 *   put:
 *     summary: Updates a char with selected charName
 *     tags: [Campaigns]
 *     parameters:
 *       - name: campName
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: My First Campaign
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - notes
 *             properties:
 *               campName:
 *                 type: string
 *               notes:
 *                 type: string
 *               players:
 *                 type: array
 *               dm:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully updated campaign
 *         content:
 *           application/json:
 *             example: 
 *               message: Campaign updated successfully
 *               data: { campName: My First Campaign, notes: notes for the DM, players: [Player1, Player2], dm: example@gmail.com }
 *       '404':
 *         description: Campaign not found
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '400':
 *         description: Error getting campaign
 */
router.put(
    "/campaign/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.updateCampaign
);

/**
 * @openapi
 * /campaigns/campaign/player/add/:campName:
 *   put:
 *     summary: Adds a char to a campaign
 *     tags: [Campaigns]
 *     parameters:
 *       - name: campName
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: My First Campaign
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - charName
 *               - email
 *             properties:
 *               charName:
 *                 type: string
 *                 example: Grognak
 *               email:
 *                 type: string
 *                 format: email
 *                 example: example@gmail.com
 *     responses:
 *       '200':
 *         description: Player added successfully
 *         content:
 *           application/json:
 *             example: 
 *               message: Player added successfully
 *               data: { campName: My First Campaign, notes: notes for the DM, players: [Player1, Player2], dm: example@gmail.com }
 *       '404':
 *         description: Campaign not found
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '400':
 *         description: Error getting campaign
 */
router.put(
    "/campaign/player/add/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.addRemove),
    campaignController.addPlayerToCampaign
);

/**
 * @openapi
 * /campaigns/campaign/player/remove/:campName:
 *   put:
 *     summary: Removes a char from a campaign
 *     tags: [Campaigns]
 *     parameters:
 *       - name: campName
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: My First Campaign
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - charName
 *               - email
 *             properties:
 *               charName:
 *                 type: string
 *                 example: Grognak
 *               email:
 *                 type: string
 *                 format: email
 *                 example: example@gmail.com
 *     responses:
 *       '200':
 *         description: Player removed successfully
 *         content:
 *           application/json:
 *             example: 
 *               message: Player removed successfully
 *               data: { campName: My First Campaign, notes: notes for the DM, players: [Player1], dm: example@gmail.com }
 *       '404':
 *         description: Campaign not found
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '400':
 *         description: Error getting campaign
 */
router.put(
    "/campaign/player/remove/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.addRemove),
    campaignController.removePlayerFromCampaign
);

/**
 * @openapi
 * /campaigns/campaign/:campName:
 *   delete:
 *     summary: Deletes the campaign with matching campName as given
 *     tags: [Campaigns]
 *     parameters:
 *       - name: charName
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           example: My First Campaign
 *     responses:
 *       '200':
 *         description: Successfully deleted campaign
 *         content:
 *           application/json:
 *             example: { message: Campaign deleted successfully }
 *       '404':
 *         description: User not found
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '400':
 *         description: Error deleting char
 */
router.delete(
    "/campaign/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.deleteCampaign
);

export default router;