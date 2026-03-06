import express from "express";
import livro from "./livrosRoutes.js";

const routes = (app) => {
    app.route("./").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), livro); //MIDDLEWARE -> Converter os dados que vao chegar para json
};

export default routes;
