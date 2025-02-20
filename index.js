// @ts-nocheck
import app from "./src/server.js";

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
