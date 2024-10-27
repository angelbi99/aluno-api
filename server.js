const express = require('express');
const alunoRouter = require('./repositories/alunoRouter'); // Importa o router

const app = express();
const port = 3000;

app.use(express.json());

// Define o router para a rota /alunos
app.use('/alunos', alunoRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
