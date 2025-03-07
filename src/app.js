import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(bodyParser.json());

// routes import & declaration
// import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

// http://localhost:8000/api/users/register
// app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

export { app };
