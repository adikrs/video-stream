import User from "../models/User.js"
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { addError } from "../error.js";

export const signup = async (req,res,next)=> {
try{
        // console.log('Sign up');
        console.log(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);
 
        const newUser = new User({...req.body,password:hash});
        console.log(newUser);

        await newUser.save();
        res.status(200).send("user sign up successfull");

    }catch(err){
        next(addError(500,"not able to create !"));
    }
}

export const login = async (req,res,next)=> {
    try{
            // console.log('Log in');
            console.log(req.body);

            const user = await User.findOne({username:req.body.username})
            if(!user)
            {
                return next(addError(404," User not present! Please check the username."))
            }

            // password check
            const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)

            console.log(req.body.password,user.password);
            console.log(isPasswordCorrect);

            if(!isPasswordCorrect)
            {
                return next(addError(400," Password is wrong! Please enter again."))
            }

            console.log("User sign it successfull")

            const jwtToken = jwt.sign({id:user._id},process.env.JWT);
            const {password,...others} = user._doc

            res.cookie("access_token",jwtToken,{
                httpOnly:true
            }).status(200).json(others);


    
        }catch(err){
            next(err);
        }
        
    }