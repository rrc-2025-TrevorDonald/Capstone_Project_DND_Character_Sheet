import express, { Router } from "express";
import * as userController from "../controllers/userController"
import { validateRequest } from "../middleware/validate";
import { signinSchemas } from "../validation/signinValidation";

const router: Router = express.Router();

router.post(
    "/",
    validateRequest(signinSchemas.loginOrCreate),
    userController.newLogin);
router.post(
    "/new",
    validateRequest(signinSchemas.loginOrCreate),
    userController.newUser);

export default router;