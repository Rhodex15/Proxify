import bcrypt from "bcryptjs";
import User from "../models/users.js";
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    try{
        const {username, email, password} = req.body;

        if(!username|| !email || !password){
            console.log("All fields are required")
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const existingUser = await User.findOne({email});

        if(existingUser){
            console.log("user already exists");
            return res.status(400).json({
                message: "User already exists"
            })
           
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

export const loginUser = async (req, res) => {
    try{
        const {password, email} = req.body;

        const user = await User.findOne({email}).select("+password");

        if(!user){
            res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )
        if(!isMatch){
            res.status(401).json({
                message: "Invalid email or password"
            })
        }
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
        );
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    }
    catch(error){
        console.error("Failed to Login", error);
        res.status(500).json({
            message: "Failed to Login"
        })
    }
}
