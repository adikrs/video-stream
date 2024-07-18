import express from "express";
import { updateUser,deleteUser,getUser } from "../controllers/user.js";

const router  = express.Router();

//update a user
router.put("/:id",updateUser)
//delete a user
router.delete("/:id",deleteUser)
//find or get a user
router.get("find/:id",getUser)




export default router;