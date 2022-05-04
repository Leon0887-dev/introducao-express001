const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send('hello world'));
app.get("/ola", (req, res) => res.send('olá pessoal'));
app.post("/frutas", (req, res) => res.send('frutas'));

app.listen(port, () => console.log('nosso servidor está rodando...'))
