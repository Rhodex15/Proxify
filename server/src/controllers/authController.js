import bcrypt from "bcryptjs";
import User from "../models/users.js";

export const registerUser = async (req, res) => {
    try{
        const {username, email, password} = req.body;

        if(!username|| !email || !password){
            res.status(400).json({
                message: "All fields are required"
            })
            console.log("All fields are required")
        }
        const existingUser = await User.findOne({email});

        if(existingUser){
            res.status(400).json({
                message: "User already exists"
            })
            console.log("user already exists")
        };

        const hashPassword = await bcrypt.hash(password, 12);

        const newUser = await User.create({
            username,
            email,
            password: hashPassword
        });

        res.status(201).json({
            message: "User created succesfully",
            user:{
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        })
    }
    catch(error){
        console.error("Failed to Create User", error);
        res.status(500).json({
            message: error.message
        });
    }
};
