import jwt from "jsonwebtoken";
import { addUserError } from "./error.js";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token

    if(!token) return next(addUserError(401,"You are not authenticated"));

    jwt.verify(token,process.env.JWT,(err,user) => {
        if(err) return next(addUserError(203,"TOken not valid!"));
        req.user=user;
        next()
    })
}