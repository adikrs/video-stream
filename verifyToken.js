import jwt from "jsonwebtoken";
import { addError } from "./error.js";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token

    if(!token) return next(addError(401,"You are not authenticated"));

    jwt.verify(token,process.env.JWT,(err,user) => {
        if(err) return next(addError(203,"TOken not valid!"));
        req.user=user;
        next()
    })
}