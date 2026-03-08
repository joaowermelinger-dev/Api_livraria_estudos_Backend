import livro from "../models/Livro.js";

class LivroController {
    // get
    static async listarLivros(req, res) {
        try {
            // static palavrra chave para usar metodos de classe.
            const listaLivros = await livro.find({}); // find e metodo do mongoose que vai se conectar com banco e encontrar
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha na requisicao`,
            });
        }
    }

    //PUT --> editar livro
    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            // static palavrra chave para usar metodos de classe.
            const livroEncontrado = await livro.findById(id); // find e metodo do mongoose que vai se conectar com banco e encontrar
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha na requisicao do livro`,
            });
        }
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

    // / trazer um livro por id.
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            // static palavrra chave para usar metodos de classe.
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha na atualizacao do livro`,
            });
        }
    }
    //deletar livro
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            // static palavrra chave para usar metodos de classe.
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluido com sucesso!" });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao deletar o livro`,
            });
        }
    }
}

export default LivroController;
