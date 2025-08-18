const express = require("express");
const dotenv = require("dotenv").config();
const taskRoute = require("../Backend/routes/taskRoutes");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/task", taskRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
