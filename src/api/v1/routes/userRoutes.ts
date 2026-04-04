import express, { Router } from "express";
import * as userController from "../controllers/userController"
import { validateRequest } from "../middleware/validate";
import { signinSchemas } from "../validation/validation";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

/**
 * @openapi
 * /api/v1/users/:
 *      POST:
 *          summary: Signs a user in using given email and password
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json: {
 *                      email: string,
 *                      password: string,
 *                  }
 *                      schema:
 *                          $ref: "#/src/api/v1/validation/validation"
 *          response:
 *              "200": 
 *                  description: Successful login
 *                      content:
 *                          application/json: {
 *                              email: string,
 *                              idToken: string
 *                          }
 */
router.post(
    "/",
    validateRequest(signinSchemas.loginOrCreate),
    userController.newLogin
);

/**
 * @openapi
 * /api/v1/users/new:
 *      POST:
 *          summary: Creates a new user with given email and password
 *          tags: [Users]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json: {
 *                      email: string,
 *                      password: string,
 *                  }
 *                      schema:
 *                          $ref: "#/src/api/v1/validation/validation"
 *          response:
 *              "200": 
 *                  description: Successfully created
 *                      content:
 *                          application/json: {
 *                      email: string,
 *                      password: string,
 *                  }
 */
router.post(
    "/new",
    validateRequest(signinSchemas.loginOrCreate),
    userController.newUser
);

/**
 * @openapi
 * /api/v1/users/dm:
 *      GET:
 *          summary: Returns successful response of "Has Auth" if user has permissions
 *          tags: [Users]
 *          response:
 *              "200": 
 *                  description: Has Auth
 *                      content:
 *                          application/json: {
 *                              message: Has Auth}
 */
router.get(
    "/dm",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    userController.hasDMAuth
);

export default router;