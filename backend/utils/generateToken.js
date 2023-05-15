import jwt from "jsonwebtoken";

// add userId as payload
const generateToken = (res, userId) => {
  // create a token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  // save token in cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    // in production, secure will be true
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
