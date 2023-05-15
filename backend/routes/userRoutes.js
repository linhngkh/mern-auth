import express from "express";
const router = express.Router();
import {
  authUser,
  updateUserProfile,
  getUserProfile,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";

router.post("/", authUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);

router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
