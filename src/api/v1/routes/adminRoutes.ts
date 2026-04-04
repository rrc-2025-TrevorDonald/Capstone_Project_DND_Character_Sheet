import express from "express";
import { setCustomClaims } from "../controllers/adminController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: express.Router = express.Router();

/**
 * @openapi
 * /api/v1/auth/admin/setCustomClaims:
 *      POST:
 *          summary: Sets the given user a specified role
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json: {
 *                      uid: string,
 *                      claims: {
 *                          role: string
 *                      }
 *                  }
 *          response:
 *              "200": 
 *                  description: Custom claims set for user: uid
 *                      content:
 *                          application/json: {
 *                              message: Custom claims set for user: uid,
 *                              data: {}
 *                          }
 */
router.post(
    "/setCustomClaims",
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    setCustomClaims
);

export default router;