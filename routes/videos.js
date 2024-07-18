import express from "express";
import { createVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router  = express.Router();

//create video
router.post("/",verifyToken,createVideo);

//get video



export default router;