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

router.post(
    "/:email",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.getDmCampaigns
);

router.get(
    "/campaign/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.createCampaign
);

router.post(
    "/campaign/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.delUpdateGet),
    campaignController.updateCampaign
);

router.post(
    "/campaign/player/add/:campName",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    validateRequest(campSchemas.addRemove),
    campaignController.addPlayerToCampaign
);

router.post(
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
