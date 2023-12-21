const express = require('express');
const LivroModel = require('./src/modules/livro/livro.model.js');      
const app = express();    
app.use(express.json());

app.get('/livros', async  (req, res) => {
    const livros = await LivroModel.find({});
    return  res.status(200).json(livros);
});

app.post('/livros', async (req, res) => {
    if (!req.body.id){
        return res.status(400).json({ message: "O campo ID e obrigtório"})   
    }
    if (!req.body.titulo){
        return res.status(400).json({ message: "O campo titulo e obrigtório"})   
    }
    if (!req.body.paginas){
        return res.status(400).json({ message: "O campo paginas e obrigtório"})   
    }
    if (!req.body.isbn){
        return res.status(400).json({ message: "O campo ISBN e obrigtório"})   
    }
    if (!req.body.editora){
        return res.status(400).json({ message: "O campo editora e obrigtório"})   
    }

    const livroExisente = await LivroModel.find({ id: req.body.id, titulo: req.body.titulo});
    if (livroExisente.length) {
        return res.status(200).json({ message:"Livro ou ID Exisente"});
    }

    const livro = await LivroModel.create({
        id: req.body.id,
        titulo: req.body.titulo,
        paginas: req.body.paginas,
        isbn: req.body.isbn,
        editora: req.body.editora
    });

    return  res.status(201).json(livro);
});

app.listen(8080, () => {    
    console.log('servidor Funcionando na porta 8080')
});