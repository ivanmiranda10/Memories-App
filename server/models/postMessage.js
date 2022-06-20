const mongoose = require("mongoose");

// cada post debera tener las siguientes --> propiedades : tipo de valor
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Ahora que definimos nuestro esquema, debemos traducirlo a un modelo (en base a esto podremos crear instancias del mismo)

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;

// Sobre este modelo despues podremos utilizar metodos como find, create, update y delete
