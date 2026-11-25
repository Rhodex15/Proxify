import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: email,
        required: true,
        unique: true,
    }

}, { timestamps: true });

const User = mongoose.model("Task", userSchema);

export default User;