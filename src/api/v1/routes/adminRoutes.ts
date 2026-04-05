import express from "express";
import { setCustomClaims } from "../controllers/adminController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: express.Router = express.Router();

/**
 * @openapi
 * /auth/admin/setCustomClaims:
 *   post:
 *     summary: Sets a role to selected user
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - uid
 *               - role
 *             properties:
 *               uid:
 *                 type: string
 *                 example: "H489H28ASF"
 *               role:
 *                 type: string
 *                 enum: [player, dm, admin]
 *                 default: player
 *     responses:
 *       '200':
 *         description: Custom claims set for user uid
 *         content:
 *           application/json:
 *             example:
 *               message: Custom claims set for user "USERS UID"
 *               data: {}
 *       '403':
 *         description: Insufficient role
 *       '401':
 *         description: Invalid token
 *       '404':
 *         description: User not found
 */
router.post(
    "/setCustomClaims",
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    setCustomClaims
);

export default router;