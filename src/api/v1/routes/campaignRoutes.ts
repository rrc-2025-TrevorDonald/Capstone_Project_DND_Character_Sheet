import express, { Router } from "express";
import * as campaignController from "../controllers/campaignController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { validateRequest } from "../middleware/validate";
import { campSchemas } from "../validation/validation";

const router: Router = express.Router();

router.post(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.create),
    campaignController.createCampaign
);

router.get(
    "/all",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    campaignController.getCampaigns
);

router.get(
    "/:email",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.emailParams),
    campaignController.getDmCampaigns
);

router.get(
    "/campaign/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.getCampaignById
);

router.put(
    "/campaign/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.updateCampaign
);

router.put(
    "/campaign/player/add/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.addRemove),
    campaignController.addPlayerToCampaign
);

router.put(
    "/campaign/player/remove/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.addRemove),
    campaignController.removePlayerFromCampaign
);

router.delete(
    "/campaign/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.deleteCampaign
);

export default router;