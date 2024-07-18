import { addUserError } from "../error.js"
import User from "../models/User.js";

export const updateUser = async (req,res,next)=> {
    if(req.params.id==req.user.id)
    {
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                $set:req.body
                }
                ,
                {new:true}
            )
            res.status(200).json(updatedUser)
        }
        catch(err){
            next(err)
        }

    }else{
        console.log("heress ");
        return next(addUserError(403,"You are not allowed to update other accounts!"));
    }
}

export const deleteUser = (req,res,next)=> {
}

export const getUser = (req,res,next)=> {
}

