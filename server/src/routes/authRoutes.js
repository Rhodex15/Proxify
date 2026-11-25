import express from "express";
import { protect } from "../middleware/authController.js";
import { registerUser, loginUser } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Welcome! You are authenticated.",
    userId: req.user.id
  });
});

export default router