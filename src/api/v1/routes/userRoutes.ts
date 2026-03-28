import express, { Router } from "express";
import * as userController from "../controllers/userController"

const router: Router = express.Router();

router.post("/", userController.newLogin);
router.post("/new/", userController.newUser);

export default router;