import express from "express";
import { createVideo, deleteVideo, updateVideo,getVideo,getAllVideos,addView,getAllCategoryVideos,getSearchVideos } from "../controllers/video.js";
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

//update views
router.put("/views/:id",verifyToken,addView);

//get videos by category
router.get("/find/category/:id",verifyToken,getAllCategoryVideos);

//get by search
router.get("/find/search/:id",verifyToken,getSearchVideos);




export default router;