import Joi from "joi";
import { RequestSchemas } from "../middleware/validate";



export const signinSchemas: Record<string, RequestSchemas> = {
    loginOrCreate: {
        body: Joi.object({
            email: Joi.string().required().pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).messages({
                "any.required": '"email" is required',
                "string.pattern.base": '"email" must be a valid email format'
            }),
            password: Joi.string().required().min(5).messages({
                "any.required": '"password" is required',
                "string.min": '"password" must be at least 5 characters long'
            })
        })
    }
};