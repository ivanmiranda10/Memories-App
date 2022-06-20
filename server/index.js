require("dotenv").config();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
const morgan = require("morgan");

const postRoutes = require("./routes/posts");

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", postRoutes);

const { CONNECTION_DB_URL, PORT } = process.env;

mongoose
  .connect(CONNECTION_DB_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
