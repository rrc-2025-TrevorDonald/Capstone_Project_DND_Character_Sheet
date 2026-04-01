import express, { Router } from "express";
import * as charController from "../controllers/charController"
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { validateRequest } from "../middleware/validate";
import { charSchemas } from "../validation/validation";

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
    "/:email",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.getUserChars),
    charController.getUserChars
);
router.get(
    "/char/:id",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.delUpdateGet),
    charController.getChar
);
router.put(
    "/char/:id",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.delUpdateGet),
    charController.updateChar
);
router.delete(
    "/char/:id",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.delUpdateGet),
    charController.deleteChar
);

export default router;