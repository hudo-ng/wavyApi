import express from "express";
import path from "path";
import router from "./router.js";
import morgan from "morgan";
import { protect } from "./auth/auth.js";
import { createUser, signIn } from "./handler/user.js";

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//main
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./src/index.html"));
});

app.use("/api", protect, router);

app.post("/user", createUser);

app.post("/signin", signIn);

export default app;
