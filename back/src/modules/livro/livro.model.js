import mongoose from 'mongoose';
const { Schema } = mongoose;

const livroSchema = new Schema({
    id: Number,
    titulo: String,
    paginas: Number,
    isbn: Number,
    editora: String
    },
    { 
        timestamps: true 
    }
);

const LivroModel = mongoose.model('livros', livroSchema);

export default LivroModel;