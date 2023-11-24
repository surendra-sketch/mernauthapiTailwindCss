import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const app = express();
import router from "./routes/userRoutes.js";
import goalRouter from "./routes/goalRoutes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.use("/api", router);
app.use("/api/goal", goalRouter);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});
