const prisma = require("../data/connection");

async function listar(req, res) {

    try {

        const quartos = await prisma.quarto.findMany({

            orderBy: {
                numero: "asc"
            }

        });

        res.json(quartos);

    } catch (erro) {

        console.log(erro);

        res.status(500).json({
            erro: "Erro ao listar quartos."
        });

    }

}


async function cadastrar(req, res) {

    try {

        const { numero, tipo } = req.body;

        const quarto = await prisma.quarto.create({

            data: {

                numero,
                tipo

            }

        });

        res.status(201).json(quarto);

    } catch (erro) {

        console.log(erro);

        res.status(500).json({
            erro: "Erro ao cadastrar quarto."
        });

    }

}


async function excluir(req, res) {

    try {

        const { id } = req.params;

        await prisma.quarto.delete({

            where: {

                id: Number(id)

            }

        });

        res.json({

            mensagem: "Quarto excluído com sucesso."

        });

    } catch (erro) {

        console.log(erro);

        res.status(500).json({

            erro: "Erro ao excluir quarto."

        });

    }

}

module.exports = {

    listar,
    cadastrar,
    excluir

};