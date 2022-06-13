const mongoose = require("mongoose");

// cada post debera tener las siguientes --> propiedades : tipo de valor
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String], // Array de Strings
  selectedFile: String, // vamos a convertir imagenes en strings con base64
  likeCount: {
    type: Number,
    default: 0,
  }, // objeto de tipo numero con valor 0 por defecto
  createdAt: {
    type: Date,
    default: new Date(),
  }, // objeto de tipo fecha con valor de fecha actual por defecto
});

// Ahora que definimos nuestro esquema, debemos traducirlo a un modelo (en base a esto podremos crear instancias del mismo)

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage; // estamos exportando un modelo

// Sobre este modelo despues podremos utilizar metodos como find, create, update y delete
