import mongoose from "mongoose";
import Post from "./post.js";
import User from "./user.js";


const confirmSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Post,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },

}, {timestamps: true})

const Confirmation = new mongoose.model("Confirmation", confirmSchema);

export default Confirmation;