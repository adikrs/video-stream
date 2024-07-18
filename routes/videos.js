import express from "express";
import { createVideo, deleteVideo, updateVideo,getVideo,getAllVideos } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router  = express.Router();

//create video
router.post("/",verifyToken,createVideo);

//get video
router.get("/find/:id",verifyToken,getVideo);

//update video
router.put("/:id",verifyToken,updateVideo);

//delete video
router.delete("/:id",verifyToken,deleteVideo);

//get all videos
router.get("/find/",verifyToken,getAllVideos);



export default router;