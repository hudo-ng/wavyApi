import express from "express";
import path from "path";
import router from "./router.js";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./src/index.html"));
});

app.use("/api", router);

export default app;
