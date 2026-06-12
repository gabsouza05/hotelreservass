const prisma = require("../data/connection");

async function listar(req, res) {

    try {

        const reservas = await prisma.reserva.findMany({

            include: {
                quarto: true
            },

            orderBy: {
                criacao: "desc"
            }

        });

        res.json(reservas);

    } catch (erro) {

        console.log(erro);

        res.status(500).json({
            erro: "Erro ao listar reservas."
        });

    }

}

async function cadastrar(req, res) {

    try {

        const { hospede, dataEntrada, dataSaida, quartoId } = req.body;

        const reserva = await prisma.reserva.create({

            data: {

                hospede,
                dataEntrada: new Date(dataEntrada),
                dataSaida: new Date(dataSaida),
                quartoId: Number(quartoId)

            }

        });

        res.status(201).json(reserva);

    } catch (erro) {

        console.log(erro);

        res.status(500).json({
            erro: "Erro ao cadastrar reserva."
        });

    }

}


async function excluir(req, res) {

    try {

        const { id } = req.params;

        await prisma.reserva.delete({

            where: {

                id: Number(id)

            }

        });

        res.json({

            mensagem: "Reserva excluída com sucesso."

        });

    } catch (erro) {

        console.log(erro);

        res.status(500).json({

            erro: "Erro ao excluir reserva."

        });

    }

}

module.exports = {

    listar,
    cadastrar,
    excluir

};