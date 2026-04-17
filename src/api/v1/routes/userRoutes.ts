import express, { Router } from "express";
import * as userController from "../controllers/userController"
import { validateRequest } from "../middleware/validate";
import { signinSchemas } from "../validation/validation";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

/**
 * @openapi
 * /:
 *   post:
 *     summary: Logs in a user using given email and password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: example@gmail.com
 *               password:
 *                 type: string
 *                 minLength: 5
 *     responses:
 *       '200':
 *         description: Successfully logs in a user
 *         content:
 *           application/json:
 *             example:
 *               email: example@gmail.com
 *               idToken: adsfh98u314-9io12un34rf0892-134r-201893yfn028794ytr0234nyt...
 *       '404':
 *         description: User not found
 */
router.post(
    "/",
    validateRequest(signinSchemas.loginOrCreate),
    userController.newLogin
);

/**
 * @openapi
 * /new:
 *   post:
 *     summary: Creates a user using given email and password
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: example@gmail.com
 *               password:
 *                 type: string
 *                 minLength: 5
 *     responses:
 *       '200':
 *         description: Successfully logs in a user
 *         content:
 *           application/json:
 *             example:
 *               email: example@gmail.com
 *               password: inputted password
 *       '400':
 *         description: Error creating user
 */
router.post(
    "/new",
    validateRequest(signinSchemas.loginOrCreate),
    userController.newUser
);

/**
 * @openapi
 * /dm:
 *   post:
 *     summary: Endpoint for validating if user had dm or admin privileges
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Successfully logs in a user
 *         content:
 *           application/json:
 *             example:
 *               message: Has Auth
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 */
router.get(
    "/dm",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    userController.hasDMAuth
);

export default router;