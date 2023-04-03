const express = require("express");
const app = express();
require("dotenv").config();

// app.use(express.json());

app.get("/", (req, res) => res.json({ kek: "2" }));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
