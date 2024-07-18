import express from "express";
import { updateUser,deleteUser,getUser } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router  = express.Router();

//update a user
router.put("/:id",verifyToken,updateUser)
//delete a user
router.delete("/:id",deleteUser)
//find or get a user
router.get("find/:id",getUser)


export default router;