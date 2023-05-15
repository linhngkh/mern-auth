import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// authuser/set token
// route POST /api/users/auth
// access public
const authUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// register new user
// route POST /api/users/register
// access public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register user" });
});

// log out new user
// route POST /api/users/logout
// access public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "log out new user" });
});

// get user profile
// route GET /api/users/profile
// access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " get user profile" });
});

// update user profile
// route PUT /api/users/profile
// access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update user profile" });
});

export {
  authUser,
  updateUserProfile,
  getUserProfile,
  registerUser,
  logoutUser,
};
