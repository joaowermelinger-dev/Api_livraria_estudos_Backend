import express from "express";
//importando express

import livro from "./models/Livro.js";

import conectaNaDatabase from "./config/dbConnect.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

const app = express();
//express dentrom da variavel app

app.use(express.json());
//MIDDLEWARE -> Converter os dados que vao chegar para json

//ROTA GET
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

//ROTA GET LIVROS
app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({}); // find e metodo do mongoose que vai se conectar com banco e encontrar
    res.status(200).json(listaLivros); // json e notacao de objetos que tem como ref obj JAVASCRIPT
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    //params...  Estamos passando id como parametro,
    res.status(200).json(livros[index]);
});

//ROTA POST
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
});

//ROTA PUT

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

//delete

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!");
});

export default app;
