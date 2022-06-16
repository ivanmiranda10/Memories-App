require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const postRoutes = require("./routes/posts");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/posts", postRoutes);

const { CONNECTION_DB_URL, PORT } = process.env;

mongoose
  .connect(CONNECTION_DB_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
