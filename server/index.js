require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const postRoutes = require("./routes/posts");

const app = express();

app.use("/posts", postRoutes);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const { CONNECTION_DB_URL, PORT } = process.env;

mongoose
  .connect(CONNECTION_DB_URL) // investigar las opciones (obj) que puede recibir el connect como segundo parametro
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));

// mongoose.set('') // investigar que hace el set y sus distintas opciones
