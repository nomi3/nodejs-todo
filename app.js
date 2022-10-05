const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
const e = require("express");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));

const PORT = 5001;

app.use("/api/v1/tasks", taskRoute);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("起動"));
  } catch (err) {
    console.log(err);
  }
}

start();


