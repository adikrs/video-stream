import { addError } from "../error.js";
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


export const updateVideo = async (req,res,next)=> {
    try{
        const video = await Video.findById(req.params.id)

        if(!video) return next(addError(404,"Video not found to update!"))

        if(req.user.id === video.userId)
        {
            const updatedVideo = await Video.findByIdAndUpdate(
                req.params.id,
                {
                    $set:req.body,
                },
                {new:true}
            );

            res.status(200).json(updatedVideo);
        }
        else
        {
            return next(addError(403,"You can update others video"));
        }
        
    }catch(err)
    {
        next(err);
    }
}

export const getVideo = async (req,res,next)=> {
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(addError(404,"Video not found!"))

        res.status(200).json(video);
    }catch(err)
    {
        next(err);
    }
}


export const getAllVideos = async (req,res,next)=> {
    try{
        const videos = await Video.find()
        res.status(200).json(videos);
    }catch(err)
    {
        next(err);
    }
}


export const deleteVideo = async (req,res,next)=> {
    try{
        
        const video =  await Video.findById(req.params.id);
        if(!video) {
            return next(addError(404,"Video is not present"));
        }

        if(req.user.id === video.userId)
        {
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("Video is deleted successfully.")
        }
        else
        {
            return next(addError(403,"Other users video cannot be deleted"));
        }

    }catch(err)
    {
        next(err);
    }
}