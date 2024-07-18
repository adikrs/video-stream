import express from "express";
import { updateUser,deleteUser,getUser,subscribe, unsubscribe } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router  = express.Router();

//update a user
router.put("/:id",verifyToken,updateUser)
//delete a user
router.delete("/:id",verifyToken,deleteUser)
//find or get a user
router.get("/find/:id",verifyToken,getUser)

//subscribe
router.post("/subscribe/:id",verifyToken,subscribe)


//unsubscribe
router.post("/unsubscribe/:id",verifyToken,unsubscribe)

export default router;