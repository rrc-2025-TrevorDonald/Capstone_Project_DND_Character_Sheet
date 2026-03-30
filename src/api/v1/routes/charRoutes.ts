import express, { Router } from "express";
import * as charController from "../controllers/charController"
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { validateRequest } from "../middleware/validate";
import { charSchemas } from "../validation/signinValidation";

const router: Router = express.Router();

router.post(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.create),
    charController.createChar
);
router.get(
    "/all",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    charController.getChars
);
router.get(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.getUserChars),
    charController.getUserChars
);

export default router;