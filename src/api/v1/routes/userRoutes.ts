import express, { Router } from "express";
import * as userController from "../controllers/userController"
import { validateRequest } from "../middleware/validate";
import { signinSchemas } from "../validation/signinValidation";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

router.post(
    "/",
    validateRequest(signinSchemas.loginOrCreate),
    userController.newLogin
);
router.post(
    "/new",
    validateRequest(signinSchemas.loginOrCreate),
    userController.newUser
);
router.get(
    "/dm",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    userController.hasDMAuth
);

export default router;