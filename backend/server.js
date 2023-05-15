import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
connectDB();

const app = express();
// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server starting on ${port}`.bgBlue));
