import express from "express";
import path from "path";
import router from "./router.js";
import morgan from "morgan";

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.secret = "dog";
  next();
});

//main
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./src/index.html"));
});

app.use("/api", router);

export default app;
