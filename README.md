# 🏨 Hotel Reservas

Sistema web para gerenciamento de quartos e reservas de um hotel, desenvolvido com **Node.js**, **Express**, **Prisma ORM**, **MySQL**, **HTML**, **CSS** e **JavaScript**.

---

## 📌 Objetivo

O projeto tem como objetivo permitir o gerenciamento de quartos e reservas de um hotel por meio de uma aplicação Web, utilizando uma API REST no back-end e uma interface simples no front-end.

---

# 📂 Estrutura do Projeto

```
hotelreservas/
│
├── api/
│   ├── prisma/
│   ├── src/
│   │   ├── controllers/
│   │   ├── data/
│   │   └── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── web/
│   ├── index.html
│   ├── novo-quarto.html
│   ├── reservas.html
│   ├── nova-reserva.html
│   ├── script.js
│   └── style.css
│
├── docs/
│   ├── banco.sql
│   └── requisicoes.json
│
├── wireframes/
│   ├── 1.png
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   ├── 5.png
│   └── 6.png
│
└── README.md
```

---

# 🚀 Tecnologias Utilizadas

### Back-end

- Node.js
- Express
- Prisma ORM
- MySQL
- CORS
- Dotenv

### Front-end

- HTML5
- CSS3
- JavaScript

---

# ⚙️ Funcionalidades

## Quartos

- ✅ Listar quartos
- ✅ Cadastrar quarto
- ✅ Excluir quarto

## Reservas

- ✅ Listar reservas
- ✅ Cadastrar reserva
- ✅ Excluir reserva

---

# 🗄️ Banco de Dados

O projeto utiliza o banco de dados **MySQL** com o ORM **Prisma**.

Modelos utilizados:

### Quarto

| Campo | Tipo |
|--------|------|
| id | Integer |
| numero | String |
| tipo | String |

### Reserva

| Campo | Tipo |
|--------|------|
| id | Integer |
| hospede | String |
| dataEntrada | DateTime |
| dataSaida | DateTime |
| criacao | DateTime |
| quartoId | Integer |

Relacionamento:

- Um quarto pode possuir várias reservas.
- Uma reserva pertence a apenas um quarto.

---

# ▶️ Como Executar

## 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/hotelreservas.git
```

---

## 2. Entrar na pasta da API

```bash
cd api
```

---

## 3. Instalar as dependências

```bash
npm install
```

---

## 4. Configurar o arquivo .env

Exemplo:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/hotelreservas"
PORT=3000
```

---

## 5. Gerar o Prisma Client

```bash
npx prisma generate
```

---

## 6. Executar o servidor

```bash
npm run dev
```

ou

```bash
npm start
```

---

## 7. Executar o Front-end

Abra o arquivo

```
web/index.html
```

ou utilize a extensão **Live Server** do VS Code.

---

# 📡 Endpoints da API

## Quartos

| Método | Endpoint |
|---------|----------|
| GET | /quartos/listar |
| POST | /quartos/cadastrar |
| DELETE | /quartos/excluir/:id |

---

## Reservas

| Método | Endpoint |
|---------|----------|
| GET | /reservas/listar |
| POST | /reservas/cadastrar |
| DELETE | /reservas/excluir/:id |

---

# 📷 Wireframes

Os wireframes utilizados no desenvolvimento encontram-se na pasta:

## Tela de Quartos

![Wireframe 1](wireframes/1.png)

---

## Cadastro de Quartos

![Wireframe 2](wireframes/2.png)

---

## Listagem de Quartos

![Wireframe 3](wireframes/3.png)

---

## Tela de Reservas

![Wireframe 4](wireframes/4.png)

---

## Cadastro de Reservas

![Wireframe 5](wireframes/5.png)

---

## Listagem de Reservas

![Wireframe 6](wireframes/6.png)

# 📁 Documentação

A pasta **docs** contém:

- Exportação das requisições da API.

---

# 👨‍💻 Desenvolvido por

Gabrielly Souza.

---

# 📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos.
