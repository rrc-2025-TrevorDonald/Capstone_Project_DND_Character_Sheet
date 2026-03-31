import Joi from "joi";
import { RequestSchemas } from "../middleware/validate";



export const signinSchemas: Record<string, RequestSchemas> = {
    loginOrCreate: {
        body: Joi.object({
            email: Joi.string().required().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({
                "string.required": '"email" is required',
                "string.empty": '"email" is required',
                "string.pattern.base": '"email" must be a valid email format'
            }),
            password: Joi.string().required().min(5).messages({
                "string.required": '"password" is required',
                "string.empty": '"password" is required',
                "string.min": '"password" must be at least 5 characters long'
            })
        })
    }
};

export const charSchemas: Record<string, RequestSchemas> = {
    create: {
        body: Joi.object({
            charName: Joi.string().required().messages({
                "string.required": '"charName" is required',
                "string.empty": '"charName" is required',
            }),
            email: Joi.string().required().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({
                "string.required": '"email" is required',
                "string.empty": '"email" is required',
                "string.pattern.base": '"email" must be a valid email format'
            }),
        })
    },
    getUserChars: {
        body: Joi.object({
            email: Joi.string().required().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({
                "string.required": '"email" is required',
                "string.empty": '"email" is required',
                "string.pattern.base": '"email" must be a valid email format'
            })
        })
    }
};