// @ts-nocheck
import * as dotenv from "dotenv";
import app from "./src/server.js";

const PORT = 3001;
dotenv.config();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
