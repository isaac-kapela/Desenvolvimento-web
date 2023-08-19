const express = require("express");
const app = express();
const port = 8000;
const connection =
  "mongodb+srv://leticiafrancielle:teste123@devsbar.1piblsf.mongodb.net/";
const mongoose = require("mongoose");

const Funcionario = require("./models/funcionario");
const Produto = require("./models/produto");

app.use(express.json());

app.post("/cadastrar-produto", async (req, res) => {
  try {
    const { nome, descricao, valor, emEstoque, publicadoEm } = req.body;

    let produto = {
      nome,
      valor,
      fabricante,
      emEstoque,
      publicadoEm,
    };
    await Produto.create(produto);
    return res
      .status(200)
      .json({ message: "Produto cadastrado com sucesso!!" });
  } catch (error) {
    return res.status(401).json({ error: "Erro ao cadastrar produto." });
  }
});

app.get("/listar-produtos", async (req, res) => {
  try {
    const produtos = await Produto.find();
    return res.status(200).json({ produtos: produtos });
  } catch (error) {
    return res.status(200).json({ error: "Erro. Tente novamente." });
  }
});

app.post("/cadastrar-funcionario", async (req, res) => {
  try {
    const { nome, cargo, funcional, admitidoEm } = req.body;

    let funcionario = {
      nome,
      cargo,
      funcional,
      admitidoEm,
    };
    await Funcionario.create(funcionario);
    return res
      .status(200)
      .json({ message: "Funcionario cadastrado com sucesso!!" });
  } catch (error) {
    return res.status(400).json({ error: "Erro ao cadastrar funcionario." });
  }
});

app.get("/listar-funcionario", async (req, res) => {
  try {
    const funcionarios = await Funcionario.find();
    return res.status(200).json({ funcionarios: funcionarios });
  } catch (error) {
    return res.status(200).json({ error: "Erro. Tente novamente." });
  }
});

mongoose
  .connect(connection, {
    dbName: "DevShop",
  })
  .then(() => {
    console.log("MongoDb UP!");
    console.log(`Servidor rodando http://localhost:${port}`);
    app.listen(port);
  })
  .catch((error) => {
    console.log(error);
  });
