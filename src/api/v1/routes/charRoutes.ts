import express, { Router } from "express";
import * as charController from "../controllers/charController"
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { validateRequest } from "../middleware/validate";
import { charSchemas } from "../validation/validation";

const router: Router = express.Router();

/**
 * @openapi
 * /api/v1/chars/:
 *      POST:
 *          summary: Creates a new D&D character
 *          tags: [Chars]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json: {
 *                      charName: string,
 *                         email: string
 *                      }
 *                      schema:
 *                          $ref: "#/src/api/v1/validation/validation"
 *          response:
 *              "201": 
 *                  description: Char created successfully
 *                      content:
 *                          application/json: {
 *                              created char object
 *                          }
 */
router.post(
    "/",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.create),
    charController.createChar
);

/**
 * @openapi
 * /api/v1/chars/all:
 *      GET:
 *          summary: Gets all characters
 *          tags: [Chars]
 *          response:
 *              "200": 
 *                  description: Chars retrieved successfully
 *                      content:
 *                          application/json: [
 *                              {
 *                                  charName: string,
 *                                  email: string
 *                              }, etc...
 *                           ]
 */
router.get(
    "/all",
    authenticate,
    isAuthorized({ hasRole: ["dm", "admin"]}),
    charController.getChars
);

/**
 * @openapi
 * /api/v1/chars/:email:
 *      GET:
 *          summary: Retrieves all characters that have the given email
 *          tags: [Chars]
 *          parameters: 
 *              name: email
 *              in: path
 *              required: true 
 *              schema:
 *                  type: string
 *          response:
 *              "200": 
 *                  description: Chars retrieved successfully
 *                      content:
 *                          application/json: [
 *                              {
 *                                  charName: string,
 *                                  email: string
 *                              }, etc...
 *                          ]
 */
router.get(
    "/:email",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.getUserChars),
    charController.getUserChars
);

/**
 * @openapi
 * /api/v1/chars/char/:id:
 *      GET:
 *          summary: Retrieves a character with matching character name (charName)
 *          tags: [Chars]
 *          parameters: 
 *              name: id
 *              in: path
 *              required: true
 *              schema:
 *                  type: string
 *          response:
 *              "200": 
 *                  description: Char retrieved successfully
 *                      content:
 *                          application/json: {
 *                              charName: string,
 *                              ...rest of data
 *                          }
 */
router.get(
    "/char/:id",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.delUpdateGet),
    charController.getChar
);

