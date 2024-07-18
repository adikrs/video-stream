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

export const deleteUser = async (req,res,next)=> {
    console.log("here");
    if(req.params.id==req.user.id)
    {
        try{
            await User.findByIdAndDelete(
                req.params.id,
            ); 
            res.status(200).json("User has been deleted! ")
        }
        catch(err){
            next(err)
        }

    }else{
        console.log("heress ");
        return next(addUserError(403,"You are not allowed to delete other accounts!"));
    }
}

export const getUser = async (req,res,next)=> {
    try{
        console.log(req.params.id)
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch(err){
        next(err)
    }
}


export const subscribe = async (req,res,next)=> {
    try{
        await User.findByIdAndUpdate(req.params.id,{
           $push:{followedUsers:req.user.id},
        });

        await User.findByIdAndUpdate(req.params.id,{
            $inc:{followers:1}, 
         });
        
        res.status(200).json("Subscription done");
    }catch(err){
        next(err)
    }
}

export const unsubscribe = async (req,res,next)=> {
    try{
        await User.findByIdAndUpdate(req.params.id,{
           $pull:{followedUsers:req.user.id},
        });

        await User.findByIdAndUpdate(req.params.id,{
            $inc:{followers:-1}, 
         });
        
        res.status(200).json("unsubscribe done");
    }catch(err){
        next(err)
    }
}




