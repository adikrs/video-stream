import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    },
    img:{
        type:String,
        required:true
    },
    followers:{
        type:Number,
        default:0
    },
    followedUsers:{
        type:[String]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }

},{timestamps:true})

export default mongoose.model("User",UserSchema);