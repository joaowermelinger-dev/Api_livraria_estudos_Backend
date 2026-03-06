import livro from "../models/Livro.js";

class LivroController {
    // get
    static async listarLivros(req, res) {
        // static palavrra chave para usar metodos de classe.
        const listaLivros = await livro.find({}); // find e metodo do mongoose que vai se conectar com banco e encontrar
        res.status(200).json(listaLivros);
    }

    // post
    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso",
                livro: novoLivro,
            });
            // fazer manejo de erros e sucessos
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar livro`,
            });
        }
    }
}

export default LivroController;
