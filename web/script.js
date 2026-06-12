function novoQuarto() {
    window.location.href = "novo-quarto.html";
}

// ==================== QUARTOS ====================

async function carregarQuartos() {

    const lista = document.querySelector("#lista-quartos");

    if (!lista) return;

    try {

        const dados = await fetch("http://localhost:3000/quartos/listar")
            .then(res => res.json());

        lista.innerHTML = "";

        dados.forEach(quarto => {

            lista.innerHTML += `
                <tr>
                    <td>${quarto.numero}</td>
                    <td>${quarto.tipo}</td>
                    <td>
                        <button onclick="verReservas(${quarto.id})">
                            Ver Reservas
                        </button>

                        <button onclick="excluirQuarto(${quarto.id})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;

        });

    } catch (erro) {

        console.error("Erro ao carregar quartos:", erro);

    }

}

async function cadastrarQuarto() {

    try {

        const novoQuarto = {

            numero: document.querySelector("#numero").value,
            tipo: document.querySelector("#tipo").value

        };

        const resposta = await fetch("http://localhost:3000/quartos/cadastrar", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(novoQuarto)

        });

        if (!resposta.ok) {
            throw new Error();
        }

        alert("Quarto cadastrado com sucesso!");

        window.location.href = "index.html";

    } catch (erro) {

        console.error(erro);

        alert("Erro ao cadastrar quarto.");

    }

}

async function excluirQuarto(id) {

    if (!confirm("Deseja excluir este quarto?")) return;

    try {

        const resposta = await fetch(
            `http://localhost:3000/quartos/excluir/${id}`,
            {
                method: "DELETE"
            }
        );

        if (!resposta.ok) {
            throw new Error();
        }

        alert("Quarto excluído com sucesso!");

        carregarQuartos();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao excluir quarto.");

    }

}

function verReservas(id) {

    localStorage.setItem("quartoSelecionado", id);

    window.location.href = "reservas.html";

}

// ==================== RESERVAS ====================

async function carregarSelectQuartos() {

    const select = document.querySelector("#quartoId");

    if (!select) return;

    try {

        const quartos = await fetch("http://localhost:3000/quartos/listar")
            .then(res => res.json());

        select.innerHTML =
            '<option value="">Selecione um quarto</option>';

        quartos.forEach(quarto => {

            select.innerHTML += `
                <option value="${quarto.id}">
                    Quarto ${quarto.numero} - ${quarto.tipo}
                </option>
            `;

        });

    } catch (erro) {

        console.error(erro);

    }

}

async function cadastrarReserva() {

    try {

        const reserva = {

            hospede: document.querySelector("#hospede").value,
            dataEntrada: document.querySelector("#dataEntrada").value,
            dataSaida: document.querySelector("#dataSaida").value,
            quartoId: document.querySelector("#quartoId").value

        };

        const resposta = await fetch(
            "http://localhost:3000/reservas/cadastrar",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(reserva)
            }
        );

        if (!resposta.ok) {
            throw new Error();
        }

        alert("Reserva cadastrada com sucesso!");

        window.location.href = "reservas.html";

    } catch (erro) {

        console.error(erro);

        alert("Erro ao cadastrar reserva.");

    }

}

async function carregarReservas() {

    const lista = document.querySelector("#lista-reservas");

    if (!lista) return;

    try {

        const reservas = await fetch("http://localhost:3000/reservas/listar")
            .then(res => res.json());

        lista.innerHTML = "";

        reservas.forEach(reserva => {

            lista.innerHTML += `
                <tr>
                    <td>${reserva.id}</td>
                    <td>${reserva.hospede}</td>
                    <td>${new Date(reserva.dataEntrada).toLocaleDateString()}</td>
                    <td>${new Date(reserva.dataSaida).toLocaleDateString()}</td>
                    <td>
                        <button onclick="excluirReserva(${reserva.id})">
                            Excluir
                        </button>
                    </td>
                </tr>
            `;

        });

    } catch (erro) {

        console.error(erro);

    }

}

async function excluirReserva(id) {

    if (!confirm("Deseja excluir esta reserva?")) return;

    try {

        const resposta = await fetch(
            `http://localhost:3000/reservas/excluir/${id}`,
            {
                method: "DELETE"
            }
        );

        if (!resposta.ok) {
            throw new Error();
        }

        alert("Reserva excluída com sucesso!");

        carregarReservas();

    } catch (erro) {

        console.error(erro);

        alert("Erro ao excluir reserva.");

    }

}

// ==================== LOAD ====================

window.onload = () => {

    carregarQuartos();
    carregarReservas();
    carregarSelectQuartos();

};