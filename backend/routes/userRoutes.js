import express from "express";
const router = express.Router();
import {
  authUser,
  updateUserProfile,
  getUserProfile,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/auth", authUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);

//insert protect middleware for private routes
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
