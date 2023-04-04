const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
require("dotenv").config();

app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE"],
    optionsSuccessStatus: 200,
  })
);
app.use("/api/v1", routes);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
