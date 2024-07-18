import { addUserError } from "../error.js"
import Video from "../models/Video.js";


export const createVideo = async (req,res,next)=> {
    try{
        const newVideo = new Video({userId:req.user.id,...req.body});
        const savedVideo =  await newVideo.save();
        res.status(200).json(savedVideo);
    }catch(err)
    {
        next(err);
    }

}