import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 10,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    }

}, { timestamps: true });

const User = mongoose.model("Task", userSchema);

export default User;