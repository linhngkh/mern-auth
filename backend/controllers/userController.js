import asyncHandler from "express-async-handler";
// authuser/set token
// route POST /api/users/auth
// access public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
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