/**
 * @openapi
 * /api/v1/chars/char/:id:
 *      POST:
 *          summary: Update the character with the provided character name (charName)
 *          tags: [Chars]
 *          parameters: 
 *              name: id
 *              in: path
 *              required: true
 *              schema:
 *                  type: string
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json: {
 *                     charName: string;
 *                     email: string;
 *                     level?: string;
 *                     xp?: string;
 *                     playerName?: string;
 *                     class?: string;
 *                     race?: string;
 *                     background?: string;
 *                     alignment?: string;
 *                     str?: number;
 *                     dex?: number;
 *                     con?: number;
 *                     int?: number;
 *                     wis?: number;
 *                     cha?: number;
 *                     inspiration?: string;
 *                     profBonus?: string;
 *                     checkboxStr?: string;
 *                     saveStr?: string;
 *                     checkboxDex?: string;
 *                     saveDex?: string;
 *                     checkboxCon?: string;
 *                     saveCon?: string;
 *                     checkboxInt?: string;
 *                     saveInt?: string;
 *                     checkboxWis?: string;
 *                     saveWis?: string;
 *                     checkboxCha?: string;
 *                     saveCha?: string;
 *                     checkboxAcro?: string;
 *                     acrobatics?: string;
 *                     checkboxAnimal?: string;
 *                     animal?: string;
 *                     checkboxArcana?: string;
 *                     arcana?: string;
 *                     checkboxAthl?: string;
 *                     athletics?: string;
 *                     checkboxDec?: string;
 *                     deception?: string;
 *                     checkboxHis?: string;
 *                     history?: string;
 *                     checkboxInsight?: string;
 *                     insight?: string;
 *                     checkboxInti?: string;
 *                     intimidation?: string;
 *                     checkboxInvest?: string;
 *                     investigation?: string;
 *                     checkboxMed?: string;
 *                     medicine?: string;
 *                     checkboxNat?: string;
 *                     nature?: string;
 *                     checkboxPercep?: string;
 *                     perception?: string;
 *                     checkboxPerf?: string;
 *                     performance?: string;
 *                     checkboxPers?: string;
 *                     persuasion?: string;
 *                     checkboxRel?: string;
 *                     religion?: string;
 *                     checkboxSleight?: string;
 *                     sleight?: string;
 *                     checkboxStealth?: string;
 *                     stealth?: string;
 *                     checkboxSurvival?: string;
 *                     survival?: string;
 *                     ac?: string;
 *                     initiative?: string;
 *                     speed?: string;
 *                     maxHP?: string;
 *                     currentHP?: string;
 *                     hitDice?: string;
 *                     totalHitDice?: string;
 *                     slot1Name?: string;
 *                     slot1ATKBonus?: string;
 *                     slot1DMG?: string;
 *                     slot2Name?: string;
 *                     slot2ATKBonus?: string;
 *                     slot2DMG?: string;
 *                     slot3Name?: string;
 *                     slot3ATKBonus?: string;
 *                     slot3DMG?: string;
 *                     atkSpellcast?: string;
 *                     pp?:  string;
 *                     gp?:  string;
 *                     ep?:  string;
 *                     sp?:  string;
 *                     cp?:  string;
 *                     equipment?: string;
 *                     personTraits?: string;
 *                     ideals?: string;
 *                     bonds?: string;
 *                     flaws?: string;
 *                     age?: string;
 *                     height?: string;
 *                     weight?: string;
 *                     eyes?: string;
 *                     skin?: string;
 *                     hair?: string;
 *                     backstory?: string;
 *                     alliesOrgs?: string;
 *                     featsTraits?: string;
 *                     addFeatsTraits?: string;
 *                     backpack?: string;
 *                     spellAbil?: string;
 *                     spellSaveDC?: string;
 *                     spellATKBonus?: string;
 *                     cantrips?: string;
 *                     total1Slots?: string;
 *                     slots1Expend?: string;
 *                     checkboxlvl101?: string;
 *                     lvl101?: string;
 *                     checkboxlvl102?: string;
 *                     lvl102?: string;
 *                     checkboxlvl103?: string;
 *                     lvl103?: string;
 *                     checkboxlvl104?: string;
 *                     lvl104?: string;
 *                     checkboxlvl105?: string;
 *                     lvl105?: string;
 *                     checkboxlvl106?: string;
 *                     lvl106?: string;
 *                     checkboxlvl107?: string;
 *                     lvl107?: string;
 *                     checkboxlvl108?: string;
 *                     lvl108?: string;
 *                     checkboxlvl109?: string;
 *                     lvl109?: string;
 *                     checkboxlvl1010?: string;
 *                     lvl1010?: string;
 *                     checkboxlvl1011?: string;
 *                     lvl1011?: string;
 *                     checkboxlvl1012?: string;
 *                     lvl1012?: string;
 *                     checkboxlvl1013?: string;
 *                     lvl1013?: string;
 *                     total2Slots?: string;
 *                     slots2Expend?: string;
 *                     checkboxlvl201?: string;
 *                     lvl201?: string;
 *                     checkboxlvl202?: string;
 *                     lvl202?: string;
 *                     checkboxlvl203?: string;
 *                     lvl203?: string;
 *                     checkboxlvl204?: string;
 *                     lvl204?: string;
 *                     checkboxlvl205?: string;
 *                     lvl205?: string;
 *                     checkboxlvl206?: string;
 *                     lvl206?: string;
 *                     checkboxlvl207?: string;
 *                     lvl207?: string;
 *                     checkboxlvl208?: string;
 *                     lvl208?: string;
 *                     checkboxlvl209?: string;
 *                     lvl209?: string;
 *                     checkboxlvl2010?: string;
 *                     lvl2010?: string;
 *                     checkboxlvl2011?: string;
 *                     lvl2011?: string;
 *                     checkboxlvl2012?: string;
 *                     lvl2012?: string;
 *                     checkboxlvl2013?: string;
 *                     lvl2013?: string;
 *                     total3Slots?: string;
 *                     slots3Expend?: string;
 *                     checkboxlvl301?: string;
 *                     lvl301?: string;
 *                     checkboxlvl302?: string;
 *                     lvl302?: string;
 *                     checkboxlvl303?: string;
 *                     lvl303?: string;
 *                     checkboxlvl304?: string;
 *                     lvl304?: string;
 *                     checkboxlvl305?: string;
 *                     lvl305?: string;
 *                     checkboxlvl306?: string;
 *                     lvl306?: string;
 *                     checkboxlvl307?: string;
 *                     lvl307?: string;
 *                     checkboxlvl308?: string;
 *                     lvl308?: string;
 *                     checkboxlvl309?: string;
 *                     lvl309?: string;
 *                     checkboxlvl3010?: string;
 *                     lvl3010?: string;
 *                     checkboxlvl3011?: string;
 *                     lvl3011?: string;
 *                     checkboxlvl3012?: string;
 *                     lvl3012?: string;
 *                     checkboxlvl3013?: string;
 *                     lvl3013?: string;
 *                     total4Slots?: string;
 *                     slots4Expend?: string;
 *                     checkboxlvl401?: string;
 *                     lvl401?: string;
 *                     checkboxlvl402?: string;
 *                     lvl402?: string;
 *                     checkboxlvl403?: string;
 *                     lvl403?: string;
 *                     checkboxlvl404?: string;
 *                     lvl404?: string;
 *                     checkboxlvl405?: string;
 *                     lvl405?: string;
 *                     checkboxlvl406?: string;
 *                     lvl406?: string;
 *                     checkboxlvl407?: string;
 *                     lvl407?: string;
 *                     checkboxlvl408?: string;
 *                     lvl408?: string;
 *                     checkboxlvl409?: string;
 *                     lvl409?: string;
 *                     checkboxlvl4010?: string;
 *                     lvl4010?: string;
 *                     checkboxlvl4011?: string;
 *                     lvl4011?: string;
 *                     checkboxlvl4012?: string;
 *                     lvl4012?: string;
 *                     checkboxlvl4013?: string;
 *                     lvl4013?: string;
 *                     total5Slots?: string;
 *                     slots5Expend?: string;
 *                     checkboxlvl501?: string;
 *                     lvl501?: string;
 *                     checkboxlvl502?: string;
 *                     lvl502?: string;
 *                     checkboxlvl503?: string;
 *                     lvl503?: string;
 *                     checkboxlvl504?: string;
 *                     lvl504?: string;
 *                     checkboxlvl505?: string;
 *                     lvl505?: string;
 *                     checkboxlvl506?: string;
 *                     lvl506?: string;
 *                     checkboxlvl507?: string;
 *                     lvl507?: string;
 *                     checkboxlvl508?: string;
 *                     lvl508?: string;
 *                     checkboxlvl509?: string;
 *                     lvl509?: string;
 *                     checkboxlvl5010?: string;
 *                     lvl5010?: string;
 *                     checkboxlvl5011?: string;
 *                     lvl5011?: string;
 *                     checkboxlvl5012?: string;
 *                     lvl5012?: string;
 *                     checkboxlvl5013?: string;
 *                     lvl5013?: string;
 *                     total6Slots?: string;
 *                     slots6Expend?: string;
 *                     checkboxlvl601?: string;
 *                     lvl601?: string;
 *                     checkboxlvl602?: string;
 *                     lvl602?: string;
 *                     checkboxlvl603?: string;
 *                     lvl603?: string;
 *                     checkboxlvl604?: string;
 *                     lvl604?: string;
 *                     checkboxlvl605?: string;
 *                     lvl605?: string;
 *                     checkboxlvl606?: string;
 *                     lvl606?: string;
 *                     checkboxlvl607?: string;
 *                     lvl607?: string;
 *                     checkboxlvl608?: string;
 *                     lvl608?: string;
 *                     checkboxlvl609?: string;
 *                     lvl609?: string;
 *                     checkboxlvl6010?: string;
 *                     lvl6010?: string;
 *                     checkboxlvl6011?: string;
 *                     lvl6011?: string;
 *                     checkboxlvl6012?: string;
 *                     lvl6012?: string;
 *                     checkboxlvl6013?: string;
 *                     lvl6013?: string;
 *                     total7Slots?: string;
 *                     slots7Expend?: string;
 *                     checkboxlvl701?: string;
 *                     lvl701?: string;
 *                     checkboxlvl702?: string;
 *                     lvl702?: string;
 *                     checkboxlvl703?: string;
 *                     lvl703?: string;
 *                     checkboxlvl704?: string;
 *                     lvl704?: string;
 *                     checkboxlvl705?: string;
 *                     lvl705?: string;
 *                     checkboxlvl706?: string;
 *                     lvl706?: string;
 *                     checkboxlvl707?: string;
 *                     lvl707?: string;
 *                     checkboxlvl708?: string;
 *                     lvl708?: string;
 *                     checkboxlvl709?: string;
 *                     lvl709?: string;
 *                     checkboxlvl7010?: string;
 *                     lvl7010?: string;
 *                     checkboxlvl7011?: string;
 *                     lvl7011?: string;
 *                     checkboxlvl7012?: string;
 *                     lvl7012?: string;
 *                     checkboxlvl7013?: string;
 *                     lvl7013?: string;
 *                     total8Slots?: string;
 *                     slots8Expend?: string;
 *                     checkboxlvl801?: string;
 *                     lvl801?: string;
 *                     checkboxlvl802?: string;
 *                     lvl802?: string;
 *                     checkboxlvl803?: string;
 *                     lvl803?: string;
 *                     checkboxlvl804?: string;
 *                     lvl804?: string;
 *                     checkboxlvl805?: string;
 *                     lvl805?: string;
 *                     checkboxlvl806?: string;
 *                     lvl806?: string;
 *                     checkboxlvl807?: string;
 *                     lvl807?: string;
 *                     checkboxlvl808?: string;
 *                     lvl808?: string;
 *                     checkboxlvl809?: string;
 *                     lvl809?: string;
 *                     checkboxlvl8010?: string;
 *                     lvl8010?: string;
 *                     checkboxlvl8011?: string;
 *                     lvl8011?: string;
 *                     checkboxlvl8012?: string;
 *                     lvl8012?: string;
 *                     checkboxlvl8013?: string;
 *                     lvl8013?: string;
 *                     total9Slots?: string;
 *                     slots9Expend?: string;
 *                     checkboxlvl901?: string; 
 *                     lvl901?: string;
 *                     checkboxlvl902?: string;
 *                     lvl902?: string;
 *                     checkboxlvl903?: string;
 *                     lvl903?: string;
 *                     checkboxlvl904?: string;
 *                     lvl904?: string;
 *                     checkboxlvl905?: string;
 *                     lvl905?: string;
 *                     checkboxlvl906?: string;
 *                     lvl906?: string;
 *                     checkboxlvl907?: string;
 *                     lvl907?: string;
 *                     checkboxlvl908?: string;
 *                     lvl908?: string;
 *                     checkboxlvl909?: string;
 *                     lvl909?: string;
 *                     checkboxlvl9010?: string;
 *                     lvl9010?: string;
 *                     checkboxlvl9011?: string;
 *                     lvl9011?: string;
 *                     checkboxlvl9012?: string;
 *                     lvl9012?: string;
 *                     checkboxlvl9013?: string;
 *                     lvl9013?: string;
 *                     passWis?: string;
 *                  }
 *          response:
 *              "200": 
 *                  description: Char updated successfully
 *                      content:
 *                          application/json: {
 *                              updated Char
 *                          }
 */
router.put(
    "/char/:id",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.delUpdateGet),
    charController.updateChar
);

/**
 * @openapi
 * /api/v1/chars/char/:id:
 *      DELETE:
 *          summary: Deletes the character with matching character name (charName)
 *          tags: [Chars]
 *          parameters: 
 *              name: id
 *              in: path
 *              required: true
 *              schema:
 *                  type: string
 *          response:
 *              "200": 
 *                  description: Char deleted successfully
 */
router.delete(
    "/char/:id",
    authenticate,
    isAuthorized({ hasRole: ["player", "dm", "admin"]}),
    validateRequest(charSchemas.delUpdateGet),
    charController.deleteChar
);

export default router;