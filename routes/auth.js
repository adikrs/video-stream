import express from "express";
import { signup,login } from "../controllers/auth.js";

const router  = express.Router();

// for creating a user
router.post("/signup",signup)

//sign in user
router.post("/login",login)


// //google auth based
// router.post("/login",)

export default router;