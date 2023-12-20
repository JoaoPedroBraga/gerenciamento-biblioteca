const mongoose = require('../../config/mongo.js');   
const { Schema } = mongoose;

const livroSchema = new Schema(
    {
        id: String,
        titulo: String,
        paginas: String,
        isbn: String,
        editora: String
    },
    { 
        timestamps: true 
    }
);

const LivroModel = mongoose.model('livros', livroSchema);

module.exports =  LivroModel;