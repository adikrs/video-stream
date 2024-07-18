import express from "express";
import { getVideos } from "../controllers/video.js";

const router  = express.Router();

router.get("/test",getVideos)

export default router;